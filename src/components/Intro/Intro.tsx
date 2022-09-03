import { mdiAccountCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import config from 'src/lib/config';
import { type FC } from 'src/types/fc';

import { styled } from '~/stitches';
import { LinkButton } from '../Button';
import { Heading } from '../Heading';
import { Img } from '../Image';
import { Link } from '../Link';
import { Section } from '../Section';

const IntroSection = styled(Section, {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  rowGap: '$16',
  '@tablet-sm': {
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gridTemplateRows: 'minmax(0, 1fr)',
    columnGap: '$26',
  },
});

const TextsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gridRow: 2,
  '@tablet-sm': {
    gridRow: 1,
  },
});

const Paragraph = styled('p', {
  mt: '$12',
  mb: '$20',
  maxWidth: '325px',
  '@mobile-lg': {
    maxWidth: '410px',
  },
});

const PhotoContainer = styled('div', {
  borderRadius: '50%',
  backgroundColor: '#223e80',
  width: 168,
  height: 168,
});

const Photo = styled(Img, {
  borderRadius: '50%',
  backgroundColor: '$accent-animoji',
  border: '1px solid rgba($toolbar-glow / 0.12)',
  objectFit: 'cover',
  objectPosition: 'center',
  canHover: {
    filter: 'grayscale(100%) contrast(.75) brightness(150%)',
    transition: 'all .35s ease-in-out',
    mixBlendMode: 'hard-light',
    opacity: 0.75,
  },
  hocus: {
    cursor: 'grab',
    filter: 'unset',
    mixBlendMode: 'normal',
    opacity: 1,
  },
});

export const Intro: FC = () => {
  return (
    <IntroSection id={'intro'}>
      <TextsContainer>
        {/* <WavingHello /> */}
        <Heading as={'h2'} shadow={'blue'}>
          I am&nbsp;
          <Heading as={'span'} gradient={'brand-to-blue'}>
            {config.authorName}
          </Heading>
        </Heading>
        <Paragraph>
          Passionate and creative front-end software engineer based in{' '}
          <Link
            title={'Vietnam on Google Maps'}
            href={
              'https://www.google.com/maps/place/H%E1%BB%93+Ch%C3%AD+Minh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/'
            }
          >
            Vietnam 🇻🇳
          </Link>
        </Paragraph>
        <LinkButton title={'About page'} href={'/about'} withShadow>
          <Icon path={mdiAccountCircleOutline} size={1} />
          More about me
        </LinkButton>
      </TextsContainer>
      <PhotoContainer>
        <Photo
          src={'/static/images/avatar.jpeg'}
          alt={"Vu Le's Photo"}
          size={168}
          priority
        />
      </PhotoContainer>
    </IntroSection>
  );
};
