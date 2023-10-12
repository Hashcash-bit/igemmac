import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.img`
  width: 50px;
`;

export default function References() {
  return (
    <div
      style={{
        height: 'max-content',
      }}
    >
      <Container>
        <TopBar src="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9QaXR3WS9NQUZ0S1dQaXR3WS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAIhBGDh2zZ4q1jEuDCYZ7z3imyeRudUXfpKHXhGnWaan&exp=1697062394&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAMuJG6me7JUK_5UL5-9KEJrso3lf-eI4emgPi3TJY_sn" />
        <div
          style={{
            justifyContent: 'end',
            display: 'flex',
          }}
        >
          <div
            style={{
              fontSize: '19px',
              fontWeight: 'bold',
              color: '#971A35',
              backgroundColor: '#efd2bf',
              padding: '20px 10px',
              width: '90%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: '49.2px',
                fontWeight: 'bold',
                color: '#971A35',
                paddingLeft: '50px',
              }}
            >
              References
            </div>
          </div>
        </div>
      </Container>
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px'
      }}
      >
        <iframe
          src="https://static.igem.wiki/teams/4751/wiki/market-report.pdf"
          width="80%"
          height="600px"
          title="PDF in an iFrame"
        />
      </div>
    </div>
  );
}
