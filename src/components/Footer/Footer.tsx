import { metaLinks, primaryLinks, secondaryLinks } from 'src/lib/config/footer';
import type { FC } from 'src/types/fc';
import { styled, theme } from '~/stitches';
import { Logo } from '../Logo';

import { FooterLink, FooterLinksGroup } from './FooterLinksGroup';
import { SocialLinks } from './SocialLinks';

const StyledFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  py: '$$verticalContentPadding',
  px: '$14',
  gap: '$$verticalContentPadding',
  borderTop: '1px solid $divider',
  '@tablet-md': {
    px: 0,
  },
});

const InnerFooter = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$16',
  '@tablet-sm': {
    justifyContent: 'space-between',
  },
});

const BrandLink = styled(FooterLink, {
  display: 'inline-flex',
  alignSelf: 'flex-start',
  gap: '$6',
  minHeight: '30px',
  minWidth: '130px',
  '@mobile-md': {
    minWidth: '154px',
  },
  '& > svg': {
    width: '24px',
    height: '24px',
  },
});

const LinksContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'calc($$verticalContentPadding / 2)',
  justifyContent: 'space-between',
  '@mobile-md': {
    justifyContent: 'unset',
  },
  '@tablet-sm': {
    justifyContent: 'space-between',
  },
});

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <LinksContainer>
        <FooterLinksGroup title={'Primary pages links'} links={primaryLinks} />
        <FooterLinksGroup
          title={'Secondary pages links'}
          links={secondaryLinks}
        />
        <FooterLinksGroup meta title={'Meta pages links'} links={metaLinks} />
      </LinksContainer>
      <InnerFooter>
        <BrandLink
          href={'/'}
          title={'Home page'}
          gradient={'brand-to-blue'}
          forceGradient
        >
          <Logo fillColor={theme.colors['gradient-brand']?.value} />
          <span>Vu Le</span>
        </BrandLink>
        <SocialLinks />
      </InnerFooter>
    </StyledFooter>
  );
};
