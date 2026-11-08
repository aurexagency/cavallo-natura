// ─── Types ────────────────────────────────────────────────────────────────────

export type Tone = "wine" | "pine";

/** Icone disponibili per i riquadri della scheda servizio */
export type DetailIcon = "clock" | "compass" | "shield" | "boot";

export interface ExperienceDetailCard {
  icon: DetailIcon;
  title: string;
  /** Valore in evidenza (es. "2 ore") */
  value?: string;
  /** Pill con calendario sotto al valore (es. periodo di disponibilità) */
  period?: string;
  /** Paragrafo descrittivo, separato da un filetto */
  description?: string;
  items?: string[];
}

export interface PriceOption {
  label: string;
  tone: Tone;
  price: string;
  unit: string;
  condition: string;
  description: string;
}

export interface ExperiencePricing {
  title: string;
  /** 1 opzione → layout centrato; 2 opzioni → due colonne */
  options: PriceOption[];
  note: string;
  source: string;
}

export type ExperienceSlug = "in-pineta" | "in-pineta-e-spiaggia" | "per-esperti";

export interface ExperienceDetail {
  slug: ExperienceSlug;
  title: string;
  subtitle: string;
  headerBadges: { label: string; tone: Tone }[];
  /** Paragrafo opzionale sotto al titolo */
  intro?: string;
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt?: string;
  };
  /** Anteprima usata nella sezione "Altri percorsi" delle altre esperienze */
  teaser: {
    title: string;
    subtitle: string;
    badge: string;
  };
  heroImage: { src: string; alt: string };
  overview: { lead: string; paragraphs: string[] };
  pricing?: ExperiencePricing;
  details: ExperienceDetailCard[];
  video: { src: string; poster: string; caption: string; ariaLabel: string };
  gallery: { src: string; alt: string }[];
  cta: { eyebrow: string; title: string; text: string };
  whatsappMessage: string;
}

// ─── Testi comuni ─────────────────────────────────────────────────────────────

const ABBIGLIAMENTO_STANDARD: ExperienceDetailCard = {
  icon: "boot",
  title: "Abbigliamento consigliato",
  items: [
    "Pantaloni lunghi, scarpe chiuse.",
    "Peso massimo 90kg.",
    "Il Centro mette a disposizione i cap obbligatori per tutti.",
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

export const EXPERIENCES_DETAILS: Record<ExperienceSlug, ExperienceDetail> = {
  "in-pineta": {
    slug: "in-pineta",
    title: "Pineta",
    subtitle: "Un’esperienza rilassante, adatta anche a principianti",
    headerBadges: [{ label: "Durata 2 Ore", tone: "wine" }],
    seo: {
      title: "Pineta | Cavallo Natura Maremma",
      description:
        "Vivi la magia di una cavalcata privata di 2 ore tra la Pineta del Tombolo e 1 km di spiaggia libera a Marina di Grosseto. Istruttore dedicato, adatta anche a principianti.",
      ogTitle: "Pineta | Cavallo Natura",
      ogDescription:
        "Vivi la magia di una cavalcata immersa nella natura, tra la Pineta del Tombolo e un tratto di spiaggia libera. Un’esperienza rilassante adatta anche a principianti.",
    },
    teaser: {
      title: "Pineta",
      subtitle: "Un’esperienza rilassante tra la pineta e il mare",
      badge: "2 Ore",
    },
    heroImage: {
      src: "/pagine-servizi/foto-in-pineta.webp",
      alt: "Escursione guidata a cavallo nella pineta secolare di Marina di Grosseto",
    },
    overview: {
      lead: "Vivi la magia di una cavalcata immersa nella natura, tra la Pineta del Tombolo e un tratto di spiaggia. Accompagnato da una guida esperta, potrai goderti un’esperienza rigenerante in un’atmosfera tranquilla e autentica.",
      paragraphs: [
        "I sentieri ombreggiati dai pini marittimi secolari offrono un riparo naturale e una sensazione di pace immediata. Il ritmo disteso della passeggiata, cadenzato dal passo sicuro dei nostri cavalli, permette di assaporare ogni profumo della macchia mediterranea fino ad aprirsi verso il litorale tirrenico.",
        "La presenza costante di una guida dedicata rende questa uscita perfetta sia per chi si avvicina all'equitazione per la prima volta, sia per chi desidera una parentesi di relax esclusivo in Maremma.",
      ],
    },
    pricing: {
      title: "Quote di Partecipazione",
      options: [
        {
          label: "Coppie & Piccoli Gruppi",
          tone: "pine",
          price: "€75",
          unit: "a persona",
          condition: "(minimo 2 partecipanti)",
          description:
            "La formula ideale per coppie, amici o famiglie che desiderano vivere insieme un'esperienza rilassante e privata in Maremma.",
        },
        {
          label: "Esperienza Singola",
          tone: "wine",
          price: "€100",
          unit: "per partecipazione singola",
          condition: "(istruttore dedicato esclusivo)",
          description:
            "Per chi desidera vivere l'escursione in totale intimità con il cavallo e avere un istruttore-guida dedicato al 100% alla propria uscita.",
        },
      ],
      note: "Nessun costo nascosto: istruttore dedicato e cap di sicurezza inclusi.",
      source: "Tariffe ufficiali della scheda servizio",
    },
    details: [
      {
        icon: "clock",
        title: "Durata & Percorso",
        value: "2 ore",
        items: [
          "Percorso: pineta e breve tratto di spiaggia (1 km di spiaggia libera).",
          "Tracciati sabbiosi immersi nella fresca Pineta del Tombolo a Marina di Grosseto.",
        ],
      },
      {
        icon: "compass",
        title: "Guida & Partecipanti",
        items: [
          "Istruttore dedicato per l’intera durata.",
          "Partecipanti ideali: coppie o piccoli gruppi di amici.",
          "Esperienza privata studiata per offrire massima cura e serenità.",
        ],
      },
      {
        icon: "shield",
        title: "Livello & Requisiti",
        items: [
          "Livello richiesto: adatto anche a chi è alla prima esperienza.",
          "Età minima: 14 anni.",
          "Peso massimo: 90 kg.",
        ],
      },
      ABBIGLIAMENTO_STANDARD,
    ],
    video: {
      src: "/videos/esperienze/in-pineta.mp4",
      poster: "/pagine-servizi/foto-in-pineta.webp",
      caption:
        "Un assaggio della quiete che si respira cavalcando tra i sentieri della Pineta del Tombolo e la spiaggia.",
      ariaLabel: "Video della passeggiata privata a cavallo di 2 ore",
    },
    gallery: [
      { src: "/gallery/in-pineta/dsc03362.jpg", alt: "Cavaliere al passo tra i pini marittimi della Pineta del Tombolo" },
      { src: "/gallery/in-pineta/dsc04167.jpg", alt: "Luce naturale filtrata tra i rami della pineta durante la passeggiata" },
      { src: "/gallery/in-pineta/dsc04382.jpg", alt: "Binomio cavallo e cavaliere immerso nella macchia mediterranea" },
      { src: "/gallery/in-pineta/dsc03946.jpg", alt: "Passeggiata a cavallo in totale tranquillità nel bosco maremmano" },
    ],
    cta: {
      eyebrow: "Prenotazione Rapida",
      title: "Pronto a Vivere la Maremma a Cavallo?",
      text: "Verifica subito la disponibilità dell'esperienza Pineta (2 ore): scrivici su WhatsApp per fissare il giorno e l'orario migliore per te.",
    },
    whatsappMessage:
      "Ciao Cavallo Natura! Vorrei prenotare l'esperienza Pineta. Potete indicarmi le disponibilità?",
  },

  "in-pineta-e-spiaggia": {
    slug: "in-pineta-e-spiaggia",
    title: "Pineta e Spiaggia",
    subtitle: "Un’esperienza unica, adatta anche a principianti",
    headerBadges: [
      { label: "Durata 2 Ore e 45 Minuti", tone: "wine" },
      { label: "20 Settembre – 20 Maggio", tone: "pine" },
    ],
    intro: "Un’esperienza unica, adatta anche a principianti",
    seo: {
      title: "Pineta e Spiaggia | Cavallo Natura Maremma",
      description:
        "Vivi la magia di una rilassante passeggiata a cavallo di 2 ore e 45 minuti tra la Pineta del Tombolo e 2,5 km di spiaggia libera sulla battigia a Marina di Grosseto. Istruttore dedicato, adatta anche a principianti.",
      ogTitle: "Pineta e Spiaggia | Cavallo Natura",
      ogDescription:
        "Un’esperienza unica tra la Pineta del Tombolo e 2,5 km di spiaggia libera sulla battigia con istruttore dedicato. Adatta anche a chi è alla prima esperienza.",
      ogImageAlt: "Pineta e Spiaggia a Marina di Grosseto",
    },
    teaser: {
      title: "In Pineta e Spiaggia",
      subtitle: "L'incontro magico tra il bosco e il mare",
      badge: "Più Richiesto",
    },
    heroImage: {
      src: "/pagine-servizi/foto-in-pineta-e-spiaggia.webp",
      alt: "Passeggiata privata a cavallo tra la Pineta del Tombolo e la battigia in riva al mare",
    },
    overview: {
      lead: "Vivi la magia di una rilassante passeggiata a cavallo, tra la Pineta del Tombolo e la spiaggia. Accompagnato da una guida esperta, potrai goderti un percorso immerso nella natura, in un’atmosfera tranquilla e rigenerante.",
      paragraphs: [
        "L'itinerario si sviluppa lungo i sentieri protetti e ombreggiati della secolare Pineta del Tombolo, dove il profumo inconfondibile di pini marittimi e macchia mediterranea scandisce i primi passi in sella. Dalla quiete ovattata del bosco si passa gradualmente alla zona retrodunale, fino a schiudersi davanti allo spettacolo aperto del Mar Tirreno.",
        "Una volta raggiunta la costa, vivrai l'emozione straordinaria di percorrere ben 2,5 km di spiaggia libera direttamente sulla battigia. Il suono ritmico della risacca e la brezza marina accompagneranno ogni momento, con la costante presenza di un istruttore dedicato che assicurerà serenità, supporto e cura a ciascun cavaliere.",
      ],
    },
    pricing: {
      title: "Quota di Partecipazione",
      options: [
        {
          label: "Esperienza Privata con Istruttore Dedicato",
          tone: "pine",
          price: "€100",
          unit: "a persona",
          condition: "(minimo 2 partecipanti)",
          description:
            "La formula ideale per coppie o piccoli gruppi di amici desiderosi di vivere un'avventura autentica ed esclusiva: 2 ore e 45 minuti di pura connessione con il cavallo e il mare della Maremma.",
        },
      ],
      note: "Istruttore dedicato esclusivo e cap protettivi inclusi per tutti.",
      source: "Tariffa ufficiale locandina",
    },
    details: [
      {
        icon: "clock",
        title: "Durata & Percorso",
        value: "2 ore e 45 minuti",
        period: "Periodo: dal 20 settembre al 20 maggio",
        items: [
          "Percorso: pineta e 2,5 km di spiaggia libera, da percorrere sulla battigia.",
          "Periodo: dal 20 settembre al 20 maggio.",
          "Tracciati sabbiosi all'interno della Pineta del Tombolo fino al litorale incontaminato di Marina di Grosseto.",
        ],
      },
      {
        icon: "compass",
        title: "Guida & Partecipanti",
        items: [
          "Istruttore dedicato per l’intera durata.",
          "Partecipanti ideali: coppie o piccoli gruppi di amici.",
          "Esperienza privata pensata per garantire riservatezza, serenità e cura di ogni particolare.",
        ],
      },
      {
        icon: "shield",
        title: "Livello & Requisiti",
        items: [
          "Livello richiesto: adatto anche a chi è alla prima esperienza.",
          "Età minima: 14 anni.",
          "Peso massimo: 90 kg.",
        ],
      },
      ABBIGLIAMENTO_STANDARD,
    ],
    video: {
      src: "/videos/esperienze/in-pineta-e-spiaggia.mp4",
      poster: "/pagine-servizi/foto-in-pineta-e-spiaggia.webp",
      caption:
        "L'emozione autentica di cavalcare lungo la battigia, accompagnati dal respiro del mare e dalla brezza marina.",
      ariaLabel: "Video della passeggiata privata a cavallo di 2 ore e 45 minuti in riva al mare",
    },
    gallery: [
      { src: "/gallery/in-riva-al-mare/dsc04792.jpg", alt: "Passeggiata a cavallo in riva al mare con la brezza marina" },
      { src: "/gallery/in-riva-al-mare/dsc04964.jpg", alt: "Binomio a cavallo in riva al mare al tramonto" },
      { src: "/gallery/in-riva-al-mare/dsc05390.jpg", alt: "Momento di totale libertà a cavallo sulla spiaggia" },
      { src: "/gallery/in-riva-al-mare/dsc06470.jpg", alt: "Colori caldi del tramonto sulla spiaggia di Marina di Grosseto" },
    ],
    cta: {
      eyebrow: "Prenotazione Rapida",
      title: "Pronto a Vivere la Magia in Riva al Mare?",
      text: "Verifica subito la disponibilità di Pineta e Spiaggia: scrivici su WhatsApp per fissare la data e l'orario ideali per te e i tuoi compagni di avventura.",
    },
    whatsappMessage:
      "Ciao Cavallo Natura! Vorrei prenotare l'esperienza Pineta e Spiaggia. Potete indicarmi le disponibilità?",
  },

  "per-esperti": {
    slug: "per-esperti",
    title: "Escursione per Esperti",
    subtitle: "Energia, tecnica e libertà in piena sintonia col cavallo",
    headerBadges: [{ label: "Cavalieri Esperti", tone: "wine" }],
    seo: {
      title: "Escursioni a Cavallo per Esperti e Galoppo in Spiaggia | Cavallo Natura",
      description:
        "Sei un cavaliere esperto? Vivi un'escursione dinamica a cavallo in Maremma tra sentieri tecnici in pineta e galoppate in sicurezza sulla spiaggia.",
      ogTitle: "Escursioni a Cavallo per Esperti e Galoppo in Spiaggia | Cavallo Natura",
      ogDescription:
        "Sei un cavaliere esperto? Vivi un'escursione dinamica a cavallo in Maremma tra sentieri tecnici in pineta e galoppate in sicurezza sulla spiaggia.",
    },
    teaser: {
      title: "Escursione per Esperti",
      subtitle: "Energia, tecnica e libertà in piena sintonia col cavallo",
      badge: "Avanzato",
    },
    heroImage: {
      src: "/esperienze-a-cavallo/per-esperti.jpeg",
      alt: "Cavaliere esperto al galoppo sulla spiaggia maremmana",
    },
    overview: {
      lead: "Un'avventura dinamica ed emozionante, progettata esclusivamente per chi possiede già piena padronanza delle tre andature.",
      paragraphs: [
        "Per i cavalieri esperti, la Maremma offre un terreno di equitazione di rara bellezza. Questo percorso valorizza la complicità e l'ascolto reciproco tra cavaliere e cavallo, alternando tratti di passo disteso a momenti più dinamici di trotto e galoppo.",
        "Attraverseremo i sentieri più suggestivi della pineta fino a raggiungere i tratti di litorale dove, in totale sicurezza e nel pieno rispetto del benessere dell'animale, potrai provare la sensazione unica di galoppare in riva al mare.",
      ],
    },
    details: [
      {
        icon: "compass",
        title: "Percorso",
        value: "Diaccia Botrona",
      },
      {
        icon: "clock",
        title: "Durata",
        value: "5–6 ore",
        description: "Intera giornata con sosta",
      },
      {
        icon: "shield",
        title: "Informazioni",
        items: [
          "Adatto a: Cavalieri Esperti",
          "Partenza: Cavallonatura – Marina di Grosseto",
          "Periodo: ottobre – marzo (ideale per avvistare uccelli migratori)",
          "Partecipanti: 2–4 persone",
          "Andature: passo, trotto, galoppo",
          "Età minima: 14 anni – max 90 kg",
        ],
      },
      ABBIGLIAMENTO_STANDARD,
    ],
    video: {
      src: "/videos/esperienze/per-esperti.mp4",
      poster: "/esperienze-a-cavallo/per-esperti.jpeg",
      caption:
        "Pura adrenalina ed eleganza: l'armonia del galoppo lungo il litorale della Maremma Toscana.",
      ariaLabel: "Video dell'esperienza Escursione per Esperti",
    },
    gallery: [
      { src: "/esperienze-a-cavallo/per-esperti.jpeg", alt: "Cavaliere esperto al galoppo lungo il litorale maremmano" },
      { src: "/gallery/per-esperti/2.jpeg", alt: "Binomio cavallo e cavaliere in piena sintonia durante un'uscita avanzata" },
      { src: "/gallery/in-riva-al-mare/in-riva-al-mare-2.jpg", alt: "Cavallo sulla battigia con il Mar Tirreno all'orizzonte" },
      { src: "/gallery/in-pineta/3.jpg", alt: "Sentiero tecnico nella Pineta del Tombolo percorso a cavallo" },
    ],
    cta: {
      eyebrow: "Escursione per Esperti",
      title: "Pronto a Salire in Sella?",
      text: "Prenota la tua esperienza in pochi istanti: scrivici su WhatsApp per verificare le disponibilità oppure richiedi informazioni. Ti aiuteremo a scegliere il cavallo e l'orario più adatti a te.",
    },
    whatsappMessage:
      "Ciao Cavallo Natura! Sono un cavaliere esperto e vorrei prenotare l'Escursione per Esperti. Potete indicarmi le disponibilità?",
  },
};

export const EXPERIENCE_SLUGS = Object.keys(EXPERIENCES_DETAILS) as ExperienceSlug[];

export function getExperienceBySlug(slug: string): ExperienceDetail | undefined {
  return (EXPERIENCE_SLUGS as string[]).includes(slug)
    ? EXPERIENCES_DETAILS[slug as ExperienceSlug]
    : undefined;
}
