import React from 'react';
import Link from 'next/link';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionTitleProjects } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import "@fontsource/roboto-mono"

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitleProjects main>WORK</SectionTitleProjects>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <Link href='/Pages/Loane'>
              <HeaderThree>
                  {project.title}
              </HeaderThree>
            </Link>
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;