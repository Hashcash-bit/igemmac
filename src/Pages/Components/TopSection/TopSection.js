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
  LeftInformationContainer,
  HeartImageContainer,
  FirstCircle,
  SecondCircle,
  HeartImage,
  SubRightSection,
} from "./TopSectionStyles";

//Logo
import iGEMLogo from "../img/Logo.svg";
import HeartIMG from "../img/Heart.svg";

//Icons

//Dropdown
import Dropdown from "../Utils/Dropdown";

export default function TopSection() {
  const dropdownOptionsAbout = [
    "Home Option 1",
    "Home Option 2",
    "Home Option 3",
  ]; // Option for About Dropdown
  const dropdownOptionsInitiatives = [
    "About Option A",
    "About Option B",
    "About Option C",
  ]; // Option for Initiatives Dropdown
  const dropdownOptionsProjects = ["Project 1", "Project 2", "Project 3"]; // Option for Projects Dropdown
  const dropdownOptionsNews = ["Project 1", "Project 2", "Project 3"]; // Option for News Dropdown
  const dropdownOptionsPartners = ["Project 1", "Project 2", "Project 3"]; // Option for Partners Dropdown
  const dropdownOptionsContactUs = ["Project 1", "Project 2", "Project 3"]; // Option for Contact Us Dropdown

  return (
    <Container>
      <Box>
        <NavBarContainer>
          <LogoArea>
            <Heart src={HeartIMG} />
            <Logo src={iGEMLogo} />
          </LogoArea>
          <LinksContainer>
            <Links>
              <Dropdown options={dropdownOptionsAbout} navItemName="ABOUT" />
            </Links>
            <Slashes>/</Slashes>
            <Links>
              {" "}
              <Dropdown
                options={dropdownOptionsInitiatives}
                navItemName="INITIATIVES"
              />
            </Links>
            <Slashes>/</Slashes>
            <Links>
              {" "}
              <Dropdown
                options={dropdownOptionsProjects}
                navItemName="PROJECTS"
              />
            </Links>
            <Slashes>/</Slashes>
            <Links>
              {" "}
              <Dropdown options={dropdownOptionsNews} navItemName="NEWS" />
            </Links>
            <Slashes>/</Slashes>
            <Links>
              {" "}
              <Dropdown
                options={dropdownOptionsPartners}
                navItemName="PARTNERS"
              />
            </Links>
            <Slashes>/</Slashes>
            <Dropdown
              options={dropdownOptionsContactUs}
              navItemName="CONTACT US"
            />
            <Links></Links>
          </LinksContainer>
        </NavBarContainer>
        <HeroContainer>
          <LeftSection>
            <LeftInformationContainer>
              <BigText>EMPOWER YOUR IMAGINATION</BigText>
              <SmallText>/ EST 2023</SmallText>
            </LeftInformationContainer>
            <HeartImageContainer>
              <FirstCircle>
                <SecondCircle>
                  <HeartImage src={HeartIMG} />
                </SecondCircle>
              </FirstCircle>
            </HeartImageContainer>
          </LeftSection>
          <RightSection>
            <SubRightSection>
              <InfoText>
                Follow along as we trek the vast field of genetics
              </InfoText>
              <LMButton>Learn More</LMButton>
            </SubRightSection>
          </RightSection>
        </HeroContainer>
      </Box>
    </Container>
  );
}
