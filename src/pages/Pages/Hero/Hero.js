import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle, SectionTitleIntro, SectionTitleDescription } from '../../../styles/GlobalComponents';
import Button from '../../../styles/GlobalComponents/Button';
import { LeftSection } from '../../../components/HeroStyles';
import { BiChevronDown } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import styled from 'styled-components'

const handleMouseEnter = e => {
  e.target.style.color = "#0857C3"
}
const handleMouseLeave = e => {
  e.target.style.color = "black"
}

const LinkColor = styled.a`
  font-size: 17px;
  color: #0857C3;
  font-style: italic;
  text-decoration: underline;
`

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitleIntro main center>
        hi, i'm rainee!
      </SectionTitleIntro>
      <SectionTitleDescription>
        i'm a third year studying bioinformatics and cognitive science: design and interaction at uc san diego.
      </SectionTitleDescription>
      <br/>
      <SectionText style={{ fontSize: 19}}>
        previously a web developer for <LinkColor href='https://huecollective.co/'>HUE Collective</LinkColor> and UX Researcher for <LinkColor href='https://www.kinikoffeesd.com/'>Kini Koffee</LinkColor><br />
      </SectionText>
      <div style={{paddingTop: "190px", fontSize: "90px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <button onClick={() => window.location = '#projects'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        style={{border: "none", background: "none"}}>
          <FiChevronDown />
        </button>
      </div>
    </LeftSection>
  </Section>
);


export default Hero;