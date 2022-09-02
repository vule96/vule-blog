import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ComponentProps, useMemo } from 'react';
import type { FC } from 'src/types/fc';

import { styled } from 'stitches.config';

const prefetchBlockList = ['/music', '/static'];

const isLocalLink = (href?: string): boolean | '' | undefined =>
  href && (href.startsWith('/') || href.startsWith('#'));

const StyledLink = styled(NextLink, {
  display: 'inline-block',
  fontWeight: 500,
  color: '$accent',
  hocus: {
    color: '$accent-dark',
    dark: {
      color: '$accent-light',
    },
  },
  variants: {
    underline: {
      true: {
        hocus: {
          textDecoration: 'underline',
          textDecorationThickness: '2px',
          textUnderlineOffset: '2px',
        },
      },
    },
  },
});

interface LinkProps {
  underline?: boolean;
  openInNewTab?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

const Link: FC<ComponentProps<typeof StyledLink> & LinkProps> = (props) => {
  const { href: url, ...otherProps } = props;
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const href: string = url.toString();
  const {
    openInNewTab = !isLocalLink(href),
    underline = true,
    ...rest
  } = otherProps;
  const router = useRouter();

  const shouldPrefetch = useMemo<boolean>(() => {
    if (!router || !router.isReady || openInNewTab) return false;
    if (prefetchBlockList.some((link) => href.startsWith(link))) {
      return false;
    }
    const { asPath: pathname } = router;
    if (href === pathname || href.startsWith('#')) return false;
    const hrefWithoutCurrentPath = href.replace(pathname, '');
    const lastHrefPart = hrefWithoutCurrentPath.substring(
      hrefWithoutCurrentPath.lastIndexOf('/') + 1
    );
    if (href.startsWith(pathname) && lastHrefPart.startsWith('#')) return false;
    return true;
  }, [router, href, openInNewTab]);

  if (openInNewTab) {
    return (
      <StyledLink
        href={href}
        target={'_blank'}
        rel={'noopener noreferrer'}
        aria-label={rest.title}
        {...rest}
        underline={underline}
      />
    );
  }

  return (
    <StyledLink
      {...{ href, prefetch: shouldPrefetch, ...rest }}
      aria-label={rest.title}
      underline={underline}
    />
  );
};

export default Link;
