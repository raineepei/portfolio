import React from 'react';
import Link from 'next/link';

import Header from '../../components/Header/Header';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from '../../components/Header/HeaderStyles';

const About = () => (
    <Container id="home">
    <Div1>
      <Link href="#home">
        <a style={{ display:"flex", alignItems: "center", color: "black", fontWeight: "bold" }}>
          <Span>rainee pei.</Span>
        </a>
      </Link>
    </Div1>
    <Div3>
      <li>
        <Link href='#projects'>
          <NavLink>projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/Pages/About'>
          <NavLink>about</NavLink>
        </Link>
      </li>
      <li>
        <Link href='https://drive.google.com/file/d/1TVrn-1kR-GS5Ypg9ILPYLKvg6zXJDawK/view?usp=sharing'>
          <NavLink href='https://drive.google.com/file/d/1TVrn-1kR-GS5Ypg9ILPYLKvg6zXJDawK/view?usp=sharing'>resume</NavLink>
        </Link>
      </li>
    </Div3>
  </Container>
);
  
export default About;