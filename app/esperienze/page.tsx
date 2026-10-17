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
    title: "Pineta",
    description: "Un’esperienza rilassante tra la Pineta del Tombolo e un tratto di spiaggia libera (1 km). Con istruttore dedicato, adatta anche a principianti.",
    imageSrc: "/pagine%20servizi/foto-in-pineta.webp",
    imageAlt: "Passeggiata a cavallo nella Pineta del Tombolo e spiaggia libera - Cavallo Natura",
    href: "/esperienze/in-pineta",
    badge: "2 Ore",
  },
  {
    title: "Pineta e Spiaggia",
    description: "Vivi la magia di una rilassante passeggiata tra la Pineta del Tombolo e 2,5 km di spiaggia libera sulla battigia (2h 45m). Con istruttore dedicato, adatta anche a principianti.",
    imageSrc: "/pagine%20servizi/foto-in-pineta-e-spiaggia.webp",
    imageAlt: "Pineta e Spiaggia a cavallo tra pineta e battigia in riva al mare - Cavallo Natura",
    href: "/esperienze/in-pineta-e-spiaggia",
    badge: "2h 45m",
  },
  {
    title: "Per esperti",
    description: "Un'avventura dinamica pensata per cavalieri provetti. Galoppa in sicurezza sulla spiaggia e metti alla prova le tue abilità in totale sintonia con il cavallo.",
    imageSrc: "/esperienze a cavallo/Per esperti.jpeg",
    imageAlt: "Cavaliere esperto al galoppo veloce sulla spiaggia maremmana",
    href: "/esperienze/per-esperti",
    badge: "Avanzato",
  },
  {
    title: "I servizi D'elite",
    description: "",
    imageSrc: "/pagine%20servizi/servizio-elite-riquadro-.webp",
    imageAlt: "Servizi d'élite ed esperienze esclusive a cavallo - Cavallo Natura",
    href: "/servizi-elite",
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
