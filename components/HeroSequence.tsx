"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/Button";

// Registrazione rigorosa dei plugin per prevenire errori di calibrazione lato client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroSequence() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Stato per la gestione del caricamento (solo per la UI di caricamento, non per l'animazione)
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 3. Ottimizzazione Render: Usiamo useRef per immagini e playhead per non innescare 
  // re-render continui in React, mantenendo il thread libero e ultra fluido.
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const frameCount = 180; // Da hero - frame 2_000 a hero - frame 2_179
  
  // Funzione helper per ottenere il percorso del frame
  const getFramePath = (index: number) => {
    const indexStr = index.toString().padStart(3, "0");
    return `/hero/hero%20-%20frame%202/hero%20-%20frame%202_${indexStr}.webp`;
  };
  
  // Funzione core di calibrazione matematica per disegnare il frame
  const renderFrame = (index: number) => {
    if (!canvasRef.current) return;
    
    // Trova il frame caricato più vicino (se l'utente scrolla veloce e il frame esatto non è ancora pronto)
    let img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Fallback: cerca all'indietro l'ultimo frame caricato con successo per evitare sfarfallii
      for (let i = index - 1; i >= 0; i--) {
        if (imagesRef.current[i]?.complete && imagesRef.current[i].naturalWidth > 0) {
          img = imagesRef.current[i];
          break;
        }
      }
    }
    
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); 
    if (!ctx) return;
    
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;
    
    // Logica matematica per emulare background-size: cover
    const scale = Math.max(cw / iw, ch / ih);
    const w = iw * scale;
    const h = ih * scale;
    const x = (cw - w) / 2;
    const y = (ch - h) / 2;
    
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, w, h);
    
    currentFrameRef.current = index;
  };

  // Preloading asincrono OTTIMIZZATO per Vercel/Produzione
  useEffect(() => {
    let loadedCount = 0;
    const tempImages: HTMLImageElement[] = [];

    // Pre-popoliamo l'array di immagini vuote per mantenere l'ordine
    for (let i = 0; i < frameCount; i++) {
      tempImages.push(new Image());
    }
    imagesRef.current = tempImages;

    // Funzione per caricare silenziosamente i frame successivi al primo
    const loadRestOfFrames = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = tempImages[i];
        
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
        };
        img.onerror = () => {
          loadedCount++;
        };
        
        // Assegnando la src, il browser accoda il download in background
        img.src = getFramePath(i);
      }
    };

    // PRIORITÀ MASSIMA: Carichiamo solo il primissimo frame per sbloccare subito la UI
    const firstImg = tempImages[0];
    firstImg.onload = () => {
      loadedCount++;
      setIsLoaded(true); // Sblocca immediatamente lo spinner di caricamento
      requestAnimationFrame(() => renderFrame(0)); // Disegna istantaneamente il primo frame
      loadRestOfFrames(); // Avvia il download massivo del resto della sequenza in background
    };
    
    firstImg.onerror = () => {
      console.error("Errore caricamento frame 0. Sblocco d'emergenza della UI.");
      setIsLoaded(true);
      loadRestOfFrames();
    };
    
    // Innesca il download del primo frame
    firstImg.src = getFramePath(0);

  }, []);

  // Handler del resize perricalibrare le coordinate di GSAP
  const resizeCanvas = () => {
    if (!canvasRef.current) return;
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    renderFrame(currentFrameRef.current);
    ScrollTrigger.refresh();
  };

  useEffect(() => {
    if (isLoaded) {
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
    }
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [isLoaded]);

  // 1. Calibrazione dello ScrollTrigger perfetto
  useGSAP(() => {
    if (!isLoaded || !canvasRef.current || !containerRef.current) return;
    
    const mm = gsap.matchMedia();
    
    // 4. Accessibilità: Animazione attivata SOLO in assenza di motion-reduce
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      
      // Definiamo il playhead (oggetto fittizio) da interpolare
      const playhead = { frame: 0 };
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // Pinna esattamente quando il contenitore tocca il bordo alto della viewport
          start: "top top", 
          // 2. Timing e fluidità: end generoso (+4 volte l'altezza viewport)
          // per diluire i 180 frame in un movimento pacato e controllato (no scatti)
          end: "+=400%", 
          pin: true, 
          // scrub a 1 per ammorbidire perfettamente l'inerzia della rotellina del mouse (interpolazione)
          scrub: 1, 
        }
      });

      tl.to(playhead, {
        frame: frameCount - 1,
        snap: "frame", // Assicura che l'indice frame sia un int e non un float
        ease: "none",  // Timing lineare rigoroso
        duration: frameCount, // Usiamo frameCount come durata logica per la timeline
        onUpdate: () => renderFrame(playhead.frame), // Update delegato a GSAP
      }, 0);

      // Aggiungiamo l'animazione della CTA (slide up + fade in)
      tl.fromTo(ctaRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 25, ease: "power2.out" },
        85
      );

      return () => {
        tl.kill(); 
      };
    });

    // 4. Accessibilità: Fallback per movimento ridotto
    mm.add("(prefers-reduced-motion: reduce)", () => {
      // Render statico dell'ultimo o primo frame per non omettere nulla visivamente, ma bloccando lo scroll finto
      renderFrame(0);
      gsap.set(ctaRef.current, { autoAlpha: 1, y: 0 });
    });

    return () => mm.revert();
  }, { dependencies: [isLoaded], scope: containerRef }); // Scope per isolamento performance

  return (
    <section 
      ref={containerRef} 
      aria-labelledby="hero-title"
      // L'altezza 100vh nativa, supportata dal pinning, disaccoppia la sequenza
      // permettendo la rivelazione sottostante
      className="relative w-full h-screen bg-[var(--color-sand)] overflow-hidden"
    >
      {/* Titolo semantico accessibile per SEO / screen reader */}
      <h1 id="hero-title" className="sr-only">
        Cavallo Natura | Centro Equestre in Maremma Toscana
      </h1>

      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[var(--color-sand)] text-[var(--color-saddle)]">
          <span className="text-5xl animate-pulse mb-6">🐎</span>
          <p className="font-display text-xl font-semibold tracking-wide">
            Caricamento... {loadingProgress}%
          </p>
        </div>
      )}

      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className={`absolute top-0 left-0 w-full h-full block transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Velo per Leggibilità (mix-blend-multiply per amalgama cinematografica) */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none mix-blend-multiply" />

      {/* Pulsante CTA posizionato strategicamente in basso */}
      <div className="absolute bottom-0 left-0 w-full pb-24 md:pb-32 flex justify-center px-4 pointer-events-auto z-10">
        <div ref={ctaRef} className="opacity-0">
          <Button
            as="link"
            href="/esperienze"
            variant="outline"
            className="!border-white !text-white hover:!bg-white hover:!text-[var(--color-saddle)] tracking-wider drop-shadow-md"
            size="lg"
          >
            SCOPRI LE ESPERIENZE
          </Button>
        </div>
      </div>
    </section>
  );
}
