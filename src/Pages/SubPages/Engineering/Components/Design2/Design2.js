import React from 'react';
import {
  BodyContainer,
  BottomBox,
  BottomText,
  Container,
  LeftBox,
  LeftImage,
  MiddleText,
  RightBox,
  RightImage,
  SubTitleTxt,
  TitleContainer,
  TitleTxt,
  TopBar,
  TopText,
  NavImage,
} from './LearnStyles';

export default function Design2() {
  return (
    <div
      style={{
        height: '100dvh',
      }}
    >
      <Container>
        <TopBar src='https://static.igem.wiki/teams/4751/wiki/mgemlogo.png' />
        <BottomBox>
          <LeftBox>
            <LeftImage src='https://static.igem.wiki/teams/4751/wiki/designvector.png' />
          </LeftBox>
          <RightBox>
            <TitleContainer>
              <TitleTxt>Design: Butyrate Sensing System</TitleTxt>
              <NavImage src='https://static.igem.wiki/teams/4751/wiki/designgene.png' />
            </TitleContainer>
            <BodyContainer>
              <TopText>
              With our new gene block flanked with the restriction enzymes (BamHI and HindIII). Our new design consists of cloning the following gene into pUC118 (high copy) vector. 
              </TopText>
              <MiddleText>
              <LeftImage src='https://static.igem.wiki/teams/4751/wiki/puc118.png' />
              </MiddleText>
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
