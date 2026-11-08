// Controlla i riferimenti nel codice sorgente:
//  - ERRORE   se un'immagine referenziata non esiste in /public
//  - AVVISO   se un video referenziato non esiste ancora in /public
//  - AVVISO   se un link interno punta a una pagina che non esiste ancora
//  - ERRORE   se un nome file in /public contiene spazi, accenti o maiuscole
//
// Uso: npm run check:assets   (exit code 1 se ci sono errori)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
if (!fs.existsSync(path.join(root, "app"))) {
  console.error(`Cartella app/ non trovata in ${root}`);
  process.exit(2);
}
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");
const sourceDirs = ["app", "components", "config", "data", "lib"].map((d) => path.join(root, d));

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif|svg)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov)$/i;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const rel = (p) => path.relative(root, p).split(path.sep).join("/");

// ─── Route esistenti (app router) ────────────────────────────────────────────
// Ogni page.tsx diventa un pattern; i segmenti [param] accettano qualunque valore.
const routePatterns = walk(appDir)
  .filter((f) => /[\\/]page\.(tsx|ts|jsx|js|mdx)$/.test(f))
  .map((f) => {
    const segments = path
      .relative(appDir, path.dirname(f))
      .split(path.sep)
      .filter((s) => s && !/^\(.*\)$/.test(s)); // ignora i route group (gruppo)
    const pattern = segments.map((s) => (/^\[.*\]$/.test(s) ? "[^/]+" : s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    return new RegExp(`^/${pattern.join("/")}/?$`);
  });

const routeExists = (href) => routePatterns.some((re) => re.test(href));

// ─── Scansione sorgenti ──────────────────────────────────────────────────────
const errors = [];
const warnings = [];

const literal = /["'`](\/[^"'`\s${}]*)["'`]/g;

for (const file of sourceDirs.flatMap(walk).filter((f) => /\.(tsx?|jsx?|mjs)$/.test(f))) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    if (/^\s*(\/\/|\*)/.test(line)) return; // salta i commenti
    for (const match of line.matchAll(literal)) {
      const ref = match[1].split(/[?#]/)[0];
      const where = `${rel(file)}:${i + 1}`;

      if (IMAGE_EXT.test(ref) || VIDEO_EXT.test(ref)) {
        const onDisk = path.join(publicDir, ...decodeURI(ref).split("/").filter(Boolean));
        if (!fs.existsSync(onDisk)) {
          (VIDEO_EXT.test(ref) ? warnings : errors).push(
            `${where}  ${VIDEO_EXT.test(ref) ? "video non ancora presente" : "immagine mancante"}: ${ref}`
          );
        }
      } else if (/^\/[a-z0-9-/]*$/i.test(ref) && !ref.startsWith("//") && /\bhref\b|href:/.test(line)) {
        if (!routeExists(ref)) warnings.push(`${where}  pagina non ancora esistente: ${ref}`);
      }
    }
  });
}

// ─── Nomi file in /public ────────────────────────────────────────────────────
for (const file of walk(publicDir)) {
  const r = path.relative(publicDir, file).split(path.sep).join("/");
  if (!/^[a-z0-9/._-]+$/.test(r)) errors.push(`public/${r}  nome non valido (usa minuscole, numeri e trattini)`);
}

// ─── Report ──────────────────────────────────────────────────────────────────
const unique = (list) => [...new Set(list)];

if (warnings.length) {
  console.log(`\n⚠  ${unique(warnings).length} avvisi:`);
  unique(warnings).forEach((w) => console.log("   " + w));
}
if (errors.length) {
  console.log(`\n✖  ${unique(errors).length} errori:`);
  unique(errors).forEach((e) => console.log("   " + e));
  process.exit(1);
}
console.log("\n✔  Nessun asset mancante.");
