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

export default function Design1() {
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
              <TitleTxt>Gene Block Design</TitleTxt>
              <NavImage src='https://static.igem.wiki/teams/4751/wiki/navimg.png' />
            </TitleContainer>
            <BodyContainer>
              <TopText>
              As McMaster_Canada 2023 project is an improvement from our 2022 design. To save the need to order from IDT we re-used the gene part: BBa_K4442001
              </TopText>
              <MiddleText>
              It is important to note that BBa_K4442001 consisted of an added HRPV gene downstream of the reporter gene which is no longer being used in our system. 
              </MiddleText>
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
