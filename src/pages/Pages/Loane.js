import React from 'react';
import Link from 'next/link'
import { Layout } from '../../layout/Layout';
import { LoaneTitle, LinkList, LinkColumn, LinkTitle, BackgroundInfo, GridContainer, BlogCard, CardInfoAbout, ImgAbout, TitleContent, 
DescriptionContent, Section, SectionTitleIntro, SectionTitleDescription } from '../../components/Loane/LoaneStyles';
import { loane1 } from '../../components/Loane/LoaneConstants'

import "@fontsource/roboto-mono"
import styled from 'styled-components'

const LinkColor = styled.a`
  color: black;
  text-decoration: underline;
`

const Loane = () => (
    <Layout>
        <LoaneTitle main center>
            San Diego Supercomputer Center - LOAN·E
        </LoaneTitle>
        <LinkList>
            <LinkColumn>
                <LinkTitle>
                    Date
                </LinkTitle>
                <BackgroundInfo>
                    Jun 2020 - Sep 2020
                </BackgroundInfo>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>
                    Role
                </LinkTitle>
                <BackgroundInfo>
                    Front-End Developer, UX/UI Designer
                </BackgroundInfo>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>
                    Tools
                </LinkTitle>
                <BackgroundInfo>
                    Adobe XD, React Native, Expo, Firebase, Plaid, Express, NodeJS
                </BackgroundInfo>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>
                    Team
                </LinkTitle>
                <BackgroundInfo>
                    Rainee Pei, Daniel Roji, Jacob Olivares, Sam Kapusta, Steven Wang, Alex Andrieu
                </BackgroundInfo>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>
                    Github
                </LinkTitle>
                <BackgroundInfo>
                    <LinkColor href='https://github.com/raineepei/loane'>
                        https://github.com/raineepei/loane  
                    </LinkColor>
                </BackgroundInfo>
            </LinkColumn>
        </LinkList>

    <GridContainer>
      {loane1.map((loane1) => (
        <BlogCard key={loane1.id}>
            <CardInfoAbout>
                <TitleContent>
                    {loane1.title}
                </TitleContent>
                <DescriptionContent>
                    {loane1.description}
                    {loane1.description1}
                </DescriptionContent>
            </CardInfoAbout>
        </BlogCard>
     ))}
    </GridContainer>

    <Section>
        <SectionTitleIntro>
            Planning (Weeks 1-2)
        </SectionTitleIntro>
        <SectionTitleDescription>
            Using Trello, my team and I were able to brainstorm a few application ideas, ranging from a bot that can parse through Facebook group data and mark it 
            in your personal calendar, to an AI that is able to detect and recognize different objects. Taking into account the time restriction and our personal 
            skills and interests, we ultimately settled on developing a student loans and budgeting app as we felt we understood the college student demographic and 
            could create an application that would assist them in the transition to becoming financially independent. We came up with various user/developer stories 
            and conditions of satisfaction to provide us with a more thorough understanding of how we want our app to function and the specific features it would have.
        </SectionTitleDescription>
    </Section>


    </Layout>
);
  
export default Loane;