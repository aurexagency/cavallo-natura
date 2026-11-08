export interface NavItem {
  href: string;
  label: string;
}

export const mainNavLinks: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/esperienze", label: "Esperienze a Cavallo" },
  { href: "/pensione-cavalli", label: "Pensione per Cavalli" },
  { href: "/academy", label: "Academy" },
];

// Unica fonte del numero: telefono, link tel: e WhatsApp derivano da qui.
const PHONE_E164 = "393289784018";

const DEFAULT_WHATSAPP_MESSAGE = "Ciao Cavallo Natura! Vorrei maggiori informazioni.";

/** Link WhatsApp precompilato con il messaggio indicato (o quello generico). */
export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export const siteConfig = {
  name: "Cavallo Natura",
  legalName: "A.S.D. C.I. Cavallo Natura",
  address: {
    street: "Strada vicinale del Pingrossino snc",
    postalCode: "58100",
    city: "Marina di Grosseto",
    province: "GR",
  },
  contact: {
    phoneDisplay: "+39 328 978 4018",
    phoneHref: `tel:+${PHONE_E164}`,
    whatsappUrl: whatsappLink(),
  },
  socials: {
    instagram: "https://www.instagram.com/cavallonatura_passeggiate/",
  },
  legalLinks: {
    privacyPolicy: { href: "/privacy-policy", label: "Privacy Policy" } as NavItem,
  },
} as const;
