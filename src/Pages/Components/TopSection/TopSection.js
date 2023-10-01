//Default imports
import React from 'react';

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
} from './TopSectionStyles';

//Logo
import iGEMLogo from '../img/mgempic.png';
import HeartIMG from '../img/mgemlogo.png';

//Icons

//Dropdown
import Dropdown from '../Utils/Dropdown';

export default function TopSection() {
  // About Functionality
  const dropdownOptionsAbout = ['Our Team', 'Description', 'Attributions']; // Option for About Dropdown
  const aboutRoutes = ['/OurTeam', '/description', '/attributions'];

  // Initiatives Functionality
  const dropdownOptionsInitiatives = [
    'Design',
    'Engineering',
    'Results',
    'Parts and Notebook',
    'Contributions'
  ]; // Option for Initiatives Dropdown
  const initiativesRoutes = [
    '/design',
    '/engineering',
    '/results',
    '/notebook',
    '/contributions'
  ];

  // Projects Functionality
  const dropdownOptionsProjects = [
    'Kinetic Model',
    'Normalization Model'
  ]; // Option for Projects Dropdown
  const projectsRoutes = [
    '/kineticmodel',
    '/normalizationmodel'
  ];

  // News Functionality
  const dropdownOptionsNews = [
    'Overview',
    'Policy Report',
    'Entrepreneurship',
    'IHR & Womens Rights',
  ]; // Option for News Dropdown
  const newsRoutes = [
    '/human-practices',
    '/PolicyReport',
    '/Entrepreneurship',
    '/IHR&WomensRights',
  ];

  // Partners Functionality
  const dropdownOptionsPartners = [
    'Sponsors',
    'Collaborators',
    'Partner With Us',
  ]; // Option for Partners Dropdown
  const partnersRoutes = ['/Sponsors', '/Collaborators', '/PartnerWithUs'];

  // ContactUs Fucntionality
  const dropdownOptionsContactUs = ['Project 1', 'Project 2', 'Project 3']; // Option for Contact Us Dropdown
  const contactusRoutes = ['/Project1', '/Project2', '/Project3'];

  return (
    <Container>
      <Box>
        <NavBarContainer>
          <LogoArea>
            <Heart src={HeartIMG} />
          </LogoArea>
          <LinksContainer>
            <Links>
              <Dropdown
                options={dropdownOptionsAbout}
                routes={aboutRoutes}
                navItemName="ABOUT"
              />
            </Links>
            <Slashes>/</Slashes>
            <Links>
              {' '}
              <Dropdown
                options={dropdownOptionsInitiatives}
                routes={initiativesRoutes}
                navItemName="WET LAB"
              />
            </Links>
            <Slashes>/</Slashes>
            <Links>
              {' '}
              <Dropdown
                options={dropdownOptionsProjects}
                routes={projectsRoutes}
                navItemName="DRY LAB"
              />
            </Links>
            <Slashes>/</Slashes>
            <Links>
              {' '}
              <Dropdown
                options={dropdownOptionsNews}
                routes={newsRoutes}
                navItemName="HUMAN PRACTICES"
              />
            </Links>
            <Slashes>/</Slashes>
            <Links>
              {' '}
              <Dropdown
                options={dropdownOptionsPartners}
                routes={partnersRoutes}
                navItemName="PARTNERS"
              />
            </Links>
            <Slashes>/</Slashes>
            <Links>
              <Dropdown
                options={dropdownOptionsContactUs}
                routes={contactusRoutes}
                navItemName="CONTACT US"
              />
            </Links>
          </LinksContainer>
        </NavBarContainer>
        <HeroContainer>
          <LeftSection>
            <LeftInformationContainer>
              <BigText>INTRODUCING iGEM MCMASTER</BigText>
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
