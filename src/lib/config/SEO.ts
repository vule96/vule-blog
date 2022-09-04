import { DefaultSeoProps, SocialProfileJsonLdProps } from 'next-seo';
import type { StaticImageData } from 'next/image';
import * as config from '.';

import chrome192Png from 'public/static/favicons/android-chrome-192x192.png';
import chrome512Png from 'public/static/favicons/android-chrome-512x512.png';
import appleTouchIconPng from 'public/static/favicons/apple-touch-icon.png';
import faviconIco from 'public/static/favicons/favicon.ico';
import faviconPng from 'public/static/favicons/favicon.png';
import maskable192Png from 'public/static/favicons/maskable-192x192.png';
import maskable512Png from 'public/static/favicons/maskable-512x512.png';
import meJpg from 'public/static/images/avatar.jpeg';

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
        url: `${config.baseUrl}${meJpg.src}`,
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
    {
      rel: 'icon',
      href: faviconIco.src,
    },
    {
      rel: 'icon',
      href: faviconPng.src,
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      href: appleTouchIconPng.src,
      sizes: `${appleTouchIconPng.width}x${appleTouchIconPng.height}`,
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'alternate',
      href: '/feed.xml',
      type: 'application/rss+xml',
      // @ts-expect-error
      title: `${config.siteName} (RSS)`,
    },
    {
      rel: 'alternate',
      href: '/feed.atom',
      type: 'application/atom+xml',
      // @ts-expect-error
      title: `${config.siteName} (Atom)`,
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

export const favicons: Record<string, StaticImageData> = {
  faviconIco,
  faviconPng,
  appleTouchIconPng,
  chrome512Png,
  chrome192Png,
  maskable512Png,
  maskable192Png,
  meJpg,
};
