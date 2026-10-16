import Link from "next/link";
import { mainNavLinks, siteConfig } from "@/config/site";

// ─── Data ─────────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    href: siteConfig.socials.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

// ─── Newsletter Form (Server-renderable shell, JS enhancement via Client) ──────

function NewsletterForm() {
  return (
    <form
      action="/api/newsletter"
      method="POST"
      className="mt-4 flex flex-col gap-3"
      aria-label="Iscrizione newsletter Cavallo Natura"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Il tuo indirizzo email
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="La tua email…"
        className="w-full rounded-lg px-4 py-2 text-sm outline-none border focus:ring-2 transition-shadow bg-[var(--color-cn-cream)] border-[var(--color-cn-sand)] text-[var(--color-cn-charcoal)]"
      />
      <button
        type="submit"
        className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 bg-[var(--color-cn-brown)]"
      >
        Iscriviti alla Newsletter
      </button>
    </form>
  );
}

// ─── Footer (Server Component) ────────────────────────────────────────────────

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t mt-20 bg-[var(--color-cn-charcoal)] border-[var(--color-cn-brown)] text-[var(--color-cn-sand-lt)]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer – Cavallo Natura
      </h2>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* ── Colonna 1: Info Aziendali ── */}
          <section aria-label="Informazioni aziendali">
            <h3 className="text-lg font-display font-semibold mb-4 text-[var(--color-cn-gold)]">
              {siteConfig.name}
            </h3>
            <address className="not-italic text-sm leading-relaxed space-y-1 text-[var(--color-cn-sand)]">
              <p className="font-medium text-[var(--color-cn-sand-lt)]">
                {siteConfig.legalName}
              </p>
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.postalCode} {siteConfig.address.city} ({siteConfig.address.province})
              </p>
              <p className="pt-2">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:underline transition-colors text-[var(--color-cn-gold)]"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
            </address>
          </section>

          {/* ── Colonna 2: Link Rapidi ── */}
          <nav aria-label="Link rapidi sitemap">
            <h3 className="text-lg font-display font-semibold mb-4 text-[var(--color-cn-gold)]">
              Navigazione
            </h3>
            <ul className="space-y-2" role="list">
              {mainNavLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 hover:underline text-[var(--color-cn-sand)] hover:text-[var(--color-cn-gold)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Colonna 3: Social + Newsletter ── */}
          <section aria-label="Social media e newsletter">
            <h3 className="text-lg font-display font-semibold mb-4 text-[var(--color-cn-gold)]">
              Seguici
            </h3>

            {/* Social links */}
            <ul className="flex items-center gap-4 mb-6" role="list">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Seguici su ${label}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 bg-[var(--color-cn-brown)] text-[var(--color-cn-cream)]"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <h4 className="text-sm font-semibold mb-1 text-[var(--color-cn-sand-lt)]">
              Newsletter
            </h4>
            <p className="text-xs mb-1 text-[var(--color-cn-sand)]">
              Ricevi offerte esclusive e aggiornamenti dal cuore della Maremma.
            </p>
            <NewsletterForm />
          </section>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t text-center text-xs border-[var(--color-cn-brown)] text-[var(--color-cn-sand)]">
          <p>
            © {currentYear} {siteConfig.legalName} – Tutti i diritti riservati.{" "}
            <Link
              href={siteConfig.legalLinks.privacyPolicy.href}
              className="hover:underline ml-1 text-[var(--color-cn-gold)]"
            >
              {siteConfig.legalLinks.privacyPolicy.label}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
