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

export default function Parts() {
  const rows = 7;
  const cols = 5;

  const tableData = [
    [
      'Row 1, Col 1',
      'Row 1, Col 2',
      'Row 1, Col 3',
      'Row 1, Col 4',
      'Row 1, Col 5',
    ],
    [
      'Row 2, Col 1',
      'Row 2, Col 2',
      'Row 2, Col 3',
      'Row 2, Col 4',
      'Row 2, Col 5',
    ],
    [
      'Row 3, Col 1',
      'Row 3, Col 2',
      'Row 3, Col 3',
      'Row 3, Col 4',
      'Row 3, Col 5',
    ],
    [
      'Row 4, Col 1',
      'Row 4, Col 2',
      'Row 4, Col 3',
      'Row 4, Col 4',
      'Row 4, Col 5',
    ],
    [
      'Row 5, Col 1',
      'Row 5, Col 2',
      'Row 5, Col 3',
      'Row 5, Col 4',
      'Row 5, Col 5',
    ],
    [
      'Row 6, Col 1',
      'Row 6, Col 2',
      'Row 6, Col 3',
      'Row 6, Col 4',
      'Row 6, Col 5',
    ],
    [
      'Row 7, Col 1',
      'Row 7, Col 2',
      'Row 7, Col 3',
      'Row 7, Col 4',
      'Row 7, Col 5',
    ],
  ];

  return (
    <div
      style={{
        height: '100dvh',
      }}
    >
      <Container>
        <div>
          <TopBar src='https://static.igem.wiki/teams/4751/wiki/mgemlogo.png' />
          <TitleTxt>Parts</TitleTxt>
        </div>
        <BodyTextContainer>
          <Table>
            <thead>
              <HeaderRow>
                {Array.from({ length: cols }, (_, i) => (
                  <Cell key={i}>Header {i + 1}</Cell>
                ))}
              </HeaderRow>
            </thead>
            <tbody>
              {tableData.map((rows, i) => (
                <tr key={i}>
                  {rows.map((cell, j) => (
                    <Cell key={j}>{cell}</Cell>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </BodyTextContainer>
        <ButtonContainer>
          <Button>Check out our protocol</Button>
        </ButtonContainer>
      </Container>
    </div>
  );
}
