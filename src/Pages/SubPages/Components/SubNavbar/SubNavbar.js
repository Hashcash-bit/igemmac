//Default imports
import React from 'react';

// Importing the styled components
import {
  Container,
  Box,
  Links,
  LinksContainer,
  LogoArea,
  NavBarContainer,
  Slashes,
  Heart,
} from './SubNavbarStyles';

//Logo

//Icons

//Dropdown
import Dropdown from '../../../Components/Utils/Dropdown';

export default function SubNavbar() {
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
    '/human-practices',
    '/PolicyReport',
    '/Entrepreneurship',
    '/IHR&WomensRights',
    '/womensreport'
  ];

  return (
    <Container>
      <Box>
        <NavBarContainer>
          <LogoArea>
            <Heart src='https://static.igem.wiki/teams/4751/wiki/mgemlogo.png' />
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
          </LinksContainer>
        </NavBarContainer>
      </Box>
    </Container>
  );
}
