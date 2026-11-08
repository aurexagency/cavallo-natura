import Link from "next/link";
import { InstagramIcon } from "@/components/icons";
import { mainNavLinks, siteConfig } from "@/config/site";

// ─── Data ─────────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    href: siteConfig.socials.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
];

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

          {/* ── Colonna 3: Social ── */}
          <section aria-label="Social media">
            <h3 className="text-lg font-display font-semibold mb-4 text-[var(--color-cn-gold)]">
              Seguici
            </h3>

            {/* Social links */}
            <ul className="flex items-center gap-4" role="list">
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
