import Link from 'src/components/Link';

import { styled, theme } from 'stitches.config';
import * as config from 'src/lib/config';
import type { ComponentProps } from 'react';

const Wrapper = styled('footer', {
  width: '100%',
  padding: '1.25em 1.5em',
  // borderTop: `1px solid ${theme.colors.kindaLight}`,
  // backgroundColor: theme.colors.backgroundOuter,
  // color: theme.colors.mediumDark,
  // transition: `background ${theme.transitions.fade}, border ${theme.transitions.fade}`,

  '@medium': {
    padding: '1em 1.25em',
  },
});

const Row = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: theme.sizes.maxLayoutWidth,
  margin: '0 auto',
  justifyContent: 'space-between',
  fontSize: '0.85em',
  lineHeight: 2.3,

  '@medium': {
    fontSize: '0.8em',
    display: 'block',
  },
});

const PlainLink = styled(Link, {
  // color: theme.colors.mediumDark,
});

export type FooterProps = ComponentProps<typeof Wrapper>;

const Footer = ({ ...rest }: FooterProps): JSX.Element => {
  return (
    <Wrapper {...rest}>
      <Row>
        <div>
          Content{' '}
          <PlainLink href='/license/' title={config.license} underline={false}>
            licensed under {config.licenseAbbr}
          </PlainLink>
          ,{' '}
          <PlainLink
            href='/previously/'
            title='Previously on...'
            underline={false}
          >
            {config.copyrightYearStart}
          </PlainLink>{' '}
          – {new Date(process.env.RELEASE_DATE ?? Date.now()).getUTCFullYear()}.
        </div>
      </Row>
    </Wrapper>
  );
};

export default Footer;
