import { mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import { useCallback, useEffect, useState } from 'react';
import { useHasMounted } from 'src/hooks';
import type { FC } from 'src/types/fc';

import { styled } from '~/stitches';
import { Button } from '../Button';

const Fab = styled(Button, {
  zIndex: 2,
  position: 'fixed',
  right: 0,
  bottom: 0,
  mr: '$16',
  mb: '$16',
  p: '$12',
  borderRadius: '50%',
  minHeight: 50,
  maxWidth: 50,
  gap: 0,
  visibility: 'hidden',
  pointerEvents: 'none',
  userSelect: 'none',
  opacity: 0,
  transform: 'translateY(72px)',
  backgroundColor: '$accent-light',
  textTransform: 'uppercase',
  letterSpacing: '0.0625rem',
  fontSize: '$3xs',
  border: '1px solid rgba($colors$toolbar-glow / .12)',
  boxShadow:
    '0 0 1px 1px $colors$divider, 0 0 6px 1px rgba($colors$toolbar-glow / .24)',

  hocus: {
    backgroundColor: '$accent',
    border: '1px solid rgba($colors$toolbar-glow / .24)',
    boxShadow:
      '0 0 1px 1px $colors$divider, 0 0 8px 2px rgba($colors$toolbar-glow / .32)',
  },
  dark: {
    backgroundColor: '$accent-light',
    hocus: {
      backgroundColor: '$accent',
    },
  },

  '& span': {
    hidden: true,
  },

  '@tablet-sm': {
    mr: '$24',
    mb: '$24',
  },

  '@desktop': {
    maxWidth: 'unset',
    mr: '$32',
    mb: '$32',
    p: '$12',
    borderRadius: 9999,
    '& span': {
      visible: 'block',
    },
  },

  variants: {
    shown: {
      true: {
        visible: 'flex',
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
});

const scrollToTop = (): void => {
  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    window.scrollTo(0, 0);
  }
};

export const BackToTop: FC = () => {
  const [showButton, setShowButton] = useState(false);
  const hasMounted = useHasMounted();

  const checkScrollTop = useCallback(() => {
    if (!hasMounted) return;
    const scrolledDistance = window.scrollY || window.pageYOffset;
    const screenHeight = document.body.scrollHeight - window.screen.availHeight;
    try {
      setShowButton(scrolledDistance / screenHeight > 0.3);
    } catch (e) {}
  }, [hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    window.addEventListener('scroll', checkScrollTop);
    checkScrollTop();

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [hasMounted, checkScrollTop]);

  return (
    <Fab title={'Scroll back to top'} onClick={scrollToTop} shown={showButton}>
      <Icon path={mdiChevronUp} size={1} />
    </Fab>
  );
};
