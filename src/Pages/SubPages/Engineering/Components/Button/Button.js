import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonContainer = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 500px;
  padding: 20px 40px;
  align-self: center;
  justify-self: center;
  transition: 0.2s ease-in-out;
  font-weight: 600;

  &:hover {
    background-color: white;
    color: #971a35;
  }
`;

export default function Button() {
  return (
    <div
      style={{
        height: '200px',
        backgroundColor: '#971A35',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <ButtonContainer>Check out our results</ButtonContainer>
    </div>
  );
}
