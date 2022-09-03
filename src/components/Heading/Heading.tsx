import {
  GradientOption,
  gradientOptionsArray,
  gradientVariants,
} from 'src/lib/stitches/utils/gradient';
import { shadowVariants } from 'src/lib/stitches/utils/shadow';
import { styled, type StitchesCSS } from '~/stitches';

export const gradientEnabledCss = {
  textShadow: 'none',
  color: '$transparent',
  background: 'linear-gradient(to right, $$gradientStart, $$gradientEnd)',
  backgroundClip: 'text',
};

interface GradientCompoundVariantCss {
  gradient: GradientOption;
  css: StitchesCSS;
}

const mapGradientOptionsToCss = (): GradientCompoundVariantCss[] => {
  return gradientOptionsArray.map((key) => {
    return {
      gradient: key,
      css: {
        dark: gradientEnabledCss,
      },
    };
  });
};

export const Heading = styled('h1', {
  $$textShadowSize: '2px',
  display: 'inline-block',
  alignItems: 'center',
  alignSelf: 'flex-start',
  textShadow: '$$textShadowSize $$textShadowSize 0 $$textShadowColor',

  dark: { textShadow: 'none' },

  variants: {
    gradient: gradientVariants(),
    shadow: shadowVariants(),
    forceGradient: {
      true: gradientEnabledCss,
    },
  },

  compoundVariants: mapGradientOptionsToCss(),
});
