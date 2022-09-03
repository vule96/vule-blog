import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { About as AboutSection } from 'src/components/Section';

const About: NextPage = () => {
  return (
    <>
      <NextSeo
        title='About'
        description={'Learn a bit about me, my career and more'}
      />
      <AboutSection />
    </>
  );
};

export default About;
