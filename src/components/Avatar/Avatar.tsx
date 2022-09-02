import Link from 'src/components/Link';
import Image from 'src/components/Image';
import { styled, theme } from 'stitches.config';
import { authorName } from 'lib/config';
import type { ComponentProps } from 'react';

import avatarJpg from 'public/static/images/avatar.jpeg';

const CircleImage = styled(Image, {
  width: '50px',
  height: '50px',
  border: `1px solid ${theme.colors.light}`,
  borderRadius: '50%',

  '@medium': {
    width: '70px',
    height: '70px',
    borderWidth: '2px',
  },
});

const SelfieLink = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  color: theme.colors.mediumDark,

  '&:hover, &:focus-visible': {
    color: theme.colors.link,

    '@medium': {
      [`${CircleImage}`]: {
        borderColor: theme.colors.linkUnderline,
      },
    },
  },
});

const Name = styled('span', {
  margin: '0 0.6em',
  fontSize: '1.2em',
  fontWeight: 500,
  lineHeight: 1,

  '@medium': {
    display: 'none',
  },
});

export type AvatarProps = Omit<ComponentProps<typeof Link>, 'href'>;

const Avatar = ({ ...rest }: AvatarProps): JSX.Element => {
  return (
    <SelfieLink
      href='/'
      rel='author'
      title={authorName}
      underline={false}
      {...rest}
    >
      <CircleImage
        src={avatarJpg}
        alt={`Photo of ${authorName}`}
        width={70}
        height={70}
        quality={60}
        placeholder='empty'
        inline
        priority
      />
      <Name>{authorName}</Name>
    </SelfieLink>
  );
};

export default Avatar;
