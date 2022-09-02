import { ThemeProvider } from 'src/contexts/ThemeContext';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import config from 'src/lib/config';
import { defaultSeo, socialProfileJsonLd } from 'src/lib/config/SEO';
import { darkTheme, globalStyles } from 'stitches.config';
import { NextPage } from 'next';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

import type { AppProps as NextAppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';
import Layout from 'src/components/Layout';
import 'src/styles/global.scss';

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

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  globalStyles();

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
      <NextThemeProvider
        attribute={'class'}
        defaultTheme={'system'}
        value={{
          light: 'light',
          dark: darkTheme.className,
        }}
      >
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </NextThemeProvider>
    </>
  );
}

export default MyApp;
