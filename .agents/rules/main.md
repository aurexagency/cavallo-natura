---
trigger: always_on
---

MAIN.MD
---
trigger: always_on
---

# Google Antigravity - Project: Cavallo Natura Website
## System Directives & Rules for AI Agents

**1. Ruoli degli Agenti**
* **Claude 4.6:** Responsabile dell'architettura del codice, della creazione dei componenti UI interattivi (React/Next.js) e dell'integrazione delle animazioni GSAP. Massima priorità a codice pulito, accessibilità e divisione rigorosa tra Server e Client Components.
* **Gemini Pro 3.1:** Responsabile della generazione dei contenuti, copywriting dinamico, SEO on-page, metadati e mantenimento del tono di voce rustico-elegante.

**2. Stack Tecnologico Selezionato**
* **Framework Full-Stack:** Next.js (App Router per sfruttare React Server Components).
* **Styling:** Tailwind CSS.
* **Linguaggio:** TypeScript (per type safety e scalabilità).
* **Animazioni:** GSAP (GreenSock) con ScrollTrigger.

**3. Contesto di Business:**
* [cite_start]Cavallo Natura è un centro equestre a conduzione familiare immerso nel cuore rigoglioso della Maremma Toscana[cite: 23]. 
* La struttura si trova a pochi passi dalla meravigliosa pineta del Tombolo e a brevissima distanza dalle grandi spiagge di Marina di Grosseto[cite: 24].
* [cite_start]Il target spazia dai principianti ai cavalieri esperti[cite: 32].
* [cite_start]Offre passeggiate a cavallo [cite: 33][cite_start], ma si distingue per i suoi servizi d'élite, tra cui calici al tramonto sulla spiaggia [cite: 34, 35][cite_start], servizi fotografici professionali a cavallo [cite: 36, 37] [cite_start]e proposte di matrimonio personalizzate[cite: 48].
* [cite_start]Dispone anche di un servizio di pensione per cavalli [cite: 38, 39][cite_start], dove il benessere dell'animale e il rispetto per i suoi ritmi sono la priorità assoluta[cite: 40].
* [cite_start]Il brand deve trasmettere un senso di accoglienza autentica, relax, natura incontaminata ed eleganza[cite: 27, 43].

**4. Regole di Sviluppo (Strict)**
* Implementare un design mobile-first utilizzando esclusivamente le classi di utility di Tailwind CSS.
* Utilizzare il Next.js App Router (`app/`).
* Mantenere l'albero dei componenti ottimizzato: usare i Client Components (`"use client"`) solo nei file in cui viene implementato GSAP o c'è interattività diretta dell'utente. Il resto del layout deve essere gestito tramite Server Components.