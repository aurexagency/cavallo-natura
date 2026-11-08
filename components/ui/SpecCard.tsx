import type { ReactNode } from "react";
import { CheckIcon } from "@/components/icons";

// ─── CheckList ────────────────────────────────────────────────────────────────

const checkListSizes = {
  md: { list: "gap-3", item: "text-base md:text-lg" },
  lg: { list: "gap-4", item: "text-lg" },
} as const;

export function CheckList({ items, size = "lg" }: { items: readonly string[]; size?: "md" | "lg" }) {
  const s = checkListSizes[size];
  return (
    <ul className={`flex flex-col ${s.list}`} role="list">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 ${s.item} text-[var(--color-saddle)] font-medium leading-relaxed`}
        >
          <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── SpecCard ─────────────────────────────────────────────────────────────────

interface SpecCardProps {
  icon: ReactNode;
  title: string;
  /** Livello del titolo: h3 di default, h4 quando la card sta sotto un h3 */
  headingLevel?: "h3" | "h4";
  children?: ReactNode;
}

/** Riquadro "scheda servizio": icona tonda + titolo + contenuto libero. */
export function SpecCard({ icon, title, headingLevel = "h3", children }: SpecCardProps) {
  const Heading = headingLevel;
  return (
    <article className="bg-[var(--color-sand)] p-8 md:p-12 rounded-[var(--radius-card)] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col gap-6 border border-[var(--color-saddle)]/10">
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-14 h-14 shrink-0 rounded-full bg-[var(--color-cn-cream)] text-[var(--color-wine)] border border-[var(--color-wine)]/15">
          {icon}
        </span>
        <Heading className="font-display text-2xl md:text-3xl text-[var(--color-wine)]">{title}</Heading>
      </div>
      {children}
    </article>
  );
}

/** Valore principale in evidenza dentro una SpecCard (es. "2 ore"). */
export function SpecValue({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-3xl md:text-4xl text-[var(--color-wine)] font-semibold leading-tight">
      {children}
    </p>
  );
}
