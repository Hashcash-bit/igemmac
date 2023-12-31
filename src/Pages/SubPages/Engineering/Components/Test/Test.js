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
} from './TestStyles';

export default function Test() {
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
              <TitleTxt>Test</TitleTxt>
              <SubTitleTxt>Butyrate Sensing Systems</SubTitleTxt>
            </TitleContainer>
            <BodyContainer>
              <TopText>
              To test whether we have successfully PCR amplified our gene block and cloned it into our vector. We conducted a Sanger Sequence to validate the our system identity within DH5a E. coli chassis. 
              </TopText>
              <MiddleText>
              The Sanger Sequence should that  compared to our benchling design there was a 100% alignment of our cloned sensing system with <b>0 mutation</b> introduced.
              </MiddleText>
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
