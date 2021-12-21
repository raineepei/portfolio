import React from 'react';
import Link from 'next/link'
import { Layout } from '../../layout/Layout';
import { LoaneTitle, LinkList, LinkColumn, LinkTitle, BackgroundInfo } from '../../components/LoaneStyles';

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

        


    </Layout>
);
  
export default Loane;