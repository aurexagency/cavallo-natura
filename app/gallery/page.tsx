import { Metadata } from 'next';
import GalleryCarousel from '@/components/ui/GalleryCarousel';
import { getPublicImageDimensions } from '@/lib/imageDimensions';

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
      { src: '/gallery/in riva al mare/DSC04729.jpg', alt: 'Cavalieri all\'orizzonte sulla spiaggia incontaminata' },
      { src: '/gallery/in riva al mare/DSC04792.jpg', alt: 'Passeggiata in riva al mare con la brezza marina' },
      { src: '/gallery/in riva al mare/DSC04879.jpg', alt: 'Cavalli al passo sulla battigia bagnata dal Mar Tirreno' },
      { src: '/gallery/in riva al mare/DSC04922.jpg', alt: 'Scorcio panoramico della spiaggia durante l\'escursione a cavallo' },
      { src: '/gallery/in riva al mare/DSC04964.jpg', alt: 'Binomio a cavallo in riva al mare al tramonto' },
      { src: '/gallery/in riva al mare/DSC05294.jpg', alt: 'Emozione unica di cavalcare a pochi passi dalle onde' },
      { src: '/gallery/in riva al mare/DSC05343.jpg', alt: 'Cavalieri sulla spiaggia dorata di Marina di Grosseto' },
      { src: '/gallery/in riva al mare/DSC05382.jpg', alt: 'Tratto panoramico sul litorale maremmano a cavallo' },
      { src: '/gallery/in riva al mare/DSC05390.jpg', alt: 'Momento di totale libertà a cavallo sulla spiaggia' },
      { src: '/gallery/in riva al mare/DSC05522.jpg', alt: 'Riflessi del mare sulla sabbia al passaggio dei cavalli' },
      { src: '/gallery/in riva al mare/DSC05568.jpg', alt: 'Gruppo a cavallo che ammira l\'orizzonte del Tirreno' },
      { src: '/gallery/in riva al mare/DSC05635.jpg', alt: 'Luce dorata del tardo pomeriggio sulla battigia' },
      { src: '/gallery/in riva al mare/DSC05648.jpg', alt: 'Cavalcata panoramica tra le dune e il mare' },
      { src: '/gallery/in riva al mare/DSC05821.jpg', alt: 'Cavalli tranquilli a contatto con l\'acqua del mare' },
      { src: '/gallery/in riva al mare/DSC05901.jpg', alt: 'Atmosfera magica durante la passeggiata sulla sabbia' },
      { src: '/gallery/in riva al mare/DSC06029.jpg', alt: 'Cavalieri e cavalli in perfetta sintonia sulla costa' },
      { src: '/gallery/in riva al mare/DSC06193.jpg', alt: 'Spazio aperto e natura selvaggia in riva al mare' },
      { src: '/gallery/in riva al mare/DSC06362.jpg', alt: 'Passo cadenzato dei cavalli lungo il bagnasciuga' },
      { src: '/gallery/in riva al mare/DSC06470.jpg', alt: 'Colori caldi del tramonto sulla spiaggia di Marina di Grosseto' },
      { src: '/gallery/in riva al mare/DSC06487.jpg', alt: 'Un ricordo indimenticabile a cavallo in riva al mare' },
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
      { src: '/gallery/in pineta/DSC03362.jpg', alt: 'Passeggiata a cavallo tra i pini marittimi della Pineta del Tombolo' },
      { src: '/gallery/in pineta/DSC03443.jpg', alt: 'Momento di quiete a cavallo immersi nel verde della pineta' },
      { src: '/gallery/in pineta/DSC03502.jpg', alt: 'Cavalieri al passo sui sentieri sabbiosi della pineta' },
      { src: '/gallery/in pineta/DSC03632.jpg', alt: 'Scorcio suggestivo durante l\'escursione a cavallo in pineta' },
      { src: '/gallery/in pineta/DSC03946.jpg', alt: 'Cavallo al passo tra la macchia mediterranea e i pini' },
      { src: '/gallery/in pineta/DSC04167.jpg', alt: 'Luce dorata tra i sentieri alberati di Marina di Grosseto' },
      { src: '/gallery/in pineta/DSC04382.jpg', alt: 'Gruppo di cavalieri che attraversa la pineta toscana' },
      { src: '/gallery/in pineta/DSC04454.jpg', alt: 'Ritmo rilassato a cavallo tra pini secolari e ginepri' },
      { src: '/gallery/in pineta/DSC04605.jpg', alt: 'Esperienza equestre nel cuore incontaminato della pineta' },
      { src: '/gallery/in pineta/DSC04620.jpg', alt: 'Binomio cavallo e cavaliere lungo il sentiero ombreggiato' },
      { src: '/gallery/in pineta/DSC04662.jpg', alt: 'Atmosfera suggestiva nella pineta prima di raggiungere la costa' },
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
      { src: "/servizi d'elite/servizio fotografico.jpg", alt: 'Shooting fotografico professionale con cavallo sulla spiaggia' },
      { src: '/images/foto-cavallo.jpg', alt: 'Scatto elegante di ritratto a cavallo in Maremma' },
      { src: '/images/passeggiate-cavallo.jpg', alt: 'Fotografia d\'autore immersi nella natura toscana' },
      { src: '/images/tramonto-cavallo.jpg', alt: 'Ritratto artistico in controluce al tramonto' },
    ]
  },
  {
    id: 'calici-al-tramonto',
    title: 'Calici al Tramonto',
    images: [
      { src: "/servizi d'elite/calici al tramonto.jpg", alt: 'Brindisi con calici di vino al tramonto dopo la cavalcata' },
      { src: '/home/calici al tramonto.jpg', alt: 'Aperitivo elegante allestito sulla spiaggia per i cavalieri' },
      { src: '/images/tramonto-cavallo.jpg', alt: 'Atmosfera magica e relax degustando prodotti tipici' },
      { src: '/gallery/in riva al mare/in riva al mare 2.jpg', alt: 'Silhouette di calici e cavalli in un tramonto maremmano' },
    ]
  }
];

/**
 * Associa a ogni foto le sue dimensioni reali (così viene mostrata nel formato
 * originale, senza ritagli) e scarta:
 *  - le foto il cui file non esiste in /public
 *  - le esperienze rimaste senza alcuna foto
 */
async function resolveGallery() {
  const resolved = await Promise.all(
    galleryData.map(async (experience) => {
      const images = (
        await Promise.all(
          experience.images.map(async (image) => {
            const size = await getPublicImageDimensions(image.src);
            return size ? { ...image, ...size } : null;
          })
        )
      ).filter((image): image is NonNullable<typeof image> => image !== null);

      return { ...experience, images };
    })
  );

  return resolved.filter((experience) => experience.images.length > 0);
}

export default async function GalleryPage() {
  const galleryWithSizes = await resolveGallery();

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
        {galleryWithSizes.map((experience) => (
          <section key={experience.id} id={experience.id} className="w-full relative scroll-mt-32">
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
