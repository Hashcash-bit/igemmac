import React from 'react';

// component imports
import { MainDiv } from './components/MainDiv';
import { PictureArea } from './components/PictureArea';

// media imports
import PrincePhilip from '../Img/philip.jpg';

const CurrentPage = () => {
  return (
    <MainDiv>
      <PictureArea>
        <img src={PrincePhilip} alt="old hag" />
      </PictureArea>
    </MainDiv>
  );
};

export default CurrentPage;
