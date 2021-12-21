import React from 'react';
import Link from 'next/link';
import { about } from '../../constants/constants';

import { Layout } from '../../layout/Layout';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, ImgAbout } from './Projects/ProjectsStyles';

const About = () => (
    <Layout>
    <GridContainer>
      {about.map((about) => (
        <BlogCard key={about.id}>
          <CardInfo>
            <ImgAbout src={about.image} />
              {about.description}
              <br />
              <br />
              {about.description1}
              <br />
              <br />
              {about.descroption2}
              <br />
              <br />
              {about.description3}
          </CardInfo>
        </BlogCard>
      ))}
    </GridContainer>
    </Layout>
)
  
export default About;