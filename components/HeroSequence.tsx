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
  
  // Stato per la gestione del caricamento (solo per la UI di caricamento, non per l'animazione)
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 3. Ottimizzazione Render: Usiamo useRef per immagini e playhead per non innescare 
  // 117 re-render al secondo in React, mantenendo il thread libero e ultra fluido.
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const frameCount = 117; // Da Frame_000 a Frame_116
  
  // Funzione core di calibrazione matematica per disegnare il frame (Object-fit: cover logica)
  const renderFrame = (index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    
    const canvas = canvasRef.current;
    // alpha: false ottimizza la pipeline grafica del browser per canvas totalmente opachi
    const ctx = canvas.getContext("2d", { alpha: false }); 
    if (!ctx) return;
    
    const img = imagesRef.current[index];
    
    // Fallback di sicurezza
    if (!img.complete || img.naturalWidth === 0) return;

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

  // Preloading asincrono dei frame (evita colli di bottiglia all'avvio)
  useEffect(() => {
    let loadedCount = 0;
    const tempImages: HTMLImageElement[] = [];

    const loadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const indexStr = i.toString().padStart(3, "0");
        img.src = `/hero/sequence/Frame_${indexStr}.webp`;

        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
          
          if (loadedCount === frameCount) {
            imagesRef.current = tempImages;
            setIsLoaded(true);
          }
        };

        img.onerror = () => {
          console.error(`Impossibile caricare Frame_${indexStr}.webp`);
          loadedCount++;
          if (loadedCount === frameCount) {
            imagesRef.current = tempImages;
            setIsLoaded(true);
          }
        };
        
        tempImages.push(img);
      }
    };

    loadImages();
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
      
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        // Pinna esattamente quando il contenitore tocca il bordo alto della viewport
        start: "top top", 
        // 2. Timing e fluidità: end generosissimo (+4 volte l'altezza viewport)
        // per diluire i 117 frame in un movimento pacato e controllato (no scatti)
        end: "+=400%", 
        pin: true, 
        // scrub a 1 per ammorbidire perfettamente l'inerzia della rotellina del mouse (interpolazione)
        scrub: 1, 
        animation: gsap.to(playhead, {
          frame: frameCount - 1,
          snap: "frame", // Assicura che l'indice frame sia un int e non un float
          ease: "none",  // Timing lineare rigoroso
          onUpdate: () => renderFrame(playhead.frame), // Update delegato a GSAP
        }),
      });

      return () => {
        st.kill(); 
      };
    });

    // 4. Accessibilità: Fallback per movimento ridotto
    mm.add("(prefers-reduced-motion: reduce)", () => {
      // Render statico dell'ultimo o primo frame per non omettere nulla visivamente, ma bloccando lo scroll finto
      renderFrame(0);
    });

    return () => mm.revert();
  }, { dependencies: [isLoaded], scope: containerRef }); // Scope per isolamento performance

  return (
    <section 
      ref={containerRef} 
      aria-labelledby="hero-heading"
      // L'altezza 100vh nativa, supportata dal pinning, disaccoppia la sequenza
      // permettendo la rivelazione sottostante
      className="relative w-full h-screen bg-[var(--color-sand)] overflow-hidden"
    >
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

      {/* Contenuti di Riferimento */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center pointer-events-none">
        <p className="mb-4 text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-white drop-shadow-md">
          Centro Equestre · Marina di Grosseto
        </p>

        <h1
          id="hero-heading"
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight max-w-5xl mb-6 text-white drop-shadow-lg"
        >
          Benvenuti a{" "}
          <span className="text-[var(--color-sand)]">Cavallo Natura</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed mb-10 text-white/95 drop-shadow-md font-light">
          Centro equestre d'élite immerso nella Maremma Toscana, tra la frescura della pineta del Tombolo e l'infinito delle spiagge tirreniche.
        </p>

        <div className="pointer-events-auto">
          <Button
            as="link"
            href="/esperienze"
            variant="outline"
            className="!border-white !text-white hover:!bg-white hover:!text-[var(--color-saddle)] tracking-wider"
            size="lg"
          >
            SCOPRI LE ESPERIENZE
          </Button>
        </div>
      </div>
    </section>
  );
}
