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
              <TitleTxt>Build: Butyrate Sensing System</TitleTxt>
            </TitleContainer>
            <BodyContainer>
              <TopText>
              By cloning pPchA-PchA-PLEE1-YFP through restriction enzyme digest using BamHI and HindIII cut sites. Using Benchling designs our theoretical constructed plasmid is 4634 bp  

<br /><br />*PBO is pUC118-Butyrate Construct  
              </TopText>
              <LeftImage src='https://static.igem.wiki/teams/4751/wiki/buildenzyme.png' />
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
