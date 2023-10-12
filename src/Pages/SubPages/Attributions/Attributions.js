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
  color: black;
`;

export default function Attributions() {
  return (
    <div
      style={{
        backgroundColor: '#dda7a2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        gap: '20px',
        marginTop: '50px',
      }}
    >
      <SubNavbar />
      <Banner>
        <Title>Attributions</Title>
      </Banner>
      <Container>
        <iframe
          src="https://attributions.igem.org/?year=2023&team=McMaster-Canada"
          width="80%"
          height="600px"
          title="Attributions Form"
        />
      </Container>
      <Footer />
    </div>
  );
}
