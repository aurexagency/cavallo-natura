"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import Button from "@/components/ui/Button";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceDetails {
  percorso: string;
  durata: string;
  informazioni: string[];
  abbigliamentoConsigliato: string[];
}

interface ServiceDetailsModalProps {
  /** Titolo del servizio mostrato nell'intestazione della modale */
  title: string;
  details: ServiceDetails;
  /** Testo del pulsante che apre la modale */
  triggerLabel?: string;
  /** Link di prenotazione mostrato in fondo alla modale (opzionale) */
  bookingHref?: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-[var(--color-wine)]">
        {label}
      </h3>
      {children}
    </section>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base md:text-lg text-[var(--color-saddle)] font-medium leading-relaxed">
          <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-[var(--color-pine)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Usa l'elemento nativo <dialog>: focus trap, chiusura con ESC e ruolo
 * accessibile sono gestiti dal browser. Il click sul backdrop chiude la modale.
 */
export default function ServiceDetailsModal({
  title,
  details,
  triggerLabel = "Scopri i dettagli",
  bookingHref,
}: ServiceDetailsModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // `close` scatta sia con ESC che con close(): ripristina sempre lo scroll
  const handleClose = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  // Se il componente viene smontato a modale aperta, sblocca lo scroll
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="lg"
        aria-haspopup="dialog"
        onClick={open}
      >
        {triggerLabel}
      </Button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={handleClose}
        onClick={(event) => {
          // Il click sul backdrop ha come target il <dialog> stesso
          if (event.target === event.currentTarget) close();
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-3xl max-h-[88vh] p-0 overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-cn-cream)] text-[var(--color-saddle)] shadow-2xl border border-[var(--color-saddle)]/15 backdrop:bg-[var(--color-cn-charcoal)]/70 backdrop:backdrop-blur-sm"
      >
        <div className="relative flex flex-col max-h-[88vh]">
          {/* Intestazione */}
          <header className="flex items-start justify-between gap-6 px-6 py-6 md:px-10 md:py-8 border-b border-[var(--color-saddle)]/10 bg-[var(--color-sand)]">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-wine)]">
                Dettagli dell&apos;esperienza
              </span>
              <h2 id={titleId} className="font-display text-3xl md:text-5xl text-[var(--color-wine)] leading-tight">
                {title}
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Chiudi finestra"
              className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full text-[var(--color-wine)] border border-[var(--color-wine)]/25 hover:bg-[var(--color-wine)] hover:text-[var(--color-cn-cream)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-wine)]"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </header>

          {/* Contenuto scrollabile */}
          <div className="overflow-y-auto px-6 py-8 md:px-10 md:py-10 flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <DetailBlock label="Percorso">
                <p className="font-display text-2xl md:text-3xl text-[var(--color-wine)] font-semibold leading-tight">
                  {details.percorso}
                </p>
              </DetailBlock>
              <DetailBlock label="Durata">
                <p className="font-display text-2xl md:text-3xl text-[var(--color-wine)] font-semibold leading-tight">
                  {details.durata}
                </p>
              </DetailBlock>
            </div>

            <div className="w-full h-px bg-[var(--color-saddle)]/15" aria-hidden="true" />

            <DetailBlock label="Informazioni">
              <CheckList items={details.informazioni} />
            </DetailBlock>

            <DetailBlock label="Abbigliamento consigliato">
              <CheckList items={details.abbigliamentoConsigliato} />
            </DetailBlock>
          </div>

          {/* Azioni */}
          {bookingHref && (
            <footer className="flex flex-wrap items-center justify-end gap-4 px-6 py-5 md:px-10 border-t border-[var(--color-saddle)]/10 bg-[var(--color-sand)]">
              <Button as="link" href={bookingHref} variant="primary" size="md">
                Prenota
              </Button>
            </footer>
          )}
        </div>
      </dialog>
    </>
  );
}
