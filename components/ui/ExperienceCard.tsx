import Image from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ExperienceCardProps {
  /** Titolo dell'esperienza */
  title: string;
  /** Breve descrizione testuale */
  description: string;
  /** Percorso o URL dell'immagine (locale o remoto) */
  imageSrc: string;
  /** Testo alternativo accessibile per l'immagine */
  imageAlt: string;
  /** URL della pagina di dettaglio */
  href: string;
  /** Etichetta del link CTA (default: "Scopri di più →") */
  ctaLabel?: string;
  /** Tag opzionale (es. "Elite", "Novità") visualizzato come badge */
  badge?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * ExperienceCard — Server Component.
 * Mostra una card fotografica elegante per le esperienze a cavallo.
 *
 * @example
 * <ExperienceCard
 *   title="Tramonto sulla Spiaggia"
 *   description="Un calice al tramonto a cavallo tra pineta e mare."
 *   imageSrc="/images/tramonto-cavallo.jpg"
 *   imageAlt="Cavaliere al tramonto sulla spiaggia di Marina di Grosseto"
 *   href="/servizi-elite/tramonto"
 *   badge="Elite"
 * />
 */
export default function ExperienceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  ctaLabel = "Scopri di più →",
  badge,
}: ExperienceCardProps) {
  return (
    <article
      className={[
        "group flex flex-col",
        "bg-white overflow-hidden",
        "rounded-[var(--radius-card)]",
        "shadow-md hover:shadow-xl",
        "transition-shadow duration-300 ease-out",
      ].join(" ")}
    >
      {/* ── Immagine con aspect-ratio fisso ── */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* ── Badge opzionale ── */}
        {badge && (
          <span
            className={[
              "absolute top-3 left-3 z-10",
              "px-3 py-1 rounded-full",
              "text-xs font-semibold tracking-widest uppercase",
              "text-white",
            ].join(" ")}
            style={{ backgroundColor: "var(--color-wine)" }}
          >
            {badge}
          </span>
        )}

        {/* ── Gradient overlay per leggibilità ── */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>

      {/* ── Contenuto testuale ── */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Separatore decorativo */}
        <div
          className="w-8 h-0.5 rounded-full"
          style={{ backgroundColor: "var(--color-wine)" }}
          aria-hidden="true"
        />

        {/* Titolo serif wine */}
        <h3
          className="font-display text-xl font-semibold leading-snug"
          style={{ color: "var(--color-wine)" }}
        >
          {title}
        </h3>

        {/* Descrizione saddle */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--color-saddle)" }}
        >
          {description}
        </p>

        {/* CTA link */}
        <Link
          href={href}
          aria-label={`${ctaLabel} – ${title}`}
          className={[
            "inline-flex items-center gap-1 self-start mt-2",
            "text-sm font-semibold tracking-wide",
            "underline-offset-4 hover:underline",
            "transition-colors duration-200",
          ].join(" ")}
          style={{ color: "var(--color-wine)" }}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
