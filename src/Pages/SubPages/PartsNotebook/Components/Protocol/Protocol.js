import React from 'react';
import {
  BodyTextContainer,
  Button,
  ButtonContainer,
  Cell,
  Container,
  HeaderRow,
  Table,
  TitleTxt,
  TopBar,
} from './PartsStyles';

export default function Protocol() {

  return (
    <div>
      <Container>
        <div>
          <TopBar src='https://static.igem.wiki/teams/4751/wiki/mgemlogo.png' />
          <TitleTxt>Protocol</TitleTxt>
        </div>
        <ButtonContainer>
          <iframe
            src='https://static.igem.wiki/teams/4751/wiki/protocols.pdf'
            width="100%"
            height="100%"
            title="PDF in an iFrame"
          />
        </ButtonContainer>
      </Container>
    </div>
  );
}
