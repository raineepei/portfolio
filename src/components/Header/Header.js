import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display:"flex", alignItems: "center", color: "black", fontWeight: "bold" }}>
          <Span>rainee pei</Span>
        </a>
      </Link>
    </Div1>
    <Div3>
      <li>
        <Link href='/#projects'>
          <NavLink>projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/Pages/About'>
          <NavLink>about</NavLink>
        </Link>
      </li>
      <li>
        <Link href='https://drive.google.com/file/d/1RC24ToS5J-oQUvjyprWTvvC6IZf--_Mc/view?usp=sharing'>
          <NavLink href='https://drive.google.com/file/d/1RC24ToS5J-oQUvjyprWTvvC6IZf--_Mc/view?usp=sharing'>resume</NavLink>
        </Link>
      </li>
    </Div3>
  </Container>
);

export default Header;
