import { ThemeProvider } from 'contexts/ThemeContext';
import { globalStyles, themeClassNames } from 'lib/styles/stitches.config';
import { NextPage } from 'next';

import type { AppProps as NextAppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import Layout from 'src/components/Layout';

// https://nextjs.org/docs/basic-features/layouts#with-typescript
export type AppProps = NextAppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // inject body styles defined in ../lib/styles/stitches.config.ts
  globalStyles();

  // allow layout overrides per-page, but default to plain `<Layout />`
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <ThemeProvider classNames={themeClassNames}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
