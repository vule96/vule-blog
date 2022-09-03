import type { FC } from 'src/types/fc';
import { keyframes, styled } from '~/stitches';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

const pageTransition = keyframes({
  '0%': { transform: 'scale(0.975)', opacity: 0 },
  '100%': { transform: 'scale(1)', opacity: 1 },
});

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  zIndex: 0,
  pt: 'calc($$totalToolbarHeight + $$verticalContentPadding)',
  pb: '$$verticalContentPadding',
  '@tablet-sm': {
    pt: 'calc($$totalToolbarHeight + $$verticalContentPadding + 4px)',
  },
  canAnimate: {
    animationName: pageTransition as any,
    animationDuration: '300ms',
    animationDelay: '150ms',
    animationFillMode: 'backwards',
  },
});

const Layout: FC = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
