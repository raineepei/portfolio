import React from 'react';
import { Layout } from '../../layout/Layout';
import { KiniTitle, LinkList, LinkColumn, LinkTitle, BackgroundInfo, ImgOver, SectionTitleIntro, SectionTitleDescription, SectionTitleDescription1, 
SectionProblem, SectionTitleIntroProblem, SectionTitleDescriptionProblem } from '../../components/Kini/KiniStyles';
import "@fontsource/roboto";

import "@fontsource/roboto-mono"
import styled from 'styled-components'

const Kini = () => (
    <Layout>
        <KiniTitle main center>
            Kini Koffee 
        </KiniTitle>
        <ImgOver src='../../images/Kini/WebOverview.png'/>

        <SectionTitleIntro>
            OVERVIEW
        </SectionTitleIntro>
        <SectionTitleDescription1>
        Located in Del Mar and Encinitas, San Diego, Kini Koffee is a female-owned coffee shop that features unique flavor profiles in its drinks. 
        Its aim is to build a community of women that work unconventional jobs while also creating a fun place for people to grab a quick drink on 
        their way to the nearby beaches.
        </SectionTitleDescription1>
        <SectionTitleDescription1 style={{color: '#D82682', fontWeight: 'bold'}}>
            The Business Perspective:
        </SectionTitleDescription1>
        <SectionTitleDescription1>
            Kini Koffee needs a place where all their information is centralized so customers can easily learn more about the business, drinks, and prices   
        </SectionTitleDescription1>
        <SectionTitleDescription1 style={{color: '#D82682', fontWeight: 'bold'}}>
            For Customers of Kini Koffee:
        </SectionTitleDescription1>
        <SectionTitleDescription1>
            People who are looking for coffee shops in the Del Mar area need access to attractive, unique features about Kini Koffee to encourage them to go there over any other coffee shop in the area
        </SectionTitleDescription1>
        <SectionTitleDescription1 style={{color: '#D82682', fontWeight: 'bold'}}>
            My Role:
        </SectionTitleDescription1>
        <SectionTitleDescription1>
            For this project, I was a UX Researcher; my primary responsibilities were to set up interview and testing guidelines, spearhead 
            the research and interview process, build out testing plans and test-subject recruitment, and pull key insights to help inform 
            design decisions. I collaborated with the UX Designers when developing interview guidelines for testing prototypes and had my 
            other team mebers members help me with conducting interviews and surveys. Given the time frame, it was important to quickly figure
            out the questions our team needed answers to and the insights I needed to learn from research.
        </SectionTitleDescription1>

        <SectionTitleIntro>
            RESEARCH STATEMENT AND GOALS
        </SectionTitleIntro>
        <SectionTitleDescription1>
            After meeting with our client, we learned that Kini Koffee wants to be portrayed as a "fun, beachy, creative" coffee shop for 
            people aged ~16-20 years old. With this in mind, I focused on user surveys and customer interviews to find out what other people 
            think of the brand through reviews first and figure out what questions our temas need answered and what insights we hope to learn.
            To address both customer and our client needs, we created two problem statements that encompassed our goals for this project.
        </SectionTitleDescription1>
        <SectionProblem style={{marginTop: '30px'}}> 
            <SectionTitleIntroProblem>
                Business Problem Statement
            </SectionTitleIntroProblem>
            <SectionTitleDescriptionProblem>
                Kini Koffee needs a place where all their information is centralized so customers can easily learn more about the business, 
                drinks, and prices.   
            </SectionTitleDescriptionProblem>
            <SectionTitleIntroProblem>
                Customer Problem Statement
            </SectionTitleIntroProblem>
            <SectionTitleDescriptionProblem>
                People who are looking for coffee shops in the Del Mar area need access to attractive, unique features about Kini Koffee to 
                encourage them to go there over any other coffee shop in the area.
            </SectionTitleDescriptionProblem>
        </SectionProblem>

        <SectionTitleIntro>
            RESEARCH METHODOLOGY: GETTING TO KNOW OUR USERS
        </SectionTitleIntro>
        <SectionTitleDescriptionProblem>
            Hi
        </SectionTitleDescriptionProblem>



        <LinkList>
            <LinkColumn>
                <LinkTitle>
                    Date
                </LinkTitle>
                <BackgroundInfo>
                    Jun 2021 - Sep 2021
                </BackgroundInfo>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>
                    Role
                </LinkTitle>
                <BackgroundInfo>
                    UX Researcher
                </BackgroundInfo>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>
                    Team
                </LinkTitle>
                <BackgroundInfo>
                    Rainee Pei, Stella Seki, Deepika Vuppala, Edward De Leon, Chynna Tumalad
                </BackgroundInfo>
            </LinkColumn>             
        </LinkList>




    </Layout>

);
  
export default Kini;