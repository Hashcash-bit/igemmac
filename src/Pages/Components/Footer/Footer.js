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
          </LeftArea>
        </FooterBox>
        <CopyRightBox>
          <div>
            &copy; {new Date().getFullYear()} iGEM McMaster. Content on this site is licensed under a Creative Commons Attribution 4.0 International license.
            <br />
            The repository used to create this website is available at gitlab.igem.org/2023/mcmaster-canada.
          </div>
        </CopyRightBox>
      </FooterContainer>
    </div>
  );
};

export default Footer;
