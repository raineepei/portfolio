import React from 'react';
import Link from 'next/link'
import { Layout } from '../../layout/Layout';
import { LoaneTitle, LinkList, LinkColumn, LinkTitle, BackgroundInfo, GridContainer, BlogCard, CardInfoAbout, ImgAbout, TitleContent, 
DescriptionContent, Section, SectionTitleIntro, SectionTitleDescription, TitleContentSmall, DescriptionContentSmall, Section1,
ImgAbout1, Button, ImgAbout2, ImgAbout3, ImgAbout2F } from '../../components/Loane/LoaneStyles';
import { loane1, loane2, loane3, loane4, loane5 } from '../../components/Loane/LoaneConstants'
import "@fontsource/roboto";

import "@fontsource/roboto-mono"
import styled from 'styled-components'
import { Img } from '../../components/ProjectsStyles';

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

    {/* background and role */}
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
            PLANNING (WEEKS 1-2)
        </SectionTitleIntro>
        <SectionTitleDescription>
            Using Trello, my team and I were able to brainstorm a few application ideas, ranging from a bot that can parse through Facebook group data and mark it 
            in your personal calendar, to an AI that is able to detect and recognize different objects. Taking into account the time restriction and our personal 
            skills and interests, we ultimately settled on developing a student loans and budgeting app as we felt we understood the college student demographic and 
            could create an application that would assist them in the transition to becoming financially independent. We came up with various user/developer stories 
            and conditions of satisfaction to provide us with a more thorough understanding of how we want our app to function and the specific features it would have.
        </SectionTitleDescription>
    </Section>

    {/* user developer stories */}
    <GridContainer>
      {loane2.map((loane2) => (
        <BlogCard key={loane2.id}>
            <CardInfoAbout>
                <TitleContentSmall>
                    {loane2.title}
                </TitleContentSmall>
                <DescriptionContentSmall style={{ fontStyle: "italic", color: "#0857c3", fontWeight: "bold"}}>
                    {loane2.description}
                </DescriptionContentSmall>
                <DescriptionContentSmall>
                    {loane2.description1}
                    <br />
                    {loane2.description2}
                    <br />
                    {loane2.description3}
                    <br />
                </DescriptionContentSmall>
                <DescriptionContentSmall style={{ fontStyle: "italic", color: "#0857c3", fontWeight: "bold"}}>
                    {loane2.description4}
                </DescriptionContentSmall>
                <DescriptionContentSmall>
                    {loane2.description5}
                    <br />
                    {loane2.description6}
                    <br />
                    {loane2.description7}
                    <br />
                    {loane2.description8}
                    <br />
                </DescriptionContentSmall>
                <DescriptionContentSmall style={{ fontStyle: "italic", color: "#0857c3", fontWeight: "bold"}}>
                    {loane2.description9}
                </DescriptionContentSmall>
                <DescriptionContentSmall>
                    {loane2.description10}
                    <br />
                    {loane2.description11}
                    <br />
                    {loane2.description12}
                    <br />
                    {loane2.description13}
                    <br />
                    {loane2.description14}
                    <br />
                    {loane2.description15}
                    <br />
                    {loane2.description16}
                </DescriptionContentSmall>
                <DescriptionContentSmall style={{ fontStyle: "italic", color: "#0857c3", fontWeight: "bold"}}>
                    {loane2.description17}
                </DescriptionContentSmall>
                <DescriptionContentSmall>
                    {loane2.description18}
                    <br />
                </DescriptionContentSmall>
                <ImgAbout src={loane2.image} />
                <DescriptionContentSmall style={{fontStyle: "italic", color: "#0857c3", textAlign: 'left'}}>
                    {loane2.description19}
                </DescriptionContentSmall>
            </CardInfoAbout>
        </BlogCard>
     ))}
    </GridContainer>

    <Section>
        <SectionTitleIntro>
            SPRINT 1 (WEEKS 3-4)
        </SectionTitleIntro>
        <SectionTitleDescription>
        This sprint consisted primarily of learning the different frameworks, databases, and languages we would be using to construct our 
        application. As a team, we watched YouTube videos on Javascript and React Native and also took an interactive course on React.js through 
        Scrimba. Other than the required learning, I was able to design a high-fidelity prototype of our application using Adobe XD. The original 
        wireframe lacked a lot of details on the functionality of the app, but it was still useful as I built off of it to design the high-fidelity
        prototype with more specific features and working animations to test out user flow and interaction, which ultimately served as the 
        baseline/reference during the development process. There were a lot of changes made throughout the process in terms of styling, new pages/functions, 
        and user interactions.
        </SectionTitleDescription>
    </Section>

    <Section1>
        <ImgAbout1 src='../../images/Loane/login.png'/>
        <ImgAbout1 src='../../images/Loane/homepage.png'/>
        <ImgAbout1 src='../../images/Loane/loans1.png'/>
        <ImgAbout1 src='../../images/Loane/loans2.png'/>
        <ImgAbout1 src='../../images/Loane/budget.png'/>
        <ImgAbout1 src='../../images/Loane/resources.png'/>
        <ImgAbout1 src='../../images/Loane/settings.png'/>

    </Section1>

    {/* sprints 2-3 */}
    <GridContainer style={{alignItems: 'center'}} >
      {loane3.map((loane3) => (
        <BlogCard key={loane3.id} >
            <CardInfoAbout >
            <ImgAbout2F src={loane3.image}/>
                <SectionTitleIntro >
                    {loane3.title}
                </SectionTitleIntro>
                <SectionTitleDescription style={{textAlign: 'left'}}>
                    {loane3.description}
                </SectionTitleDescription>
            </CardInfoAbout>
        </BlogCard>
     ))}
    </GridContainer>

    {/* sprint 4 */}
    <GridContainer style={{alignItems: 'center'}}>
      {loane4.map((loane4) => (
        <BlogCard key={loane4.id}>
            <CardInfoAbout>
            <ImgAbout2F src={loane4.image}/>
                <SectionTitleIntro>
                    {loane4.title}
                </SectionTitleIntro>
                <SectionTitleDescription style={{textAlign: 'left', marginBottom: '50px'}}>
                    {loane4.description}
                </SectionTitleDescription>
            </CardInfoAbout>
        </BlogCard>
     ))}
    </GridContainer>

    <Section1 style={{display: "flex", justifyContent: 'center'}}>
        <ImgAbout3 src='../../images/Loane/welcomeback2.png'/>
        <ImgAbout3 src='../../images/Loane/welcomeback1.png'/>
        <ImgAbout3 src='../../images/Loane/signup.png'/>
        <ImgAbout3 src='../../images/Loane/forgotpwd.png'/>
    </Section1>

    {/* sprint 5 */}
    <GridContainer style={{alignItems: 'center', marginBottom: '-70px'}}>
      {loane5.map((loane5) => (
        <BlogCard key={loane5.id}>
            <CardInfoAbout>
                <SectionTitleIntro>
                    {loane5.title}
                </SectionTitleIntro>
                <SectionTitleDescription style={{textAlign: 'left'}}>
                    {loane5.description}
                </SectionTitleDescription>
                <Section style={{display: "inline", justifyContent: 'center'}}>
                    <ImgAbout2 src={loane5.image} />
                    <ImgAbout2 src={loane5.image1} />
                </Section>
            </CardInfoAbout>
        </BlogCard>
     ))}
    </GridContainer>

    <Section1 style={{display: "flex", justifyContent: 'center'}}>
        <ImgAbout3 src='../../images/Loane/welcomeback2.png'/>
        <ImgAbout3 src='../../images/Loane/welcomeback1.png'/>
        <ImgAbout3 src='../../images/Loane/signup.png'/>
        <ImgAbout3 src='../../images/Loane/forgotpwd.png'/>
    </Section1>

    <Section>
        <SectionTitleIntro>
            REFLECTION
        </SectionTitleIntro>
        <SectionTitleDescription>
        I'm extremely grateful to have had my first software development internship at SDSC. I dove head-first into the 
        program without knowing much, but came out with an experience that will contribute immensely in my future endeavors as an 
        aspiring developer and designer. I've learned so much about how to bridge the gap between design and development and am inspired to continue learning about and apply the design process.
        Shoutout to Ryan for being an amazing program coordinator, and Alex, for being such an 
        awesome project manager and keeping us in check. Also, thank you @ team for being so patient, understanding, and chill; 
        I looked forward to our team bonding activities each sprint. :-)
        </SectionTitleDescription>
    </Section>


    <LinkColor href='/' style={{ display: 'flex', justifyContent: 'center' }}>
        <Button>
            GO BACK
        </Button>
    </LinkColor>

    </Layout>
);
  
export default Loane;