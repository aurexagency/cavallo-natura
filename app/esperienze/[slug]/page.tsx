import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import BookingPlaceholder from "@/components/ui/BookingPlaceholder";
import SectionHeader from "@/components/ui/SectionHeader";
import { CheckList, SpecCard, SpecValue } from "@/components/ui/SpecCard";
import {
  BootIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  CompassIcon,
  ShieldInfoIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { siteConfig, whatsappLink } from "@/config/site";
import {
  EXPERIENCES_DETAILS,
  EXPERIENCE_SLUGS,
  getExperienceBySlug,
  type DetailIcon,
  type ExperiencePricing,
  type Tone,
} from "@/data/esperienzeData";

// ─── Static params & SEO ──────────────────────────────────────────────────────

type PageProps = { params: Promise<{ slug: string }> };

// Solo gli slug definiti in esperienzeData: qualunque altro URL → 404
export const dynamicParams = false;

export function generateStaticParams() {
  return EXPERIENCE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};

  const { seo, heroImage } = experience;
  const url = `/esperienze/${experience.slug}`;

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url,
      siteName: siteConfig.name,
      locale: "it_IT",
      type: "website",
      images: [{ url: heroImage.src, alt: seo.ogImageAlt ?? heroImage.alt }],
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const detailIcons: Record<DetailIcon, ReactNode> = {
  clock: <ClockIcon className="w-7 h-7" />,
  compass: <CompassIcon className="w-7 h-7" />,
  shield: <ShieldInfoIcon className="w-7 h-7" />,
  boot: <BootIcon className="w-7 h-7" />,
};

const toneBg: Record<Tone, string> = {
  wine: "bg-[var(--color-wine)]",
  pine: "bg-[var(--color-pine)]",
};

const pillClass = "text-[var(--color-cn-cream)] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold";

// Le sezioni dopo il racconto alternano crema/sabbia: con o senza tariffe
// l'alternanza resta corretta.
const altBg = (index: number) => (index % 2 === 0 ? "bg-[var(--color-cn-cream)]" : "bg-[var(--color-sand)]");

function PricingCard({ pricing }: { pricing: ExperiencePricing }) {
  const footer = (
    <div className="w-full pt-6 border-t border-[var(--color-saddle)]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-saddle)] font-medium">
      <span className="flex items-center gap-2">
        <CheckIcon className="w-5 h-5 text-[var(--color-pine)] shrink-0" />
        <span>{pricing.note}</span>
      </span>
      <span className="text-xs uppercase tracking-widest text-[var(--color-wine)] font-semibold">{pricing.source}</span>
    </div>
  );

  // Un'unica tariffa: layout centrato
  if (pricing.options.length === 1) {
    const [option] = pricing.options;
    return (
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
        <span className={`${toneBg[option.tone]} ${pillClass} px-5 py-1.5`}>{option.label}</span>
        <div className="flex items-baseline justify-center gap-3">
          <span className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--color-wine)]">
            {option.price}
          </span>
          <span className="font-sans text-xl sm:text-2xl font-semibold text-[var(--color-saddle)]">{option.unit}</span>
        </div>
        <div className="inline-block bg-[var(--color-sand)] px-6 py-2 rounded-full border border-[var(--color-wine)]/15">
          <p className="font-sans text-sm sm:text-base font-bold text-[var(--color-wine)] uppercase tracking-wider">
            {option.condition}
          </p>
        </div>
        <p className="text-base sm:text-lg leading-relaxed text-[var(--color-saddle)] font-medium max-w-xl">
          {option.description}
        </p>
        {footer}
      </div>
    );
  }

  // Più tariffe: colonne affiancate
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-[var(--color-wine)]/15">
        {pricing.options.map((option, i) => (
          <div
            key={option.label}
            className={`flex flex-col gap-4 text-center md:text-left ${
              i > 0 ? "md:pl-12 pt-8 md:pt-0 border-t md:border-t-0 border-[var(--color-wine)]/15" : ""
            }`}
          >
            <span className={`self-center md:self-start ${toneBg[option.tone]} ${pillClass}`}>{option.label}</span>
            <div className="flex items-baseline justify-center md:justify-start gap-2 mt-2">
              <span className="font-display text-5xl md:text-6xl font-bold text-[var(--color-wine)]">{option.price}</span>
              <span className="font-sans text-lg font-semibold text-[var(--color-saddle)]">{option.unit}</span>
            </div>
            <p className="font-sans text-sm font-semibold text-[var(--color-wine)] uppercase tracking-wider">
              {option.condition}
            </p>
            <p className="text-base leading-relaxed text-[var(--color-saddle)] font-medium mt-2">{option.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">{footer}</div>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  const otherExperiences = EXPERIENCE_SLUGS.filter((s) => s !== experience.slug).map(
    (s) => EXPERIENCES_DETAILS[s]
  );
  const whatsappHref = whatsappLink(experience.whatsappMessage);

  // Indice progressivo per l'alternanza degli sfondi
  let section = experience.pricing ? 0 : -1;

  return (
    <div className="bg-[var(--color-sand)] min-h-screen">
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
                {experience.subtitle}
              </span>
              {experience.headerBadges.map((badge) => (
                <span key={badge.label} className={`${toneBg[badge.tone]} ${pillClass}`}>
                  {badge.label}
                </span>
              ))}
            </div>
            <h1
              id="experience-title"
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight"
            >
              {experience.title}
            </h1>
            {experience.intro && (
              <p className="font-sans text-base md:text-lg text-[var(--color-saddle)] font-medium max-w-3xl">
                {experience.intro}
              </p>
            )}
          </header>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden shadow-2xl">
            <Image
              src={experience.heroImage.src}
              alt={experience.heroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* ── Sezione 2: Descrizione narrativa ── */}
      <section aria-label="Descrizione dell'esperienza" className="px-4 md:px-8 py-16 md:py-24">
        <article className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-[var(--color-wine)] opacity-50 mx-auto mb-8" aria-hidden="true" />
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-[var(--color-wine)] leading-snug mb-8">
            {experience.overview.lead}
          </p>
          <div className="text-lg md:text-xl text-[var(--color-saddle)] leading-relaxed flex flex-col gap-6 font-medium text-left md:text-center">
            {experience.overview.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      {/* ── Sezione 3: Tariffe (opzionale) ── */}
      {experience.pricing && (
        <section aria-labelledby="pricing-title" className={`${altBg(0)} py-16 md:py-24 px-4 md:px-8`}>
          <div className="max-w-5xl mx-auto">
            <SectionHeader id="pricing-title" eyebrow="Trasparenza & Tariffe Ufficiali" title={experience.pricing.title} />
            <article className="bg-white rounded-[var(--radius-card)] border border-[var(--color-wine)]/25 shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
              <PricingCard pricing={experience.pricing} />
            </article>
          </div>
        </section>
      )}

      {/* ── Sezione 4: Scheda servizio ── */}
      <section aria-labelledby="specs-title" className={`${altBg(++section)} py-16 md:py-24 px-4 md:px-8`}>
        <SectionHeader id="specs-title" eyebrow="Scheda Ufficiale del Servizio" title="Dettagli dell'Esperienza" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {experience.details.map((card) => (
            <SpecCard key={card.title} icon={detailIcons[card.icon]} title={card.title}>
              {(card.value || card.period) && (
                <div className="flex flex-col gap-2">
                  {card.value && <SpecValue>{card.value}</SpecValue>}
                  {card.period && (
                    <div className="inline-flex items-center gap-2 self-start bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold mt-1">
                      <CalendarIcon className="w-4 h-4 shrink-0" />
                      <span>{card.period}</span>
                    </div>
                  )}
                </div>
              )}
              {card.description && (
                <>
                  <div className="w-12 h-px bg-[var(--color-saddle)]/30" aria-hidden="true" />
                  <p className="text-base md:text-lg leading-relaxed text-[var(--color-saddle)] font-medium">
                    {card.description}
                  </p>
                </>
              )}
              {card.items && card.items.length > 0 && <CheckList items={card.items} />}
            </SpecCard>
          ))}
        </div>
      </section>

      {/* ── Sezione 5: Video ── */}
      <section aria-labelledby="video-title" className={`${altBg(++section)} py-16 md:py-24 px-4 md:px-8`}>
        <SectionHeader id="video-title" eyebrow="Vivi l'Atmosfera" title="Il Percorso in Video" />

        <figure className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-video rounded-[var(--radius-card)] overflow-hidden shadow-2xl bg-[var(--color-cn-charcoal)] border border-[var(--color-saddle)]/15">
            <video
              controls
              playsInline
              preload="metadata"
              poster={experience.video.poster}
              className="w-full h-full object-cover"
              aria-label={experience.video.ariaLabel}
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

      {/* ── Sezione 6: Galleria ── */}
      <section aria-labelledby="gallery-title" className={`${altBg(++section)} py-16 md:py-24 px-4 md:px-8`}>
        <SectionHeader id="gallery-title" eyebrow="Scatti dal Percorso" title="Frammenti d'Emozione" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto" role="list">
          {experience.gallery.map((image) => (
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

      {/* ── Sezione 7: Altre esperienze ── */}
      <aside aria-labelledby="other-title" className={`${altBg(++section)} py-16 md:py-24 px-4 md:px-8`}>
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
                  alt={other.teaser.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-cn-charcoal)]/85 via-[var(--color-cn-charcoal)]/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col gap-2">
                  <span className="self-start bg-[var(--color-cn-gold)] text-[var(--color-cn-charcoal)] px-3 py-1 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
                    {other.teaser.badge}
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl text-[var(--color-cn-cream)]">{other.teaser.title}</h3>
                  <p className="font-sans text-sm md:text-base text-[var(--color-cn-sand-lt)]">{other.teaser.subtitle}</p>
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
            {experience.cta.eyebrow}
          </span>
          <h2 id="cta-title" className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            {experience.cta.title}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-cn-sand-lt)]">{experience.cta.text}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            <BookingPlaceholder tone="cream" className="w-full sm:w-auto" />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Prenota l'esperienza ${experience.title} su WhatsApp`}
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
            <span className="font-semibold text-white">
              {siteConfig.name} – {siteConfig.legalName}
            </span>
            <span>
              {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city} (
              {siteConfig.address.province})
            </span>
            <span>
              Telefono:{" "}
              <a href={siteConfig.contact.phoneHref} className="underline hover:text-white transition-colors">
                {siteConfig.contact.phoneDisplay}
              </a>
            </span>
          </address>
        </div>
      </section>
    </div>
  );
}
