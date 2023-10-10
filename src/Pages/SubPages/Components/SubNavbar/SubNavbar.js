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
import iGEMLogo from '../../../Components/img/mgempic.png';
import HeartIMG from '../../../Components/img/mgemlogo.png'

//Icons

//Dropdown
import Dropdown from '../../../Components/Utils/Dropdown';

export default function SubNavbar() {
  // About Functionality
  const dropdownOptionsAbout = ['Our Team', 'Description', 'Attributions']; // Option for About Dropdown
  const aboutRoutes = ['/OurTeam', '/description', '/attributions'];

  // Initiatives Functionality
  const dropdownOptionsInitiatives = [
    'Engineering',
    'Results',
    'Parts and Notebook',
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
    'Special Prize 1',
    'Special Prize 2',
    'Special Prize 3',
  ]; // Option for Partners Dropdown
  const partnersRoutes = ['/sp1', '/sp2', '/sp3'];

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
                navItemName="SPECIAL PRIZES"
              />
            </Links>
          </LinksContainer>
        </NavBarContainer>
      </Box>
    </Container>
  );
}
