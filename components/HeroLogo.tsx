"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const LOGO_SRC = "/logo/logo-bianco.png";
const LOGO_W = 366;
const LOGO_H = 157;

// ─── Ritmo del galoppo ────────────────────────────────────────────────────────
// 4 battiti sincopati (secondi dall'inizio): "ta-ta · ta · ta", come gli zoccoli.
const BEATS = [0.25, 0.5, 0.78, 1.15];
const PUFFS_PER_BEAT = 3;
/** Altezza del rimbalzo tra un battito e l'altro (px) */
const HOP = 16;

// Posizione orizzontale (%) degli sbuffi sotto il logo, 3 per battito:
// ogni battito la polvere si sposta verso destra, il logo avanza nel galoppo.
const PUFF_X = [10, 24, 40, 24, 42, 58, 44, 62, 78, 62, 80, 92];

interface HeroLogoProps {
  /** true quando la hero è pronta e l'animazione d'ingresso può partire */
  active: boolean;
  /** Pixel di scroll entro cui il logo esce "galoppando" */
  fadeDistance: number;
}

/**
 * Logo della hero a ritmo di galoppo.
 * - Ingresso: scivola da sinistra e atterra con 4 battiti sincopati; a ogni
 *   battito si schiaccia un attimo e solleva uno sbuffo di polvere.
 * - Scroll giù: esce verso destra inclinandosi in avanti, con rimbalzi di galoppo.
 * - Scroll su: rientra allo stesso modo, al contrario.
 *
 * Tre livelli: l'esterno è comandato dallo scroll, l'interno dall'ingresso,
 * la polvere sta accanto al logo (non rimbalza con lui).
 */
export default function HeroLogo({ active, fadeDistance }: HeroLogoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollLayerRef = useRef<HTMLDivElement>(null);
  const introLayerRef = useRef<HTMLDivElement>(null);
  const puffRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      if (!active) return;
      const mm = gsap.matchMedia();

      // Con "riduci movimento" il logo resta fermo e nitido (nessuna animazione)
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = introLayerRef.current;
        const layer = scrollLayerRef.current;
        const puffs = puffRefs.current.filter((p): p is HTMLSpanElement => p !== null);
        if (!intro || !layer) return;

        // ── Ingresso ────────────────────────────────────────────────────────
        gsap.set(intro, { y: -HOP, xPercent: -14, transformOrigin: "50% 100%" });

        const tl = gsap.timeline({ delay: 0.3 });
        tl.to(intro, { autoAlpha: 1, duration: 0.35, ease: "none" }, 0);
        tl.to(intro, { xPercent: 0, duration: 1.45, ease: "power2.out" }, 0);

        BEATS.forEach((t, i) => {
          const last = i === BEATS.length - 1;

          // Atterraggio: caduta rapida + schiacciamento
          tl.to(
            intro,
            { y: 0, scaleY: 0.955, scaleX: 1.03, duration: 0.13, ease: "power2.in" },
            t - 0.13
          );
          // Rimbalzo (l'ultimo è un assestamento morbido con piccolo rimbalzo)
          tl.to(
            intro,
            {
              y: last ? 0 : -HOP * (0.9 - i * 0.12),
              scaleY: 1,
              scaleX: 1,
              duration: last ? 0.45 : 0.17,
              ease: last ? "elastic.out(1.1, 0.4)" : "power2.out",
            },
            t
          );

          // Sbuffo di polvere all'impatto
          for (let k = 0; k < PUFFS_PER_BEAT; k++) {
            const puff = puffs[i * PUFFS_PER_BEAT + k];
            if (!puff) continue;
            tl.fromTo(
              puff,
              { autoAlpha: 0.75, scale: 0.35, x: 0, y: 0 },
              {
                autoAlpha: 0,
                scale: 1.7 + k * 0.35,
                x: -26 - k * 14,
                y: -8 - k * 7,
                duration: 0.75,
                ease: "power1.out",
                // Lo stato iniziale si applica solo al battito, non alla creazione
                immediateRender: false,
              },
              t - 0.02 + k * 0.03
            );
          }
        });

        // ── Uscita allo scroll ──────────────────────────────────────────────
        // Un "progresso" 0→1 legato allo scroll (posizioni assolute: la hero è
        // in cima alla pagina, quindi non risente dello spazio del pin).
        const exit = { p: 0 };
        const apply = () => {
          const p = exit.p;
          gsap.set(layer, {
            x: p * window.innerWidth * 0.55,
            // Rimbalzi di galoppo mentre si allontana
            y: -Math.abs(Math.sin(p * Math.PI * 3.5)) * HOP * (1 - p * 0.4),
            skewX: -9 * p,
            scale: 1 - 0.08 * p,
            autoAlpha: 1 - p ** 1.4,
          });
        };
        const scrollTween = gsap.to(exit, {
          p: 1,
          ease: "none",
          onUpdate: apply,
          scrollTrigger: {
            start: 0,
            end: fadeDistance,
            scrub: 0.3,
            refreshPriority: 1,
          },
        });

        return () => {
          tl.kill();
          scrollTween.scrollTrigger?.kill();
          scrollTween.kill();
          gsap.set([layer, intro, ...puffs], { clearProps: "all" });
        };
      });

      return () => mm.revert();
    },
    { dependencies: [active, fadeDistance], scope: rootRef, revertOnUpdate: true }
  );

  return (
    <div ref={rootRef} className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none">
      <div ref={scrollLayerRef} className="relative will-change-transform">
        {/* Nascosto finché GSAP non parte; con "riduci movimento" è subito visibile */}
        <div
          ref={introLayerRef}
          className="relative w-[min(78vw,26rem)] opacity-0 motion-reduce:opacity-100"
          style={{ aspectRatio: `${LOGO_W} / ${LOGO_H}` }}
        >
          {/* Decorativo: il nome del sito è già nell'h1 */}
          <Image
            src={LOGO_SRC}
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 78vw, 26rem"
            className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
          />
        </div>

        {/* Polvere sollevata dagli zoccoli: sotto il logo, fuori dal suo rimbalzo */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0 motion-reduce:hidden">
          {PUFF_X.map((x, i) => (
            <span
              key={i}
              ref={(el) => {
                puffRefs.current[i] = el;
              }}
              className="absolute block rounded-full opacity-0"
              style={{
                left: `${x}%`,
                bottom: "-6px",
                width: 44 + (i % 3) * 14,
                height: 26 + (i % 3) * 8,
                marginLeft: -26,
                background:
                  "radial-gradient(ellipse at center, rgba(232,208,172,0.65) 0%, rgba(222,194,152,0.3) 45%, transparent 72%)",
                filter: "blur(2px)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
