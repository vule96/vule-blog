import { FooterLinkProps } from 'src/components/Footer/FooterLinksGroup';

export const primaryLinks: FooterLinkProps[] = [
  {
    title: 'About',
    href: '/about',
    gradient: 'blue-to-green',
  },
  {
    title: 'Blog',
    href: '/blog',
    gradient: 'yellow-to-orange',
  },
  {
    title: 'Projects',
    href: '/projects',
    gradient: 'red-to-purple',
  },
  {
    title: 'Contact',
    href: '/contact',
    gradient: 'brand-to-blue',
  },
];

export const secondaryLinks: FooterLinkProps[] = [
  {
    title: 'Uses',
    href: '/uses',
    gradient: 'yellow-to-orange',
  },
  {
    title: 'Donate',
    href: '/donate',
    gradient: 'orange-to-red',
  },
  {
    title: 'Inspiration',
    href: '/inspiration',
    gradient: 'brand-to-blue',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    gradient: 'purple-to-brand',
  },
];

export const metaLinks: FooterLinkProps[] = [
  {
    title: 'RSS',
    href: '/feed.xml',
    gradient: 'yellow-to-orange',
    a11yTitle: 'RSS Feed',
    openInNewTab: true,
  },
];
