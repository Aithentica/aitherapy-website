export interface Feature {
  emoji: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    emoji: '\uD83C\uDFA4',
    title: 'Inteligentna Notatka',
    description:
      'Nasze AI nie tylko transkrybuje. Rozróżnia mówców, wyłapuje interwencje terapeutyczne i tworzy ustrukturyzowaną notatkę kliniczną (SOAP/BIRP) w mniej niż 30 sekund.',
  },
  {
    emoji: '\uD83D\uDD12',
    title: 'Bezpieczeństwo Totalne',
    description:
      'Szyfrowanie End-to-End. Dane są anonimizowane lokalnie. Pełna zgodność z RODO i AI Act.',
  },
  {
    emoji: '\uD83D\uDCCA',
    title: 'Konceptualizacja',
    description:
      'Generuj diagramy kognitywne i modele błędnego koła jednym kliknięciem.',
  },
  {
    emoji: '\uD83D\uDCCB',
    title: 'Zestawienia',
    description:
      'Porównuj notatki z kolejnych sesji i przeglądaj wyniki kwestionariuszy wypełnianych przez pacjentów.',
  },
  {
    emoji: '\u26A1',
    title: 'Szybkość',
    description: 'Oszczędzaj do 15h miesięcznie na administracji.',
  },
];
