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
    </div>
  );
}
