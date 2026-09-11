# Prep VFI — Progetto ITS

Sito web **indipendente** (non ufficiale) per la preparazione orientativa al percorso **VFI** dell’Esercito Italiano.

Realizzato con **React**, **TypeScript**, **CSS** e **React Router**. Progressi e programma personalizzato sono salvati in file **JSON** (`data/`).

> Questo progetto **non è affiliato** all’Esercito Italiano né al Ministero della Difesa. Verifica sempre requisiti e prove sul **bando ufficiale più recente**.

## Funzionalità

- **Home** — presentazione del progetto e disclaimer
- **Guida VFI** — requisiti, selezione, consigli e link istituzionali
- **Allenamenti** — livelli principiante / intermedio / avanzato con video YouTube
- **Programma** — piano settimanale generato da livello, giorni e obiettivo → `data/program.json`
- **Progressi** — registrazione di tempi/ripetizioni → `data/progress.json`
- **Consigli** — allenamento, recupero, alimentazione, motivazione

## Avvio

```bash
npm install
npm run dev
```

Il comando `dev` avvia Vite e un’API locale (`/api/progress`, `/api/program`) che legge/scrive i file JSON.

Build di produzione:

```bash
npm run build
npm run preview
```

> Nota: il salvataggio su JSON è attivo in `npm run dev` (plugin Vite). In sola preview statica l’API non è disponibile.

## Struttura

```
data/           # progress.json, program.json
server/         # plugin API JSON per Vite
src/
  api/          # fetch verso /api/*
  components/   # layout, ui, training, progress
  data/         # contenuti statici e generatore programma
  hooks/        # useJsonFile, useProgress
  pages/
  styles/
  types/
```

## Note didattiche

Il progetto dimostra: componentizzazione, routing, form controllati, persistenza su file JSON via API locale, UI responsive.
