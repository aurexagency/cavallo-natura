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
    phoneHref: "tel:+393289784018",
    whatsappNumber: "393289784018",
    whatsappUrl:
      "https://wa.me/393289784018?text=Ciao%20Cavallo%20Natura!%20Vorrei%20maggiori%20informazioni.",
  },
  socials: {
    instagram: "https://www.instagram.com/cavallonatura_passeggiate/",
  },
  legalLinks: {
    privacyPolicy: { href: "/privacy-policy", label: "Privacy Policy" } as NavItem,
  },
} as const;
