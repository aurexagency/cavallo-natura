---
trigger: always_on
---

ANIMATION_GSAP.MD
---
trigger: always_on
---

* Utilizza GSAP per le animazioni basate sullo scroll (ScrollTrigger) per rivelare elementi testuali e immagini in modo fluido ed elegante durante la navigazione.
* Integra GSAP usando il pacchetto `@gsap/react` e l'hook `useGSAP()` per evitare problemi di lifecycle e cleanup in React/Next.js.
* IMPORTANTISSIMO: Avvolgi le animazioni critiche in media query CSS o controlli JS per rispettare l'accessibilità: `matchMedia("(prefers-reduced-motion: no-preference)")`.