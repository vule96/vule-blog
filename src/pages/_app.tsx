import { ThemeProvider } from 'contexts/ThemeContext';
import config from 'lib/config';
import { defaultSeo, socialProfileJsonLd } from 'lib/config/SEO';
import { globalStyles, themeClassNames } from 'stitches.config';
import { NextPage } from 'next';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

import type { AppProps as NextAppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import Layout from 'src/components/Layout';

export type AppProps = NextAppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  // get this page's URL with full domain, and hack around query parameters and anchors
  // NOTE: this assumes trailing slashes are enabled in next.config.js
  const canonical = `${config.baseUrl}${
    router.pathname === '/' ? '' : router.pathname
  }/`;

  globalStyles();

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <DefaultSeo
        // all SEO config is in ../lib/config/seo.ts except for canonical URLs, which require access to next router
        {...defaultSeo}
        canonical={canonical}
        openGraph={{
          ...defaultSeo.openGraph,
          url: canonical,
        }}
        // don't let search engines index branch/deploy previews
        dangerouslySetAllPagesToNoIndex={
          process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
        }
        dangerouslySetAllPagesToNoFollow={
          process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
        }
      />
      <SocialProfileJsonLd {...socialProfileJsonLd} />
      <ThemeProvider classNames={themeClassNames}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
