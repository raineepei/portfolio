import React from 'react';
import { Layout } from '../../layout/Layout';
import { KiniTitle, LinkList, LinkColumn, LinkTitle, BackgroundInfo, ImgOver, SectionTitleIntro, SectionTitleDescription, SectionTitleDescription1, 
SectionProblem, SectionTitleIntroProblem, SectionTitleDescriptionProblem, ImgSurvey, GridContainer, DescriptionIndented,
SectionQuote, Quote, ImgFeatureSorting, ToWebsite, LinkDoc } from '../../components/Kini/KiniStyles';
import "@fontsource/roboto";

import "@fontsource/roboto-mono"
import styled from 'styled-components'

const LinkColor = styled.a`
  color: #D82682;
`

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
            For this project (Jun 2021 - Sep 2021), I was a UX Researcher; my primary responsibilities were to set up interview and testing guidelines, spearhead 
            the research and interview process, build out testing plans and test-subject recruitment, and pull key insights to help inform 
            design decisions. I collaborated with the UX Designers when developing interview guidelines for testing prototypes and had my 
            other team mebers members help me with conducting interviews and surveys. Given the time frame, it was important to quickly figure
            out the questions our team needed answers to and the insights I needed to learn from research.
        </SectionTitleDescription1>
        <LinkColor href='https://www.kinikoffeesd.com/'>
            <ToWebsite>
                Check out the website here!
            </ToWebsite>
        </LinkColor>

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
            GETTING TO KNOW OUR USERS
        </SectionTitleIntro>
        <SectionTitleDescription1 style={{color: '#D82682', fontWeight: 'bold'}}>
            1. We surveyed 60 users (most in our target demographic) on their outlook on small coffee shops.
        </SectionTitleDescription1>
        <SectionTitleDescription1 style={{fontWeight: 'bold'}}>
            Sample Survey Questions:
        </SectionTitleDescription1>
        <GridContainer>
            <ImgSurvey src='../../images/Kini/samplesurvey1.png' />
            <ImgSurvey src='../../images/Kini/samplesurvey2.png' />
        </GridContainer>
        <SectionTitleDescription1>
            Allowing the user to sort their preference in finding these pieces of information helped us determine the information architecture of 
            the website design; how can we design the website to allow users to access the information they need without having them think too 
            hard. Eventually, we want to tie this in with what we want the user’s first impression of Kini Koffee be the moment they see the site.
        </SectionTitleDescription1>
        <SectionTitleDescription1 style={{color: '#D82682', fontWeight: 'bold', marginTop: '15px'}}>
            2. I interviewed 5 customers and 1 employee at Kini Koffee's Del Mar location.
        </SectionTitleDescription1>
        <SectionTitleDescription1 style={{fontWeight: 'bold'}}>
            A few questions I asked:
        </SectionTitleDescription1>
        <SectionTitleDescription1 style={{fontWeight: 'bold', fontStyle: 'italic'}}>
            1. Branding Questions
        </SectionTitleDescription1>
        <DescriptionIndented>
           a. What feelings do you get when you visit Kini Koffee?
        </DescriptionIndented>
        <DescriptionIndented>
           a. What stands out to you about Kini Koffee the most?
        </DescriptionIndented>
        <SectionTitleDescription1 style={{fontWeight: 'bold', fontStyle: 'italic'}}>
            2. Performance Questions
        </SectionTitleDescription1>
        <DescriptionIndented>
            a. How did you find out about Kini Koffee?
        </DescriptionIndented>
        <DescriptionIndented>
           b. What motivates you to visit Kini Koffee?
        </DescriptionIndented>
        <DescriptionIndented>
           c. What motivates you to buy a drink at Kini Koffee?
        </DescriptionIndented>
        <DescriptionIndented>
           d. What makes you want to go (back) to Kini Koffee?
        </DescriptionIndented>
        <SectionTitleDescription1>
        This questions were primarily asked to understand their thought process of choosing to go to Kini Koffee vs. any other coffee shop in 
        the area; what are the redeeming qualities of Kini Koffee that motivates them to choose them.
        </SectionTitleDescription1>

        <SectionTitleIntro>
            KEY FINDINGS
        </SectionTitleIntro>
        <SectionTitleDescription1 style={{color: '#D82682', fontWeight: 'bold', marginTop: '15px'}}>
            1. Coffee shop aficionados value the scenery and ambiance of a coffee shop just as much as the taste of their coffee.
        </SectionTitleDescription1>
        <DescriptionIndented>
            → 88.3% of our survey participants responded that they care about the **scenery and ambiance of a coffee shop
        </DescriptionIndented>
        <DescriptionIndented>
            → 4 out of the 5 customers we interviewed talked about how they really appreciated the atmosphere that they can get from Kini Koffee (ambiance)
        </DescriptionIndented>
        <GridContainer>
            <SectionQuote>
                <Quote>
                    "For me, obviously the location is great and the view is beautiful. Everyone who works here is super nice and it creates a really nice environment too"
                </Quote>
            </SectionQuote>
            <SectionQuote>
                <Quote>
                    "One - if the drinks are good and the service - drinks and service would be primary, and then the atmosphere, like this [points at ocean] definitely is the icing on the cake."
                </Quote>
            </SectionQuote> 
        </GridContainer>
        <SectionTitleDescription1 style={{color: '#D82682', fontWeight: 'bold', marginTop: '15px'}}>
            2. Customers of Kini Koffee love the taste of the shop's specialty drinks
        </SectionTitleDescription1>
        <DescriptionIndented>
            → 73.3% of people answering the survey mentioned that the taste of the coffee at a coffee shop is one of the top three things they value about most small coffee shops        </DescriptionIndented>
        <DescriptionIndented>
            → All 5 interviewed customers enjoyed one of Kini Koffee’s featured, specialty drinks (not a regular coffee)        
        </DescriptionIndented>
        <SectionTitleDescription1 style={{color: '#D82682', fontWeight: 'bold', marginTop: '15px'}}>
            3. Users find out about coffee shops not on websites or social media, but on Google Maps and Yelp.
        </SectionTitleDescription1>
        <DescriptionIndented>
            → 38.3% of people usually find coffee shops through Google Maps
        </DescriptionIndented>
        <DescriptionIndented>
            → 36.7% of people usually find coffee shops through Yelp
        </DescriptionIndented>

        <SectionTitleIntro>
            FEATURE SORTING
        </SectionTitleIntro>
        <ImgFeatureSorting src='../../images/Kini/featuresorting2.png' />
        <SectionTitleDescription1 style={{marginTop: '30px'}}>
            The purpose of feature sorting was to narrow down the essential features by having users sort a multitude of features you would usually see on 
            a coffee shop website into 4 categories: 
        </SectionTitleDescription1>
        <DescriptionIndented>
            1. Things I want to know right away
        </DescriptionIndented>
        <DescriptionIndented>
            2. Things that are nice to know, but not my priority
        </DescriptionIndented>
        <DescriptionIndented>
            3. Things I wouldn't go to a store's website for
        </DescriptionIndented>
        <DescriptionIndented>
            4. Things I would disregard even if I saw it
        </DescriptionIndented>
        <SectionTitleDescription1 style={{fontWeight: 'bold', fontStyle: 'italic', color: '#D82682'}}>
            Key Findings From This Task:
        </SectionTitleDescription1>
        <DescriptionIndented>
            1. 4/7 users said pictures of the location would be nice to have on the website
        </DescriptionIndented>
        <DescriptionIndented>
            2. 6/7 users said item prices were things they want to know right away
        </DescriptionIndented>
        <DescriptionIndented>
            3. 7/7 users said they would usually disregard any form of social media on the website
        </DescriptionIndented>

        <SectionTitleIntro>
            USABILITY TASKS
        </SectionTitleIntro>
        <SectionTitleDescription1 style={{fontWeight: 'bold', fontStyle: 'italic', color: '#D82682'}}>
            Wireframe A/B Testing
        </SectionTitleDescription1>
        <SectionTitleDescription1>
            Each user we tested had to engage with both wireframes given our task list and had to answer prototype-specific questions. Ultimately, this was 
            used to understand which layout felt more usable and comfortable for users in terms of information architecture and navigation.
        </SectionTitleDescription1>
        <SectionTitleDescription1 style={{fontWeight: 'bold', fontStyle: 'italic'}}>
            Sample Task List Questions
        </SectionTitleDescription1>
        <DescriptionIndented style={{color: '#D82682'}}>
            → Location Page: Find the store hours for the drive-thru location [Both Prototype A and Prototype B]
        </DescriptionIndented>
        <DescriptionIndented>
            Given that our team didn’t know there was a 2nd location until 2 weeks of researching Kini Koffee incessantly, it was important to highlights 
            Kini Koffee’s drive-thru location. It was important for us to determine which layout allows users to easily differentiate the two to find the 
            appropriate store hours especially that 6/7 users said hours were things they want to know right away,
        </DescriptionIndented>
        <DescriptionIndented style={{color: '#D82682'}}>
            → Menu Page: Find a drink that you think you’d like and decide on an add-on or change you would like to make to the drink [Both Prototype A and Prototype B]
        </DescriptionIndented>
        <DescriptionIndented>
            Given Kini Koffee’s specialty drinks that draws many customers back to the store, it was important to make sure users were able to quickly find
            and access these menu items, especially prices since 6/7 users said item prices were things they want to know right away.
        </DescriptionIndented>
        <SectionTitleDescription1 style={{fontWeight: 'bold', fontStyle: 'italic', color: '#D82682'}}>
            Key Findings From This Task:
        </SectionTitleDescription1>
        <DescriptionIndented>
            1. Social media isn't a priority but adds legitimacy to the site and business
        </DescriptionIndented>
        <DescriptionIndented>
            2. Users had difficulty navigating back to the homepage
        </DescriptionIndented>
        <DescriptionIndented>
            3. Users won't trust selected/curated content because it doesn't show honest customer feedback → Prefer Google Maps or Yelp to view honest reviews
        </DescriptionIndented>
        <DescriptionIndented>
            4. Career opportunities were not easily discoverable → Design pattern used to showcase careers needed revisions
        </DescriptionIndented>
        <LinkColor href='https://docs.google.com/document/d/1a56og2KegNk7R8Mj9RijF6tQFf_0ZDZ1uOxU8_Jae8Y/edit?usp=sharing'>
            <LinkDoc>
                Interview Guidelines Document
            </LinkDoc>
        </LinkColor>

        <SectionTitleIntro>
            ANALYSIS AND SYNTHESIS PROCESS
        </SectionTitleIntro>
        <SectionTitleDescription1>
            I created a synthesis of all our reserach findings on a FigJam page. It consolidated information from our feature testing, A/B usability 
            testing, and prototype-specific questions. Sorting feedback on each prototype into suggestions, expectations, likes, and confusions helped the
            designers decide which features from each prototype we want to implement into the final prototype, and what additional features we want to add.
        </SectionTitleDescription1>
        <SectionTitleDescription1>
            For example, for Prototype B, some likes include:
        </SectionTitleDescription1>
        <DescriptionIndented>
            → The menu is better for finding prices and sizes
        </DescriptionIndented>
        <DescriptionIndented>
            → Users can see that Kini Koffee specialises in drinks
        </DescriptionIndented>
        <DescriptionIndented>
            → TThe menu promotes specials first
        </DescriptionIndented>
        <DescriptionIndented>
            → There is less scrolling
        </DescriptionIndented>
        <DescriptionIndented>
            → There are home page buttons to view the menu and to order online
        </DescriptionIndented>
        <SectionTitleDescription1>
            These synthesized results helped the designers decide that they would prefer to use Prototype’s B menu layout in the final prototype.
        </SectionTitleDescription1>
        <ImgFeatureSorting src='../../images/Kini/figjam.png'/>
        <LinkColor href='https://www.figma.com/file/P5nTPbn6jvE0K5kycZIStw/Research-Synthesis?node-id=0%3A1'>
            <LinkDoc>
                FigJam File
            </LinkDoc>
        </LinkColor>



        <SectionTitleIntro>
            REFLECTIONS
        </SectionTitleIntro>
        <SectionTitleDescription1 style={{fontWeight: 'bold', fontStyle: 'italic', color: '#D82682'}}>
            To summarize my experience:
        </SectionTitleDescription1>
        <DescriptionIndented>
            1. Working with an actual stakeholder is a much different experience than working on a school  project; learning to collaborate, communicate, 
            and compromise with the client was a learning curve. The design process is very nuanced, and changes with each team and project you work with.
        </DescriptionIndented>
        <DescriptionIndented>
            2. UX Research is the foundation of the design process. Without proper research, its easy to stray off track during the design process and 
            start designing for the “wrong” problem. Research guides the designs and allows us to approach the problem intuitively and effectively based 
            on both our client and customers.
        </DescriptionIndented>
        <DescriptionIndented>
            3. It is more important to be able to analyze and synthesize the data you obtain during the research process. How can we utilize this 
            information to guide us towards our designs or redesigns?
        </DescriptionIndented>
        <SectionTitleDescription1 style={{fontWeight: 'bold', fontStyle: 'italic', color: '#D82682'}}>
            Thank You To:
        </SectionTitleDescription1>
        <DescriptionIndented>
            My extremely talented team members: Stella Seki, Deepika Vuppala, Edward De Leon, Chynna Tumalad,
        </DescriptionIndented>
        <DescriptionIndented>
            Our Mentors: Jennie Yoon, Lily Konings, and Bryant Lim,
        </DescriptionIndented>
        <DescriptionIndented>
            Our user test participants,
        </DescriptionIndented>
        <DescriptionIndented>
            Jewell, our client who kept us well-caffeinated with Kini Koffee's amazing drinks,
        </DescriptionIndented>
        <DescriptionIndented>
            And the Power Up Team, for putting together this opportunity!
        </DescriptionIndented>

    </Layout>

);
  
export default Kini;