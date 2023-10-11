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

export default function Build1() {
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
            <LeftImage src='https://static.igem.wiki/teams/4751/wiki/vector.png' />
          </LeftBox>
          <RightBox>
            <TitleContainer>
              <TitleTxt>Gene Block Build</TitleTxt>
              <SubTitleTxt>Built Gene Block in Benchling </SubTitleTxt>
            </TitleContainer>
            <BodyContainer>
              <TopText>
              By using new primers our team aimed to selectively amplify the gene sequence, pPchA-pCHA-pLEE1-YFP from BBa_K4442001  
              </TopText>
              <NavImage src='https://static.igem.wiki/teams/4751/wiki/navimg.png' />
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
