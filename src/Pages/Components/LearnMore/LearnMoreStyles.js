//Styled Components
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  font-family: Jost;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  cursor: default;
  margin-top: -130px;

  @media screen and (max-width: 1217px) {
    margin-top: 0px;
  }
`;

export const Box = styled.div`
  width: 98%;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 40px;
  height: max-content;

  @media screen and (max-width: 500px) {
    padding-right: 0px;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 300px;
  gap: 20px;
  margin-top: 40px;

  @media screen and (max-width: 1217px) {
    margin-top: 0px;
    justify-content: space-between;
    // background-color: blue;
  }

  @media screen and (max-width: 858px) {
    display: none;
  }
`;

export const SubLB = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d58681;
  border-radius: 25px;
  padding: 20px;
  height: 200px;
`;

export const TopLB = styled.div`
  font-size: 45px;
  height: 12px;
  margin-bottom: 10px;
  margin-top: 50px;
`;

export const MiddleLB = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: justify;
`;

export const BottomLB = styled.div`
  font-size: 45px;
  height: 12px;
  display: flex;
  justify-content: end;
`;

export const NameLB = styled.div`
  font-weight: bold;
  font-size: 12px;
  margin-top: 20px;
`;

export const LearnMLB = styled(Link)`
  font-size: 18px;
  color: #d58681;
  font-weight: bold;
  text-decoration: none;
  transition: ease-in-out 0.2s;

  &:hover {
    transform: translate(5px);
  }

  @media screen and (max-width: 858px) {
    width: 100%;
    display: flex;
    margin-left: 40px;
  }
`;

export const LearnMRB = styled(Link)`
  display: none;

  @media screen and (max-width: 858px) {
    width: 100%;
    display: flex;
    margin-left: 40px;
    font-size: 18px;
    color: #d58681;
    font-weight: bold;
    text-decoration: none;
    transition: ease-in-out 0.2s;

    &:hover {
      transform: translate(5px);
    }
  }

  @media screen and (max-width: 385px) {
    margin-left: 0px;
  }
`;

export const MiddleGhostBox = styled.div`
  background-color:;
  position: relative;
  top: -10px;
  left: 500px;
  border-radius: 25px;
  z-index: 1;
  width: 300px;
  height: 150px;
  margin-right: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1217px) {
    display: none;
  }
`;

export const MiddleBox = styled.div`
  position: absolute;
  border-radius: 25px;
  border: 4px solid #7a003c;
  background-color: #96080a;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 200px;
  height: 100px;
`;

export const RightBox = styled.div`
  display: flex;
  height: 300px;
  width: max-content;
  gap: 20px;
  background-color: #d58681;
  border-radius: 25px;
  padding: 20px;

  @media screen and (max-width: 858px) {
    border: 4px solid white;
  }

  @media screen and (max-width: 385px) {
    height: max-content;
  }

  @media screen and (max-width: 315px) {
    padding: 0px;
    background-color: transparent;
    border: none;
  }
`;

export const LeftArea = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 12px;
  width: 250px;
  margin-top: 25px;

  @media screen and (max-width: 1217px) {
    margin-top: 0px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  color: #96080a;
  width: min-content;
  margin-left: 20px;

  @media screen and (max-width: 385px) {
    margin-left: 0px;
  }
`;

export const Plus = styled.div`
  font-size: 30px;
  color: #96080a;
  font-weight: bold;
  width: 100%;
  justify-content: start;
  display: flex;

  @media screen and (max-width: 385px) {
    display: none;
  }
`;

export const SubHeader = styled.div`
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: start;
  text-align: start;
  margin-left: 40px;
  font-weight: 600;

  @media screen and (max-width: 385px) {
    margin-left: 0px;
  }
`;

export const RightArea = styled.div`
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
`;
