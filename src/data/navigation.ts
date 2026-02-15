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
    label: 'Zostań beta testerem',
    href: 'https://app.aitherapy.support/betatester',
    external: true,
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
