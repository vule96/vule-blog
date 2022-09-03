import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { FourOhFour as FourOhFourSection } from 'src/components/Section';

const FourOhFour: NextPage = () => {
  return (
    <>
      <NextSeo
        title='404 not found'
        description={
          "The page you're looking for doesn't exist or has been moved."
        }
      />
      <FourOhFourSection />
    </>
  );
};

export default FourOhFour;
