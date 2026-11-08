"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { MenuIcon, WhatsAppIcon } from "@/components/icons";
import { mainNavLinks, siteConfig } from "@/config/site";

// ─── HorseLogo ────────────────────────────────────────────────────────────────
// Badge traslucido bianco + scritta candida — nessuna prop dinamica di colore.

function HorseLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="flex items-center group py-1"
      aria-label="Cavallo Natura – Homepage"
      onClick={onClick}
    >
      <div className="relative h-10 sm:h-12 w-auto aspect-[366/157] shrink-0">
        <Image
          src="/logo/logo-bianco.png"
          alt="Cavallo Natura"
          fill
          priority
          sizes="(max-width: 640px) 100px, 120px"
          className="object-contain object-left transition-opacity duration-200 group-hover:opacity-90"
        />
      </div>
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

  // Chiudi il menu mobile al cambio di pagina (anche con back/forward del browser).
  // Aggiornamento durante il render invece che in un effect: niente render a cascata.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setIsMobileMenuOpen(false);
  }

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

          {mainNavLinks.map(({ href, label }) => {
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
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contattaci su WhatsApp"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-[#25D366] hover:opacity-90 shrink-0 transition-opacity duration-200"
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
            {mainNavLinks.map(({ href, label }) => {
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
