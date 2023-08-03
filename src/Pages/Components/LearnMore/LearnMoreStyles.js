//Styled Components
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  font-family: Montserrat-Alt1;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  cursor: default;
`;

export const Box = styled.div`
  width: 98%;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

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
`;

export const SubLB = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #94b2af;
  border-radius: 25px;
  padding: 20px;
`;

export const TopLB = styled.div`
  font-size: 45px;
  height: 12px;
  margin-bottom: 10px;
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
  color: #96080a;
  font-weight: bold;
  text-decoration: none;
  transition: ease-in-out 0.2s;

  &:hover {
    transform: translate(5px);
  }
`;

export const MiddleGhostBox = styled.div`
  background-color: #aeebe4;
`;

export const MiddleBox = styled.div``;

export const RightBox = styled.div`
  display: flex;
  height: 300px;
  width: max-content;
  gap: 20px;
  background-color: #94b2af;
  border-radius: 25px;
  padding: 20px;
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
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   height: 50px;
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
`;

export const Plus = styled.div`
  font-size: 30px;
  color: #96080a;
  font-weight: bold;
  width: 100%;
  justify-content: start;
  display: flex;
`;

export const SubHeader = styled.div`
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: start;
  text-align: start;
  margin-left: 40px;
  font-weight: 600;
`;

export const RightArea = styled.div``;

export const Image = styled.img`
  width: 200px;
  height: auto;
`;
