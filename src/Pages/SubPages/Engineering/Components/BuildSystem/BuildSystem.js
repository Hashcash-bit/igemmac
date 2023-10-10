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

export default function BuildSystem() {
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
              <TitleTxt>Build System</TitleTxt>
              <SubTitleTxt>Construction of Sensing Plasmid</SubTitleTxt>
            </TitleContainer>
            <BodyContainer>
              <RightImage src='https://static.igem.wiki/teams/4751/wiki/infoimage.png' />
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
