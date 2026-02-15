export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Aplikacja',
    href: '#',
    children: [
      { label: 'Bezpieczeństwo', href: '/bezpieczenstwo/' },
      { label: 'Funkcjonalności', href: '/funkcjonalnosci/' },
    ],
  },
  {
    label: 'Cennik',
    href: 'https://app.aitherapy.support/pricing',
    external: true,
  },
  {
    label: 'O firmie',
    href: '#',
    children: [
      { label: 'Zespół', href: '/o-firmie/' },
      { label: 'Nasze 5 NIE', href: '/czego-nie-robimy/' },
    ],
  },
  {
    label: 'Współpraca',
    href: '#',
    children: [
      { label: 'Sesje Feedbackowe', href: '/zapisy-na-sesje-feedbackowe/' },
      { label: 'Zostań Testerem', href: '/zostan-testerem/' },
    ],
  },
  {
    label: 'Kontakt',
    href: '/kontakt/',
  },
];
