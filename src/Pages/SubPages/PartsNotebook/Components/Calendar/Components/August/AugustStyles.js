import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 100px;
`;

export const TopBar = styled.img`
  width: 50px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LeftArrow = styled.div`
  font-size: 49.2px;
  font-weight: bold;
  color: #971a35;
`;

export const MiddleTxt = styled.div`
  font-size: 49.2px;
  font-weight: bold;
  color: #971a35;
`;

export const RightArrow = styled.div`
  font-size: 49.2px;
  font-weight: bold;
  color: #971a35;
`;

export const BodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   padding: 20px 50px;
  gap: 20px;
  align-items: center;
`;

export const ObjectiveContainer = styled.div`
  width: 100%;
  background-color: #efd2bf;
  padding: 30px 0px;
  font-size: 19px;
  font-weight: 600;
  color: #971a35;
`;

export const Textcontainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  border: 3px solid #971a35;
  gap: 20px;
  width: 40%;
`;

export const Summary = styled.div`
  font-size: 22px;
  //   font-weight: bold;
  color: #971a35;
`;

export const Result = styled.div`
  font-size: 22px;
  //   font-weight: bold;
  color: #971a35;
`;

export const TroubleShooting = styled.div`
  font-size: 22px;
  //   font-weight: bold;
  color: #971a35;
`;

export const RightBox = styled.div`
  display: flex;
  background-color: #842e41;
  justify-content: center;
  align-items: center;
  width: 40%;
  color: white;
`;
