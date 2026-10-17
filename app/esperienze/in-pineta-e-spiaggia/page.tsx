import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Pineta e Spiaggia | Cavallo Natura Maremma",
  description:
    "Vivi la magia di una rilassante passeggiata a cavallo di 2 ore e 45 minuti tra la Pineta del Tombolo e 2,5 km di spiaggia libera sulla battigia a Marina di Grosseto. Istruttore dedicato, adatta anche a principianti.",
  alternates: { canonical: "/esperienze/in-pineta-e-spiaggia" },
  openGraph: {
    title: "Pineta e Spiaggia | Cavallo Natura",
    description:
      "Un’esperienza unica tra la Pineta del Tombolo e 2,5 km di spiaggia libera sulla battigia con istruttore dedicato. Adatta anche a chi è alla prima esperienza.",
    url: "/esperienze/in-pineta-e-spiaggia",
    siteName: siteConfig.name,
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/pagine%20servizi/foto-in-pineta-e-spiaggia.webp",
        alt: "Pineta e Spiaggia a Marina di Grosseto",
      },
    ],
  },
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────

type IconProps = { className?: string };

function CompassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ShieldInfoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function BootIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M8 3h5v9l5.5 2.2A2.5 2.5 0 0120 16.5V19H5v-4.5L8 12V3z" />
      <path d="M5 21h15" />
      <path d="M8 7h5" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── UI Helper Components ─────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <header className="max-w-3xl mx-auto text-center mb-12 md:mb-16 flex flex-col gap-3">
      <span className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-wine)]">
        {eyebrow}
      </span>
      <h2 id={id} className="font-display text-4xl md:text-5xl leading-tight text-[var(--color-wine)]">
        {title}
      </h2>
    </header>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function PasseggiataPinetaSpiaggiaPage() {
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Ciao Cavallo Natura! Vorrei prenotare l'esperienza Pineta e Spiaggia. Potete indicarmi le disponibilità?"
  )}`;

  const galleryImages = [
    { src: "/gallery/in riva al mare/DSC04792.jpg", alt: "Passeggiata a cavallo in riva al mare con la brezza marina" },
    { src: "/gallery/in riva al mare/DSC04964.jpg", alt: "Binomio a cavallo in riva al mare al tramonto" },
    { src: "/gallery/in riva al mare/DSC05390.jpg", alt: "Momento di totale libertà a cavallo sulla spiaggia" },
    { src: "/gallery/in riva al mare/DSC06470.jpg", alt: "Colori caldi del tramonto sulla spiaggia di Marina di Grosseto" },
  ];

  const relatedExperiences = [
    {
      slug: "in-pineta",
      title: "Pineta",
      subtitle: "Un’esperienza rilassante tra la pineta e il mare",
      badge: "2 Ore",
      heroImage: "/pagine%20servizi/foto-in-pineta.webp",
    },
    {
      slug: "per-esperti",
      title: "Escursione per Esperti",
      subtitle: "Energia, tecnica e libertà in piena sintonia col cavallo",
      badge: "Avanzato",
      heroImage: "/esperienze a cavallo/Per esperti.jpeg",
    },
  ];

  return (
    <main className="bg-[var(--color-sand)] min-h-screen">
      {/* ── Sezione 1: Breadcrumb & Hero ── */}
      <section aria-labelledby="experience-title" className="bg-[var(--color-sand)] pt-32 md:pt-40 pb-12">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 md:mb-12">
            <Link
              href="/esperienze"
              className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.15em] font-medium text-[var(--color-saddle)] hover:text-[var(--color-wine)] transition-colors duration-200"
            >
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-1">
                ←
              </span>
              Torna a tutte le esperienze
            </Link>
          </nav>

          <header className="max-w-5xl mx-auto text-center flex flex-col items-center gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-wine)]">
                Un’esperienza unica, adatta anche a principianti
              </span>
              <span className="bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                Durata 2 Ore e 45 Minuti
              </span>
              <span className="bg-[var(--color-pine)] text-[var(--color-cn-cream)] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                20 Settembre – 20 Maggio
              </span>
            </div>
            <h1
              id="experience-title"
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight"
            >
              Pineta e Spiaggia
            </h1>
            <p className="font-sans text-base md:text-lg text-[var(--color-saddle)] font-medium max-w-3xl">
              Un’esperienza unica, adatta anche a principianti
            </p>
          </header>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden shadow-2xl">
            <Image
              src="/pagine%20servizi/foto-in-pineta-e-spiaggia.webp"
              alt="Passeggiata privata a cavallo tra la Pineta del Tombolo e la battigia in riva al mare"
              fill
              priority={true}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* ── Sezione 2: Descrizione Narrativa ── */}
      <section aria-label="Descrizione dell'esperienza" className="px-4 md:px-8 py-16 md:py-24">
        <article className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-[var(--color-wine)] opacity-50 mx-auto mb-8" aria-hidden="true" />
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-[var(--color-wine)] leading-snug mb-8">
            Vivi la magia di una rilassante passeggiata a cavallo, tra la Pineta del Tombolo e la spiaggia. Accompagnato da una guida esperta, potrai goderti un percorso immerso nella natura, in un’atmosfera tranquilla e rigenerante.
          </p>
          <div className="text-lg md:text-xl text-[var(--color-saddle)] leading-relaxed flex flex-col gap-6 font-medium text-left md:text-center">
            <p>
              L&apos;itinerario si sviluppa lungo i sentieri protetti e ombreggiati della secolare Pineta del Tombolo,
              dove il profumo inconfondibile di pini marittimi e macchia mediterranea scandisce i primi passi in sella.
              Dalla quiete ovattata del bosco si passa gradualmente alla zona retrodunale, fino a schiudersi davanti allo spettacolo aperto del Mar Tirreno.
            </p>
            <p>
              Una volta raggiunta la costa, vivrai l&apos;emozione straordinaria di percorrere ben 2,5 km di spiaggia libera
              direttamente sulla battigia. Il suono ritmico della risacca e la brezza marina accompagneranno ogni momento,
              con la costante presenza di un istruttore dedicato che assicurerà serenità, supporto e cura a ciascun cavaliere.
            </p>
          </div>
        </article>
      </section>

      {/* ── Sezione 3: Struttura Prezzi / Costi ── */}
      <section aria-labelledby="pricing-title" className="bg-[var(--color-cn-cream)] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            id="pricing-title"
            eyebrow="Trasparenza & Tariffe Ufficiali"
            title="Quota di Partecipazione"
          />

          <article className="bg-white rounded-[var(--radius-card)] border border-[var(--color-wine)]/25 shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
            <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
              <span className="bg-[var(--color-pine)] text-[var(--color-cn-cream)] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                Esperienza Privata con Istruttore Dedicato
              </span>

              <div className="flex items-baseline justify-center gap-3">
                <span className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--color-wine)]">
                  €100
                </span>
                <span className="font-sans text-xl sm:text-2xl font-semibold text-[var(--color-saddle)]">
                  a persona
                </span>
              </div>

              <div className="inline-block bg-[var(--color-sand)] px-6 py-2 rounded-full border border-[var(--color-wine)]/15">
                <p className="font-sans text-sm sm:text-base font-bold text-[var(--color-wine)] uppercase tracking-wider">
                  (minimo 2 partecipanti)
                </p>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-saddle)] font-medium max-w-xl">
                La formula ideale per coppie o piccoli gruppi di amici desiderosi di vivere un&apos;avventura autentica ed esclusiva: 2 ore e 45 minuti di pura connessione con il cavallo e il mare della Maremma.
              </p>

              <div className="w-full pt-6 border-t border-[var(--color-saddle)]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-saddle)] font-medium">
                <span className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-[var(--color-pine)] shrink-0" />
                  <span>Istruttore dedicato esclusivo e cap protettivi inclusi per tutti.</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-[var(--color-wine)] font-semibold">
                  Tariffa ufficiale locandina
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Sezione 4: Dettagli dell'Esperienza ── */}
      <section aria-labelledby="specs-title" className="bg-[var(--color-sand)] py-16 md:py-24 px-4 md:px-8">
        <SectionHeader
          id="specs-title"
          eyebrow="Scheda Ufficiale del Servizio"
          title="Dettagli dell'Esperienza"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Card 1: Durata, Percorso & Stagionalità */}
          <article className="bg-[var(--color-sand)] p-8 md:p-12 rounded-[var(--radius-card)] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-6 border border-[var(--color-saddle)]/10">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cn-cream)] text-[var(--color-wine)] border border-[var(--color-wine)]/15">
                <ClockIcon className="w-7 h-7" />
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-[var(--color-wine)]">
                Durata & Percorso
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-display text-3xl md:text-4xl text-[var(--color-wine)] font-semibold leading-tight">
                2 ore e 45 minuti
              </p>
              <div className="inline-flex items-center gap-2 self-start bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold mt-1">
                <CalendarIcon className="w-4 h-4 shrink-0" />
                <span>Periodo: dal 20 settembre al 20 maggio</span>
              </div>
            </div>
            <ul className="flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Percorso: pineta e 2,5 km di spiaggia libera, da percorrere sulla battigia.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Periodo: dal 20 settembre al 20 maggio.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Tracciati sabbiosi all&apos;interno della Pineta del Tombolo fino al litorale incontaminato di Marina di Grosseto.</span>
              </li>
            </ul>
          </article>

          {/* Card 2: Guida & Partecipanti */}
          <article className="bg-[var(--color-sand)] p-8 md:p-12 rounded-[var(--radius-card)] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-6 border border-[var(--color-saddle)]/10">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cn-cream)] text-[var(--color-wine)] border border-[var(--color-wine)]/15">
                <CompassIcon className="w-7 h-7" />
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-[var(--color-wine)]">
                Guida & Partecipanti
              </h3>
            </div>
            <ul className="flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Istruttore dedicato per l’intera durata.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Partecipanti ideali: coppie o piccoli gruppi di amici.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Esperienza privata pensata per garantire riservatezza, serenità e cura di ogni particolare.</span>
              </li>
            </ul>
          </article>

          {/* Card 3: Livello & Requisiti */}
          <article className="bg-[var(--color-sand)] p-8 md:p-12 rounded-[var(--radius-card)] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-6 border border-[var(--color-saddle)]/10">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cn-cream)] text-[var(--color-wine)] border border-[var(--color-wine)]/15">
                <ShieldInfoIcon className="w-7 h-7" />
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-[var(--color-wine)]">
                Livello & Requisiti
              </h3>
            </div>
            <ul className="flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Livello richiesto: adatto anche a chi è alla prima esperienza.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Età minima: 14 anni.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Peso massimo: 90 kg.</span>
              </li>
            </ul>
          </article>

          {/* Card 4: Abbigliamento Consigliato (INVARIATO) */}
          <article className="bg-[var(--color-sand)] p-8 md:p-12 rounded-[var(--radius-card)] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-6 border border-[var(--color-saddle)]/10">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cn-cream)] text-[var(--color-wine)] border border-[var(--color-wine)]/15">
                <BootIcon className="w-7 h-7" />
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-[var(--color-wine)]">
                Abbigliamento consigliato
              </h3>
            </div>
            <ul className="flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Pantaloni lunghi, scarpe chiuse.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Peso massimo 90kg.</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Il Centro mette a disposizione i cap obbligatori per tutti.</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* ── Sezione 5: Video ── */}
      <section aria-labelledby="video-title" className="bg-[var(--color-cn-cream)] py-16 md:py-24 px-4 md:px-8">
        <SectionHeader id="video-title" eyebrow="Vivi l'Atmosfera" title="Il Percorso in Video" />

        <figure className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-video rounded-[var(--radius-card)] overflow-hidden shadow-2xl bg-[var(--color-cn-charcoal)] border border-[var(--color-saddle)]/15">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/pagine%20servizi/foto-in-pineta-e-spiaggia.webp"
              className="w-full h-full object-cover"
              aria-label="Video della passeggiata privata a cavallo di 2 ore e 45 minuti in riva al mare"
            >
              <source src="/videos/esperienze/in-pineta-e-spiaggia.mp4" type="video/mp4" />
              Il tuo browser non supporta la riproduzione video.
            </video>
          </div>
          <figcaption className="text-center text-base md:text-lg text-[var(--color-saddle)] italic mt-6">
            L&apos;emozione autentica di cavalcare lungo la battigia, accompagnati dal respiro del mare e dalla brezza marina.
          </figcaption>
        </figure>
      </section>

      {/* ── Sezione 6: Galleria Fotografica ── */}
      <section aria-labelledby="gallery-title" className="bg-[var(--color-sand)] py-16 md:py-24 px-4 md:px-8">
        <SectionHeader id="gallery-title" eyebrow="Scatti dal Percorso" title="Frammenti d'Emozione" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto" role="list">
          {galleryImages.map((image) => (
            <li
              key={image.src}
              className="relative w-full aspect-[3/4] rounded-[var(--radius-card)] overflow-hidden shadow-md group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Sezione 7: Altre Esperienze ── */}
      <aside aria-labelledby="other-title" className="bg-[var(--color-cn-cream)] py-16 md:py-24 px-4 md:px-8">
        <SectionHeader id="other-title" eyebrow="Continua a Esplorare" title="Altri Percorsi in Sella" />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto" role="list">
          {relatedExperiences.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/esperienze/${other.slug}`}
                className="group relative block aspect-[4/3] md:aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-wine)]"
              >
                <Image
                  src={other.heroImage}
                  alt={other.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-cn-charcoal)]/85 via-[var(--color-cn-charcoal)]/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col gap-2">
                  {other.badge && (
                    <span className="self-start bg-[var(--color-cn-gold)] text-[var(--color-cn-charcoal)] px-3 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                      {other.badge}
                    </span>
                  )}
                  <h3 className="font-display text-2xl md:text-4xl text-[var(--color-cn-cream)]">{other.title}</h3>
                  <p className="font-sans text-sm md:text-base text-[var(--color-cn-sand-lt)]">{other.subtitle}</p>
                  <span className="mt-2 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.15em] font-semibold text-[var(--color-cn-gold)]">
                    Scopri il percorso
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* ── Sezione 8: CTA & Contatto ── */}
      <section aria-labelledby="cta-title" className="bg-[var(--color-pine)] py-20 md:py-28 px-4 md:px-8 text-center text-[var(--color-cn-cream)]">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-cn-gold)]">
            Prenotazione Rapida
          </span>
          <h2 id="cta-title" className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Pronto a Vivere la Magia in Riva al Mare?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-cn-sand-lt)]">
            Verifica subito la disponibilità di Pineta e Spiaggia: scrivici su WhatsApp per
            fissare la data e l&apos;orario ideali per te e i tuoi compagni di avventura.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prenota Pineta e Spiaggia su WhatsApp"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-[var(--radius-btn)] bg-[var(--color-cn-gold)] text-[var(--color-cn-charcoal)] font-semibold tracking-wide uppercase text-base shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Prenota su WhatsApp
            </a>
            <Button
              as="link"
              href="/contatti"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-[var(--color-pine)] before:!bg-white"
            >
              RICHIEDI INFORMAZIONI
            </Button>
          </div>

          <address className="not-italic mt-12 pt-8 border-t border-white/20 text-center text-sm text-[var(--color-cn-sand-lt)] flex flex-col gap-1">
            <span className="font-semibold text-white">{siteConfig.name} – {siteConfig.legalName}</span>
            <span>{siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city} ({siteConfig.address.province})</span>
            <span>
              Telefono:{" "}
              <a href={siteConfig.contact.phoneHref} className="underline hover:text-white transition-colors">
                {siteConfig.contact.phoneDisplay}
              </a>
            </span>
          </address>
        </div>
      </section>
    </main>
  );
}
