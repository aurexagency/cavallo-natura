import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ExperienceCard, { type ExperienceCardProps } from "@/components/ui/ExperienceCard";
import HeroSequence from "@/components/HeroSequence";

// ─── SEO On-Page ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Cavallo Natura | Centro Equestre Premium in Maremma Toscana",
  description: "Vivi un'esperienza autentica e indimenticabile a cavallo tra la pineta del Tombolo e le spiagge di Marina di Grosseto. Scopri le nostre passeggiate esclusive.",
};

// ─── Mock Dati Tipizzati per la Homepage ────────────────────────────────────
const homeExperiences: ExperienceCardProps[] = [
  {
    title: "Passeggiate in Pineta",
    description: "Cavalca tra i profumi e il fresco della pineta del Tombolo. Percorsi adatti a tutti i livelli, ideali per ritrovare la pace interiore a contatto con la natura.",
    imageSrc: "/home/passeggiata in pineta.png",
    imageAlt: "Gruppo di cavalieri in passeggiata nella pineta del Tombolo",
    href: "/esperienze/in-pineta",
    ctaLabel: "Scopri il percorso &rarr;",
  },
  {
    title: "Calici al Tramonto",
    description: "Un'esperienza d'élite esclusiva: raggiungi a cavallo la riva del mare e brinda al tramonto con il tuo drink preferito. Romanticismo puro in Maremma.",
    imageSrc: "/home/calici al tramonto.jpg",
    imageAlt: "Cavalieri con calici al tramonto sulla spiaggia",
    href: "/servizi-elite",
    badge: "Elite",
    ctaLabel: "Prenota l'esperienza &rarr;",
  },
  {
    title: "In Riva al Mare",
    description: "L'emozione indescrivibile di cavalcare lungo la battigia ascoltando il rumore delle onde, con le infinite spiagge di Marina di Grosseto a fare da sfondo.",
    imageSrc: "/home/in riva al mare.jpg",
    imageAlt: "Passeggiata a cavallo in riva al mare a Grosseto",
    href: "/esperienze/in-riva-al-mare",
    badge: "Più richiesta",
    ctaLabel: "Scopri il percorso &rarr;",
  },
];

export default function HomePage() {
  return (
    // <main> come container semantico principale
    <main className="w-full bg-[var(--color-sand)] overflow-x-hidden">
      
      {/* 
        1. STRUTTURA DEL FLUSSO:
        <HeroSequence /> posizionata come primissimo elemento assoluto (altezza viewport).
        Essendo collegata a GSAP (pin: true), bloccherà lo scroll della pagina intercettandolo
        e interpolando i frame nel canvas.
      */}
      <HeroSequence />

      {/* 
        2. STACCO "BREATHTAKING":
        Il container successivo incorpora pt-32 o pt-40. GSAP (alla fine del pin della Hero)
        rilascia lo scroll nativo. Il padding enorme garantisce che la sezione introduttiva 
        scenda rivelandosi in maniera aggraziata e distante dall'impatto forte del Canvas.
      */}
      <div className="relative z-10 w-full pt-32 md:pt-40">
        
        {/* ════════════════════════════════════════════════════════════
            INTRO SECTION (Design System e Colori Tailwind v4)
            ════════════════════════════════════════════════════════════ */}
        <section className="container mx-auto px-4 md:px-8 pb-24 md:pb-32">
          <article className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Divisore decorativo d'eleganza */}
            <div className="w-16 h-px bg-[var(--color-wine)] opacity-50 mb-8" aria-hidden="true" />

            <span className="block font-sans text-lg md:text-xl text-[var(--color-wine)] font-medium tracking-wide mb-4">
              La tua avventura inizia qui
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 text-[var(--color-wine)] leading-tight">
              Passeggiate a Cavallo in Maremma
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-12 text-[var(--color-saddle)] font-medium">
              Il nostro obiettivo è offrirti escursioni autentiche, sicure e nel pieno rispetto dell'ambiente e del benessere animale. Uniamo competenza tecnica ad un amore profondo per il territorio: ogni percorso è un invito a rallentare e riscoprire la natura incontaminata, tra pinete ombrose e spiagge dorate.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button as="link" href="/esperienze" variant="primary" size="lg">
                Esplora le Esperienze
              </Button>
              <Button as="link" href="/chi-siamo" variant="outline" size="lg">
                La Nostra Storia
              </Button>
            </div>
          </article>
        </section>

        {/* ════════════════════════════════════════════════════════════
            ESPERIENZE SECTION (Griglia Layout)
            ════════════════════════════════════════════════════════════ */}
        <section className="bg-[var(--color-cn-cream)] py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-8">
            
            {/* Intestazione Sezione */}
            <header className="text-center mb-16 md:mb-24 flex flex-col items-center">
              <span className="block font-sans text-sm md:text-base text-[var(--color-wine)] font-semibold tracking-widest uppercase mb-4">
                Cosa Offriamo
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-[var(--color-wine)] mb-6 leading-tight">
                Le Nostre Esperienze in Sella
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-[var(--color-saddle)] font-medium">
                Ogni uscita è un'avventura unica, calibrata sul tuo livello e sui tuoi desideri, sempre accompagnata dalla competenza e dalla passione dei nostri istruttori.
              </p>
            </header>

            {/* Layout a Griglia (Breathtaking gap) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {homeExperiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>

            {/* Call to action Finale */}
            <div className="text-center mt-16 md:mt-24">
              <Button as="link" href="/esperienze" variant="outline" size="lg">
                Vedi tutte le esperienze &rarr;
              </Button>
            </div>
          </div>
        </section>
        
      </div>
    </main>
  );
}
