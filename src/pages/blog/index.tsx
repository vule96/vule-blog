import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Blog as BlogSection } from 'src/components/Section';

const Blog: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Blog'
        description={
          'Blog posts by Vu Le. Here I share some thoughts, stories, information and more about software development, programming, tech or my personal life'
        }
      />
      <BlogSection />
    </>
  );
};

export default Blog;
