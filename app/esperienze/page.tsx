import { Metadata } from "next";
import ExperienceCard, { ExperienceCardProps } from "@/components/ui/ExperienceCard";

// 1. SEO on-page: Esportazione dell'oggetto metadata
export const metadata: Metadata = {
  title: "Passeggiate a Cavallo a Marina di Grosseto | Esperienze Cavallo Natura",
  description: "Scopri le nostre escursioni a cavallo in Maremma: rilassanti passeggiate in riva al mare, avventure nella fresca pineta e percorsi dinamici per esperti.",
};

// 2. Struttura Dati Tipizzata: Array di esperienze
const experiencesData: ExperienceCardProps[] = [
  {
    title: "In riva al mare",
    description: "Una passeggiata emozionante lungo la battigia, ascoltando il rumore delle onde. Ideale per chi cerca un contatto profondo e suggestivo con la natura marina.",
    imageSrc: "/esperienze a cavallo/in riva al mare 2.jpg",
    imageAlt: "Cavaliere che passeggia a cavallo in riva al mare a Grosseto",
    href: "/esperienze/in-riva-al-mare",
    badge: "Più richiesta",
  },
  {
    title: "In pineta",
    description: "Immergiti nel silenzio e nei profumi della Pineta del Tombolo. Un percorso ombreggiato e rilassante, perfetto per ritrovare la pace interiore a contatto col bosco.",
    imageSrc: "/esperienze a cavallo/in pineta 2.jpg",
    imageAlt: "Escursione a cavallo nella fresca pineta della Maremma toscana",
    href: "/esperienze/in-pineta",
  },
  {
    title: "In pineta e spiaggia",
    description: "Il meglio della Maremma in un'unica escursione: attraversa i sentieri della fitta pineta per poi emergere sulla vasta spiaggia dorata della costa tirrenica.",
    imageSrc: "/esperienze a cavallo/pineta e spiaggia.png",
    imageAlt: "Transizione spettacolare dalla pineta alla spiaggia a cavallo",
    href: "/esperienze/in-pineta-e-spiaggia",
  },
  {
    title: "Per esperti",
    description: "Un'avventura dinamica pensata per cavalieri provetti. Galoppa in sicurezza sulla spiaggia e metti alla prova le tue abilità in totale sintonia con il cavallo.",
    imageSrc: "/esperienze a cavallo/Per esperti.jpeg",
    imageAlt: "Cavaliere esperto al galoppo veloce sulla spiaggia maremmana",
    href: "/esperienze/per-esperti",
    badge: "Avanzato",
  }
];

export default function EsperienzePage() {
  return (
    // 3. Layout e Sfondo: Sfondo var(--color-sand) e tag semantico <main>
    <main className="min-h-screen bg-[var(--color-sand)] pt-32 pb-32 md:py-40">
      
      {/* 4. Spaziatura 'Breathtaking': py-24, gap-12, ampi margini */}
      <section className="container mx-auto px-4 md:px-8">
        
        {/* Intestazione della pagina */}
        <header className="max-w-4xl mx-auto text-center mb-20 md:mb-24 flex flex-col gap-4">
          <span className="block font-sans text-lg md:text-xl text-[var(--color-wine)] font-medium tracking-widest uppercase">
            Vivi la Maremma in sella
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight">
            Le Nostre Esperienze
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-saddle)] leading-relaxed font-medium mt-4">
            Dal relax di una passeggiata ombreggiata in pineta, all'emozione unica di un'escursione in riva al mare. Scegli il percorso che più risuona con il tuo spirito e preparati a vivere un'avventura indimenticabile.
          </p>
        </header>

        {/* Griglia Responsive: 1 colonna mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {experiencesData.map((experience, index) => (
            // 5. Riutilizzo del componente ExperienceCard
            <ExperienceCard
              key={index}
              {...experience}
            />
          ))}
        </div>

      </section>
    </main>
  );
}
