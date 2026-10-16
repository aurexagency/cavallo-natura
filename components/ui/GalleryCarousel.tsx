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
  /** Dimensioni reali della foto: il riquadro si adatta al suo formato originale */
  width: number;
  height: number;
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
    const items = gsap.utils.toArray<HTMLElement>('.gallery-item');
    if (!containerRef.current || !carouselRef.current || items.length === 0) return;

    // Regola ANIMATION_GSAP.MD: Controllo accessibilità
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const carousel = carouselRef.current!;

      // Le foto hanno larghezze diverse (formato originale): si sposta l'intera
      // "pista" invece di muovere ogni elemento in percentuale della propria larghezza.
      const getScrollDistance = () => Math.max(carousel.scrollWidth - window.innerWidth, 0);

      const scrollTween = gsap.to(carousel, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'center center',
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
        },
      });

      // Effetto Finto-3D / Parallasse sui singoli elementi legati allo scorrimento orizzontale
      items.forEach((item) => {
        const imageWrapper = item.querySelector('.image-wrapper');
        if (imageWrapper) {
          gsap.fromTo(
            imageWrapper,
            { rotationY: -10, scale: 0.95 },
            {
              rotationY: 10,
              scale: 1.05,
              ease: 'power1.inOut',
              scrollTrigger: {
                trigger: item,
                containerAnimation: scrollTween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            }
          );
        }
      });
    });

    // Cleanup gestito da GSAP MatchMedia
    return () => mm.revert();
  }, { scope: containerRef });

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
          className="flex flex-nowrap items-center md:gap-12 gap-6 px-4 md:px-8 w-fit perspective-[1200px] motion-reduce:overflow-x-auto motion-reduce:w-full motion-reduce:pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image) => (
            <div
              key={image.src}
              className="gallery-item shrink-0 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
              role="button"
              tabIndex={0}
              aria-label={`Visualizza ingrandita: ${image.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(image)}
            >
              {/*
                Il riquadro si adatta alla foto (w-fit): nessun ritaglio né bande vuote.
                width/height reali evitano il CLS; max-h/max-w limitano le foto molto grandi
                mantenendo sempre le proporzioni originali.
              */}
              <div className="image-wrapper relative w-fit rounded-[var(--radius-card)] overflow-hidden shadow-2xl transition-shadow duration-300 transform-3d">
                {/* Regola PERFORMANCE_MEDIA.MD: Uso nativo di <Image> */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 85vw, 50vw"
                  className="block w-[85vw] h-auto md:w-auto md:h-[70vh] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
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
