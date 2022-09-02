import Head from 'next/head';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { SkipToContentLink, SkipToContentTarget } from '../SkipToContent';
import useTheme from 'hooks/useTheme';
import { styled, theme, darkTheme } from 'stitches.config';
import type { ComponentProps } from 'react';

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Default = styled('main', {
  width: '100%',
  padding: '1.5em',
});

const Container = styled('div', {
  maxWidth: theme.sizes.maxLayoutWidth,
  margin: '0 auto',
  display: 'block',
});

const StickyHeader = styled(Header, {
  position: 'sticky',
  top: 0,
});

const FlexedFooter = styled(Footer, {
  flex: 1,
});

export type LayoutProps = ComponentProps<typeof Flex> & {
  container?: boolean;
};

const Layout = ({
  container = true,
  children,
  ...rest
}: LayoutProps): JSX.Element => {
  const { activeTheme } = useTheme();

  return (
    <>
      <Head>
        <meta
          // dynamically set browser theme color to match the background color; default to light for SSR
          name='theme-color'
          content={
            (activeTheme === 'dark' ? darkTheme : theme)?.colors
              ?.backgroundOuter?.value
          }
        />
      </Head>

      <SkipToContentLink />

      <Flex {...rest}>
        <StickyHeader />

        {container ? (
          <Default>
            <SkipToContentTarget />
            <Container>{children}</Container>
          </Default>
        ) : (
          <>
            <SkipToContentTarget />
            {children}
          </>
        )}

        <FlexedFooter />
      </Flex>
    </>
  );
};

export default Layout;
