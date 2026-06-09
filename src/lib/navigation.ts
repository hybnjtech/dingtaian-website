export interface NavItem {
  key: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { key: 'home', href: '/' },
  {
    key: 'about',
    href: '/about',
    children: [
      { key: 'overview', href: '/about/overview' },
      { key: 'team', href: '/about/team' },
    ],
  },
  {
    key: 'research',
    href: '/research',
    children: [
      { key: 'directions', href: '/research/directions' },
      { key: 'achievements', href: '/research/achievements' },
      { key: 'publications', href: '/research/publications' },
    ],
  },
  {
    key: 'services',
    href: '/services',
    children: [
      { key: 'consulting', href: '/services/consulting' },
      { key: 'assessment', href: '/services/assessment' },
      { key: 'engineering', href: '/services/engineering' },
    ],
  },
  {
    key: 'news',
    href: '/news',
    children: [
      { key: 'industry', href: '/news/industry' },
    ],
  },
  { key: 'academic', href: '/academic' },
  { key: 'contact', href: '/contact' },
];
