import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/results");
  }
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
    
    </div>
  );
}
