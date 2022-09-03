import { FC } from 'react';
import { DotsDivider } from 'src/components/Divider';
import { Intro as IntroSection } from 'src/components/Intro';
import { Skills as SkillsSection } from 'src/components/Skills';

const Home: FC = () => {
  return (
    <>
      <IntroSection />
      <DotsDivider />
      <SkillsSection />
    </>
  );
};

export default Home;
