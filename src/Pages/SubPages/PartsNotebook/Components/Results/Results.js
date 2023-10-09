import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
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

export default function Results() {
  return (
    <div
      style={{
        height: '100dvh',
        backgroundColor: '#971A35',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Button>Check out our results</Button>
    </div>
  );
}
