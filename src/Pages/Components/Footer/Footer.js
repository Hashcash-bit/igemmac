import React, { useState } from "react";

//Logo Import
import Logo from "../img/Logo.svg";
import Heart from "../img/Heart.svg";
import { ActualLogo, FooterBox, FooterContainer, HeartLogo, LeftArea, LeftSB, LikkleDes, LikkleTitle, LinkBox, LinkHeader, LogoContainer, RightArea, RightSB, SubButton, SubLinkBox, SubsBox } from "./FooterStyles";
import { Links } from "../TopSection/NavbarStyled";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle the subscription logic here
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <SubsBox>
        <LeftSB>
          <LikkleTitle></LikkleTitle>
          <LikkleDes></LikkleDes>
        </LeftSB>
        <RightSB>
          <input />
          <SubButton>Subscribe</SubButton>
        </RightSB>
      </SubsBox>
      <FooterContainer>
        <FooterBox>
          <LeftArea>
            <LogoContainer>
              <HeartLogo src={Heart} />
              <ActualLogo src={Logo} />
            </LogoContainer>
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
      </FooterContainer>
    </>
  );
};

export default Footer;
