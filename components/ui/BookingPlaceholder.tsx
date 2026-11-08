// TODO: sostituire con il vero flusso di prenotazione quando sarà disponibile.
// Finché non esiste, il pulsante resta visibile ma disabilitato in tutti i punti
// in cui la prenotazione andrà agganciata (un solo componente da aggiornare).

const tones = {
  wine: "bg-[var(--color-wine)] text-[var(--color-cn-cream)]",
  cream: "bg-[var(--color-cn-cream)] text-[var(--color-pine)]",
} as const;

interface BookingPlaceholderProps {
  label?: string;
  tone?: keyof typeof tones;
  className?: string;
}

export default function BookingPlaceholder({ label = "PRENOTA", tone = "wine", className = "" }: BookingPlaceholderProps) {
  return (
    <button
      type="button"
      disabled
      className={`${tones[tone]} font-sans font-semibold uppercase tracking-[0.2em] px-10 py-4 rounded-[var(--radius-btn)] shadow-md opacity-75 cursor-not-allowed select-none ${className}`}
    >
      {label}
    </button>
  );
}
