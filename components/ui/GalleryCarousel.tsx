'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registrazione sicura dei plugin lato client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ImageType {
  src: string;
  alt: string;
}

interface GalleryCarouselProps {
  images: ImageType[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Stato per la gestione della Lightbox
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  // Implementazione di GSAP con gestione corretta del lifecycle e memory cleanup automatico
  useGSAP(() => {
    // Otteniamo i nodi HTML su cui iterare
    const items = gsap.utils.toArray<HTMLElement>('.gallery-item');
    if (!containerRef.current || !carouselRef.current || items.length === 0) return;

    // Regola ANIMATION_GSAP.MD: Controllo accessibilità
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      
      const totalWidth = carouselRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      // Calcoliamo la distanza di scorrimento orizzontale in base alla larghezza degli elementi e allo schermo
      const scrollDistance = totalWidth - viewportWidth + (viewportWidth * 0.1);

      // Animazione di scorrimento orizzontale guidato dallo scroll verticale (ScrollTrigger)
      const scrollTween = gsap.to(items, {
        xPercent: -100 * (items.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // Fluidità dello scroll
          start: 'center center', // Inizia quando il contenitore è al centro della viewport
          end: () => `+=${scrollDistance}`, // La durata dello scroll corrisponde alla larghezza rimanente
          invalidateOnRefresh: true, // Ricalcola al resize della finestra
        }
      });

      // Effetto Finto-3D / Parallasse sui singoli elementi legati all'avanzamento dello scorrimento orizzontale
      items.forEach((item) => {
        const imageWrapper = item.querySelector('.image-wrapper');
        if (imageWrapper) {
          gsap.fromTo(imageWrapper, 
            { 
              rotationY: -10, // Inizia leggermente girato
              scale: 0.95
            },
            {
              rotationY: 10,  // Finisce girato dall'altra
              scale: 1.05,       // Leggero ingrandimento al centro
              ease: 'power1.inOut',
              scrollTrigger: {
                trigger: item,
                containerAnimation: scrollTween, // Si aggancia allo scorrimento orizzontale
                start: 'left right', // Quando entra nello schermo da destra
                end: 'right left',   // Quando esce dallo schermo a sinistra
                scrub: true,
              }
            }
          );
        }
      });
    });

    // Ritorna una funzione di cleanup gestita automaticamente da GSAP MatchMedia
    return () => mm.revert();
  }, { scope: containerRef }); // Scope localizzato per performance e isolamento dei selettori

  // Accessibilità Lightbox: chiusura con ESC e prevenzione scroll quando aperto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Blocca lo scroll del body dietro la modale
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <>
      {/* Contenitore principale agganciato a ScrollTrigger */}
      <div 
        ref={containerRef} 
        className="relative w-full overflow-hidden" 
      >
        <div 
          ref={carouselRef} 
          className="flex flex-nowrap md:gap-12 gap-6 px-4 md:px-8 w-fit perspective-[1200px] motion-reduce:overflow-x-auto motion-reduce:w-full motion-reduce:pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ perspective: '1200px' }} // Prospettiva per effetto 3D
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-auto cursor-pointer group"
              onClick={() => setSelectedImage(image)}
              role="button"
              tabIndex={0}
              aria-label={`Visualizza ingrandita: ${image.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(image)}
            >
              {/* Contenitore Immagine con aspect-ratio per evitare CLS e property per 3D */}
              <div 
                className="image-wrapper relative w-full aspect-video md:aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden shadow-2xl transition-shadow duration-300 transform-style-3d bg-[var(--color-pine)]/10"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Regola PERFORMANCE_MEDIA.MD: Uso nativo di <Image> */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                
                {/* Overlay per indicare interattività (hover state) */}
                <div className="absolute inset-0 bg-[#2C2416]/0 group-hover:bg-[#2C2416]/20 transition-colors duration-500 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-[var(--color-sand)] text-[var(--color-saddle)] px-6 py-3 rounded-[var(--radius-btn)] font-semibold shadow-md text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    Ingrandisci
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Full Screen Overlay) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2416]/95 backdrop-blur-md p-4 md:p-8"
          onClick={() => setSelectedImage(null)} 
          role="dialog"
          aria-modal="true"
          aria-label="Visualizzatore immagine"
        >
          {/* Bottone di chiusura */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-[var(--color-sand)] p-3 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-sand)] z-[60]"
            onClick={(e) => {
              e.stopPropagation(); 
              setSelectedImage(null);
            }}
            aria-label="Chiudi galleria"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {/* Immagine ingrandita */}
          <div 
            className="relative w-full max-w-7xl h-[85vh] md:h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Previene la chiusura cliccando sulla foto stessa
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority // Priority per velocizzare il rendering nella modale a schermo intero
            />
          </div>
        </div>
      )}
    </>
  );
}
