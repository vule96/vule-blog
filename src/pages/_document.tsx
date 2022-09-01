import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import * as config from 'lib/config';
import {
  getCssText,
  themeClassNames,
  themeStorageKey,
} from 'lib/styles/stitches.config';
import { Inter, RobotoMono } from 'lib/styles/fonts';
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

          {/* preload highest priority fonts defined in ../lib/styles/fonts/ */}
          {[...Inter.preloads, ...RobotoMono.preloads].map(({ href, type }) => (
            <link
              key={href}
              rel='preload'
              as='font'
              {...{ type, href }}
              crossOrigin='anonymous'
            />
          ))}

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
