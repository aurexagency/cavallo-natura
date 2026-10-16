import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: { absolute: "Proposte di Matrimonio a Cavallo in Maremma | Cavallo Natura" },
  description:
    "Organizza una proposta di matrimonio indimenticabile a cavallo a Marina di Grosseto. Due itinerari romantici al tramonto tra pineta, spiaggia e brindisi in riva al mare.",
  alternates: { canonical: "/servizi-elite/proposte-matrimonio" },
  openGraph: {
    title: "Proposte di Matrimonio a Cavallo in Maremma | Cavallo Natura",
    description:
      "Il vostro 'Sì' più emozionante: passeggiate romantiche a cavallo al tramonto, servizio fotografico dedicato e calici in riva al mare.",
    url: "/servizi-elite/proposte-matrimonio",
    siteName: siteConfig.name,
    locale: "it_IT",
    type: "website",
    images: [{ url: "/servizi d'elite/matrimonio.jpg", alt: "Proposta di matrimonio a cavallo al tramonto in Maremma" }],
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ProposalPackage {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  percorso: string;
  durata: string;
  informazioni: string[];
  abbigliamentoConsigliato: string[];
  whatsappMessage: string;
}

const proposalPackages: ProposalPackage[] = [
  {
    id: "pineta-e-spiaggia-al-tramonto",
    number: "Opzione 01",
    title: "Pineta e spiaggia al tramonto",
    tagline: "L'intimità del bosco che si apre sulla distesa dorata della spiaggia",
    badge: "Classica & Romantica",
    percorso: "Pineta e 2 km di spiaggia al tramonto",
    durata: "2 ore e 45 minuti",
    informazioni: [
      "Passeggiata a cavallo nella pineta e lungo 2 km di spiaggia al tramonto",
      "Servizio fotografico sulla spiaggia",
      "Proposta di matrimonio romantica in riva al mare",
      "Istruttore dedicato per l’intera durata",
      "Livello richiesto: adatto anche a principianti",
      "Età minima: 14 anni",
      "Ideale per coppie",
    ],
    abbigliamentoConsigliato: [
      "Pantaloni lunghi, scarpe chiuse.",
      "Peso massimo 90kg.",
      "Il Centro mette a disposizione i cap obbligatori per tutti.",
    ],
    whatsappMessage:
      "Ciao Cavallo Natura! Vorrei maggiori informazioni e verificare le date per la Proposta di Matrimonio - Opzione 'Pineta e spiaggia al tramonto'.",
  },
  {
    id: "percorso-panoramico-natura",
    number: "Opzione 02",
    title: "Percorso panoramico immerso nella natura",
    tagline: "Un'avventura esclusiva tra panorami incontaminati e brindisi al tramonto",
    badge: "Con Aperitivo al Tramonto",
    percorso: "Percorso panoramico immerso nella natura",
    durata: "3 ore e 30 minuti",
    informazioni: [
      "Passeggiata guidata a cavallo al tramonto",
      "Percorso panoramico immerso nella natura, adatto anche a principianti",
      "Proposta di matrimonio in riva al mare con servizio fotografico dedicato",
      "Aperitivo romantico al tramonto: un calice di vino (o bevanda a scelta) servito sulla spiaggia durante una sosta di 30 minuti",
      "Guida esperta per l’intera esperienza",
      "Disponibile dal 1° giugno al 15 settembre",
      "Partecipanti: coppia (2 persone)",
      "Età minima: 14 anni – Peso massimo: 90 kg",
    ],
    abbigliamentoConsigliato: [
      "Pantaloni lunghi, scarpe chiuse.",
      "Peso massimo 90kg.",
      "Il Centro mette a disposizione i cap obbligatori per tutti.",
    ],
    whatsappMessage:
      "Ciao Cavallo Natura! Vorrei maggiori informazioni e verificare le date per la Proposta di Matrimonio - Opzione 'Percorso panoramico con aperitivo al tramonto'.",
  },
];

const galleryImages = [
  { src: "/servizi d'elite/matrimonio.jpg", alt: "Momento romantico della proposta di matrimonio a cavallo al tramonto" },
  { src: "/gallery/matrimonio/matrimonio 1.jpg", alt: "Coppia a cavallo lungo la riva del mare dorata" },
  { src: "/gallery/matrimonio/matrimonio 5.jpg", alt: "Dettaglio romantico durante l'esperienza a cavallo per coppie" },
  { src: "/gallery/matrimonio/matrimonio 4.jpg", alt: "I cavalli al passo sulla spiaggia al tramonto in Maremma" },
];

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

function HeartShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
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

// ─── Shared UI Helpers ────────────────────────────────────────────────────────

function SpecCardHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cn-cream)] text-[var(--color-wine)] border border-[var(--color-wine)]/15">
        {icon}
      </span>
      <h4 className="font-display text-2xl md:text-3xl text-[var(--color-wine)]">{title}</h4>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
          <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const specCardClass =
  "bg-[var(--color-sand)] p-8 md:p-12 rounded-[var(--radius-card)] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-6 border border-[var(--color-saddle)]/10";

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function ProposteMatrimonioPage() {
  const generalWhatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Ciao Cavallo Natura! Vorrei ricevere informazioni riservate per organizzare una proposta di matrimonio a cavallo."
  )}`;

  return (
    <main className="bg-[var(--color-sand)] min-h-screen overflow-x-hidden">
      {/* ── Sezione 1: Breadcrumb & Hero ── */}
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
                Servizio Elite • Maremma Romantica
              </span>
              <span className="bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                Esperienza d&apos;Autore
              </span>
            </div>

            <h1
              id="page-title"
              className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight"
            >
              Proposte di Matrimonio
            </h1>

            <p className="text-xl md:text-2xl text-[var(--color-saddle)] leading-relaxed font-light max-w-3xl mx-auto">
              Il vostro &ldquo;Sì&rdquo; più emozionante: il ritmo calmo del cavallo, la brezza che accarezza la costa e il sole che scompare all&apos;orizzonte mentre dichiarate il vostro amore.
            </p>
          </header>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden shadow-2xl">
            <Image
              src="/servizi d'elite/matrimonio.jpg"
              alt="Romantica proposta di matrimonio a cavallo al tramonto sulla spiaggia di Marina di Grosseto"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── Sezione 2: Racconto Narrativo & Riservatezza ── */}
      <section aria-label="Dettagli e riservatezza dell'esperienza" className="px-4 md:px-8">
        <article className="max-w-4xl mx-auto py-16 md:py-24 text-center">
          <div className="w-16 h-px bg-[var(--color-wine)] opacity-50 mx-auto mb-10" aria-hidden="true" />
          <p className="font-display text-2xl md:text-4xl text-[var(--color-wine)] leading-snug mb-8">
            &ldquo;Curiamo ogni istante con discrezione assoluta per trasformare la vostra dichiarazione in una favola reale.&rdquo;
          </p>
          <div className="text-lg md:text-xl text-[var(--color-saddle)] leading-relaxed flex flex-col gap-6 font-medium text-justify md:text-center">
            <p>
              Sappiamo quanto sia prezioso questo momento. Per questo motivo, ogni uscita è completamente privata e concordata nei minimi dettagli prima della partenza: dalla sincronizzazione dell&apos;istante della proposta con la luce perfetta del tramonto, alla presenza silenziosa del fotografo sulla spiaggia.
            </p>
            <p>
              Abbiamo pensato a <strong>due percorsi dedicati</strong> per soddisfare il vostro desiderio di romanticismo: un itinerario che unisce la pineta alla spiaggia con shooting incluso, e un percorso panoramico più esteso impreziosito da un aperitivo romantico in riva al mare.
            </p>
          </div>

          {/* TODO: Configurare azione/link di prenotazione */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="bg-[var(--color-wine)] text-[var(--color-cn-cream)] font-sans font-semibold uppercase tracking-[0.2em] px-10 py-4 rounded-[var(--radius-btn)] shadow-md opacity-75 cursor-not-allowed select-none"
            >
              PRENOTA LA PROPOSTA
            </button>
          </div>
        </article>
      </section>

      {/* ── Sezione 3: I Due Tipi di Passeggiata (I 4 Riquadri per ciascuna) ── */}
      <div className="flex flex-col">
        {proposalPackages.map((pkg, idx) => {
          const isCream = idx % 2 === 0;
          const bgSection = isCream ? "bg-[var(--color-cn-cream)]" : "bg-[var(--color-sand)]";
          const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
            pkg.whatsappMessage
          )}`;

          return (
            <section
              key={pkg.id}
              id={pkg.id}
              aria-labelledby={`heading-${pkg.id}`}
              className={`${bgSection} py-24 md:py-36 px-4 md:px-8 border-t border-[var(--color-saddle)]/10`}
            >
              <div className="container mx-auto max-w-6xl">
                {/* Intestazione della Passeggiata */}
                <header className="max-w-3xl mx-auto text-center mb-16 md:mb-20 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-wine)]">
                      {pkg.number}
                    </span>
                    <span className="bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-3 py-0.5 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                      {pkg.badge}
                    </span>
                  </div>
                  <h2
                    id={`heading-${pkg.id}`}
                    className="font-display text-4xl md:text-6xl text-[var(--color-wine)] leading-tight"
                  >
                    {pkg.title}
                  </h2>
                  <p className="text-lg md:text-xl text-[var(--color-saddle)] font-medium leading-relaxed italic">
                    {pkg.tagline}
                  </p>
                </header>

                {/* Griglia 2x2 dei 4 Riquadri delle Caratteristiche */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {/* Riquadro 1: Percorso */}
                  <article className={specCardClass}>
                    <SpecCardHeader icon={<CompassIcon className="w-7 h-7" />} title="Percorso" />
                    <p className="font-display text-3xl md:text-4xl text-[var(--color-wine)] font-semibold leading-tight">
                      {pkg.percorso}
                    </p>
                  </article>

                  {/* Riquadro 2: Durata */}
                  <article className={specCardClass}>
                    <SpecCardHeader icon={<ClockIcon className="w-7 h-7" />} title="Durata" />
                    <p className="font-display text-3xl md:text-4xl text-[var(--color-wine)] font-semibold leading-tight">
                      {pkg.durata}
                    </p>
                  </article>

                  {/* Riquadro 3: Informazioni */}
                  <article className={specCardClass}>
                    <SpecCardHeader icon={<HeartShieldIcon className="w-7 h-7" />} title="Informazioni" />
                    <CheckList items={pkg.informazioni} />
                  </article>

                  {/* Riquadro 4: Abbigliamento consigliato */}
                  <article className={specCardClass}>
                    <SpecCardHeader icon={<BootIcon className="w-7 h-7" />} title="Abbigliamento consigliato" />
                    <CheckList items={pkg.abbigliamentoConsigliato} />
                  </article>
                </div>

                {/* Tasto di prenotazione dedicato per opzione */}
                <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Prenota o richiedi dettagli su WhatsApp per ${pkg.title}`}
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 rounded-[var(--radius-btn)] bg-[var(--color-pine)] text-white font-semibold tracking-wide uppercase text-sm shadow-md transition-[transform,box-shadow,background-color] duration-300 hover:bg-[var(--color-wine)] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-pine)]"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Disponibilità &ldquo;{pkg.title}&rdquo;
                  </a>
                  <Button as="link" href={`/contatti?servizio=matrimonio&opzione=${pkg.id}`} variant="outline" size="md">
                    Richiedi Preventivo
                  </Button>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Sezione 4: Galleria Fotografica Romantica ── */}
      <section aria-labelledby="gallery-heading" className="bg-[var(--color-cn-cream)] py-24 md:py-36 px-4 md:px-8 border-t border-[var(--color-saddle)]/10">
        <div className="container mx-auto max-w-6xl">
          <header className="max-w-3xl mx-auto text-center mb-16 md:mb-20 flex flex-col gap-4">
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-wine)]">
              Scatti d&apos;Amore
            </span>
            <h2 id="gallery-heading" className="font-display text-4xl md:text-6xl text-[var(--color-wine)] leading-tight">
              Momenti che Restano per Sempre
            </h2>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" role="list">
            {galleryImages.map((img) => (
              <li
                key={img.src}
                className="relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden shadow-lg group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Sezione 5: Call To Action Finale Riservata ── */}
      <section
        aria-labelledby="cta-heading"
        className="bg-[var(--color-pine)] py-24 md:py-32 px-4 md:px-8 text-center text-[var(--color-cn-cream)]"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-cn-gold)]">
            Organizzazione Su Misura
          </span>
          <h2 id="cta-heading" className="font-display text-4xl md:text-6xl text-white leading-tight">
            Progettiamo Insieme la Sorpresa
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-cn-sand-lt)]">
            Hai in mente un allestimento speciale, un mazzo di fiori all&apos;arrivo o dettagli particolari?
            Parla direttamente con noi: sapremo consigliarti l&apos;orario migliore per la luce e gestire la sorpresa in totale riservatezza.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            {/* TODO: Configurare azione/link di prenotazione */}
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="bg-[var(--color-cn-cream)] text-[var(--color-pine)] font-sans font-semibold uppercase tracking-[0.2em] px-10 py-4 rounded-[var(--radius-btn)] shadow-md opacity-75 cursor-not-allowed select-none w-full sm:w-auto"
            >
              PRENOTA
            </button>
            <a
              href={generalWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contattaci su WhatsApp per organizzare la proposta di matrimonio"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 rounded-[var(--radius-btn)] bg-[var(--color-cn-gold)] text-[var(--color-cn-charcoal)] font-semibold tracking-wide uppercase text-base shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Parla con Noi su WhatsApp
            </a>
            <Button
              as="link"
              href="/contatti?servizio=matrimonio"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-[var(--color-pine)] before:!bg-white"
            >
              RICHIEDI INFORMAZIONI
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
