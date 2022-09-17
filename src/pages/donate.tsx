import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Donate as DonateSection } from 'src/components/Section';
const Donate: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Donate'
        description={
          'Support Vu Le. Donate or sponsor him as a recognition for his work on different projects'
        }
      />
      <DonateSection />
    </>
  );
};

export default Donate;
