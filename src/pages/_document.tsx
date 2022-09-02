import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import * as config from 'src/lib/config';
import { getCssText, preloadFonts } from 'stitches.config';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang={config.siteLocale}>
        <Head>
          {preloadFonts.map((font) => (
            <link
              key={`font-${font.key}`}
              rel={'preload'}
              as={'font'}
              type={font.type}
              href={font.href}
              crossOrigin={'anonymous'}
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
