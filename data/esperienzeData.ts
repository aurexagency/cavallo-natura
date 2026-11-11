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

/** Icone delle righe "scheda" di una proposta */
export type FactIcon = "pin" | "user" | "level" | "age" | "weight" | "group";

export interface ProposalFact {
  icon: FactIcon;
  label: string;
  value: string;
}

/** Dato in grande, a colpo d'occhio (es. "2 ore" / "Durata") */
export interface ProposalHighlight {
  value: string;
  label: string;
}

/**
 * Una passeggiata dentro una stessa esperienza. Se un'esperienza ha `proposals`,
 * la pagina le mostra una per sezione al posto dei riquadri generici.
 */
export interface ExperienceProposal {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  image: { src: string; alt: string };
  highlights: ProposalHighlight[];
  facts: ProposalFact[];
  whatsappMessage: string;
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
  /** Più passeggiate nella stessa esperienza (sezioni dedicate) */
  proposals?: {
    eyebrow: string;
    title: string;
    items: ExperienceProposal[];
    /** Titoli della sezione con i riquadri comuni a tutte le proposte */
    sharedEyebrow: string;
    sharedTitle: string;
  };
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
    headerBadges: [{ label: "Durata 1 Ora", tone: "wine" }],
    seo: {
      title: "Pineta | Cavallo Natura Maremma",
      description:
        "Vivi la magia di una passeggiata a passo di 1 ora nella Pineta del Tombolo a Marina di Grosseto. Accompagnati da un istruttore-guida, adatta anche a persone non esperte.",
      ogTitle: "Pineta | Cavallo Natura",
      ogDescription:
        "Vivi la magia di una passeggiata a cavallo immersa nella natura, a passo nella Pineta del Tombolo. Un’esperienza rilassante adatta anche a persone non esperte.",
    },
    teaser: {
      title: "Pineta",
      subtitle: "Un’esperienza rilassante nella Pineta del Tombolo",
      badge: "1 Ora",
    },
    heroImage: {
      src: "/pagine-servizi/foto-in-pineta.webp",
      alt: "Escursione guidata a cavallo nella pineta secolare di Marina di Grosseto",
    },
    overview: {
      lead: "Vivi la magia di una passeggiata a cavallo immersa nella natura, nella Pineta del Tombolo. Accompagnato da un istruttore-guida, potrai goderti un’esperienza rigenerante in un’atmosfera tranquilla e autentica.",
      paragraphs: [
        "I sentieri ombreggiati dai pini marittimi secolari offrono un riparo naturale e una sensazione di pace immediata. Il ritmo disteso della passeggiata, rigorosamente a passo e cadenzato dal passo sicuro dei nostri cavalli, permette di assaporare ogni profumo della macchia mediterranea.",
        "La presenza costante di una guida dedicata rende questa uscita perfetta sia per chi si avvicina all'equitazione per la prima volta, sia per chi desidera una parentesi di relax esclusivo in Maremma.",
      ],
    },
    details: [
      {
        icon: "compass",
        title: "Percorso",
        value: "Pineta del Tombolo",
      },
      {
        icon: "clock",
        title: "Durata",
        value: "1 ora",
      },
      {
        icon: "shield",
        title: "Informazioni",
        items: [
          "Passeggiata rigorosamente a passo nella Pineta del Tombolo.",
          "La passeggiata è adatta a persone non esperte.",
          "Bambini dai 14 anni compiuti.",
          "Sarete accompagnati da un istruttore-guida.",
          "Minimo 2 persone",
        ],
      },
      ABBIGLIAMENTO_STANDARD,
    ],
    video: {
      src: "/videos/esperienze/in-pineta.mp4",
      poster: "/pagine-servizi/foto-in-pineta.webp",
      caption:
        "Un assaggio della quiete che si respira cavalcando tra i sentieri della Pineta del Tombolo.",
      ariaLabel: "Video della passeggiata a passo di 1 ora nella Pineta del Tombolo",
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
      text: "Verifica subito la disponibilità dell'esperienza Pineta (1 ora): scrivici su WhatsApp per fissare il giorno e l'orario migliore per te.",
    },
    whatsappMessage:
      "Ciao Cavallo Natura! Vorrei prenotare l'esperienza Pineta. Potete indicarmi le disponibilità?",
  },

  "in-pineta-e-spiaggia": {
    slug: "in-pineta-e-spiaggia",
    title: "Pineta e Spiaggia",
    subtitle: "Due passeggiate private, un’unica emozione",
    headerBadges: [
      { label: "2 Proposte", tone: "wine" },
      { label: "Adatte anche a principianti", tone: "pine" },
    ],
    seo: {
      title: "Pineta e Spiaggia | Cavallo Natura Maremma",
      description:
        "Due passeggiate private a cavallo a Marina di Grosseto: 2 ore tra la Pineta del Tombolo e un tratto di spiaggia, oppure 2 ore e 45 minuti con 2,5 km di spiaggia libera sulla battigia. Istruttore dedicato, adatte anche a principianti.",
      ogTitle: "Pineta e Spiaggia | Cavallo Natura",
      ogDescription:
        "Scegli la tua passeggiata a cavallo tra la Pineta del Tombolo e il mare: 2 ore oppure 2 ore e 45 minuti in riva al mare, con istruttore dedicato.",
      ogImageAlt: "Pineta e Spiaggia a Marina di Grosseto",
    },
    teaser: {
      title: "In Pineta e Spiaggia",
      subtitle: "L'incontro magico tra il bosco e il mare",
      badge: "2 Proposte",
    },
    heroImage: {
      src: "/pagine-servizi/foto-in-pineta-e-spiaggia.webp",
      alt: "Passeggiata privata a cavallo tra la Pineta del Tombolo e la battigia in riva al mare",
    },
    overview: {
      lead: "Vivi la magia di una rilassante passeggiata a cavallo tra la Pineta del Tombolo e la spiaggia. Accompagnato da una guida esperta, potrai goderti un percorso immerso nella natura, in un’atmosfera tranquilla e rigenerante.",
      paragraphs: [
        "L'itinerario si sviluppa lungo i sentieri protetti e ombreggiati della secolare Pineta del Tombolo, dove il profumo inconfondibile di pini marittimi e macchia mediterranea scandisce i primi passi in sella, fino a schiudersi davanti allo spettacolo aperto del Mar Tirreno.",
        "Scegli la formula che preferisci: due ore con un tratto di spiaggia libera, oppure due ore e quarantacinque minuti con ben 2,5 km direttamente sulla battigia. In entrambi i casi un istruttore dedicato assicura serenità, supporto e cura a ciascun cavaliere.",
      ],
    },
    proposals: {
      eyebrow: "Scegli la tua passeggiata",
      title: "Due Modi di Vivere il Mare",
      sharedEyebrow: "Valido per entrambe le passeggiate",
      sharedTitle: "Prima di Partire",
      items: [
        {
          id: "passeggiata-2-ore",
          number: "Proposta 01",
          title: "Passeggiata privata a cavallo – 2 ore",
          tagline: "Un’esperienza rilassante, adatta anche a principianti",
          badge: "Pineta e spiaggia",
          image: {
            src: "/gallery/in-pineta/dsc03362.jpg",
            alt: "Cavaliere al passo tra i pini marittimi della Pineta del Tombolo",
          },
          highlights: [
            { value: "2 ore", label: "Durata" },
            { value: "1 km", label: "di spiaggia libera" },
          ],
          facts: [
            { icon: "pin", label: "Percorso", value: "Pineta e breve tratto di spiaggia (1 km di spiaggia libera)" },
            { icon: "user", label: "Guida", value: "Istruttore dedicato per l’intera durata" },
            { icon: "level", label: "Livello richiesto", value: "Adatto anche a chi è alla prima esperienza" },
            { icon: "age", label: "Età minima", value: "14 anni" },
            { icon: "weight", label: "Peso massimo", value: "90 kg" },
            { icon: "group", label: "Partecipanti ideali", value: "Coppie o piccoli gruppi di amici" },
          ],
          whatsappMessage:
            "Ciao Cavallo Natura! Vorrei prenotare la passeggiata privata da 2 ore (pineta e breve tratto di spiaggia). Potete indicarmi le disponibilità?",
        },
        {
          id: "passeggiata-2-ore-45-minuti",
          number: "Proposta 02",
          title: "Passeggiata privata a cavallo – 2 ore e 45 minuti, in riva al mare",
          tagline: "Un’esperienza unica, adatta anche a principianti",
          badge: "Più mare",
          image: {
            src: "/gallery/in-riva-al-mare/dsc04964.jpg",
            alt: "Binomio a cavallo in riva al mare al tramonto",
          },
          highlights: [
            { value: "2 h 45", label: "Durata" },
            { value: "2,5 km", label: "sulla battigia" },
            { value: "20 set – 20 mag", label: "Periodo" },
          ],
          facts: [
            { icon: "pin", label: "Percorso", value: "Pineta e 2,5 km di spiaggia libera, da percorrere sulla battigia" },
            { icon: "user", label: "Guida", value: "Istruttore dedicato per l’intera durata" },
            { icon: "level", label: "Livello richiesto", value: "Adatto anche a chi è alla prima esperienza" },
            { icon: "age", label: "Età minima", value: "14 anni" },
            { icon: "weight", label: "Peso massimo", value: "90 kg" },
            { icon: "group", label: "Partecipanti ideali", value: "Coppie o piccoli gruppi di amici" },
          ],
          whatsappMessage:
            "Ciao Cavallo Natura! Vorrei prenotare la passeggiata privata da 2 ore e 45 minuti in riva al mare. Potete indicarmi le disponibilità?",
        },
      ],
    },
    details: [ABBIGLIAMENTO_STANDARD],
    video: {
      src: "/videos/esperienze/in-pineta-e-spiaggia.mp4",
      poster: "/pagine-servizi/foto-in-pineta-e-spiaggia.webp",
      caption:
        "L'emozione autentica di cavalcare lungo la battigia, accompagnati dal respiro del mare e dalla brezza marina.",
      ariaLabel: "Video delle passeggiate a cavallo tra la pineta e il mare",
    },
    gallery: [
      { src: "/gallery/in-riva-al-mare/dsc04792.jpg", alt: "Passeggiata a cavallo in riva al mare con la brezza marina" },
      { src: "/gallery/in-riva-al-mare/dsc05294.jpg", alt: "Emozione unica di cavalcare a pochi passi dalle onde" },
      { src: "/gallery/in-riva-al-mare/dsc05390.jpg", alt: "Momento di totale libertà a cavallo sulla spiaggia" },
      { src: "/gallery/in-riva-al-mare/dsc06470.jpg", alt: "Colori caldi del tramonto sulla spiaggia di Marina di Grosseto" },
    ],
    cta: {
      eyebrow: "Prenotazione Rapida",
      title: "Pronto a Vivere la Magia in Riva al Mare?",
      text: "Verifica subito la disponibilità: scrivici su WhatsApp e scegli tra la passeggiata di 2 ore e quella di 2 ore e 45 minuti. Fisseremo insieme la data e l'orario ideali per te e i tuoi compagni di avventura.",
    },
    whatsappMessage:
      "Ciao Cavallo Natura! Vorrei prenotare una passeggiata Pineta e Spiaggia. Potete indicarmi le disponibilità e le differenze tra le due proposte?",
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
