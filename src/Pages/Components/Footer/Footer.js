import React, { useState } from 'react';

import {
  ActualLogo,
  FooterBox,
  FooterContainer,
  HeartLogo,
  LeftArea,
  LeftSB,
  LikkleDes,
  LikkleTitle,
  LinkBox,
  LinkHeader,
  Links,
  LogoContainer,
  RightArea,
  RightSB,
  SubButton,
  SubLinkBox,
  SubsBox,
  SubsContainer,
  Input,
  TextContainer,
  CopyRightBox,
  NameLink,
} from './FooterStyles';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle the subscription logic here
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div
      style={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        cursor: 'default',
      }}
    >
      <FooterContainer>
        <FooterBox>
          <LeftArea>
            <LogoContainer>
              <ActualLogo src='https://static.igem.wiki/teams/4751/wiki/logo.svg' />
            </LogoContainer>
            <TextContainer>
              This is the official page of the iGEM chapter in McMaster
              University. Please navigate and guide yourself through the
              counteless hours of work we put into making this possible. Also,
              please conisider subscribing to our new letter to stay up to date
              with the latest news in the genetics field.
            </TextContainer>
          </LeftArea>
          <RightArea>
            <LinkBox>
              <LinkHeader>ABOUT</LinkHeader>
              <SubLinkBox>
                <Links>Our Team</Links>
                <Links>Our Mission</Links>
                <Links>Join Us</Links>
              </SubLinkBox>
            </LinkBox>
            <LinkBox>
              <LinkHeader>INITIATIVES</LinkHeader>
              <SubLinkBox>
                <Links>STEMcast</Links>
                <Links>Conference</Links>
                <Links>Biolab Tutorials</Links>
                <Links>McMaster Course</Links>
              </SubLinkBox>
            </LinkBox>
            <LinkBox>
              <LinkHeader>PROJECTS</LinkHeader>
              <SubLinkBox>
                <Links>Current</Links>
                <Links>2022</Links>
                <Links>2021</Links>
                <Links>2020</Links>
              </SubLinkBox>
            </LinkBox>
            <LinkBox>
              <LinkHeader>NEWS</LinkHeader>
              <SubLinkBox>
                <Links>Bio News</Links>
                <Links>Genetic News</Links>
                <Links>Franky Fucks</Links>
              </SubLinkBox>
            </LinkBox>
            <LinkBox>
              <LinkHeader>PARTNERS</LinkHeader>
              <SubLinkBox>
                <Links>Sponsors</Links>
                <Links>Collaborators</Links>
                <Links>Partner With Us</Links>
              </SubLinkBox>
            </LinkBox>
          </RightArea>
        </FooterBox>
        <CopyRightBox>
          <div>
            &copy; {new Date().getFullYear()} iGEM McMaster. Content on this site is licensed under a Creative Commons Attribution 4.0 International license.
          </div>
        </CopyRightBox>
      </FooterContainer>
    </div>
  );
};

export default Footer;
