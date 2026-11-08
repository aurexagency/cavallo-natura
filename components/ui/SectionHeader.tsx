interface SectionHeaderProps {
  /** Id dell'<h2>, da collegare all'aria-labelledby della sezione */
  id: string;
  eyebrow: string;
  title: string;
}

/** Intestazione standard di sezione: occhiello maiuscolo + titolo serif. */
export default function SectionHeader({ id, eyebrow, title }: SectionHeaderProps) {
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
