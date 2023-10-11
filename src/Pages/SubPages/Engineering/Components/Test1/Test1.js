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

export default function Test1() {
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
            <LeftImage src='https://static.igem.wiki/teams/4751/wiki/testvector.png' />
          </LeftBox>
          <RightBox>
            <TitleContainer>
              <TitleTxt>Gene Block Test</TitleTxt>
              <SubTitleTxt>PCR amplification of gene block</SubTitleTxt>
            </TitleContainer>
            <BodyContainer>
            <NavImage src='https://static.igem.wiki/teams/4751/wiki/genetest.png' />
              <TopText>
              Successful amplification of truncated butyrate sensing system using old gene block  
              </TopText>
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
