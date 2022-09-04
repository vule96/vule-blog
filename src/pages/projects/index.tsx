import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Projects as ProjectsSection } from 'src/components/Section';

const Projects: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Projects'
        description={
          "Projects by Vu Le. Get to know the projects I'm most proud of. Many of them are open-source."
        }
      />
      <ProjectsSection showFullList />
    </>
  );
};

export default Projects;
