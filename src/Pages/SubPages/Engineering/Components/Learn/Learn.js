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
} from './LearnStyles';

export default function Learn() {
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
            <LeftImage src='https://static.igem.wiki/teams/4751/wiki/learnvector.png' />
          </LeftBox>
          <RightBox>
            <TitleContainer>
              <TitleTxt>Learn</TitleTxt>
              <SubTitleTxt>Discussion of Results</SubTitleTxt>
            </TitleContainer>
            <BodyContainer>
              <TopText>
              Our team learned from this experiment that our design is ready to be tested using varying concentrations of Butyrate to test its sensing capacity.
              </TopText>
              <MiddleText>
              Due to time constraints, our testing of our sensing system will be completed after wiki freeze. The results will be documented on this wiki during wiki thaw. 
              </MiddleText>
              <BottomText>
              Testing Protocols can be found on the Experiment and Result Section of the Wiki
              </BottomText>
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
