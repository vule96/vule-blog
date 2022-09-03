import * as config from 'src/lib/config';

import type { GetServerSideProps } from 'next';
import { favicons } from 'src/lib/config/SEO';

export const getServerSideProps: GetServerSideProps<
  Record<string, never>
> = async (context) => {
  const { res } = context;

  // https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest
  res.setHeader('content-type', 'application/manifest+json; charset=utf-8');
  // cache on edge for one week
  res.setHeader(
    'cache-control',
    'public, max-age=0, s-maxage=604800, stale-while-revalidate'
  );

  const manifest = {
    name: config.siteName,
    short_name: config.siteDomain,
    description: config.longDescription,
    lang: config.siteLocale,
    icons: [
      {
        src: favicons.chrome512Png.src,
        sizes: `${favicons.chrome512Png.width}x${favicons.chrome512Png.height}`,
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: favicons.chrome192Png.src,
        sizes: `${favicons.chrome192Png.width}x${favicons.chrome192Png.height}`,
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: favicons.maskable512Png.src,
        sizes: `${favicons.maskable512Png.width}x${favicons.maskable512Png.height}`,
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: favicons.maskable192Png.src,
        sizes: `${favicons.maskable192Png.width}x${favicons.maskable192Png.height}`,
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    display: 'browser',
    start_url: '/',
  };

  res.write(JSON.stringify(manifest));
  res.end();

  return {
    props: {},
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (): null => null;
