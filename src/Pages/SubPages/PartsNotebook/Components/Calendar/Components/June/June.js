import React from 'react';
import {
  BodyTextContainer,
  Container,
  HeaderContainer,
  LeftArrow,
  LeftBox,
  MiddleTxt,
  ObjectiveContainer,
  Result,
  RightArrow,
  RightBox,
  Summary,
  Textcontainer,
  TopBar,
  TroubleShooting,
} from './JuneStyles';

import IGEMLOGO from '../../../../../Img/mgemlogo.png';

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

export default function June() {
  return (
    <div
      style={{
        height: '100dvh',
      }}
    >
      <Container>
        <div>
          <TopBar src={IGEMLOGO} />
          <HeaderContainer>
            <LeftArrow>
              <BiSolidLeftArrow /> -------------
            </LeftArrow>
            <MiddleTxt>June 1 - June 7</MiddleTxt>
            <RightArrow>
              ------------- <BiSolidRightArrow />
            </RightArrow>
          </HeaderContainer>
        </div>
        <ObjectiveContainer>
          Objective: Lorem ipsim dolor sit amet, consectetur adipiscing elit.
        </ObjectiveContainer>
        <BodyTextContainer>
          <Textcontainer>
            <LeftBox>
              <Summary>
                <strong>Summary: </strong>lorem ipsim dolor sit amet,
                consectetur adipiscing
              </Summary>
              <Result>
                <strong>Result: </strong>lorem ipsim dolor sit amet, consectetur
                adipiscing
              </Result>
              <TroubleShooting>
                <strong>Troubleshooting: </strong>lorem ipsim dolor sit amet,
                consectetur adipiscing
              </TroubleShooting>
            </LeftBox>
            <RightBox>Weekly Result</RightBox>
          </Textcontainer>
        </BodyTextContainer>
      </Container>
    </div>
  );
}
