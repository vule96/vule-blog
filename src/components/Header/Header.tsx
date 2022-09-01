import Avatar from 'src/components/Avatar';
import { Menu } from 'src/components/Menu';
import { styled, theme } from 'lib/styles/stitches.config';
import type { ComponentProps } from 'react';

const Wrapper = styled('header', {
  width: '100%',
  height: '4.5em',
  padding: '0.7em 1.5em',
  borderBottom: `1px solid ${theme.colors.kindaLight}`,
  backgroundColor: theme.colors.backgroundHeader,
  transition: `background ${theme.transitions.fade}, border ${theme.transitions.fade}`,
  zIndex: 9999,

  backdropFilter: 'saturate(180%) blur(5px)',

  '@medium': {
    padding: '0.75em 1.25em',
    height: '5.9em',
  },
});

const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: theme.sizes.maxLayoutWidth,
  margin: '0 auto',
});

const ResponsiveMenu = styled(Menu, {
  '@medium': {
    maxWidth: '325px',
  },

  '@small': {
    maxWidth: '225px',
  },
});

export type HeaderProps = ComponentProps<typeof Wrapper>;

const Header = ({ ...rest }: HeaderProps): JSX.Element => {
  return (
    <Wrapper {...rest}>
      <Nav>
        <Avatar />
        <ResponsiveMenu />
      </Nav>
    </Wrapper>
  );
};

export default Header;
