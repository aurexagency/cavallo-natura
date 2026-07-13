import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';

// 1. SEO on-page: Metadata mirati a un pubblico high-ticket
export const metadata: Metadata = {
  title: 'Servizi Elite a Cavallo: Proposte di Matrimonio e Shooting in Maremma',
  description: 'Scopri i servizi esclusivi di Cavallo Natura: calici al tramonto in spiaggia, allestimenti romantici per proposte di matrimonio e shooting fotografici professionali.',
};

// 2. Dati statici tipizzati dei servizi Elite
interface EliteService {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  href: string;
}

const eliteServices: EliteService[] = [
  {
    id: "calici-al-tramonto",
    title: "Calici al Tramonto",
    description: "Concediti il lusso di un brindisi esclusivo in riva al mare mentre il sole scompare all'orizzonte. Un'esperienza sensoriale unica dove il profumo della salsedine, la maestosità dei nostri cavalli e l'eccellenza dei vini toscani si fondono in un momento di pura magia.",
    imageSrc: "/servizi d'elite/calici al tramonto.jpg",
    imageAlt: "Brindisi elegante al tramonto in spiaggia con cavalli sullo sfondo",
    ctaText: "Richiedi disponibilità",
    href: "/contatti?servizio=calici-tramonto"
  },
  {
    id: "proposte-matrimonio",
    title: "Proposte di Matrimonio",
    description: "Sorprendi chi ami con una dichiarazione indimenticabile. Curiamo ogni minimo dettaglio, dagli allestimenti romantici e riservati sulla sabbia, fino ai percorsi personalizzati al passo, per fare da cornice perfetta al vostro 'Sì' immersi nell'incanto della Maremma.",
    imageSrc: "/servizi d'elite/matrimonio.jpg",
    imageAlt: "Romantica e lussuosa proposta di matrimonio in spiaggia al tramonto",
    ctaText: "Organizza il tuo momento",
    href: "/contatti?servizio=matrimonio"
  },
  {
    id: "servizi-fotografici",
    title: "Servizi Fotografici",
    description: "Cattura l'essenza dell'eleganza attraverso l'obiettivo. Mettiamo a disposizione i nostri magnifici esemplari per shooting professionali, fashion editorial e ritratti d'autore, sfruttando la luce impareggiabile e gli scenari mozzafiato della costa tirrenica.",
    imageSrc: "/servizi d'elite/servizio fotografico.jpg",
    imageAlt: "Shooting fotografico professionale con cavallo andaluso sulla spiaggia",
    ctaText: "Richiedi un preventivo",
    href: "/contatti?servizio=shooting"
  }
];

export default function ServiziElitePage() {
  return (
    // Architettura Semantica HTML5 e Sfondo principale
    <main className="min-h-screen bg-[var(--color-sand)] pt-32 overflow-x-hidden">
      
      {/* Intestazione della Pagina Elite */}
      <header className="container mx-auto px-4 md:px-8 py-20 md:py-32 text-center max-w-5xl">
        <span className="block font-sans text-sm md:text-base text-[var(--color-wine)] mb-6 font-semibold tracking-[0.3em] uppercase">
          Collezione Esclusiva
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight mb-8">
          Servizi Elite
        </h1>
        <p className="text-xl md:text-2xl text-[var(--color-saddle)] leading-relaxed font-light max-w-3xl mx-auto">
          Un connubio perfetto tra natura selvaggia ed eleganza senza tempo. Dedicato a chi ricerca istanti straordinari, curati in ogni singolo dettaglio.
        </p>
      </header>

      {/* 3. Layout Editoriale "a Zigzag" con ampi respiri */}
      <div className="flex flex-col">
        {eliteServices.map((service, index) => {
          // Logica per alternare il layout (Immagine a Dx vs Immagine a Sx)
          const isEven = index % 2 === 0;
          
          // Contrasti di Sfondo: Alternanza tra Sand e Cream per staccare le sezioni
          const bgColor = isEven ? 'bg-[var(--color-cn-cream)]' : 'bg-[var(--color-sand)]';

          return (
            <section key={service.id} className={`${bgColor} py-24 md:py-40 lg:py-48`}>
              <div className="container mx-auto px-4 md:px-8">
                
                {/* 
                  Spaziatura Breathtaking: gap-16 su tablet, gap-32 su desktop 
                  Inversione dell'ordine flessibile con flex-row-reverse 
                */}
                <article className={`flex flex-col gap-16 lg:gap-32 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Blocco Testuale Elegante */}
                  <div className="flex-1 flex flex-col justify-center max-w-2xl lg:max-w-xl w-full">
                    
                    {/* Elemento Tipografico Decorativo */}
                    <span className="text-[var(--color-wine)] font-semibold tracking-widest uppercase text-sm mb-8 flex items-center gap-4">
                      <span className="w-12 h-px bg-[var(--color-wine)] opacity-50 block"></span>
                      Esperienza n.{index + 1}
                    </span>
                    
                    <h2 className="font-display text-4xl md:text-6xl text-[var(--color-wine)] mb-8 leading-tight">
                      {service.title}
                    </h2>
                    
                    <p className="text-[var(--color-saddle)] text-lg md:text-xl leading-relaxed mb-14 font-medium text-justify md:text-left">
                      {service.description}
                    </p>
                    
                    {/* Integrazione Componente Call-To-Action */}
                    <div className="self-start">
                      <Button as="link" href={service.href} variant="outline" size="lg">
                        {service.ctaText}
                      </Button>
                    </div>
                  </div>

                  {/* 
                    Blocco Immagine (Performance Media)
                    Utilizzo di aspect-[4/5] per un vibe da "Fashion Editorial"
                  */}
                  <div className="flex-1 w-full max-w-2xl lg:max-w-none">
                    <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-2xl">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[1.5s] hover:scale-105 ease-out"
                      />
                      {/* Velo scuro leggerissimo per esaltare il luxury feel dell'immagine */}
                      <div className="absolute inset-0 bg-black/10 pointer-events-none mix-blend-overlay"></div>
                    </div>
                  </div>

                </article>
              </div>
            </section>
          );
        })}
      </div>
      
    </main>
  );
}
