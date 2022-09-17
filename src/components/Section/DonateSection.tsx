import { FC } from 'src/types/fc';

import { Heading } from '../Heading';

import { Section } from './Section';

// export const Contact: FC<{ image: RandomPageImage }> = ({ image }) => {
export const Donate: FC = () => {
  return (
    <Section id={'donate'}>
      <Heading as={'h2'} shadow={'brand'} gradient={'brand-to-blue'}>
        Donate
      </Heading>
    </Section>
  );
};
