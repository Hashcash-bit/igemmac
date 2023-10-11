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
} from './MayStyles';

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

import { Link } from 'react-scroll';

export default function May() {
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
              <Link to="September" smooth={true} duration={500}>
                <BiSolidLeftArrow /> -------------
              </Link>
            </LeftArrow>
            <MiddleTxt>May</MiddleTxt>
            <RightArrow>
              <Link to="June" smooth={true} duration={500}>
                ------------- <BiSolidRightArrow />
              </Link>
            </RightArrow>
          </HeaderContainer>
        </div>
        <ObjectiveContainer>
          Lab Notebook for May
        </ObjectiveContainer>
        <BodyTextContainer>
          <Textcontainer>
          <iframe
          src='https://static.igem.wiki/teams/4751/wiki/mcmaster-canada-notebook-may-2023.pdf'
          width="80%"
          height="600px"
          title="PDF in an iFrame"
        />
          </Textcontainer>
        </BodyTextContainer>
      </Container>
    </div>
  );
}
