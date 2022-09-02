import Link from 'src/components/Link';

import type { ComponentProps } from 'react';

export type AvatarProps = Omit<ComponentProps<typeof Link>, 'href'>;

const Avatar = ({ ...rest }: AvatarProps): JSX.Element => {
  return (
    <></>
    // <SelfieLink
    //   href='/'
    //   rel='author'
    //   title={authorName}
    //   underline={false}
    //   {...rest}
    // >
    //   <CircleImage
    //     src={avatarJpg}
    //     alt={`Photo of ${authorName}`}
    //     width={70}
    //     height={70}
    //     quality={60}
    //     placeholder='empty'
    //     inline
    //     priority
    //   />
    //   <Name>{authorName}</Name>
    // </SelfieLink>
  );
};

export default Avatar;
