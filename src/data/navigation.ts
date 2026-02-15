export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Aplikacja',
    href: '/funkcjonalnosci/',
  },
  {
    label: 'Bezpieczeństwo',
    href: '/bezpieczenstwo/',
  },
  {
    label: 'Subskrypcja',
    href: 'https://app.aitherapy.support/pricing',
    external: true,
  },
  {
    label: 'Współpraca',
    href: '/zostan-testerem/',
  },
  {
    label: 'Zespół',
    href: '/o-firmie/',
  },
  {
    label: 'Kontakt',
    href: '/kontakt/',
  },
];
