import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle, SectionTitleIntro, SectionTitleDescription } from '../../../styles/GlobalComponents';
import Button from '../../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { BiChevronDown } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const handleMouseEnter = e => {
  e.target.style.color = "#0857C3"
}
const handleMouseLeave = e => {
  e.target.style.color = "black"
}

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitleIntro main center>
        hi, i'm rainee!
      </SectionTitleIntro>
      <SectionTitleDescription>
        i'm a third year studying bioinformatics and cognitive science: design and interaction at uc san diego.
      </SectionTitleDescription>
      <SectionText style={{ fontSize: 19}}>
        currently a web developer for HUE Collective. <br />
        <Link href='https://huecollective.co/'>
          <span style={{ fontSize: 18, color: "#0857C3", fontStyle: 'italic', textDecorationLine: 'underline' }}>
            https://huecollective.co/
          </span>
        </Link> <br />
          previously a UX Researcher for Kini Koffee. <br />
        <Link href='https://confirmed-cylinder-86d.notion.site/Kini-Koffee-8eede66f18bb4d539aa01597e39dfd72'>
          <span style={{ fontSize: 18, color: "#0857C3", fontStyle: 'italic', textDecorationLine: 'underline'}}>
            group case study
          </span>
        </Link> 
      </SectionText>
      <div style={{paddingTop: "80px", fontSize: "90px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <button onClick={() => window.location = '#projects'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        style={{border: "none", background: "none"}}>
          <FiChevronDown />
        </button>
      </div>
    </LeftSection>
  </Section>
);


export default Hero;