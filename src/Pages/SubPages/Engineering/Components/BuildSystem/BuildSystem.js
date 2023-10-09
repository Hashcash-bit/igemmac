import React from 'react';
import {
  BodyContainer,
  BottomBox,
  Container,
  LeftBox,
  LeftImage,
  RightBox,
  RightImage,
  SubTitleTxt,
  TitleContainer,
  TitleTxt,
  TopBar,
} from './BuildSystemStyles';

import IGEMLOGO from '../../../Img/mgemlogo.png';
import LeftImg from '../../../Img/Vector.png';
import InfoImage from '../../../Img/InfoImage.png';

export default function BuildSystem() {
  return (
    <div
      style={{
        height: '100dvh',
      }}
    >
      <Container>
        <TopBar src={IGEMLOGO} />
        <BottomBox>
          <LeftBox>
            <LeftImage src={LeftImg} />
          </LeftBox>
          <RightBox>
            <TitleContainer>
              <TitleTxt>Build System</TitleTxt>
              <SubTitleTxt>Construction of Sensing Plasmid</SubTitleTxt>
            </TitleContainer>
            <BodyContainer>
              <RightImage src={InfoImage} />
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
