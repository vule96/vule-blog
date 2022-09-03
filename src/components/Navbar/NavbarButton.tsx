import Icon from '@mdi/react';
import type { ComponentProps } from 'react';
import type { FC } from 'src/types/fc';
import { styled } from '~/stitches';
import { Button } from '../Button';

const StyledNavbarButton = styled(Button, {
  p: 0,
  gap: 0,
  color: '$accent',
  height: '42px',
  width: '42px',
  backgroundColor: '$transparent',
  hocus: {
    backgroundColor: 'rgba($colors$toolbar-glow / .1)',
    transform: 'translateY(0)',
  },
});

interface NavbarButtonProps extends ComponentProps<typeof StyledNavbarButton> {
  iconPath: string;
  iconSize?: number;
}

export const NavbarButton: FC<NavbarButtonProps> = (props) => {
  const { iconPath, iconSize, ...rest } = props;
  return (
    <StyledNavbarButton {...rest}>
      <Icon path={iconPath} size={iconSize} />
    </StyledNavbarButton>
  );
};

export const MobileMenu = styled(NavbarButton, {
  '& > svg': {
    transition: 'transform ease-in-out .2s',
    transform: 'rotate(0) scale(1)',
  },
  '@tablet-sm': {
    hidden: true,
  },
  '&[aria-expanded="true"]': {
    '& > svg': {
      transform: 'rotate(45deg) scale(1.15)',
    },
  },
});
