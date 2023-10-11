import React from 'react';
import styled from 'styled-components';

import SubNavbar from '../Components/SubNavbar/SubNavbar';
import Footer from '../../Components/Footer/Footer'

const Container = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
`;

const Banner = styled.div`
  
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export default function Entrepreneurship() {
  return (
    <div
      style={{
        backgroundColor: '#dda7a2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        gap: '20px',
        marginTop: '50px',
        height: '100dvh',
      }}
    >
      <SubNavbar />
      <Banner>
        <Title>Entrepreneurship</Title>
      </Banner>
      <Container>
        <iframe
          src='https://static.igem.wiki/teams/4751/wiki/market-report.pdf'
          width="80%"
          height="600px"
          title="PDF in an iFrame"
        />
      </Container>
      <Footer />
    </div>
  );
}
