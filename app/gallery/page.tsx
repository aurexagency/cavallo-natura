import { Metadata } from 'next';
import GalleryCarousel from '@/components/ui/GalleryCarousel';

// Metadati per la SEO (regola HTML5_AND_SEO.MD)
export const metadata: Metadata = {
  title: 'La Nostra Gallery | Cavallo Natura',
  description: 'Scopri le meravigliose esperienze a cavallo in Maremma: passeggiate in spiaggia, escursioni in pineta, calici al tramonto e molto altro.',
};

interface GalleryExperience {
  id: string;
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}

// Dati mock tipizzati per le 7 esperienze richieste
const galleryData: GalleryExperience[] = [
  {
    id: 'in-riva-al-mare',
    title: 'In Riva al Mare',
    images: [
      { src: '/gallery/in riva al mare/in riva al mare 1.jpg', alt: 'Passeggiata a cavallo lungo la riva del mare in Maremma' },
      { src: '/gallery/in riva al mare/in riva al mare 2.jpg', alt: 'Cavalli che camminano sulla sabbia dorata con le onde' },
      { src: '/gallery/in riva al mare/in riva al mare 3.jpg', alt: 'Gruppo di cavalieri felici in spiaggia' },
      { src: '/gallery/in riva al mare/in riva al mare 4.jpg', alt: 'Dettaglio degli zoccoli del cavallo bagnati dal mare' },
    ]
  },
  {
    id: 'in-pineta',
    title: 'In Pineta',
    images: [
      { src: '/gallery/in pineta/1.jpg', alt: 'Escursione a cavallo nella rigogliosa pineta del Tombolo' },
      { src: '/gallery/in pineta/2.jpg', alt: 'Luce che filtra tra i pini durante una passeggiata a cavallo' },
      { src: '/gallery/in pineta/3.jpg', alt: 'Cavalieri lungo un sentiero naturale in pineta' },
      { src: '/gallery/in pineta/4.jpg', alt: 'Pausa rilassante all\'ombra dei pini secolari' },
    ]
  },
  {
    id: 'per-esperti',
    title: 'Per Esperti',
    images: [
      { src: '/gallery/per esperti/2.jpeg', alt: 'Cavaliere professionista che doma il cavallo sulle onde' },
    ]
  },
  {
    id: 'proposta-di-matrimonio',
    title: 'Proposta di Matrimonio',
    images: [
      { src: '/gallery/matrimonio/matrimonio 1.jpg', alt: 'Romantica proposta di matrimonio a cavallo al tramonto' },
      { src: '/gallery/matrimonio/matarimonio 2.jpg', alt: 'Anello di fidanzamento offerto durante una passeggiata in spiaggia' },
      { src: '/gallery/matrimonio/matrimonio 5.jpg', alt: 'Abbraccio degli innamorati in sella in Maremma' },
      { src: '/gallery/matrimonio/matrimonio 4.jpg', alt: 'Un ricordo indimenticabile: la proposta tra mare e natura' },
    ]
  },
  {
    id: 'servizio-fotografico',
    title: 'Servizio Fotografico',
    images: [
      { src: '/images/gallery/placeholder.jpg', alt: 'Servizio fotografico professionale con cavallo bianco in spiaggia' },
      { src: '/images/gallery/placeholder.jpg', alt: 'Scatto elegante di una modella a cavallo' },
      { src: '/images/gallery/placeholder.jpg', alt: 'Ritratto artistico in controluce di un cavallo e cavaliere' },
      { src: '/images/gallery/placeholder.jpg', alt: 'Fotografia d\'autore immersi nella natura toscana' },
    ]
  },
  {
    id: 'calici-al-tramonto',
    title: 'Calici al Tramonto',
    images: [
      { src: '/images/gallery/placeholder.jpg', alt: 'Brindisi con calici di vino al tramonto dopo la cavalcata' },
      { src: '/images/gallery/placeholder.jpg', alt: 'Aperitivo elegante allestito sulla spiaggia per i cavalieri' },
      { src: '/images/gallery/placeholder.jpg', alt: 'Atmosfera magica e relax degustando prodotti tipici' },
      { src: '/images/gallery/placeholder.jpg', alt: 'Silhouette di calici in un tramonto maremmano' },
    ]
  }
];

export default function GalleryPage() {
  return (
    // Utilizziamo <main> per l'architettura semantica (regola HTML5_AND_SEO.MD)
    // padding per staccare la navbar e dare ampio respiro
    <main className="min-h-screen bg-[var(--color-sand)] pt-32 pb-32 overflow-x-hidden">
      
      {/* Intestazione Globale */}
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-semibold text-[var(--color-wine)] text-center mb-24 md:mb-40 leading-tight tracking-wide">
          La Nostra Gallery
        </h1>
      </div>

      {/* Sezioni divise per esperienza. Ampio respiro con gap-40 (regola SPACING_AND_UI.MD) */}
      <div className="flex flex-col gap-32 md:gap-40 lg:gap-48">
        {galleryData.map((experience) => (
          <section key={experience.id} className="w-full relative">
            <div className="container mx-auto px-4 md:px-8 mb-10 md:mb-16">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[var(--color-saddle)] font-medium tracking-wide">
                {experience.title}
              </h2>
            </div>
            
            {/* Componente Client interattivo per la galleria scorrevole */}
            <GalleryCarousel images={experience.images} />
          </section>
        ))}
      </div>
    </main>
  );
}
