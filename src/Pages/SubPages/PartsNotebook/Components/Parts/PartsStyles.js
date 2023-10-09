import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const TopBar = styled.img`
  width: 50px;
`;

export const TitleTxt = styled.div`
  font-size: 49.2px;
  font-weight: bold;
  color: #971a35;
  padding-left: 20px;
`;

export const BodyTextContainer = styled.div`
  display: flex;
  padding: 20px 50px;
  gap: 20px;
  justify-content: center;
`;

export const Table = styled.table`
  width: 80%;
  //   border-collapse: collapse;
  border: 1px solid #e4e3e3;
`;

export const HeaderRow = styled.tr`
  background-color: #e4e3e3;
`;

export const Cell = styled.td`
  padding: 10px;
  border-top: 1px solid #e4e3e3;
  border-bottom: 0px solid black;
  text-align: center;
  font-size: 12px;
`;

export const ButtonContainer = styled.div`
  height: 200px;
  background-color: #971a35;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Button = styled(Link)`
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
