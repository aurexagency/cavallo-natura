import { Metadata } from 'next';
import Button from '@/components/ui/Button';

// 1. Architettura Semantica e SEO: Esportazione Metadata nativo
export const metadata: Metadata = {
  title: 'Chi Siamo | Centro Equestre Grosseto | Cavallo Natura',
  description: 'Cavallo Natura è un centro equestre immerso nella Maremma toscana vicino Grosseto. Una famiglia, una passione per i cavalli e per la natura incontaminata.',
};

export default function ChiSiamoPage() {
  return (
    // 2. Token Colore e Spaziatura: Sfondo var(--color-sand), ampio respiro
    <div className="min-h-screen bg-[var(--color-sand)] pt-32 pb-32 overflow-x-hidden flex flex-col gap-24 md:gap-40">
      
      {/* SEZIONE 1: Una famiglia, una passione */}
      <section className="container mx-auto px-4 md:px-8">
        <article className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-10">
          <header>
            <span className="block font-sans text-lg md:text-xl text-[var(--color-wine)] mb-3 font-medium tracking-wide">
              Una famiglia, una passione:
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight">
              Quella per i cavalli e per la Maremma.
            </h1>
          </header>
          
          <div className="text-[var(--color-saddle)] text-lg md:text-xl leading-relaxed flex flex-col gap-6">
            <p>
              <strong>Cavallo Natura</strong> è gestito da una famiglia che ha fatto dell'amore per i cavalli e per la Maremma uno stile di vita. Ogni membro porta il proprio contributo: dalla cura degli animali alla conduzione delle passeggiate, dall'ospitalità al rispetto per l'ambiente.
            </p>
            <p>
              <strong>L'atmosfera familiare si riflette in ogni dettaglio:</strong> accoglienza semplice, attenzione personalizzata, relazioni autentiche.
            </p>
          </div>
          
          {/* Integrazione Componente Globale Button */}
          <div className="mt-4">
            <Button as="link" href="/contatti" variant="outline">
              RICHIEDI INFORMAZIONI &rarr;
            </Button>
          </div>
        </article>
      </section>

      {/* SEZIONE 2: Centro Equestre Grosseto (Sfondo a contrasto crema) */}
      <section className="bg-[var(--color-cn-cream)] py-24 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <article className="max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12">
            
            {/* Divisore decorativo (l'icona andrà reinserita quando sarà disponibile il file) */}
            <div className="w-16 h-px bg-[var(--color-wine)] opacity-50 mb-2" aria-hidden="true" />
            
            <header className="flex flex-col items-center gap-3 w-full">
              <span className="block font-sans text-lg md:text-xl text-[var(--color-wine)] font-medium tracking-wide">
                Immersi nella natura, guidati dalla passione
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight">
                Centro Equestre Grosseto
              </h2>
            </header>

            <div className="text-[var(--color-saddle)] text-lg md:text-xl leading-relaxed md:text-center text-justify mt-2 max-w-4xl">
              <p>
                <strong>Cavallo Natura</strong> è un centro equestre immerso nel cuore della Maremma toscana vicino Grosseto, nato dalla passione di una famiglia per il mondo equestre e per la natura incontaminata. A pochi passi dalla splendida <strong className="text-[var(--color-pine)]">Pineta del Tombolo</strong> e dalle ampie spiagge della costa tirrenica, il nostro maneggio offre un'esperienza unica di contatto autentico con la natura e con i cavalli.
              </p>
            </div>

            <div className="mt-4">
              <Button as="link" href="/contatti" variant="outline">
                RICHIEDI INFORMAZIONI &rarr;
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* SEZIONE 3: Filosofia e approccio */}
      <section className="container mx-auto px-4 md:px-8">
        <article className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-10">
          <header>
            <span className="block font-sans text-lg md:text-xl text-[var(--color-wine)] mb-3 font-medium tracking-wide">
              Un'esperienza lenta, autentica
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight">
              Filosofia e approccio:
            </h2>
          </header>
          
          <div className="text-[var(--color-saddle)] text-lg md:text-xl leading-relaxed flex flex-col gap-6">
            <p>
              Il centro promuove <strong className="text-[var(--color-pine)]">una filosofia lenta e naturale</strong>: ogni attività viene svolta nel pieno rispetto dei ritmi dell'animale e della persona. I cavalli vivono liberi nei paddock, socializzano in branco e si relazionano con l'essere umano in maniera equilibrata e senza costrizioni.
            </p>
            <p>
              Anche le escursioni sono pensate per offrire esperienze rilassanti, a passo tranquillo, adatte anche a chi è alla prima esperienza. <strong>Le guide</strong> accompagnano con attenzione, trasmettendo rispetto, fiducia e conoscenza del territorio.
            </p>
          </div>
          
          <div className="mt-4">
            <Button as="link" href="/prenotazioni" variant="outline">
              PRENOTA LA TUA PASSEGGIATA
            </Button>
          </div>
        </article>
      </section>

      {/* SEZIONE 4: Un rifugio di bellezza autentica */}
      <section className="bg-[var(--color-cn-cream)] py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-8">
          <article className="max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
            <div className="max-w-4xl flex flex-col gap-8 md:gap-10">
              <header>
                <span className="block font-sans text-lg md:text-xl text-[var(--color-wine)] mb-3 font-medium tracking-wide">
                  Qui dove natura, persone e animali si incontrano
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-[var(--color-wine)] leading-tight">
                  Un rifugio di bellezza autentica
                </h2>
              </header>
              
              <div className="text-[var(--color-saddle)] text-lg md:text-xl leading-relaxed flex flex-col gap-6">
                <p>
                  <strong className="text-[var(--color-pine)]">Nel cuore della Maremma, tra boschi, colline e scorci di mare</strong>, Cavallo Natura è più di un centro equestre: è un luogo dove le persone possono riscoprire il contatto con la natura, ascoltare il silenzio, camminare a fianco dei cavalli e ritrovare un ritmo più umano.
                </p>
                <p>
                  <strong>È un invito a rallentare, ad osservare, a rispettare.</strong> A lasciarsi guidare non solo dal cavallo, ma anche dalla bellezza semplice e potente di un territorio che ha ancora molto da raccontare.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

    </div>
  );
}
