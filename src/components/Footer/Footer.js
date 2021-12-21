import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import {IoLogoLinkedin} from "react-icons/io";
import {IoLogoGithub} from "react-icons/io";
import {IoMdMail} from "react-icons/io";


const handleMouseEnter = e => {
  e.target.style.color = "#0857C3"
}
const handleMouseLeave = e => {
  e.target.style.color = "black"
}

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <div style={{ fontSize: "25px", display: "flex", alignItems: "left", justifyContent: "left"}}>
              <button onClick={() => window.location = '#projects'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              style={{border: "none", background: "none"}}>
                <IoMdMail />
              </button>
          </div>
        </LinkColumn>
        <LinkColumn>
          <div style={{ fontSize: "25px", display: "flex", alignItems: "left", justifyContent: "left"}}>
              <button onClick={() => window.location = '#projects'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              style={{border: "none", background: "none"}}>
                <Link href='https://github.com/raineepei'>
                  <IoLogoGithub />
                </Link>
              </button>
          </div>
        </LinkColumn>
        <LinkColumn>
          <div style={{ fontSize: "25px", display: "flex", alignItems: "left", justifyContent: "left"}}>
            <button onClick={() => window.location = '#projects'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{border: "none", background: "none"}}>
              <Link href='https://www.linkedin.com/in/raineepei/'>
                <IoLogoLinkedin />
              </Link>
            </button>
        </div>
        </LinkColumn>
        <LinkColumn>
          <div style={{ color : "black", fontSize: "15px", display: "flex", alignItems: "left", justifyContent: "left"}}>
            Made with Love by Rainee Pei
          </div>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
