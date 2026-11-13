"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/Button";
import HeroLogo from "@/components/HeroLogo";

// Registrazione dei plugin GSAP (lato client)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Video all-intra (un keyframe per fotogramma): ogni posizione di scroll è
// decodificabile da sola, quindi lo scrubbing va avanti e indietro senza scatti.
const HERO_VIDEO = "/hero/hero.mp4";
const HERO_POSTER = "/hero/poster.webp";

// Durata logica della sequenza, in "fotogrammi": la CTA compare verso la fine.
const LOGICAL_FRAMES = 152;

// Pixel di scroll entro cui il logo si allontana galoppando
const LOGO_FADE_DISTANCE = 520;

type Status = "loading" | "ready" | "error";

export default function HeroSequence() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  // Stato di caricamento del video (il poster è visibile nel frattempo)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => {
      video.pause();
      setStatus("ready");
    };
    const onError = () => {
      console.error("Errore caricamento video hero. Mostro il poster statico.");
      setStatus("error");
    };

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("error", onError);

    // Se il video arriva dalla cache, "loadeddata" può essere già scattato prima
    // che React agganci i listener: in quel caso lo stato va letto subito.
    if (video.error) onError();
    else if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) onReady();

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("error", onError);
    };
  }, []);

  // Animazione legata allo scroll: il playhead interpola il tempo del video
  useGSAP(
    () => {
      const video = videoRef.current;
      if (!video || !containerRef.current) return;

      const mm = gsap.matchMedia();

      // Animazione attiva solo senza "riduci movimento"
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // In caricamento la CTA resta nascosta sotto l'overlay;
        // se il video fallisce si mostra il poster fermo con la CTA visibile.
        if (status === "error") gsap.set(ctaRef.current, { autoAlpha: 1, y: 0 });
        if (status !== "ready") return;

        const playhead = { time: 0 };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(playhead, {
          time: video.duration,
          ease: "none",
          duration: LOGICAL_FRAMES,
          onUpdate: () => {
            // Evita di richiedere un seek a ogni micro-variazione dello scroll
            if (Math.abs(video.currentTime - playhead.time) > 1 / 60) {
              video.currentTime = playhead.time;
            }
          },
        }, 0);

        // CTA: slide up + fade in verso la fine della sequenza
        tl.fromTo(
          ctaRef.current,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 21, ease: "power2.out" },
          72
        );

        return () => {
          tl.kill();
        };
      });

      // Movimento ridotto: nessuno scroll-scrub, poster fermo e CTA visibile
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(ctaRef.current, { autoAlpha: 1, y: 0 });
      });

      return () => mm.revert();
    },
    // revertOnUpdate: al cambio di stato annulla tween e pin della passata precedente
    { dependencies: [status], scope: containerRef, revertOnUpdate: true }
  );

  // Dopo il caricamento i fotogrammi possono cambiare altezza di pagina: ricalcola i pin
  useEffect(() => {
    if (status === "ready") ScrollTrigger.refresh();
  }, [status]);

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-title"
      className="relative w-full h-screen bg-[var(--color-sand)] overflow-hidden"
    >
      {/* Titolo semantico accessibile per SEO / screen reader */}
      <h1 id="hero-title" className="sr-only">
        Cavallo Natura | Centro Equestre in Maremma Toscana
      </h1>

      {/* Video di sfondo: muto, inline, controllato dallo scroll (nessun autoplay).
          Durante il caricamento si vede subito il poster, senza schermata di attesa. */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Velo per leggibilità */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none mix-blend-multiply" />

      {/* Logo a ritmo di galoppo: entra con 4 battiti e polvere, esce galoppando allo scroll */}
      <HeroLogo active={status !== "loading"} fadeDistance={LOGO_FADE_DISTANCE} />

      {/* CTA posizionata in basso */}
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
