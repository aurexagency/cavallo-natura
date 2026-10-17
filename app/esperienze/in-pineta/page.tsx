import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Pineta | Cavallo Natura Maremma",
  description:
    "Vivi la magia di una cavalcata privata di 2 ore tra la Pineta del Tombolo e 1 km di spiaggia libera a Marina di Grosseto. Istruttore dedicato, adatta anche a principianti.",
  alternates: { canonical: "/esperienze/in-pineta" },
  openGraph: {
    title: "Pineta | Cavallo Natura",
    description:
      "Vivi la magia di una cavalcata immersa nella natura, tra la Pineta del Tombolo e un tratto di spiaggia libera. Un’esperienza rilassante adatta anche a principianti.",
    url: "/esperienze/in-pineta",
    siteName: siteConfig.name,
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/pagine%20servizi/foto-in-pineta.webp",
        alt: "Escursione guidata a cavallo nella pineta secolare di Marina di Grosseto",
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

export default function PasseggiataInPinetaPage() {
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Ciao Cavallo Natura! Vorrei prenotare l'esperienza Pineta. Potete indicarmi le disponibilità?"
  )}`;

  const galleryImages = [
    { src: "/gallery/in pineta/DSC03362.jpg", alt: "Cavaliere al passo tra i pini marittimi della Pineta del Tombolo" },
    { src: "/gallery/in pineta/DSC04167.jpg", alt: "Luce naturale filtrata tra i rami della pineta durante la passeggiata" },
    { src: "/gallery/in pineta/DSC04382.jpg", alt: "Binomio cavallo e cavaliere immerso nella macchia mediterranea" },
    { src: "/gallery/in pineta/DSC03946.jpg", alt: "Passeggiata a cavallo in totale tranquillità nel bosco maremmano" },
  ];

  const relatedExperiences = [
    {
      slug: "in-pineta-e-spiaggia",
      title: "In Pineta e Spiaggia",
      subtitle: "L'incontro magico tra il bosco e il mare",
      badge: "Più Richiesto",
      heroImage: "/pagine%20servizi/foto-in-pineta-e-spiaggia.webp",
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
                Un’esperienza rilassante, adatta anche a principianti
              </span>
              <span className="bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                Durata 2 Ore
              </span>
            </div>
            <h1
              id="experience-title"
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight"
            >
              Pineta
            </h1>
          </header>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden shadow-2xl">
            <Image
              src="/pagine%20servizi/foto-in-pineta.webp"
              alt="Escursione guidata a cavallo nella pineta secolare di Marina di Grosseto"
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
            Vivi la magia di una cavalcata immersa nella natura, tra la Pineta del Tombolo e un tratto di spiaggia.
            Accompagnato da una guida esperta, potrai goderti un’esperienza rigenerante in un’atmosfera tranquilla e
            autentica.
          </p>
          <div className="text-lg md:text-xl text-[var(--color-saddle)] leading-relaxed flex flex-col gap-6 font-medium text-left md:text-center">
            <p>
              I sentieri ombreggiati dai pini marittimi secolari offrono un riparo naturale e una sensazione di pace
              immediata. Il ritmo disteso della passeggiata, cadenzato dal passo sicuro dei nostri cavalli, permette di
              assaporare ogni profumo della macchia mediterranea fino ad aprirsi verso il litorale tirrenico.
            </p>
            <p>
              La presenza costante di una guida dedicata rende questa uscita perfetta sia per chi si avvicina
              all&apos;equitazione per la prima volta, sia per chi desidera una parentesi di relax esclusivo in Maremma.
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
            title="Quote di Partecipazione"
          />

          <article className="bg-white rounded-[var(--radius-card)] border border-[var(--color-wine)]/25 shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-[var(--color-wine)]/15">
              {/* Colonna 1: Quota di gruppo / coppia */}
              <div className="flex flex-col gap-4 text-center md:text-left">
                <span className="self-center md:self-start bg-[var(--color-pine)] text-[var(--color-cn-cream)] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                  Coppie & Piccoli Gruppi
                </span>
                <div className="flex items-baseline justify-center md:justify-start gap-2 mt-2">
                  <span className="font-display text-5xl md:text-6xl font-bold text-[var(--color-wine)]">
                    €75
                  </span>
                  <span className="font-sans text-lg font-semibold text-[var(--color-saddle)]">
                    a persona
                  </span>
                </div>
                <p className="font-sans text-sm font-semibold text-[var(--color-wine)] uppercase tracking-wider">
                  (minimo 2 partecipanti)
                </p>
                <p className="text-base leading-relaxed text-[var(--color-saddle)] font-medium mt-2">
                  La formula ideale per coppie, amici o famiglie che desiderano vivere insieme un&apos;esperienza
                  rilassante e privata in Maremma.
                </p>
              </div>

              {/* Colonna 2: Partecipazione singola */}
              <div className="flex flex-col gap-4 text-center md:text-left md:pl-12 pt-8 md:pt-0 border-t md:border-t-0 border-[var(--color-wine)]/15">
                <span className="self-center md:self-start bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                  Esperienza Singola
                </span>
                <div className="flex items-baseline justify-center md:justify-start gap-2 mt-2">
                  <span className="font-display text-5xl md:text-6xl font-bold text-[var(--color-wine)]">
                    €100
                  </span>
                  <span className="font-sans text-lg font-semibold text-[var(--color-saddle)]">
                    per partecipazione singola
                  </span>
                </div>
                <p className="font-sans text-sm font-semibold text-[var(--color-wine)] uppercase tracking-wider">
                  (istruttore dedicato esclusivo)
                </p>
                <p className="text-base leading-relaxed text-[var(--color-saddle)] font-medium mt-2">
                  Per chi desidera vivere l&apos;escursione in totale intimità con il cavallo e avere un istruttore-guida
                  dedicato al 100% alla propria uscita.
                </p>
              </div>
            </div>

            {/* Note a piè di riquadro prezzi */}
            <div className="mt-8 pt-6 border-t border-[var(--color-saddle)]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-saddle)] font-medium">
              <span className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 text-[var(--color-pine)] shrink-0" />
                <span>Nessun costo nascosto: istruttore dedicato e cap di sicurezza inclusi.</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-[var(--color-wine)] font-semibold">
                Tariffe ufficiali della scheda servizio
              </span>
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
          {/* Card 1: Durata & Percorso */}
          <article className="bg-[var(--color-sand)] p-8 md:p-12 rounded-[var(--radius-card)] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-6 border border-[var(--color-saddle)]/10">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cn-cream)] text-[var(--color-wine)] border border-[var(--color-wine)]/15">
                <ClockIcon className="w-7 h-7" />
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-[var(--color-wine)]">
                Durata & Percorso
              </h3>
            </div>
            <p className="font-display text-3xl md:text-4xl text-[var(--color-wine)] font-semibold leading-tight">
              2 ore
            </p>
            <ul className="flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Percorso: pineta e breve tratto di spiaggia (1 km di spiaggia libera).</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
                <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
                <span>Tracciati sabbiosi immersi nella fresca Pineta del Tombolo a Marina di Grosseto.</span>
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
                <span>Esperienza privata studiata per offrire massima cura e serenità.</span>
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
              poster="/pagine%20servizi/foto-in-pineta.webp"
              className="w-full h-full object-cover"
              aria-label="Video della passeggiata privata a cavallo di 2 ore"
            >
              <source src="/videos/esperienze/in-pineta.mp4" type="video/mp4" />
              Il tuo browser non supporta la riproduzione video.
            </video>
          </div>
          <figcaption className="text-center text-base md:text-lg text-[var(--color-saddle)] italic mt-6">
            Un assaggio della quiete che si respira cavalcando tra i sentieri della Pineta del Tombolo e la spiaggia.
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
            Pronto a Vivere la Maremma a Cavallo?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-cn-sand-lt)]">
            Verifica subito la disponibilità dell&apos;esperienza Pineta (2 ore): scrivici su WhatsApp per
            fissare il giorno e l&apos;orario migliore per te.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prenota l'esperienza Pineta su WhatsApp"
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
