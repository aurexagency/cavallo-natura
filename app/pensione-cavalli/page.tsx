import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';

// 1. SEO on-page: Metadata ottimizzato per ricerca locale (B2B e proprietari)
export const metadata: Metadata = {
  title: 'Pensione Cavalli a Grosseto | Maneggio e Scuderia in Maremma',
  description: 'Scopri il servizio di pensione cavalli di Cavallo Natura. Il tuo cavallo trattato come in famiglia: ampi box, paddock nel verde, alimentazione personalizzata e assistenza H24.',
};

// 2. Struttura Dati Tipizzata per i Core Services
interface PensionService {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const pensionServices: PensionService[] = [
  {
    id: "box",
    icon: "✨", 
    title: "Box Spaziosi in Legno",
    description: "Ampi box in legno naturale, perfettamente areati e costantemente sanificati, progettati per garantire al tuo cavallo un riposo sereno, caldo e protetto."
  },
  {
    id: "paddock",
    icon: "🌿",
    title: "Ampi Paddock all'Aperto",
    description: "Grandi spazi verdi dove i cavalli possono muoversi liberamente in totale sicurezza, socializzare in branco ed esprimere appieno la loro etologia."
  },
  {
    id: "alimentazione",
    icon: "🌾",
    title: "Alimentazione Personalizzata",
    description: "Fieni di primissima qualità e mangimi altamente selezionati, calibrati sulle specifiche esigenze nutrizionali e metaboliche di ogni singolo ospite."
  },
  {
    id: "assistenza",
    icon: "🤝",
    title: "Assistenza e Sorveglianza H24",
    description: "La tranquillità di sapere il tuo cavallo sempre monitorato. Personale qualificato vive in struttura per garantire un intervento tempestivo ad ogni necessità."
  }
];

export default function PensioneCavalliPage() {
  return (
    // Architettura Semantica e Sfondo Brand
    <main className="min-h-screen bg-[var(--color-sand)] pt-32 overflow-x-hidden flex flex-col">
      
      {/* HERO SECTION: Intro rassicurante e accogliente */}
      <section className="container mx-auto px-4 md:px-8 py-20 md:py-32 max-w-5xl text-center">
        <span className="block font-sans text-sm md:text-base text-[var(--color-wine)] mb-6 font-semibold tracking-[0.2em] uppercase">
          La Casa per il Tuo Cavallo
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight mb-8">
          Pensione Scuderia
        </h1>
        <p className="text-xl md:text-2xl text-[var(--color-saddle)] leading-relaxed font-light max-w-4xl mx-auto">
          Sappiamo bene che il tuo cavallo è un membro della famiglia. Per questo abbiamo creato un rifugio professionale, immerso nella quiete della Maremma, dove il suo benessere fisico e la sua serenità psicologica sono la nostra assoluta priorità.
        </p>
      </section>

      {/* MEDIA PERFORMANCE: Immagine evocativa ad alte performance (Zero CLS) */}
      <section className="container mx-auto px-4 md:px-8 pb-24 md:pb-32">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[var(--radius-card)] overflow-hidden shadow-2xl">
          <Image
            src="/pensione per cavalli/pensione per cavalli.jpg" // Immagine reale inserita
            alt="Splendido cavallo sereno che pascola in un ampio paddock verde in Maremma"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority // Priorità alta per l'immagine hero sottostante
          />
        </div>
      </section>

      {/* CORE SERVICES: Griglia dei servizi inclusi */}
      <section className="bg-[var(--color-cn-cream)] py-24 md:py-40">
        <div className="container mx-auto px-4 md:px-8">
          
          <header className="text-center mb-16 md:mb-24">
            <span className="block font-sans text-lg text-[var(--color-wine)] mb-4 font-medium tracking-wide">
              I Servizi Inclusi
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-[var(--color-wine)] mb-6 leading-tight">
              Tutto il necessario per la sua Felicità
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
            {pensionServices.map((service) => (
              <article 
                key={service.id} 
                className="bg-[var(--color-sand)] p-10 md:p-12 rounded-[var(--radius-card)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-6"
              >
                <div className="text-5xl md:text-6xl drop-shadow-sm mb-2" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[var(--color-wine)] font-medium">
                  {service.title}
                </h3>
                <p className="text-[var(--color-saddle)] text-lg leading-relaxed font-medium">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEZIONE FILOSOFIA: Blocco ampio e arioso dedicato all'etica */}
      <section className="py-24 md:py-40 relative">
        <div className="container mx-auto px-4 md:px-8">
          <article className="max-w-4xl mx-auto flex flex-col gap-10 md:gap-12">
            <header className="text-center">
              <span className="text-[var(--color-wine)] font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
                Etica e Rispetto
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-[var(--color-wine)] leading-tight">
                Una Vita da Cavallo
              </h2>
            </header>
            
            <div className="text-[var(--color-saddle)] text-lg md:text-xl leading-relaxed flex flex-col gap-8 text-left md:text-justify font-medium">
              <p>
                Alla base del nostro approccio c’è il <strong className="text-[var(--color-pine)]">profondo rispetto per la natura etologica del cavallo</strong>. Crediamo fermamente che spazi puliti, ampi e un ritmo di vita disteso siano essenziali per garantire l'equilibrio mentale e la salute fisica del tuo compagno.
              </p>
              <p>
                Nella nostra scuderia, promuoviamo la vita sociale nel branco. I cavalli hanno la possibilità di interagire, muoversi in ampi spazi verdi e vivere un'esistenza serena e stimolante. Trattiamo ogni ospite con la stessa incondizionata devozione, attenzione e amore che riserveremmo ai nostri personali animali, stringendo legami basati sulla fiducia.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CALL TO ACTION FINALE (bg-pine e testo contrasto) */}
      <section className="bg-[var(--color-pine)] py-24 md:py-32 text-center text-[var(--color-cn-cream)]">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl flex flex-col items-center gap-10">
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-white">
            Vieni a Conoscerci
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--color-cn-cream)]/90">
            Saremo felici di accoglierti nella nostra struttura per mostrarti le scuderie, farti passeggiare nei paddock e farti respirare in prima persona l'atmosfera autentica e familiare di Cavallo Natura.
          </p>
          
          <div className="mt-6">
            {/* Utilizzo del Button globale forzando lo stile chiaro (outline su sfondo scuro) per massima leggibilità */}
            <Button 
              as="link" 
              href="/contatti" 
              variant="outline" 
              className="!border-white !text-white hover:!bg-white hover:!text-[var(--color-pine)] text-sm md:text-base px-8 py-4"
            >
              FISSA UNA VISITA IN STRUTTURA
            </Button>
          </div>
        </div>
      </section>
      
    </main>
  );
}
