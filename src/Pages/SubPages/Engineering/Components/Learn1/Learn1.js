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
            </TitleContainer>
            <BodyContainer>
              <TopText>
              Our team learned that we can use novel primers to generate and introduce new restriction cut sites to old our old gene sequence (BBa_K4442001). To validate the success we continued to clone the new gene block into vector plasmid pUC118.
              </TopText>
              <MiddleText>
              The benefits of removing the HRPV gene is that we hope to limit the production burden of producing multiple proteins to optimize growth and sensing of our system. 
              </MiddleText>
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
