import { mdiMagnify, mdiRss } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from 'react';
import type { FC } from 'src/types/fc';

import { styled } from '~/stitches';
import { LinkButton } from '../Button';
import { Heading } from '../Heading';
import { TextField } from '../TextField';
import { Section } from './Section';

const BlogHeader = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$16',
  '@tablet-sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const BlogButtons = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '$16',
  '@tablet-sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const RssLink = styled(LinkButton, {
  backgroundColor: '#f26522',
  dark: { backgroundColor: '#f37438' },
  hocus: {
    backgroundColor: '#da5b1f',
    dark: { backgroundColor: '#f26522' },
  },
});

export const Blog: FC = (props) => {
  const [search, setSearch] = useState('');

  const renderSearchComponents = (): JSX.Element => {
    return (
      <>
        <TextField
          iconPath={mdiMagnify}
          type={'text'}
          name={'search-input'}
          label={'Search blog posts'}
          placeholder={'Search blog posts...'}
          value={search}
          onChange={setSearch}
          hideLabel
        />
      </>
    );
  };

  return (
    <Section id={'blog'} css={{ gap: 'calc($$verticalContentPadding / 1.5)' }}>
      <BlogHeader>
        <Heading as={'h2'} shadow={'yellow'} gradient={'yellow-to-orange'}>
          Blog
        </Heading>
        <BlogButtons>
          <RssLink
            title={'RSS feed'}
            href={'/feed.xml'}
            withShadow
            openInNewTab
          >
            <Icon path={mdiRss} size={0.9} />
            RSS Feed
          </RssLink>
        </BlogButtons>
      </BlogHeader>
      {renderSearchComponents()}
    </Section>
  );
};
