import type { ReactNode } from "react";
import Image from "next/image";
import {
  IdCardIcon,
  PinIcon,
  ShieldInfoIcon,
  UserIcon,
  UsersIcon,
  WeightIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { whatsappLink } from "@/config/site";
import type { ExperienceProposal as Proposal, FactIcon } from "@/data/esperienzeData";

const factIcons: Record<FactIcon, ReactNode> = {
  pin: <PinIcon className="w-6 h-6" />,
  user: <UserIcon className="w-6 h-6" />,
  level: <ShieldInfoIcon className="w-6 h-6" />,
  age: <IdCardIcon className="w-6 h-6" />,
  weight: <WeightIcon className="w-6 h-6" />,
  group: <UsersIcon className="w-6 h-6" />,
};

interface ExperienceProposalProps {
  proposal: Proposal;
  /** Posizione nell'elenco: alterna lato della foto */
  index: number;
  /** Classe di sfondo della sezione (alternanza crema/sabbia gestita dalla pagina) */
  bgClass: string;
  /** Intestazione opzionale sopra la proposta (usata dalla prima dell elenco) */
  lead?: ReactNode;
}

/**
 * Una passeggiata a tutta larghezza: titolo, foto, dati chiave in grande,
 * scheda con icone e pulsante WhatsApp dedicato. Nessun prezzo.
 */
export default function ExperienceProposal({ proposal, index, bgClass, lead }: ExperienceProposalProps) {
  const headingId = `heading-${proposal.id}`;
  const photoRight = index % 2 === 1;

  return (
    <section
      id={proposal.id}
      aria-labelledby={headingId}
      className={`${bgClass} scroll-mt-24 py-20 md:py-28 px-4 md:px-8 border-t border-[var(--color-saddle)]/10`}
    >
      <div className="container mx-auto max-w-6xl">
        {lead}

        {/* Intestazione */}
        <header className="max-w-4xl mx-auto text-center mb-12 md:mb-16 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-wine)]">
              {proposal.number}
            </span>
            <span className="bg-[var(--color-wine)] text-[var(--color-cn-cream)] px-3 py-0.5 rounded-full text-xs uppercase tracking-widest font-sans font-semibold">
              {proposal.badge}
            </span>
          </div>
          <h3 id={headingId} className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--color-wine)] leading-tight">
            {proposal.title}
          </h3>
          <p className="text-lg md:text-xl text-[var(--color-saddle)] font-medium leading-relaxed italic">
            {proposal.tagline}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Foto */}
          <div className={photoRight ? "lg:order-2" : undefined}>
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-2xl group">
              <Image
                src={proposal.image.src}
                alt={proposal.image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[var(--color-cn-charcoal)]/70 via-transparent to-transparent"
                aria-hidden="true"
              />
              {/* Cornice sottile interna, come nella locandina */}
              <div
                className="absolute inset-3 rounded-[calc(var(--radius-card)-0.25rem)] border border-white/35 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Dati */}
          <div className="flex flex-col gap-8">
            {/* A colpo d'occhio */}
            <ul
              className={`grid gap-3 sm:gap-4 ${
                proposal.highlights.length > 2 ? "grid-cols-3" : "grid-cols-2"
              }`}
              role="list"
            >
              {proposal.highlights.map((h) => (
                <li
                  key={h.label}
                  className="flex flex-col items-center justify-center text-center gap-1 rounded-[var(--radius-card)] bg-white border border-[var(--color-wine)]/20 px-2 py-5 shadow-sm"
                >
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-none text-[var(--color-wine)]">
                    {h.value}
                  </span>
                  <span className="font-sans text-[0.65rem] sm:text-xs uppercase tracking-widest font-semibold text-[var(--color-saddle)]">
                    {h.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Scheda */}
            <ul
              className="flex flex-col rounded-[var(--radius-card)] bg-white/70 border border-[var(--color-saddle)]/10 px-5 sm:px-7 divide-y divide-[var(--color-saddle)]/15"
              role="list"
            >
              {proposal.facts.map((fact) => (
                <li key={fact.label} className="flex items-center gap-4 py-4">
                  <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-[var(--color-cn-cream)] text-[var(--color-wine)] border border-[var(--color-wine)]/15">
                    {factIcons[fact.icon]}
                  </span>
                  <p className="text-base md:text-lg leading-snug text-[var(--color-saddle)]">
                    <strong className="font-semibold text-[var(--color-wine)]">{fact.label}:</strong> {fact.value}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(proposal.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verifica la disponibilità su WhatsApp: ${proposal.title}`}
              className="inline-flex items-center justify-center gap-3 self-stretch sm:self-start px-8 py-3.5 rounded-[var(--radius-btn)] bg-[var(--color-pine)] text-white font-semibold tracking-wide uppercase text-sm shadow-md transition-[transform,box-shadow,background-color] duration-300 hover:bg-[var(--color-wine)] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-pine)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Verifica la disponibilità
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
