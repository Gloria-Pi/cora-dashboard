# CORA Dashboard

**Open-source AI-powered Sentiment Analysis Dashboard**

## Descrizione

CORA è una dashboard interattiva per analizzare, sintetizzare e visualizzare tendenze di sentiment nei dati testuali. Grazie all’integrazione con modelli AI, offre sintesi automatiche e trend di categoria, fornendo insight chiari e azionabili su grandi volumi di dati.

Progettata come progetto di tesi al termine dello stage curriculare presso un'azienda, ha lo scopo di aiutare HR managers e responsabili di sede ad ottenere insight rapidi e chiari da dati testuali tramite un’interfaccia semplice e personalizzabile.

## Features Principali

- **Sentiment Analysis** su dataset testuali per la visualizzazione aggregata delle metriche
- **Sintesi AI** automatica dei risultati chiave
- **Analisi trend per categoria/tag** tramite grafici intuitivi
- **Dashboard responsive** e facile da navigare
- **Architettura modulare** pronta per personalizzazioni future

## Stack Tecnologico

- **TypeScript & JavaScript** — Linguaggi principali del frontend
- **React** — Framework base dell’applicazione
- **Recharts** — Libreria per la visualizzazione di grafici e trend
- **Prettier** — Code formatter per mantenere uno stile di codice coerente
- **CSS & HTML** — Styling personalizzato, layout mobile-first

## Architettura

CORA è costruita come single-page application (SPA) con React e TypeScript.  
La struttura modulare facilita l’integrazione di nuove funzionalità e sorgenti dati. I dati di sentiment vengono processati lato frontend e visualizzati tramite grafici (recharts) e pannelli riassuntivi.  
Un sistema di servizi gestisce le chiamate ai modelli AI per le sintesi automatiche, mentre le interfacce utente sono suddivise in componenti riutilizzabili.

```bash
cora-dashboard/
├── src/
│   ├── components/     # Componenti UI (Dashboard, Chart, Summary, ecc.)
│   ├── services/       # API call, integrazione modelli AI, gestione dati
│   ├── styles/         # CSS personalizzati
│   └── App.tsx         # Entry point dell'applicazione
├── public/             # Static assets
├── package.json
└── README.md
```

## Setup & Preview

Il prodotto è **work in progress**.  
Puoi visualizzare la versione attuale su Cloudflare tramite il branch `Hosting`:  
👉 [Preview Demo Branch Hosting su Cloudflare](https://feature-hosting.cora-dashboard.pages.dev/)

## Future Improvements

- [ ] Filtro per giorno / settimana / mese
- [ ] Gestione migliori degli stati di loading
- [ ] Sistema di fallback se la sintesi AI fallisce
- [ ] Database per salvare e ricercare riassunti generati dall’AI
- [ ] Nuovi grafici per migliorare l’analisi dei trend
- [ ] Completamento delle ultime due schermate previste
- [ ] Sistema di login e autenticazione
- [ ] Modalità notte/dark mode

---

<br>

Realizzato da [Gloria Pi](https://github.com/Gloria-Pi)
