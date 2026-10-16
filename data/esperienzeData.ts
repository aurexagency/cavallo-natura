// ─── Types ────────────────────────────────────────────────────────────────────

export interface ExperienceFeatureSpecs {
  percorso: {
    title: string;
    value?: string;
    description?: string;
    highlights?: string[];
  };
  durata: {
    title: string;
    value: string;
    description?: string;
  };
  informazioniUtili: {
    title: string;
    items: string[];
  };
  abbigliamentoConsigliato: {
    title: string;
    items: string[];
  };
}

export type ExperienceSlug = "in-pineta" | "in-pineta-e-spiaggia" | "per-esperti";

export interface ExperienceDetail {
  slug: ExperienceSlug;
  title: string;
  subtitle: string;
  badge?: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: {
    src: string;
    alt: string;
  };
  overview: {
    lead: string;
    paragraphs: string[];
  };
  specs: ExperienceFeatureSpecs;
  video: {
    src: string;
    poster: string;
    caption: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
  whatsappMessage: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const EXPERIENCES_DETAILS: Record<ExperienceSlug, ExperienceDetail> = {
  "in-pineta": {
    slug: "in-pineta",
    title: "Passeggiata in Pineta",
    subtitle: "Il respiro lento del bosco maremmano",
    badge: "Adatto a Tutti",
    seoTitle: "Passeggiata a Cavallo in Pineta a Marina di Grosseto | Cavallo Natura",
    seoDescription:
      "Scopri l'escursione a cavallo nella Pineta del Tombolo a Marina di Grosseto. Un percorso ombreggiato, rilassante e sicuro, ideale anche per principianti.",
    heroImage: {
      src: "/esperienze a cavallo/in pineta 2.jpg",
      alt: "Escursione a cavallo nella fresca Pineta del Tombolo in Maremma",
    },
    overview: {
      lead: "Immergiti nel silenzio rigenerante e nei profumi balsamici della storica Pineta del Tombolo.",
      paragraphs: [
        "Questa esperienza è pensata per chi desidera staccare dalla frenesia quotidiana e ritrovare un ritmo autentico, camminando al passo cadenzato del cavallo lungo sentieri sabbiosi immersi nel verde.",
        "Sotto le chiome dei pini marittimi secolari, la luce filtra creando un'atmosfera intima e rilassante. Grazie alla tranquillità dei nostri cavalli e alla presenza costante delle guide, il percorso è perfetto sia per chi sale in sella per la prima volta, sia per chi cerca una passeggiata contemplativa nella natura.",
      ],
    },
    specs: {
      percorso: {
        title: "Percorso",
        value: "Pineta del Tombolo",
      },
      durata: {
        title: "Durata",
        value: "1 ora",
      },
      informazioniUtili: {
        title: "Informazioni",
        items: [
          "Passeggiata rigorosamente a passo nella Pineta del Tombolo.",
          "La passeggiata è adatta a persone non esperte.",
          "Bambini dai 14 anni compiuti.",
          "Sarete accompagnati da un istruttore-guida.",
          "Minimo 2 persone",
        ],
      },
      abbigliamentoConsigliato: {
        title: "Abbigliamento consigliato",
        items: [
          "Pantaloni lunghi, scarpe chiuse.",
          "Peso massimo 90kg.",
          "Il Centro mette a disposizione i cap obbligatori per tutti.",
        ],
      },
    },
    video: {
      src: "/videos/esperienze/in-pineta.mp4",
      poster: "/esperienze a cavallo/in pineta 2.jpg",
      caption:
        "Un assaggio della quiete che si respira cavalcando tra i sentieri della Pineta del Tombolo.",
    },
    gallery: [
      { src: "/gallery/in pineta/DSC03362.jpg", alt: "Cavalli al passo tra i pini marittimi della Pineta del Tombolo" },
      { src: "/gallery/in pineta/DSC04167.jpg", alt: "Luce filtrata tra i pini marittimi durante la passeggiata a cavallo" },
      { src: "/gallery/in pineta/DSC04382.jpg", alt: "Gruppo di cavalieri immersi nella macchia mediterranea maremmana" },
      { src: "/gallery/in pineta/DSC04620.jpg", alt: "Dettaglio di un cavallo tranquillo all'ombra della pineta" },
    ],
    whatsappMessage:
      "Ciao Cavallo Natura! Vorrei prenotare la Passeggiata in Pineta. Potete indicarmi le disponibilità?",
  },

  "in-pineta-e-spiaggia": {
    slug: "in-pineta-e-spiaggia",
    title: "In Pineta e Spiaggia",
    subtitle: "L'incontro magico tra il bosco e il mare",
    badge: "Più Richiesto",
    seoTitle: "Passeggiata a Cavallo in Pineta e Spiaggia in Maremma | Cavallo Natura",
    seoDescription:
      "Vivi l'emozione unica di cavalcare dalla fresca Pineta del Tombolo fino alla spiaggia dorata di Marina di Grosseto, a pochi passi dalle onde del mare.",
    heroImage: {
      src: "/esperienze a cavallo/pineta e spiaggia.png",
      alt: "Cavalieri che passano dalla pineta alla spiaggia dorata della Maremma",
    },
    overview: {
      lead: "Il meglio della Maremma Toscana racchiuso in un'unica, indimenticabile escursione tra terra e mare.",
      paragraphs: [
        "Il viaggio inizia nella quiete ovattata della Pineta del Tombolo, dove il profumo di resina e mirto accompagna i primi minuti in sella. Passo dopo passo, il bosco si dirada lasciando spazio alle dune costiere e al suono sempre più vicino delle onde.",
        "Emergere dai sentieri alberati sull'ampia spiaggia dorata della costa tirrenica regala un'emozione impareggiabile: cavalcare lungo la battigia, con la brezza marina sul viso e l'orizzonte aperto, trasforma questa passeggiata in un ricordo indelebile.",
      ],
    },
    specs: {
      percorso: {
        title: "Percorso",
        value: "Pineta del Tombolo e spiaggia",
      },
      durata: {
        title: "Durata",
        value: "2 ore",
      },
      informazioniUtili: {
        title: "Informazioni",
        items: [
          "Escursione nella Pineta del Tombolo, Canale San Leopoldo, zona retrodunale, dune e spiaggia.",
          "La passeggiata è adatta a persone non esperte",
          "La coppia è accompagnata da un istruttore-guida",
          "Bambini dai 14 anni compiuti.",
          "Minimo 1 massimo 8 persone",
        ],
      },
      abbigliamentoConsigliato: {
        title: "Abbigliamento consigliato",
        items: [
          "Pantaloni lunghi, scarpe chiuse.",
          "Peso massimo 90kg.",
          "Il Centro mette a disposizione i cap obbligatori per tutti.",
        ],
      },
    },
    video: {
      src: "/videos/esperienze/in-pineta-e-spiaggia.mp4",
      poster: "/esperienze a cavallo/pineta e spiaggia.png",
      caption:
        "Dal verde intenso della pineta all'azzurro del Mar Tirreno: scopri l'emozione della nostra escursione più iconica.",
    },
    gallery: [
      { src: "/gallery/in riva al mare/DSC04792.jpg", alt: "Passeggiata a cavallo in riva al mare con la brezza marina" },
      { src: "/gallery/in riva al mare/DSC04964.jpg", alt: "Binomio a cavallo in riva al mare al tramonto" },
      { src: "/gallery/in riva al mare/DSC05390.jpg", alt: "Momento di totale libertà a cavallo sulla spiaggia" },
      { src: "/gallery/in riva al mare/DSC06470.jpg", alt: "Colori caldi del tramonto sulla spiaggia di Marina di Grosseto" },
    ],
    whatsappMessage:
      "Ciao Cavallo Natura! Vorrei prenotare l'escursione In Pineta e Spiaggia. Potete indicarmi le disponibilità?",
  },

  "per-esperti": {
    slug: "per-esperti",
    title: "Escursione per Esperti",
    subtitle: "Energia, tecnica e libertà in piena sintonia col cavallo",
    badge: "Cavalieri Esperti",
    seoTitle: "Escursioni a Cavallo per Esperti e Galoppo in Spiaggia | Cavallo Natura",
    seoDescription:
      "Sei un cavaliere esperto? Vivi un'escursione dinamica a cavallo in Maremma tra sentieri tecnici in pineta e galoppate in sicurezza sulla spiaggia.",
    heroImage: {
      src: "/esperienze a cavallo/Per esperti.jpeg",
      alt: "Cavaliere esperto al galoppo sulla spiaggia maremmana",
    },
    overview: {
      lead: "Un'avventura dinamica ed emozionante, progettata esclusivamente per chi possiede già piena padronanza delle tre andature.",
      paragraphs: [
        "Per i cavalieri esperti, la Maremma offre un terreno di equitazione di rara bellezza. Questo percorso valorizza la complicità e l'ascolto reciproco tra cavaliere e cavallo, alternando tratti di passo disteso a momenti più dinamici di trotto e galoppo.",
        "Attraverseremo i sentieri più suggestivi della pineta fino a raggiungere i tratti di litorale dove, in totale sicurezza e nel pieno rispetto del benessere dell'animale, potrai provare la sensazione unica di galoppare in riva al mare.",
      ],
    },
    specs: {
      percorso: {
        title: "Percorso",
        value: "Diaccia Botrona",
      },
      durata: {
        title: "Durata",
        value: "5–6 ore",
        description: "Intera giornata con sosta",
      },
      informazioniUtili: {
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
      abbigliamentoConsigliato: {
        title: "Abbigliamento consigliato",
        items: [
          "Pantaloni lunghi, scarpe chiuse.",
          "Peso massimo 90kg.",
          "Il Centro mette a disposizione i cap obbligatori per tutti.",
        ],
      },
    },
    video: {
      src: "/videos/esperienze/per-esperti.mp4",
      poster: "/esperienze a cavallo/Per esperti.jpeg",
      caption:
        "Pura adrenalina ed eleganza: l'armonia del galoppo lungo il litorale della Maremma Toscana.",
    },
    gallery: [
      { src: "/esperienze a cavallo/Per esperti.jpeg", alt: "Cavaliere esperto al galoppo lungo il litorale maremmano" },
      { src: "/gallery/per esperti/2.jpeg", alt: "Binomio cavallo e cavaliere in piena sintonia durante un'uscita avanzata" },
      { src: "/gallery/in riva al mare/in riva al mare 2.jpg", alt: "Cavallo sulla battigia con il Mar Tirreno all'orizzonte" },
      { src: "/gallery/in pineta/3.jpg", alt: "Sentiero tecnico nella Pineta del Tombolo percorso a cavallo" },
    ],
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
