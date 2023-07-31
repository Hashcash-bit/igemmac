//Default imports
import React from "react";

// Importing the styled components
import {
  BigText,
  Container,
  Box,
  HeroContainer,
  InfoText,
  LMButton,
  LeftSection,
  Links,
  LinksContainer,
  Logo,
  LogoArea,
  NavBarContainer,
  RightSection,
  Slashes,
  SmallText,
  Heart,
} from "./TopSectionStyles";

//Logo
import iGEMLogo from "../img/Logo.svg";
import HeartIMG from "../img/Heart.svg";

//Icons

export default function TopSection() {
  return (
    <Container>
      <Box>
        <NavBarContainer>
          <LogoArea>
            <Heart src={HeartIMG} />
            <Logo src={iGEMLogo} />
          </LogoArea>
          <LinksContainer>
            <Links>ABOUT</Links>
            <Slashes>/</Slashes>
            <Links>INITIATIVES</Links>
            <Slashes>/</Slashes>
            <Links>PROJECTS</Links>
            <Slashes>/</Slashes>
            <Links>NEWS</Links>
            <Slashes>/</Slashes>
            <Links>PARTNERS</Links>
            <Slashes>/</Slashes>
            <Links>CONTACT US</Links>
          </LinksContainer>
        </NavBarContainer>
        <HeroContainer>
          <LeftSection>
            <BigText>EMPOWER YOUR IMAGINATION</BigText>
            <SmallText>/ EST 2023</SmallText>
          </LeftSection>
          <RightSection>
            <InfoText>
              Follow along as we trek the vast field of genetics
            </InfoText>
            <LMButton>Learn More</LMButton>
          </RightSection>
        </HeroContainer>
      </Box>
    </Container>
  );
}
