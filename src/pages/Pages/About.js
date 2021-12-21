import React from 'react';
import Link from 'next/link';
import { about } from '../../constants/constants';

import { Layout } from '../../layout/Layout';
import { BlogCard, CardInfoAbout, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, ImgAbout, CardInfoAboutHi } from '../../components/ProjectsStyles';

const About = () => (
    <Layout>
    <GridContainer>
      {about.map((about) => (
        <BlogCard key={about.id}>
            <CardInfoAboutHi>
                {about.description}
            </CardInfoAboutHi>
            <CardInfoAbout>
              <br />
              {about.description1}
              <br />
              <br />
              {about.description2}
              <br />
              <br />
              {about.description3}
          </CardInfoAbout>
          <ImgAbout src={about.image}  />
        </BlogCard>
      ))}
    </GridContainer>
    </Layout>
)
  
export default About;