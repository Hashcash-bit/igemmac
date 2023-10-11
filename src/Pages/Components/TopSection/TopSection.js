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


//Icons

//Dropdown
import Dropdown from '../Utils/Dropdown';

export default function TopSection() {
  // About Functionality
  const dropdownOptionsAbout = ['Description', 'Attributions']; // Option for About Dropdown
  const aboutRoutes = ['/description', '/attributions'];

  // Initiatives Functionality
  const dropdownOptionsInitiatives = [
    'Engineering',
    'Results',
    'Contributions'
  ]; // Option for Initiatives Dropdown
  const initiativesRoutes = [
    '/engineering',
    '/results',
    '/contribution'
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
    'Integrated Human Practices',
    'Womens Report'
  ]; // Option for News Dropdown
  const newsRoutes = [
    '/overview',
    '/PolicyReport',
    '/entrepreneurship',
    '/human-practices',
    '/womensreport'
  ];

  return (
    <Container>
      <Box>
        <NavBarContainer>
          <LogoArea>
            <Links route='/'><Heart src='https://static.igem.wiki/teams/4751/wiki/mgemlogo.png' /></Links>
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
                navItemName="OVERVIEW OF HUMAN PRACTICES"
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
                  <HeartImage src="https://static.igem.wiki/teams/4751/wiki/mgemlogo.png" />
                </SecondCircle>
              </FirstCircle>
            </HeartImageContainer>
          </LeftSection>
          <RightSection>
            <SubRightSection>
              <InfoText>
                Follow along as we trek the vast field of genetics
              </InfoText>
            </SubRightSection>
          </RightSection>
        </HeroContainer>
      </Box>
    </Container>
  );
}
