import type { Exercise } from '../types';

/**
 * Video YouTube di dimostrazione tecnica (canali fitness pubblici).
 * Non sono contenuti ufficiali dell'Esercito Italiano.
 */
export const exercises: Exercise[] = [
  // ——— Principiante ———
  {
    id: 'p-corsa-1',
    name: 'Corsa leggera continua',
    category: 'corsa',
    level: 'principiante',
    description:
      'Corsa a ritmo conversazionale per costruire la base aerobica senza forzare.',
    sets: '20–25 minuti, 3 volte a settimana',
    tips: 'Mantieni una cadenza rilassata. Se ti manca il fiato, alterna camminata e corsa.',
    youtubeId: 'brFHyOtTwH4',
  },
  {
    id: 'p-forza-1',
    name: 'Squat a corpo libero',
    category: 'forza',
    level: 'principiante',
    description:
      'Esercizio base per gambe e core, utile per la preparazione fisica generale.',
    sets: '3 serie × 10–12 ripetizioni',
    tips: 'Piedi larghezza spalle, ginocchia in linea con le punte, schiena neutra.',
    youtubeId: 'aclHkVaku9U',
  },
  {
    id: 'p-pieg-1',
    name: 'Piegamenti sulle ginocchia',
    category: 'piegamenti',
    level: 'principiante',
    description:
      'Variante assistita per acquisire la tecnica corretta dei piegamenti.',
    sets: '3 serie × 8–10 ripetizioni',
    tips: 'Corpo allineato, petto verso il pavimento, non alzare i fianchi.',
    youtubeId: 'IODxDxX7oi4',
  },
  {
    id: 'p-add-1',
    name: 'Crunch base',
    category: 'addominali',
    level: 'principiante',
    description: 'Attivazione del retto addominale con range controllato.',
    sets: '3 serie × 12–15 ripetizioni',
    tips: 'Non tirare il collo con le mani: guarda in avanti e solleva solo il busto.',
    youtubeId: 'Xyd_fa5zoEU',
  },
  {
    id: 'p-res-1',
    name: 'Plank frontale',
    category: 'resistenza',
    level: 'principiante',
    description: 'Isometria per core e stabilità, base della resistenza muscolare.',
    sets: '3 tenute da 20–30 secondi',
    tips: 'Gomiti sotto le spalle, glutei contratti, evita di inarcare la schiena.',
    youtubeId: 'ASdvN_XEl_c',
  },

  // ——— Intermedio ———
  {
    id: 'i-corsa-1',
    name: 'Corsa continua + progressione',
    category: 'corsa',
    level: 'intermedio',
    description:
      'Aumenta distanza e ritmo: utile in vista di prove di resistenza tipiche dei bandi.',
    sets: '30–40 minuti o 4–5 km, 3–4 volte/settimana',
    tips: 'Una sessione a settimana può includere 4–6 scatti di 100–200 m.',
    youtubeId: 'brFHyOtTwH4',
  },
  {
    id: 'i-forza-1',
    name: 'Affondi alternati',
    category: 'forza',
    level: 'intermedio',
    description: 'Forza unilaterale di gambe e equilibrio.',
    sets: '3 serie × 10 ripetizioni per gamba',
    tips: 'Passo lungo, ginocchio anteriore stabile, busto eretto.',
    youtubeId: 'QOVaHwm-Q6U',
  },
  {
    id: 'i-pieg-1',
    name: 'Piegamenti completi',
    category: 'piegamenti',
    level: 'intermedio',
    description: 'Piegamenti standard a corpo libero, ritmo controllato.',
    sets: '4 serie × 12–20 ripetizioni',
    tips: 'Petto quasi a terra, blocco in alto senza “rimbalzo”.',
    youtubeId: 'IODxDxX7oi4',
  },
  {
    id: 'i-add-1',
    name: 'Sit-up / crunch completo',
    category: 'addominali',
    level: 'intermedio',
    description: 'Volume maggiore per resistenza addominale.',
    sets: '4 serie × 20–30 ripetizioni',
    tips: 'Movimento fluido: non usare lo slancio delle braccia.',
    youtubeId: '1fbU_MkV7NE',
  },
  {
    id: 'i-res-1',
    name: 'Circuit conditioning',
    category: 'resistenza',
    level: 'intermedio',
    description:
      'Circuito a stazioni (piegamenti, squat, plank, jumping jack) per resistenza mista.',
    sets: '3 giri, 40″ lavoro / 20″ recupero',
    tips: 'Qualità del movimento prima della velocità. Idratati tra i giri.',
    youtubeId: 'ml6cT4AZdqI',
  },

  // ——— Avanzato ———
  {
    id: 'a-corsa-1',
    name: 'Corsa intervallata (HIIT)',
    category: 'corsa',
    level: 'avanzato',
    description:
      'Intervalli ad alta intensità per migliorare VO2 e ritmo da prova.',
    sets: '8×400 m veloci con recupero di camminata/jog',
    tips: 'Riscaldamento obbligatorio. Non fare HIIT tutti i giorni.',
    youtubeId: 'aQ9ygaXjoB0',
  },
  {
    id: 'a-forza-1',
    name: 'Burpee + squat jump',
    category: 'forza',
    level: 'avanzato',
    description: 'Potenza e capacità di lavoro sotto fatica.',
    sets: '5 serie × 8–10 ripetizioni',
    tips: 'Atterraggio morbido, core attivo, pausa se la tecnica cala.',
    youtubeId: 'auBLPXO8Fww',
  },
  {
    id: 'a-pieg-1',
    name: 'Piegamenti avanzati / diamante',
    category: 'piegamenti',
    level: 'avanzato',
    description: 'Varianti più impegnanti per petto, tricipiti e core.',
    sets: '5 serie × 15–25 ripetizioni (miste)',
    tips: 'Alterna standard, diamante e piegamenti lenti eccentrica.',
    youtubeId: 'Jf5_PjcDWEg',
  },
  {
    id: 'a-add-1',
    name: 'V-up / hanging knee raise simulato',
    category: 'addominali',
    level: 'avanzato',
    description: 'Addominali ad alta richiesta di controllo e forza.',
    sets: '4 serie × 12–15 ripetizioni',
    tips: 'Movimento controllato, evita di inarcare la zona lombare.',
    youtubeId: 'iP2fjvG0g3w',
  },
  {
    id: 'a-res-1',
    name: 'Test simulato completo',
    category: 'resistenza',
    level: 'avanzato',
    description:
      'Sessione che simula una prova fisica tipica: corsa + piegamenti + addominali.',
    sets: '1–2 volte a settimana (giorno di “prova”)',
    tips: 'Registra tempi e ripetizioni nella sezione Progressi. Confronta settimana per settimana.',
    youtubeId: 'ml6cT4AZdqI',
  },
];

export const categoryLabels: Record<Exercise['category'], string> = {
  corsa: 'Corsa',
  forza: 'Forza',
  piegamenti: 'Piegamenti',
  addominali: 'Addominali',
  resistenza: 'Resistenza',
};
