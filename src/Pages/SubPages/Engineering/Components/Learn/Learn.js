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
                Butyrate system transformed E.coli DH5a cultures were diluted to
                OD 0.1 and incubated in 0, 0.1, 0.2, 0.4, 1.0 and 2.0 g/L of
                butyrate. YFP fluorescence intensity was recorded at 0 hours and
                <strong > 4 hours</strong>?
              </TopText>
              <MiddleText>
                Samples
                <br /> - E.coli untransformed (negative control)
                <br />- E.coli with Butyrate System
                <br />- E.coli with Butyrate System & no Butyrate
                <br />- Butyrate with no bacteria
              </MiddleText>
              <BottomText>
                YFP expressing E.coli DH5a cultures (positive control) were
                diluted to OD 0.1 and incubated in 0, 0.5 mM of IPTG. YFP
                fluorescence intensity was recorded at 0 and 4 hours of
                induction.
              </BottomText>
            </BodyContainer>
          </RightBox>
        </BottomBox>
      </Container>
    </div>
  );
}
