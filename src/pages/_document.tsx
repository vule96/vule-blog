import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import * as config from 'lib/config';
import { getCssText, themeClassNames, themeStorageKey } from 'stitches.config';
import { Inter, RobotoMono } from 'lib/stitches/fonts';
import ThemeScript from 'src/components/ThemeScript';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang={config.siteLocale} className={themeClassNames.light}>
        <Head>
          {/* inject a small script to set/restore the user's theme ASAP */}
          <ThemeScript
            id='restore-theme'
            {...{ themeClassNames, themeStorageKey }}
          />

          {[...Inter.preloads, ...RobotoMono.preloads].map(
            ({ href, key, type }) => (
              <link
                key={key}
                rel='preload'
                as='font'
                {...{ type, href }}
                crossOrigin='anonymous'
              />
            )
          )}

          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
