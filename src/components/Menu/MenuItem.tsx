import Link from 'src/components/Link';
import { styled, theme } from 'lib/styles/stitches.config';

const MenuLink = styled(Link, {
  display: 'inline-block',
  color: theme.colors.mediumDark,
  padding: '0.6em',

  variants: {
    current: {
      true: {
        marginBottom: '-0.2em',
        borderBottom: `0.2em solid ${theme.colors.linkUnderline}`,
      },
      false: {
        '&:hover, &:focus-visible': {
          marginBottom: '-0.2em',
          borderBottom: `0.2em solid ${theme.colors.kindaLight}`,
        },
      },
    },
  },
});

const Icon = styled('svg', {
  width: '1.25em',
  height: '1.25em',
  verticalAlign: '-0.3em',

  '@medium': {
    width: '1.8em',
    height: '1.8em',
  },
});

const Label = styled('span', {
  fontSize: '0.95em',
  fontWeight: 500,
  marginLeft: '0.7em',

  '@medium': {
    display: 'none',
  },
});

export interface MenuItemProps {
  href?: string;
  text?: string;
  current?: boolean;
  className?: string;
  icon: any;
}

const MenuItem = ({
  icon: ItemIcon,
  href,
  text,
  current,
  className,
}: MenuItemProps): JSX.Element => {
  const linkContent = (
    <>
      <Icon as={ItemIcon} />
      {text && <Label>{text}</Label>}
    </>
  );

  if (href) {
    return (
      <MenuLink
        href={href}
        className={className}
        current={current}
        title={text}
        underline={false}
        aria-label={text}
      >
        {linkContent}
      </MenuLink>
    );
  }

  return linkContent;
};

export default MenuItem;
