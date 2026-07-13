"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",                    label: "Home" },
  { href: "/chi-siamo",          label: "Chi Siamo" },
  { href: "/esperienze",         label: "Esperienze a Cavallo" },
  { href: "/servizi-elite",      label: "Servizi Elite" },
  { href: "/pensione-cavalli",   label: "Pensione per Cavalli" },
  { href: "/gallery",            label: "Gallery" },
];

const WHATSAPP_NUMBER = "393289784018";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ciao%20Cavallo%20Natura!%20Vorrei%20maggiori%20informazioni.`;

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function MenuIcon({ className, isOpen }: { className?: string, isOpen: boolean }) {
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

function HorseLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="Cavallo Natura – Homepage"
      onClick={onClick}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: "var(--color-cn-brown)" }}
        aria-hidden="true"
      >
        <span className="text-white font-bold text-sm font-display">CN</span>
      </div>
      <span
        className="text-xl font-display font-semibold leading-tight tracking-wide"
        style={{ color: "var(--color-cn-brown)" }}
      >
        Cavallo Natura
      </span>
    </Link>
  );
}

// ─── Navbar (Client Component) ────────────────────────────────────────────────

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Chiudi il menu automaticamente quando l'utente naviga in una nuova pagina
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Previene lo scroll del body quando il menu è aperto per migliorare l'UX
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-cn-cream)",
        borderColor: "var(--color-cn-sand)",
      }}
    >
      {/* 
        La <nav> principale mantiene un z-index superiore al sottomenu mobile 
        in modo che l'header (logo + burger) sia sempre in cima
      */}
      <nav
        className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 bg-[var(--color-cn-cream)]"
        aria-label="Navigazione principale"
      >
        
        <div className="flex items-center gap-4 lg:gap-0">
          {/* ── Hamburger Menu Button (Mobile) ── */}
          <button
            type="button"
            className="lg:hidden p-2 -ml-2 rounded-md text-[var(--color-saddle)] hover:bg-[var(--color-sand)] hover:text-[var(--color-wine)] focus:outline-none focus:ring-2 focus:ring-[var(--color-wine)] focus:ring-inset transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Apri menu principale"
          >
            <MenuIcon className="w-6 h-6" isOpen={isMobileMenuOpen} />
          </button>

          {/* ── Logo ── */}
          <HorseLogo onClick={() => setIsMobileMenuOpen(false)} />
        </div>

        {/* ── Nav links (Desktop) ── */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--color-wine)] bg-[var(--color-sand)]"
                      : "text-[var(--color-cn-charcoal)] hover:text-[var(--color-wine)] hover:bg-[var(--color-sand)]/50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── WhatsApp CTA ── */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contattaci su WhatsApp"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90 shrink-0"
          style={{ backgroundColor: "#25D366" }}
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </nav>

      {/* ── Mobile Menu Dropdown ── */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-[var(--color-cn-cream)] transition-transform duration-300 ease-in-out pt-[70px] ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6 sm:px-6 flex flex-col justify-between pb-24">
          <ul className="flex flex-col gap-2" role="list">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-5 py-4 text-xl font-display font-medium rounded-2xl transition-colors duration-200 ${
                      isActive 
                        ? "text-[var(--color-wine)] bg-[var(--color-sand)] shadow-sm" 
                        : "text-[var(--color-saddle)] hover:bg-[var(--color-sand)]/50"
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
