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
    label: 'Dołącz do beta testów',
    href: 'https://app.aitherapy.support/betatester',
    external: true,
  },
  {
    label: 'Bezpieczeństwo',
    href: '/bezpieczenstwo/',
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
