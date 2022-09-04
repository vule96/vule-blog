import config from 'src/lib/config';
import { FC } from 'src/types/fc';
import { styled } from '~/stitches';
import { Heading } from '../Heading';
import { Link } from '../Link';
import { Section } from './Section';

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: '$$verticalContentPadding',
  mt: 'calc($$verticalContentPadding / 1.5)',
  mb: 'calc($$verticalContentPadding / 2)',
  '@tablet-sm': {
    mt: 'calc($$verticalContentPadding / 2)',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    alignItems: 'center',
  },
  '& > div:first-of-type': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',
  },
});

const Paragraph = styled('p', {
  color: '$text-secondary',
  fontSize: '$xs',
});

const ContactOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: 212,
  '@tablet-sm': {
    maxWidth: '100%',
  },
});

const ContactOption = styled(Link, {
  $$linkColor: '$colors$text-secondary',
  display: 'flex',
  py: '$2',
  gap: '$3',
  color: '$text-secondary',
  justifyContent: 'space-between',
  '@tablet-sm': {
    maxWidth: 306,
    gap: '$$verticalContentPadding',
  },
  hocus: {
    textDecoration: 'none !important',
    color: '$text-primary',
    dark: { textDecoration: 'none', color: '$text-primary' },
    '& > span:last-of-type': {
      color: '$$linkColor',
      dark: { color: '$$linkColor' },
    },
  },
  '& > span:last-of-type': {
    color: '$text-tertiary',
  },
  variants: {
    email: {
      true: {
        $$linkColor: '#d33c30',
        dark: { $$linkColor: '#ec5649' },
        '& > span:last-of-type': {
          userSelect: 'none',
          pointerEvents: 'none',
        },
      },
    },
    twitter: {
      true: {
        $$linkColor: '#1a91da',
        dark: { $$linkColor: '#1da1f2' },
      },
    },
    telegram: {
      true: {
        $$linkColor: '#007ab8',
        dark: { $$linkColor: '#33a0d6' },
      },
    },
    github: {
      true: {
        $$linkColor: '$colors$text-secondary',
        dark: { $$linkColor: '$colors$text-secondary' },
      },
    },
  },
});

// export const Contact: FC<{ image: RandomPageImage }> = ({ image }) => {
export const Contact: FC = () => {
  //   const hasMounted = useHasMounted();

  //   const imageComponent = useMemo(() => {
  //     if (!hasMounted) return null;
  //     return (
  //       <OpenDoodle
  //         src={`/static/images/contact/${image.key}.png`}
  //         alt={image.alt}
  //         size={image.width || 384}
  //         priority
  //       />
  //     );
  //   }, [hasMounted, image]);

  return (
    <Section id={'contact'}>
      <Heading as={'h2'} shadow={'brand'} gradient={'brand-to-blue'}>
        Contact
      </Heading>
      <Grid>
        <div>
          <Paragraph>
            I&apos;m always open to chat, so please don&apos;t hesitate
            contacting me!
          </Paragraph>
          <Paragraph>
            Anyways, please{' '}
            <Link
              title={"Don't just say hello page"}
              href={'https://nohello.net/'}
            >
              don&apos;t just say hello
            </Link>
            .
          </Paragraph>
          <Paragraph css={{ mt: '$12' }}>
            There&apos;s a few ways you can get it touch:
          </Paragraph>
          <ContactOptions>
            <ContactOption title={'Compose an email to Vu Le'} href={'/'} email>
              <span>Email</span>
              <span>{config.authorEmail}</span>
            </ContactOption>
            <ContactOption
              title={'Compose a Twitter direct message for Vu Le'}
              href={'/'}
              twitter
            >
              <span>Twitter</span>
              <span>@{config.authorSocial.twitter}</span>
            </ContactOption>
            <ContactOption
              title={"Vu Le's Telegram profile"}
              href={'/'}
              telegram
            >
              <span>Telegram</span>
              <span>@{config.authorSocial.telegram}</span>
            </ContactOption>
            <ContactOption
              title={"Vu Le's Ask me Anything on GitHub"}
              href={`https://github.com/${config.authorSocial.github}`}
              github
            >
              <span>Ask me Anything</span>
              <span>on GitHub</span>
            </ContactOption>
          </ContactOptions>
        </div>
        {/* {imageComponent} */}
      </Grid>
    </Section>
  );
};
