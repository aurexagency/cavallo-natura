import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BookingPlaceholder from "@/components/ui/BookingPlaceholder";
import { CheckList, SpecCard, SpecValue } from "@/components/ui/SpecCard";
import { BootIcon, ClockIcon, CompassIcon, HeartIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig, whatsappLink } from "@/config/site";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

const PAGE_IMAGE = "/gallery/in-riva-al-mare/in-riva-al-mare-2.jpg";

export const metadata: Metadata = {
  title: { absolute: "Sky Experience: Passeggiata a Cavallo con Drone in Maremma | Cavallo Natura" },
  description:
    "Passeggiata privata di 2 ore a cavallo tra la pineta del Tombolo e la spiaggia di Marina di Grosseto, con servizio drone: video e riprese aeree incluse.",
  alternates: { canonical: "/servizi-elite/sky-experience" },
  openGraph: {
    title: "Sky Experience: Passeggiata a Cavallo con Drone in Maremma | Cavallo Natura",
    description:
      "Un'emozione vista dall'alto: passeggiata privata a cavallo con riprese aeree realizzate con drone.",
    url: "/servizi-elite/sky-experience",
    siteName: siteConfig.name,
    locale: "it_IT",
    type: "website",
    images: [{ url: PAGE_IMAGE, alt: "Passeggiata a cavallo sulla spiaggia di Marina di Grosseto" }],
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const percorso = "Pineta e tratto di spiaggia (circa 1 km di spiaggia libera)";
const durata = "2 ore";

const informazioni = [
  "Passeggiata privata a cavallo tra la pineta del Tombolo e la spiaggia di Marina di Grosseto",
  "Servizio drone: video e riprese aeree incluse",
  "Istruttore dedicato per l’intera durata",
  "Livello richiesto: adatto anche a chi è alla prima esperienza",
  "Partecipanti: minimo 2 persone (passeggiata privata)",
  "Età minima: 14 anni",
];

const abbigliamentoConsigliato = [
  "Pantaloni lunghi, scarpe chiuse.",
  "Peso massimo 90kg.",
  "Il Centro mette a disposizione i cap obbligatori per tutti.",
];

const BOOKING_HREF = "/contatti?servizio=sky-experience";

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function SkyExperiencePage() {
  const whatsappHref = whatsappLink(
    "Ciao Cavallo Natura! Vorrei maggiori informazioni e verificare le date per la Sky Experience (passeggiata privata con servizio drone)."
  );

  return (
    <div className="bg-[var(--color-sand)] min-h-screen overflow-x-hidden">
      {/* ── Hero ── */}
      <section aria-labelledby="page-title" className="bg-[var(--color-sand)] pt-32 md:pt-40 pb-12">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
            <Link
              href="/servizi-elite"
              className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.15em] font-medium text-[var(--color-saddle)] hover:text-[var(--color-wine)] transition-colors duration-200"
            >
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-1">
                ←
              </span>
              Torna ai Servizi Elite
            </Link>
          </nav>

          <header className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6 mb-16 md:mb-20">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-[var(--color-wine)]">
                Servizio Elite • Un&apos;emozione vista dall&apos;alto
              </span>
              <span className="bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                Con Servizio Drone
              </span>
            </div>

            <h1
              id="page-title"
              className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight"
            >
              Sky Experience
            </h1>

            <p className="text-xl md:text-2xl text-[var(--color-saddle)] leading-relaxed font-light max-w-3xl mx-auto">
              Passeggiata privata di 2 ore con servizio drone: spettacolari riprese aeree per trasformare la tua passeggiata in un ricordo indimenticabile.
            </p>
          </header>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden shadow-2xl">
            <Image
              src={PAGE_IMAGE}
              alt="Passeggiata a cavallo sulla spiaggia di Marina di Grosseto al tramonto"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── Racconto ── */}
      <section aria-label="Presentazione dell'esperienza" className="px-4 md:px-8">
        <article className="max-w-4xl mx-auto py-16 md:py-24 text-center">
          <div className="w-16 h-px bg-[var(--color-wine)] opacity-50 mx-auto mb-10" aria-hidden="true" />
          <p className="font-display text-2xl md:text-4xl text-[var(--color-wine)] leading-snug mb-8">
            &ldquo;Vivi un&apos;esperienza unica a cavallo, vista dall&apos;alto.&rdquo;
          </p>
          <p className="text-lg md:text-xl text-[var(--color-saddle)] leading-relaxed font-medium text-justify md:text-center">
            Cavalca tra la pineta del Tombolo e la spiaggia di Marina di Grosseto, mentre un drone realizza spettacolari riprese aeree della tua passeggiata. Video e riprese sono inclusi nel servizio.
          </p>

          <div className="mt-12 flex justify-center">
            <BookingPlaceholder label="PRENOTA LA SKY EXPERIENCE" />
          </div>
        </article>
      </section>

      {/* ── Dettagli dell'esperienza ── */}
      <section
        aria-labelledby="dettagli-heading"
        className="bg-[var(--color-cn-cream)] py-24 md:py-36 px-4 md:px-8 border-t border-[var(--color-saddle)]/10"
      >
        <div className="container mx-auto max-w-6xl">
          <header className="max-w-3xl mx-auto text-center mb-16 md:mb-20 flex flex-col items-center gap-4">
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-wine)]">
              Passeggiata privata di 2 ore
            </span>
            <h2
              id="dettagli-heading"
              className="font-display text-4xl md:text-6xl text-[var(--color-wine)] leading-tight"
            >
              Dettagli dell&apos;esperienza
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <SpecCard icon={<CompassIcon className="w-7 h-7" />} title="Percorso">
              <SpecValue>{percorso}</SpecValue>
            </SpecCard>

            <SpecCard icon={<ClockIcon className="w-7 h-7" />} title="Durata">
              <SpecValue>{durata}</SpecValue>
            </SpecCard>

            <SpecCard icon={<HeartIcon className="w-7 h-7" />} title="Informazioni">
              <CheckList items={informazioni} />
            </SpecCard>

            <SpecCard icon={<BootIcon className="w-7 h-7" />} title="Abbigliamento consigliato">
              <CheckList items={abbigliamentoConsigliato} />
            </SpecCard>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prenota o richiedi dettagli su WhatsApp per la Sky Experience"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-[var(--radius-btn)] bg-[var(--color-pine)] text-white font-semibold tracking-wide uppercase text-sm shadow-md transition-[transform,box-shadow,background-color] duration-300 hover:bg-[var(--color-wine)] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-pine)]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Disponibilità Sky Experience
            </a>
            <Button as="link" href={BOOKING_HREF} variant="outline" size="md">
              Prenota
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
