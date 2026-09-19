"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// ─── Dati & Costanti ─────────────────────────────────────────────────────────

const navLinks = [
  { href: "/",                   label: "Home" },
  { href: "/chi-siamo",         label: "Chi Siamo" },
  { href: "/esperienze",        label: "Esperienze a Cavallo" },
  { href: "/servizi-elite",     label: "Servizi Elite" },
  { href: "/pensione-cavalli",  label: "Pensione per Cavalli" },
  { href: "/gallery",           label: "Gallery" },
];

const WHATSAPP_NUMBER = "393289784018";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ciao%20Cavallo%20Natura!%20Vorrei%20maggiori%20informazioni.`;

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function MenuIcon({ className, isOpen }: { className?: string; isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      )}
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── HorseLogo ────────────────────────────────────────────────────────────────
// Badge traslucido bianco + scritta candida — nessuna prop dinamica di colore.

function HorseLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="Cavallo Natura – Homepage"
      onClick={onClick}
    >
      {/* Badge CN — sfondo scuro traslucido con bordo bianco sottile */}
      <div
        className="w-9 h-9 rounded-full border border-white/30 bg-white/10 flex items-center justify-center shrink-0"
        aria-hidden="true"
      >
        <span className="text-white font-display font-semibold text-xs">CN</span>
      </div>

      {/* Brand name — bianco candido */}
      <span className="text-lg md:text-xl font-display font-semibold tracking-wide text-white">
        Cavallo Natura
      </span>
    </Link>
  );
}

// ─── moveIndicator (GSAP helper) ─────────────────────────────────────────────

/**
 * Sposta l'indicatore .nav-indicator sul bounding rect del link target.
 * Se prefersReducedMotion è attivo, usa duration 0.
 */
function moveIndicator(
  indicator: HTMLElement,
  target: HTMLElement,
  list: HTMLElement,
  prefersReducedMotion: boolean
) {
  const listRect   = list.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  gsap.to(indicator, {
    left:      targetRect.left - listRect.left,
    width:     targetRect.width,
    duration:  prefersReducedMotion ? 0 : 0.35,
    ease:      "power2.out",
    overwrite: "auto",
  });
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // prefers-reduced-motion — valutato una volta sola, usato dall'indicatore GSAP
  const prefersReducedMotion = useRef(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  // ── GSAP indicator refs ───────────────────────────────────────────────────
  const navListRef   = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  /**
   * Posiziona l'indicatore sul link attivo corrente.
   * Chiamato sia all'init che a ogni cambio di pathname.
   */
  const positionOnActive = useCallback(() => {
    const list      = navListRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;

    const activeLink = list.querySelector<HTMLAnchorElement>("[data-active='true']");
    if (activeLink) {
      moveIndicator(indicator, activeLink, list, prefersReducedMotion.current);
      gsap.set(indicator, { opacity: 1 });
    } else {
      gsap.set(indicator, { opacity: 0 });
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Posizionamento iniziale senza animazione (snap immediato)
  useGSAP(() => {
    const list      = navListRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;

    const activeLink = list.querySelector<HTMLAnchorElement>("[data-active='true']");
    if (activeLink) {
      const listRect   = list.getBoundingClientRect();
      const targetRect = activeLink.getBoundingClientRect();
      gsap.set(indicator, {
        left:    targetRect.left - listRect.left,
        width:   targetRect.width,
        opacity: 1,
      });
    } else {
      gsap.set(indicator, { opacity: 0 });
    }
  }, { dependencies: [], revertOnUpdate: false });

  // Riposiziona con animazione a ogni cambio di route
  useEffect(() => {
    const id = requestAnimationFrame(positionOnActive);
    return () => cancelAnimationFrame(id);
  }, [positionOnActive]);

  // Chiudi il menu mobile al cambio di pagina
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  // ── Handler hover — anteprima indicatore ─────────────────────────────────
  const handleLinkMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const list      = navListRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;
    moveIndicator(indicator, e.currentTarget, list, prefersReducedMotion.current);
    gsap.set(indicator, { opacity: 1 });
  }, []);

  const handleListMouseLeave = useCallback(() => {
    positionOnActive();
  }, [positionOnActive]);

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-black/25 backdrop-blur-[3px] border-b border-white/10 transition-none"
    >
      {/*
        La <nav> ha z-50 relativo all'header per stare sopra al menu mobile
        che usa z-40. Il bg è ereditato dall'<header> — nessun bg inline qui.
      */}
      <nav
        className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navigazione principale"
      >
        {/* ── Sinistra: hamburger + logo ── */}
        <div className="flex items-center gap-3 lg:gap-0">
          {/* Hamburger (solo mobile) */}
          <button
            type="button"
            className="lg:hidden p-2 -ml-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-inset transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Apri menu principale"
          >
            <MenuIcon className="w-6 h-6" isOpen={isMobileMenuOpen} />
          </button>

          {/* Logo */}
          <HorseLogo onClick={() => setIsMobileMenuOpen(false)} />
        </div>

        {/* ── Centro: link desktop ── */}
        {/*
          La <ul> è position:relative per ancorare correttamente
          l'indicatore assoluto posizionato da GSAP.
        */}
        <ul
          ref={navListRef}
          className="hidden lg:flex items-center gap-1 relative"
          role="list"
          onMouseLeave={handleListMouseLeave}
        >
          {/*
            Indicatore scorrevole — 2px bianchi animati da GSAP.
            Il colore è fisso (white): nessuna variabile calcolata.
          */}
          <div
            ref={indicatorRef}
            className="nav-indicator bg-white"
            aria-hidden="true"
          />

          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  data-active={isActive ? "true" : undefined}
                  onMouseEnter={handleLinkMouseEnter}
                  className={
                    isActive
                      // Stato attivo: bianco pieno + sottolineatura border-b
                      ? "relative px-3 py-2 pb-1 text-sm font-semibold text-white border-b-2 border-white transition-colors duration-200"
                      // Stato idle: bianco/85, full white al hover
                      : "relative px-3 py-2 pb-3 text-sm font-medium text-white/85 hover:text-white transition-colors duration-200"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Destra: CTA WhatsApp ── */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contattaci su WhatsApp"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white hover:opacity-90 shrink-0 transition-opacity duration-200"
          style={{ backgroundColor: "#25D366" }}
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </nav>

      {/* ── Menu mobile a tendina ── */}
      {/*
        z-40 — sotto alla <nav> (z-50) così il burger rimane sempre cliccabile.
        Sfondo scuro semitrasparente + blur per coerenza col tema dark.
      */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-md transition-transform duration-300 ease-in-out pt-[64px] ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6 sm:px-6 pb-24">
          <ul className="flex flex-col gap-2" role="list">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-5 py-4 text-xl font-display font-medium rounded-2xl transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-white/10 border border-white/20"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
