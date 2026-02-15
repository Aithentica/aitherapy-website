export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ela',
    role: 'Psychoterapeutka CBT',
    quote:
      'Często mam sesje w różnych placówkach i noszę ze sobą wielką torbę z teczkami i notatkami z sesji - nie mogę się doczekać kiedy ruszycie.',
    rating: 5,
  },
  {
    name: 'Małgorzata',
    role: 'Psychoterapeutka CBT',
    quote:
      'Dla mnie to byłoby bardzo niesamowite ułatwienie pracy, bardzo często zmieniam miejsce pobytu, pracuję na kilku portalach i szukanie notatek to koszmar',
    rating: 5,
  },
  {
    name: 'Marta',
    role: 'Psycholog, Psychoterapeutka TS',
    quote:
      'Chętnie zaangażuję się z moim zespołem kilkunastu osób - terapeutów schematu - w prace nad projektem - bardzo ciekawe - i wydaje się pomocne',
    rating: 5,
  },
];
