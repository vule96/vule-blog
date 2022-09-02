import { DefaultSeoProps, SocialProfileJsonLdProps } from 'next-seo';
import * as config from '.';

// Most of this file simply takes the data already defined in ./config.js and translates it into objects that are
// compatible with next-seo's props:
// https://github.com/garmeeh/next-seo#default-seo-configuration
export const defaultSeo: DefaultSeoProps = {
  defaultTitle: `${config.siteName} – ${config.shortDescription}`,
  titleTemplate: `%s – ${config.siteName}`, // appends `– siteName` to title provided by each page (except home)
  description: config.longDescription,
  openGraph: {
    site_name: config.siteName,
    title: `${config.siteName} – ${config.shortDescription}`,
    locale: config.siteLocale?.replace('-', '_'),
    type: 'website',
    images: [
      {
        // url: `${config.baseUrl}${meJpg.src}`,
        url: `${config.baseUrl}`,
        alt: `${config.siteName} – ${config.shortDescription}`,
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'author',
      content: config.authorName,
    },
  ],
  additionalLinkTags: [
    // {
    //   rel: 'icon',
    //   href: faviconIco.src,
    // },
    // {
    //   rel: 'icon',
    //   href: faviconPng.src,
    //   type: 'image/png',
    // },
    // {
    //   rel: 'apple-touch-icon',
    //   href: appleTouchIconPng.src,
    //   sizes: `${appleTouchIconPng.width}x${appleTouchIconPng.height}`,
    // },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'alternate',
      href: '/feed.xml',
      type: 'application/rss+xml',
      //   title: `${config.siteName} (RSS)`,
    },
    {
      rel: 'alternate',
      href: '/feed.atom',
      type: 'application/atom+xml',
      //   title: `${config.siteName} (Atom)`,
    },
    // {
    //   rel: 'humans',
    //   href: '/humans.txt',
    // },
    // {
    //   rel: 'pgpkey',
    //   href: '/pubkey.asc',
    //   type: 'application/pgp-keys',
    // },
  ],
};

// https://github.com/garmeeh/next-seo#social-profile
export const socialProfileJsonLd: SocialProfileJsonLdProps = {
  type: 'Person',
  name: config.authorName,
  url: `${config.baseUrl}/`,
  sameAs: [
    `${config.baseUrl}/`,
    `https://github.com/${config.authorSocial?.github}`,
    `https://twitter.com/${config.authorSocial?.twitter}`,
    `https://www.linkedin.com/in/${config.authorSocial?.linkedin}/`,
    `https://www.facebook.com/${config.authorSocial?.facebook}`,
  ],
};