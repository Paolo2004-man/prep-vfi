import type { Goal, ProgramConfig, ProgramDay, TrainingLevel } from '../types';

const dayNames = ['Giorno 1', 'Giorno 2', 'Giorno 3', 'Giorno 4', 'Giorno 5', 'Giorno 6'];

const templates: Record<
  TrainingLevel,
  { focus: string; exercises: { name: string; prescription: string }[]; notes: string }[]
> = {
  principiante: [
    {
      focus: 'Corsa + core',
      exercises: [
        { name: 'Corsa leggera', prescription: '20–25 min ritmo conversazionale' },
        { name: 'Plank', prescription: '3 × 20–30″' },
        { name: 'Crunch', prescription: '3 × 12–15' },
      ],
      notes: 'Priorità: abitudine e tecnica, non velocità.',
    },
    {
      focus: 'Forza superiore + gambe',
      exercises: [
        { name: 'Piegamenti (anche sulle ginocchia)', prescription: '3 × 8–10' },
        { name: 'Squat a corpo libero', prescription: '3 × 10–12' },
        { name: 'Affondi assistiti / statici', prescription: '2 × 8 per gamba' },
      ],
      notes: 'Recupera 60–90″ tra le serie.',
    },
    {
      focus: 'Resistenza mista',
      exercises: [
        { name: 'Camminata veloce + jogging', prescription: '25 min' },
        { name: 'Jumping jack', prescription: '3 × 30″' },
        { name: 'Stretching totale', prescription: '8–10 min' },
      ],
      notes: 'Giorno più leggero: ascolta il corpo.',
    },
    {
      focus: 'Volume piegamenti/addominali',
      exercises: [
        { name: 'Piegamenti', prescription: '4 × max tecniche (stop a 1–2 dal cedimento)' },
        { name: 'Crunch / sit-up', prescription: '4 × 15' },
        { name: 'Plank laterale', prescription: '2 × 15″ per lato' },
      ],
      notes: 'Annota le ripetizioni nei Progressi.',
    },
    {
      focus: 'Corsa di consolidamento',
      exercises: [
        { name: 'Corsa continua', prescription: '25–30 min' },
        { name: 'Mobilità anche-ginocchia-anche', prescription: '6–8 min' },
      ],
      notes: 'Chiudi la settimana senza forzare.',
    },
    {
      focus: 'Simulazione leggera',
      exercises: [
        { name: 'Corsa', prescription: '15–20 min' },
        { name: 'Piegamenti', prescription: '2 × 10' },
        { name: 'Addominali', prescription: '2 × 15' },
      ],
      notes: 'Familiarizza con la sequenza delle prove.',
    },
  ],
  intermedio: [
    {
      focus: 'Corsa aerobica',
      exercises: [
        { name: 'Corsa continua', prescription: '35–40 min o ~5 km' },
        { name: 'Core (plank + crunch)', prescription: '3 giri' },
      ],
      notes: 'Mantieni un ritmo sostenibile per tutta la durata.',
    },
    {
      focus: 'Forza e potenza',
      exercises: [
        { name: 'Piegamenti', prescription: '4 × 15–20' },
        { name: 'Squat + affondi', prescription: '3 × 12' },
        { name: 'Burpee leggeri', prescription: '3 × 6–8' },
      ],
      notes: 'Qualità del movimento sotto fatica.',
    },
    {
      focus: 'Intervalli corti',
      exercises: [
        { name: 'Riscaldamento', prescription: '10 min jogging' },
        { name: 'Ripetute 200 m', prescription: '6–8 con recupero camminata' },
        { name: 'Defaticamento', prescription: '8 min' },
      ],
      notes: 'Non fare intervalli due giorni di seguito.',
    },
    {
      focus: 'Circuito selezione',
      exercises: [
        { name: 'Piegamenti', prescription: '40″ lavoro / 20″ pausa × 4' },
        { name: 'Addominali', prescription: '40″ / 20″ × 4' },
        { name: 'Squat', prescription: '40″ / 20″ × 4' },
      ],
      notes: 'Simula pressione temporale senza sacrificare la tecnica.',
    },
    {
      focus: 'Corsa lunga',
      exercises: [
        { name: 'Corsa continua', prescription: '40–50 min' },
        { name: 'Stretching', prescription: '10 min' },
      ],
      notes: 'Giorno di volume: idratazione e scarpe adeguate.',
    },
    {
      focus: 'Test intermedio',
      exercises: [
        { name: 'Corsa cronometrata', prescription: '1000–2000 m' },
        { name: 'Piegamenti max', prescription: '1–2 serie tecniche' },
        { name: 'Addominali max', prescription: '1–2 serie tecniche' },
      ],
      notes: 'Salva i numeri nella sezione Progressi.',
    },
  ],
  avanzato: [
    {
      focus: 'Intervalli lunghi',
      exercises: [
        { name: 'Riscaldamento', prescription: '12 min' },
        { name: 'Ripetute 400 m', prescription: '8 con recupero attivo' },
        { name: 'Core avanzato', prescription: 'V-up / plank 4 serie' },
      ],
      notes: 'Intensità alta: recupera bene il giorno dopo.',
    },
    {
      focus: 'Forza esplosiva',
      exercises: [
        { name: 'Burpee + squat jump', prescription: '5 × 8–10' },
        { name: 'Piegamenti avanzati', prescription: '5 × 15–25' },
        { name: 'Affondi in camminata', prescription: '3 × 12 per gamba' },
      ],
      notes: 'Stop se la tecnica collassa.',
    },
    {
      focus: 'Resistenza sotto fatica',
      exercises: [
        { name: 'Circuito AMRAP 12′', prescription: 'piegamenti, squat, sit-up, jumping jack' },
        { name: 'Corsa facile', prescription: '15 min scarico' },
      ],
      notes: 'Conta i giri e confrontali settimana per settimana.',
    },
    {
      focus: 'Corsa di qualità',
      exercises: [
        { name: 'Corsa tempo', prescription: '25–30 min a ritmo medio-alto' },
        { name: 'Mobilità', prescription: '10 min' },
      ],
      notes: 'Ritmo “scomodo ma sostenibile”.',
    },
    {
      focus: 'Simulazione prova',
      exercises: [
        { name: 'Corsa prova', prescription: 'distanza/tempo da bando (se noto)' },
        { name: 'Piegamenti prova', prescription: 'serie unica o come da regolamento' },
        { name: 'Addominali prova', prescription: 'serie unica o come da regolamento' },
      ],
      notes: 'Usa solo standard ufficiali del bando più recente.',
    },
    {
      focus: 'Scarico attivo',
      exercises: [
        { name: 'Jogging leggero', prescription: '25 min' },
        { name: 'Mobilità e respirazione', prescription: '15 min' },
      ],
      notes: 'Serve ad arrivare freschi alla sessione chiave.',
    },
  ],
};

const goalNotes: Record<Goal, string> = {
  resistenza: 'Enfasi su corsa e circuiti: priorità alla capacità aerobica.',
  forza: 'Enfasi su piegamenti, squat e volume di forza a corpo libero.',
  selezione: 'Include almeno una simulazione prova a settimana.',
  generale: 'Equilibrio tra corsa, forza e resistenza.',
};

export function generateProgram(config: ProgramConfig): ProgramDay[] {
  const pool = templates[config.level];
  const days = Math.min(Math.max(config.daysPerWeek, 2), 6);
  const selected = pool.slice(0, days);

  // Riordina leggermente in base all'obiettivo
  if (config.goal === 'resistenza') {
    selected.sort((a, b) => {
      const score = (f: string) =>
        /corsa|intervall|resistenza|lunga/i.test(f) ? -1 : 0;
      return score(a.focus) - score(b.focus);
    });
  }
  if (config.goal === 'forza') {
    selected.sort((a, b) => {
      const score = (f: string) =>
        /forza|piegament|potenza|esplosiva/i.test(f) ? -1 : 0;
      return score(a.focus) - score(b.focus);
    });
  }

  return selected.map((day, index) => ({
    dayLabel: dayNames[index],
    focus: day.focus,
    exercises: day.exercises,
    notes: `${day.notes} ${goalNotes[config.goal]}`,
  }));
}
