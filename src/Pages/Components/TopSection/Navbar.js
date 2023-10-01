// Default React Imports
import React, { useState } from 'react';

//Styled Components
import {
  Links,
  LinksContainer,
  Logo,
  LogoArea,
  NavBarContainer,
  Slashes,
  Heart,
  Box,
  Container,
  MenuToggle,
  HiddenContainer,
  CloseIcon,
  HiddenButtonContainer,
  LeftArea,
  AboutUsBox,
  Heading,
  LinksSection,
  LinksH,
  ProjectsBox,
  NewsBox,
  RightArea,
  PartnerBox,
  InitiativesBox,
  ContactBox,
} from './NavbarStyled';

//Logo
import iGEMLogo from '../img/Logo.svg';
import HeartIMG from '../img/Heart.svg';

//Icons
import { BiMenu } from 'react-icons/bi';

//Dropdown
import Dropdown from '../Utils/Dropdown';
import TopSection from './TopSection';

export default function Navbar() {
  //Hidden Navbar Toggle
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleOpen = () => {
    setToggleMenu(true);
  };

  const handleToggleClose = () => {
    setToggleMenu(false);
  };

  const dropdownOptionsAbout = ['Our Team', 'Our Mission', 'Join Us'];
  const dropdownOptionsInitiatives = [
    'DESIGN',
    'ENGINEERING',
    'RESULTS',
    'PARTS AND NOTEBOOK'
  ];
  const dropdownOptionsProjects = [
    'KINETIC MODEL',
    'NORMALIZATION MODEL'
  ];
  const dropdownOptionsNews = ['BioNews', 'Genetic News', 'Fuck Franky'];
  const dropdownOptionsPartners = [
    'Sponsors',
    'Collaborators',
    'Partner With Us',
  ];
  const dropdownOptionsContactUs = ['Project 1', 'Project 2', 'Project 3'];
  return (
    <>
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
                {' '}
                <Dropdown
                  options={dropdownOptionsInitiatives}
                  navItemName="WET LAB"
                />
              </Links>
              <Slashes>/</Slashes>
              <Links>
                {' '}
                <Dropdown
                  options={dropdownOptionsProjects}
                  navItemName="PROJECTS"
                />
              </Links>
              <Slashes>/</Slashes>
              <Links>
                {' '}
                <Dropdown options={dropdownOptionsNews} navItemName="NEWS" />
              </Links>
              <Slashes>/</Slashes>
              <Links>
                {' '}
                <Dropdown
                  options={dropdownOptionsPartners}
                  navItemName="PARTNERS"
                />
              </Links>
              <Slashes>/</Slashes>
              <Links>
                <Dropdown
                  options={dropdownOptionsContactUs}
                  navItemName="CONTACT US"
                />
              </Links>
              <MenuToggle onClick={handleToggleOpen}>
                <BiMenu />
              </MenuToggle>
            </LinksContainer>
          </NavBarContainer>
        </Box>
      </Container>
      {toggleMenu && (
        <HiddenContainer>
          <CloseIcon onClick={handleToggleClose}>&times;</CloseIcon>
          <HiddenButtonContainer>
            <LeftArea>
              <AboutUsBox>
                <Heading>ABOUT US</Heading>
                <LinksSection>
                  <LinksH>Our Team</LinksH>
                  <LinksH>Our Mission</LinksH>
                  <LinksH>Join Us</LinksH>
                </LinksSection>
              </AboutUsBox>
              <ProjectsBox>
                <Heading>PROJECTS</Heading>
                <LinksSection>
                  <LinksH>Current</LinksH>
                  <LinksH>2022</LinksH>
                  <LinksH>2021</LinksH>
                  <LinksH>2020</LinksH>
                  <LinksH>2019</LinksH>
                </LinksSection>
              </ProjectsBox>
              <NewsBox>
                <Heading>NEWS</Heading>
                <LinksSection>
                  <LinksH>Bio News</LinksH>
                  <LinksH>Fuck Franky</LinksH>
                  <LinksH>2021</LinksH>
                </LinksSection>
              </NewsBox>
            </LeftArea>
            <RightArea>
              <PartnerBox>
                <Heading>PARTNERS</Heading>
                <LinksSection>
                  <LinksH>Sponsors</LinksH>
                  <LinksH>Collaborators</LinksH>
                  <LinksH>Partner With Us</LinksH>
                </LinksSection>
              </PartnerBox>
              <InitiativesBox>
                <Heading>INITIATIVES</Heading>
                <LinksSection>
                  <LinksH>STEMcast</LinksH>
                  <LinksH>Conference</LinksH>
                  <LinksH>Biolab Tutorials</LinksH>
                  <LinksH>McMaster Courses</LinksH>
                </LinksSection>
              </InitiativesBox>
              <ContactBox>
                <Heading>CONTACT US</Heading>
                <LinksSection>
                  <LinksH>Link 1</LinksH>
                  <LinksH>Link 2</LinksH>
                </LinksSection>
              </ContactBox>
            </RightArea>
          </HiddenButtonContainer>
        </HiddenContainer>
      )}
    </>
  );
}
