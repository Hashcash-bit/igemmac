import React from 'react';
import {
  Container,
  MiddleSection,
  NavHeader,
  NavImage,
  NavSubHeader,
  Navigation,
  NavigationImageContainer,
  TopBar,
  NavLink,
  BottomSection,
  LeftSection,
  RightSection,
  RightCast,
  RightButton,
  LeftImage,
  NavLinkS,
} from './H2O2Styles';

import IGEMLOGO from '../../../../Img/mgemlogo.png';
import NAVUIMG from '../../../../Img/NavImg.png';
import InfoImage from '../../../../Img/BLImage.png';

export default function H2O2() {
  return (
    <div
      style={{
        height: '100dvh',
      }}
    >
      <Container>
        <TopBar src={IGEMLOGO} />
        <MiddleSection>
          <NavHeader>Click Metabolites to view the different systems</NavHeader>
          <Navigation>
            <NavLink>Butyrate</NavLink>
            <NavLink>Indole</NavLink>
            <NavLinkS>H2O2</NavLinkS>
            <NavLink>Tetrahydrofolate</NavLink>
            <NavLink>Tetrathionate</NavLink>
          </Navigation>
          <NavigationImageContainer>
            <NavImage src={NAVUIMG} />
            <NavSubHeader>
              *Note YFP replace the sgRNA for real-life testing of system
            </NavSubHeader>
          </NavigationImageContainer>
        </MiddleSection>
        <BottomSection>
          <LeftSection>
            <LeftImage src={InfoImage} />
          </LeftSection>
          <RightSection>
            <RightCast>
              Cut sites BamHI and HindIII are introduced during PCR
              amplification for restriction enzyme cloning.
            </RightCast>
            <RightButton>
              See Experiments and Results of construction here
            </RightButton>
          </RightSection>
        </BottomSection>
      </Container>
    </div>
  );
}
