import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';


const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <button onPress={() => Linking.openURL('mailto:pei.rainee@gmail.com') }>email</button>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle href="https://github.com/raineepei">github</LinkTitle>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle href="https://www.linkedin.com/in/raineepei/">linkedin</LinkTitle>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
