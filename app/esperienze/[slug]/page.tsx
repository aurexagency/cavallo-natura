import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import {
  EXPERIENCES_DETAILS,
  EXPERIENCE_SLUGS,
  getExperienceBySlug,
} from "@/data/esperienzeData";

// ─── Static params & SEO ──────────────────────────────────────────────────────

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return EXPERIENCE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};

  return {
    title: { absolute: experience.seoTitle },
    description: experience.seoDescription,
    alternates: { canonical: `/esperienze/${experience.slug}` },
    openGraph: {
      title: experience.seoTitle,
      description: experience.seoDescription,
      url: `/esperienze/${experience.slug}`,
      siteName: siteConfig.name,
      locale: "it_IT",
      type: "website",
      images: [{ url: encodeURI(experience.heroImage.src), alt: experience.heroImage.alt }],
    },
  };
}

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

// ─── Shared UI fragments ──────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <header className="max-w-3xl mx-auto text-center mb-16 md:mb-24 flex flex-col gap-4">
      <span className="font-sans text-sm md:text-base uppercase tracking-[0.2em] font-medium text-[var(--color-wine)]">
        {eyebrow}
      </span>
      <h2 id={id} className="font-display text-4xl md:text-6xl leading-tight text-[var(--color-wine)]">
        {title}
      </h2>
    </header>
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

function SpecCardHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cn-cream)] text-[var(--color-wine)] border border-[var(--color-wine)]/15">
        {icon}
      </span>
      <h3 className="font-display text-2xl md:text-3xl text-[var(--color-wine)]">{title}</h3>
    </div>
  );
}

const specCardClass =
  "bg-[var(--color-sand)] p-8 md:p-12 rounded-[var(--radius-card)] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-6 border border-[var(--color-saddle)]/10";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  const { specs } = experience;
  const otherExperiences = EXPERIENCE_SLUGS.filter((s) => s !== experience.slug).map(
    (s) => EXPERIENCES_DETAILS[s]
  );
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    experience.whatsappMessage
  )}`;

  return (
    <main className="bg-[var(--color-sand)]">
      {/* ── Sezione 1: Breadcrumb & Hero ── */}
      <section aria-labelledby="experience-title" className="bg-[var(--color-sand)] pt-32 md:pt-40 pb-8">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-12 md:mb-16">
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

          <header className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6 mb-16 md:mb-20">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="font-sans text-sm md:text-base uppercase tracking-[0.2em] font-medium text-[var(--color-wine)]">
                {experience.subtitle}
              </span>
              {experience.badge && (
                <span className="bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                  {experience.badge}
                </span>
              )}
            </div>
            <h1
              id="experience-title"
              className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight"
            >
              {experience.title}
            </h1>
          </header>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden shadow-2xl">
            <Image
              src={experience.heroImage.src}
              alt={experience.heroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* ── Sezione 2: Racconto del percorso ── */}
      <section aria-label="Racconto del percorso" className="px-4 md:px-8">
        <article className="max-w-4xl mx-auto py-20 md:py-32">
          <div className="w-16 h-px bg-[var(--color-wine)] opacity-50 mx-auto mb-10" aria-hidden="true" />
          <p className="font-display text-2xl md:text-4xl text-[var(--color-wine)] leading-snug text-center mb-10">
            {experience.overview.lead}
          </p>
          <div className="text-lg md:text-xl text-[var(--color-saddle)] leading-relaxed flex flex-col gap-6 font-medium">
            {experience.overview.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          {/* TODO: Configurare azione/link di prenotazione */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="bg-[var(--color-wine)] text-[var(--color-cn-cream)] font-sans font-semibold uppercase tracking-[0.2em] px-10 py-4 rounded-[var(--radius-btn)] shadow-md opacity-75 cursor-not-allowed select-none"
            >
              PRENOTA
            </button>
          </div>
        </article>
      </section>

      {/* ── Sezione 3: Le 4 caratteristiche ── */}
      <section aria-labelledby="specs-title" className="bg-[var(--color-cn-cream)] py-24 md:py-36 px-4 md:px-8">
        <SectionHeader id="specs-title" eyebrow="Dettagli dell'Escursione" title="Tutto Quello che Devi Sapere" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <article className={specCardClass}>
            <SpecCardHeader icon={<CompassIcon className="w-7 h-7" />} title={specs.percorso.title} />
            {specs.percorso.value && (
              <p className="font-display text-3xl md:text-4xl text-[var(--color-wine)] font-semibold leading-tight">
                {specs.percorso.value}
              </p>
            )}
            {specs.percorso.description && (
              <p className="text-base md:text-lg leading-relaxed text-[var(--color-saddle)] font-medium">
                {specs.percorso.description}
              </p>
            )}
            {specs.percorso.highlights && specs.percorso.highlights.length > 0 && (
              <CheckList items={specs.percorso.highlights} />
            )}
          </article>

          <article className={specCardClass}>
            <SpecCardHeader icon={<ClockIcon className="w-7 h-7" />} title={specs.durata.title} />
            <p className="font-display text-3xl md:text-4xl text-[var(--color-wine)] font-semibold leading-tight">
              {specs.durata.value}
            </p>
            {specs.durata.description && (
              <>
                <div className="w-12 h-px bg-[var(--color-saddle)]/30" aria-hidden="true" />
                <p className="text-base md:text-lg leading-relaxed text-[var(--color-saddle)] font-medium">
                  {specs.durata.description}
                </p>
              </>
            )}
          </article>

          <article className={specCardClass}>
            <SpecCardHeader icon={<ShieldInfoIcon className="w-7 h-7" />} title={specs.informazioniUtili.title} />
            {specs.informazioniUtili.items && specs.informazioniUtili.items.length > 0 && (
              <CheckList items={specs.informazioniUtili.items} />
            )}
          </article>

          <article className={specCardClass}>
            <SpecCardHeader icon={<BootIcon className="w-7 h-7" />} title={specs.abbigliamentoConsigliato.title} />
            {specs.abbigliamentoConsigliato.items && specs.abbigliamentoConsigliato.items.length > 0 && (
              <CheckList items={specs.abbigliamentoConsigliato.items} />
            )}
          </article>
        </div>
      </section>

      {/* ── Sezione 4: Video ── */}
      <section aria-labelledby="video-title" className="bg-[var(--color-sand)] py-24 md:py-36 px-4 md:px-8">
        <SectionHeader id="video-title" eyebrow="Vivi l'Atmosfera" title="Il Percorso in Video" />

        <figure className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-video rounded-[var(--radius-card)] overflow-hidden shadow-2xl bg-[var(--color-cn-charcoal)] border border-[var(--color-saddle)]/15">
            <video
              controls
              playsInline
              preload="metadata"
              poster={encodeURI(experience.video.poster)}
              className="w-full h-full object-cover"
              aria-label={`Video dell'esperienza ${experience.title}`}
            >
              <source src={experience.video.src} type="video/mp4" />
              Il tuo browser non supporta la riproduzione video.
            </video>
          </div>
          <figcaption className="text-center text-base md:text-lg text-[var(--color-saddle)] italic mt-6">
            {experience.video.caption}
          </figcaption>
        </figure>
      </section>

      {/* ── Sezione 5: Gallery ── */}
      <section aria-labelledby="gallery-title" className="bg-[var(--color-cn-cream)] py-24 md:py-36 px-4 md:px-8">
        <SectionHeader id="gallery-title" eyebrow="Scatti dal Percorso" title="Frammenti d'Emozione" />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto" role="list">
          {experience.gallery.map((image) => (
            <li
              key={image.src}
              className="relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden shadow-lg group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Sezione 6: Altre esperienze + CTA ── */}
      <aside aria-labelledby="other-title" className="bg-[var(--color-sand)] py-24 md:py-32 px-4 md:px-8">
        <SectionHeader id="other-title" eyebrow="Continua a Esplorare" title="Altri Percorsi in Sella" />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto" role="list">
          {otherExperiences.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/esperienze/${other.slug}`}
                className="group relative block aspect-[4/3] md:aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-wine)]"
              >
                <Image
                  src={other.heroImage.src}
                  alt={other.heroImage.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cn-charcoal)]/85 via-[var(--color-cn-charcoal)]/20 to-transparent" aria-hidden="true" />
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
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <section aria-labelledby="cta-title" className="bg-[var(--color-pine)] py-24 md:py-32 px-4 md:px-8 text-center text-[var(--color-cn-cream)]">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <span className="font-sans text-sm uppercase tracking-[0.2em] font-medium text-[var(--color-cn-gold)]">
            {experience.title}
          </span>
          <h2 id="cta-title" className="font-display text-4xl md:text-6xl text-white leading-tight">
            Pronto a Salire in Sella?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-cn-sand-lt)]">
            Prenota la tua esperienza in pochi istanti: scrivici su WhatsApp per verificare le disponibilità
            oppure richiedi informazioni. Ti aiuteremo a scegliere il cavallo e l&apos;orario più adatti a te.
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
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Prenota ${experience.title} su WhatsApp`}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 rounded-[var(--radius-btn)] bg-[var(--color-cn-gold)] text-[var(--color-cn-charcoal)] font-semibold tracking-wide uppercase text-base shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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
        </div>
      </section>
    </main>
  );
}
