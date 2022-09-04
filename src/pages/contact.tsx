import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Contact as ContactSection } from 'src/components/Section';
const Contact: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Contact'
        description={'Get in touch with Vu Le. Send him a message or email'}
      />
      <ContactSection />
    </>
  );
};

export default Contact;
