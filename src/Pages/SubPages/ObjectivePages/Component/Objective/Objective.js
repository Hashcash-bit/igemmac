import React from 'react';
import {
  BodyTextContainer,
  Container,
  TitleTxt,
  TopBar,
} from './ObjectiveStyles';

// import IGEMLOGO from '../../../../Img/mgemlogo.png';

export default function Objective() {
  return (
    <div
      style={{
        height: 'max-content',
      }}
    >
      <Container>
        <TopBar src="https://static.igem.wiki/teams/4751/wiki/mgemlogo.png" />
        <TitleTxt>Objective</TitleTxt>
        <BodyTextContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontWeight: '500',
                fontSize: '22px',
                color: '#971A35',
              }}
            >
              So what do we want to achieve:
            </div>
            <div
              style={{
                fontSize: '22px',
                color: '#971A35',
                fontWeight: '300',
              }}
            >
              1. Developing a memory-based biological Sensing design
              <br />
              2. Design 5 systems to measure 5 distinct biomarkers for MDD
              <br />
              3. Develop hypothetical pill for delivery method
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                padding: '20px 40px',
                backgroundColor: '#DF5A77',
                fontSize: '33px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              DELIVERY
            </div>
            <div
              style={{
                padding: '20px 70px',
                backgroundColor: '#BD3552',
                fontSize: '38px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              SYSTEM
            </div>
            <div
              style={{
                padding: '20px 100px',
                backgroundColor: '#971a35',
                fontSize: '45px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              SENSING
            </div>
          </div>
        </BodyTextContainer>
      </Container>
    </div>
  );
}
