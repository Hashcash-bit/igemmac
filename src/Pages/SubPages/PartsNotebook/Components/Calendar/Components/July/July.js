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
} from './JulyStyles';

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { Link } from 'react-scroll';

export default function July() {
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
              <Link to="June" smooth={true} duration={500}>
                <BiSolidLeftArrow /> -------------
              </Link>
            </LeftArrow>
            <MiddleTxt>July</MiddleTxt>
            <RightArrow>
              <Link to="August" smooth={true} duration={500}>
                ------------- <BiSolidRightArrow />
              </Link>
            </RightArrow>
          </HeaderContainer>
        </div>
        <ObjectiveContainer>
          Our Lab Notebook for July
        </ObjectiveContainer>
        <BodyTextContainer>
          <Textcontainer>
          <iframe
          src='https://static.igem.wiki/teams/4751/wiki/mcmaster-canada-notebook-july-2023.pdf'
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
