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
  const cols = 6;

  const tableHeader = [
    'Parts Name',
    'Type',
    'Description',
    'Components',
    'New/Existing',
    'Length (Base Pair)',
  ]

  const tableData = [
    [
      'BBa_K4751000',
      'Vector Plasmid',
      'pUC118',
      'LacZa, AmpR',
      'New',
      '1501'
    ],
    [
      'BBa_K4751001',
      'Plasmid',
      'Recording Plasmid',
      'EGFP. AmpR',
      'New',
      '4004',
    ],
    [
      'BBa_K4751002',
      'Composite',
      'Lab Butyrate Sensing System',
      'pPchA-PchA-LEE1-YFP, AmpR',
      'New',
      '4634',
    ],
    [
      'BBa_K4751003',
      'Composite',
      'Memory Recording Butyrate Sensing System',
      'Bba_J23101-hpaA, pBC-BE2-sgRNA1, pPchA-PchA-LEE1-sgRNA3, AmpR',
      'New',
      ''
    ],
    [
      'BBa_K4751004',
      'Composite',
      'Memory Recording Indole Sensing System',
      'Bba_J23101-hpaA, pBC-BE2-sgRNA1',
      'New',
      '',
    ],
    [
      'BBa_K4751005',
      'Composite',
      'Memory Recording Tetrathionate Sensing System',
      'Bba_J23101-hpaA, pBC-BE2-sgRNA1',
      'New',
      '',
    ],
    [
      'BBa_K4751006',
      'Composite',
      'Memory Recording Tetrahydrofolate Sensing System',
      'Bba_J23101-hpaA, pBC-BE2-sgRNA1',
      'New',
      '',
    ],
    [
      'BBa_K4751007',
      'Composite',
      'Memory Recording Hydrogen Peroxide Sensing System',
      'Bba_J23101-hpaA, pBC-BE2-sgRNA1',
      'New',
      '',
    ],
    [
      'BBa_K3078101',
      'Composite',
      'HPA-4 Sensing System ',
      'Bba_J23101-hpaA, pBC-BE2-sgRNA1',
      'Existing',
      '2527',
    ],
  ];

  return (
    <div
      style={{
        height: '80dvh',
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
                  <Cell key={i}>{tableHeader[i]}</Cell>
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
      </Container>
    </div>
  );
}
