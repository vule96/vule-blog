import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

// web fonts
import { Inter, RobotoMono } from './src/lib/stitches/fonts';
import {
  breakpoints,
  colors,
  darkThemeColors,
  fonts,
  fontSizes,
  spaces,
  utils,
} from 'src/lib/stitches';

// https://stitches.dev/docs/typescript#type-a-css-object
export type StitchesCSS = Stitches.CSS<typeof stitchesConfig>;

const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`;

export const {
  styled,
  css,
  getCssText,
  globalCss,
  keyframes,
  createTheme,
  theme,
  config: stitchesConfig,
} = createStitches({
  theme: {
    colors,
    fonts: {
      system: systemFont,
      inter: `${fonts.Inter.name.regular}, ${systemFont}`,
      interVar: `${fonts.Inter.name.variable}, ${systemFont}`,
      roboto: `${fonts.RobotoMono.name.regular}, ${systemFont}`,
      robotoVar: `${fonts.RobotoMono.name.variable}, ${systemFont}`,
    },
    sizes: {
      maxLayoutWidth: '960px',
    },
    fontSizes,
    space: spaces as { [x: string]: string },
  },
  utils,
  media: {
    ...breakpoints,
    hover: '(any-hover: hover)',
    animations: '(prefers-reduced-motion: no-preference)',
    reduceMotion: '(prefers-reduced-motion: reduce)',
  },
});

export const darkTheme = createTheme('dark', {
  colors: darkThemeColors,
});

export const globalStyles = globalCss({
  '@font-face': [...Inter.family, ...RobotoMono.family],
  'html, body': {
    useFont: 'inter',
    accentColor: '$colors$accent',
  },
  'h1, h2, h3, h4, h5, h6, button': {
    useFont: 'inter',
  },
  '#__next': {
    $$totalToolbarHeight: '64px',
    $$scrollMargin: 'calc($$totalToolbarHeight + $space$8)',
    $$verticalContentPadding: '$space$24',
    '@tablet-sm': {
      $$totalToolbarHeight: '68px',
      $$scrollMargin: 'calc($$totalToolbarHeight + $space$16)',
      $$verticalContentPadding: '$space$30',
    },
    '@tablet-lg': {
      $$verticalContentPadding: '$space$36',
    },
    '& section': {
      scrollMarginTop: '$$scrollMargin',
    },
  },
  '@reduceMotion': {
    '*, *::after, *::before': {
      animationDuration: '1ms !important',
      animationDelay: '-1ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '1ms !important',
      transitionDelay: '-1ms !important',
    },
  },
});

export const preloadFonts = [...Inter.preloads, ...RobotoMono.preloads];

// theme classnames are generated dynamically by stitches, so have ThemeProvider pull them from there
export const themeClassNames = {
  light: theme.className,
  dark: darkTheme.className,
};

// local storage key
export const themeStorageKey = 'theme';
