//Default react imports
import React from 'react';

// The Styled component imports
import { PictureArea } from './ObjectivePagesStyled';

// The Component imports
import Background from './Component/Background/Background';
import SubNavbar from '../Components/SubNavbar/SubNavbar';

// import Link and element from react scroll
import { Link, Element } from 'react-scroll';

// The image imports
import Title from './Component/Title/Title';
import Pages from './Component/Objective/Pages';
import BioTrak from './Component/BioTrak/BioTrak';
import BioMarker1 from './Component/BioMarker1/BioMarker1';
import BioMarker2 from './Component/BioMarker2/BioMarker2';
import BioMarker3 from './Component/BioMarker3/BioMarker3';
import BioMarker4 from './Component/BioMarker4/BioMarker4';
import BioMarker5 from './Component/BioMarker5/BioMarker5';

export default function ObjectivePages() {
  return (
    <div
      style={{
        overflowX: 'hidden',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <SubNavbar />
      <Title />
      <Background />
      <Pages />
      <br />
      <br />
      <BioTrak />
      <BioMarker1 />
      <BioMarker2 />
      <BioMarker3 />
      <BioMarker4 />
      <BioMarker5 />
    </div>
  );
}
