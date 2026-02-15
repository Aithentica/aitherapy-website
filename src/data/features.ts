export interface Feature {
  emoji: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    emoji: '\uD83C\uDFA4',
    title: 'Inteligentna notatka',
    description:
      'Wi\u0119cej ni\u017c transkrypcja. AI rozr\u00f3\u017cnia m\u00f3wc\u00f3w, wychwytuje interwencje i tworzy ustrukturowan\u0105 notatk\u0119 kliniczn\u0105 (SOAP/BIRP) w mniej ni\u017c 30 sekund.',
  },
  {
    emoji: '\uD83D\uDD12',
    title: 'Bezpiecze\u0144stwo na ka\u017cdym etapie',
    description:
      'Szyfrowanie end-to-end, lokalna anonimizacja danych, pe\u0142na zgodno\u015b\u0107 z RODO i AI Act.',
  },
  {
    emoji: '\uD83E\uDDE0',
    title: 'Konceptualizacja',
    description:
      'Generowanie diagram\u00f3w kognitywnych i modeli b\u0142\u0119dnego ko\u0142a \u2013 jednym klikni\u0119ciem.',
  },
  {
    emoji: '\uD83D\uDCCA',
    title: 'Zestawienia',
    description:
      'Por\u00f3wnanie notatek mi\u0119dzy sesjami i \u015bledzenie wynik\u00f3w kwestionariuszy \u2013 ca\u0142y przebieg terapii na jednym ekranie.',
  },
  {
    emoji: '\uD83E\uDD1D',
    title: 'Wsp\u00f3\u0142praca z superwizorem',
    description:
      'Notatki, konceptualizacje, przebieg terapii \u2013 szybko gotowe do superwizji.',
  },
];
