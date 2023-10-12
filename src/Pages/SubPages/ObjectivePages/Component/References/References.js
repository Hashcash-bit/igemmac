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
        <TopBar src="https://static.igem.wiki/teams/4751/wiki/mgemlogo.png" />
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
          src="https://static.igem.wiki/teams/4751/wiki/designreferences.pdf"
          width="80%"
          height="600px"
          title="PDF in an iFrame"
        />
      </div>
    </div>
  );
}
