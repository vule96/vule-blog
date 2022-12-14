/* eslint-disable max-len */
import type { FC } from 'src/types/fc';

// import { Animoji, InstaFeed } from '@/components/compounds';

import { styled } from '~/stitches';
import { Animoji } from '../Animoji';
import { Heading } from '../Heading';
import { Link } from '../Link';
import { Section } from './Section';

// const PhotoFigure = styled('figure', {
//   display: 'flex',
//   flexDirection: 'column',
//   mt: 'calc($$verticalContentPadding / 1.5)',
//   mb: 'calc($$verticalContentPadding / 2)',
//   '& img': {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '$space$8',
//     border: '1px solid $divider',
//   },
// });

const Intro = styled('p', {
  color: '$text-primary',
  mt: '$6',
  mb: '$20',
  fontSize: '$sm',
});

const Paragraph = styled(Intro, {
  color: '$text-secondary',
  my: '$10',
  fontSize: '$xs',
});

// export const About: FC<{ image: RandomPageImage }> = ({ image }) => {
export const About: FC = ({ image }) => {
  //   const hasMounted = useHasMounted();

  //   const photoComponent = useMemo(() => {
  //     if (!hasMounted) return null;
  //     return (
  //       <PhotoFigure>
  //         <Img
  //           src={`/static/images/about/${image.key}.jpg`}
  //           alt={image.alt}
  //           quality={100}
  //           width={image?.width || 666}
  //           height={image?.height || 278}
  //           placeholder={'blur'}
  //           blurDataURL={image?.base64 || ''}
  //           css={{ aspectRatio: '21 / 9', width: '100%', height: 'auto' }}
  //           priority
  //         />
  //         <figcaption>📸&nbsp;&nbsp;{image.alt}</figcaption>
  //       </PhotoFigure>
  //     );
  //   }, [hasMounted, image]);

  return (
    <Section id={'about'}>
      <Heading as={'h2'} shadow={'blue'} gradient={'blue-to-green'}>
        About
      </Heading>

      {/* {photoComponent} */}

      <Intro>
        I am{' '}
        <Link title={'Home page'} href={'/'}>
          Vu Le
        </Link>
        , a front-end software engineer based in{' '}
        <Link
          title={'Vietnam on Google Maps'}
          href={
            'https://www.google.com/maps/place/H%E1%BB%93+Ch%C3%AD+Minh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/'
          }
        >
          Vietnam 🇻🇳
        </Link>
        .
      </Intro>

      <Paragraph>
        I am creative and passionate about design and technology so I always try
        to craft great-looking software products.
      </Paragraph>

      <Paragraph>
        Before getting into software development, I wanted to be a mechatronics
        engineer and build robots. When I started programming my first robots, I
        realized what my real passion was and started learning more about
        software development.
      </Paragraph>

      <Paragraph>
        When not coding, I like to watch TV shows and movies, play some games
        with friends or hang out with them. I&apos;m also{' '}
        <Link title={'Dashboard page'} href={'/dashboard'}>
          listening to music
        </Link>{' '}
        most of the time. According to Spotify Wrapped, I listened to 130437
        minutes of music in 2021. 😁
      </Paragraph>

      <Paragraph>
        I consider myself a curious and inquisitive person, so on my spare time
        I like to work on{' '}
        <Link title={'Projects page'} href={'/projects'}>
          side projects
        </Link>
        , try to contribute to open source software and aim to constantly learn
        something new to improve my skillset.
      </Paragraph>

      <Paragraph>
        Learn about the hardware, software and tools I use, on my{' '}
        <Link title={'Uses page'} href={'/uses'}>
          uses page
        </Link>
        . Or even more about me on{' '}
        <Link title={'Polywork timeline'} href={'https://timeline.jahir.dev/'}>
          my timeline
        </Link>
        .<br />
        And last but not least, please don&apos;t hesitate to{' '}
        <Link title={'Contact page'} href={'/contact'}>
          contact me
        </Link>
        !
      </Paragraph>
      <Animoji
        css={{
          mx: 'auto',
          mt: 'calc($$verticalContentPadding - $10)',
        }}
      />
      {/* <InstaFeed /> */}
    </Section>
  );
};
