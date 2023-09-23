import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleContainer = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export const ButtonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  gap: 20px;
`;

export const IndividualDividers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const BackdropButton = styled(Link)`
  text-decoration: none;
  box-shadow: 10px 10px #8f311c;
  border: 2px solid #000 !important;
  transition: all ease-in 0.2s !important;
  padding: 15px 60px;
  font-size: 30px;
  font-weight: bold;
  color: black;

  &:hover {
    box-shadow: none;
    transform: translateY(4px) !important;
    transition: all ease-in 0.2s;
    opacity: 1 !important;
  }
`;

export const LikkleBlurb = styled.div`
  text-align: center;
`;
