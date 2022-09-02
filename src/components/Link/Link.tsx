import NextLink from 'next/link';
import objStr from 'obj-str';
import { styled, theme, stitchesConfig } from 'stitches.config';
import { baseUrl } from 'lib/config';
import type { ComponentProps } from 'react';

const StyledLink = styled(NextLink, {
  color: theme.colors.link,
  textDecoration: 'none',

  variants: {
    underline: {
      true: {
        ...stitchesConfig.utils.setUnderlineColor({
          color: '$colors$linkUnderline',
        }),

        backgroundImage: 'linear-gradient($$underlineColor, $$underlineColor)',
        backgroundPosition: '0% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '0% 2px',
        paddingBottom: '3px',

        '@media (prefers-reduced-motion: no-preference)': {
          transition: `background-size ${theme.transitions.linkHover}`,
        },

        '&:hover, &:focus-visible': {
          backgroundSize: '100% 2px',
        },
      },
      false: {},
    },
  },
});

export type LinkProps = ComponentProps<typeof StyledLink> & {
  openInNewTab?: boolean;
};

const Link = ({
  href,
  rel,
  target,
  prefetch = false,
  underline = true,
  openInNewTab,
  ...rest
}: LinkProps): JSX.Element => {
  const isExternal =
    typeof href === 'string' &&
    !(href.startsWith('/') || href.startsWith('#') || href.startsWith(baseUrl));

  if (openInNewTab ?? isExternal) {
    return (
      <StyledLink
        href={href}
        target={target ?? '_blank'}
        rel={objStr({
          [`${rel}`]: rel,
          noopener: true,
          noreferrer: isExternal,
        })}
        underline={underline}
        {...rest}
      />
    );
  }

  return (
    <StyledLink {...{ href, rel, target, prefetch, underline, ...rest }} />
  );
};

export default Link;
