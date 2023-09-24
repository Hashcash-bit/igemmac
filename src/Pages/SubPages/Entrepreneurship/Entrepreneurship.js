import React from 'react';
import styled from 'styled-components';

import SamplePDF from './sample.pdf';

const Container = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
`;

const Banner = styled.div`
  background: url('https://thepointsguy.global.ssl.fastly.net/us/originals/2023/03/Really-Cool.jpeg?width=1920')
    no-repeat center center;
  background-size: cover;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export default function Entrepreneurship() {
  return (
    <div>
      <Banner>
        <Title>Entrepreneurship</Title>
      </Banner>
      <Container>
        <iframe
          src={SamplePDF}
          width="80%"
          height="100%"
          title="PDF in an iFrame"
        />
      </Container>
    </div>
  );
}
