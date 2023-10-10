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
} from './AugustStyles';

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { Link } from 'react-scroll';

export default function August() {
  return (
    <div
      style={{
        height: '100dvh',
      }}
    >
      <Container>
        <div>
          <TopBar src='https://static.igem.wiki/teams/4751/wiki/mgemlogo.png' />
          <HeaderContainer>
            <LeftArrow>
              <Link to="July" smooth={true} duration={500}>
                <BiSolidLeftArrow /> -------------
              </Link>
            </LeftArrow>
            <MiddleTxt>August 1 - August 7</MiddleTxt>
            <RightArrow>
              <Link to="September" smooth={true} duration={500}>
                ------------- <BiSolidRightArrow />
              </Link>
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
