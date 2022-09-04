import { mdiEyeOutline, mdiFileCodeOutline, mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from 'react';
import type { FC } from 'src/types/fc';
import { styled } from '~/stitches';
import { LinkButton } from '../Button';
import { Heading } from '../Heading';
import { TextField } from '../TextField';
import { Section } from './Section';

const ProjectsHeader = styled('div', {
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

const ProjectsButtons = styled('div', {
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

export const Projects: FC = (props) => {
  const { showFullList } = props;
  const [search, setSearch] = useState('');

  const renderSearchComponents = (): JSX.Element | null => {
    if (!showFullList) return null;
    return (
      <>
        <TextField
          iconPath={mdiMagnify}
          type={'text'}
          name={'search-input'}
          label={'Search projects'}
          placeholder={'Search projects...'}
          value={search}
          onChange={setSearch}
          hideLabel
        />
      </>
    );
  };

  return (
    <Section
      id={'projects'}
      css={{ gap: 'calc($$verticalContentPadding / 1.5)' }}
    >
      <ProjectsHeader>
        <Heading as={'h2'} shadow={'red'} gradient={'red-to-purple'}>
          {!showFullList ? 'Featured ' : ''}Projects
        </Heading>
        <ProjectsButtons>
          <LinkButton
            title={"Vu Le's resume pdf file"}
            href={'/resume'}
            openInNewTab
            outlined
          >
            <Icon path={mdiFileCodeOutline} size={0.9} />
            Resume
          </LinkButton>
          {!showFullList && (
            <LinkButton
              title={'View all projects by Jahir'}
              href={'/projects'}
              withShadow
            >
              <Icon path={mdiEyeOutline} size={0.9} />
              View all
            </LinkButton>
          )}
        </ProjectsButtons>
      </ProjectsHeader>
      {renderSearchComponents()}
    </Section>
  );
};
