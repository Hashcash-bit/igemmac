//Importing Routing
import { Link } from 'react-router-dom';

//Importing the Styled Components
import styled from 'styled-components';

export const Container = styled.div`
  font-family: Jost;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: default;
`;

export const Box = styled.div`
  height: max-content;
  background-color: #dda7a2;
  display: flex;
  flex-direction: column;
  width: 98%;
  border-radius: 0px;
  margin-top: 15px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 40px;
  justify-content: center;
  align-items: center;
//   border: 4px solid #7a003c;

  @media screen and (max-width: 500px) {
    padding-right: 0px;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  @media screen and (max-width: 1375px) {
    display: none;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Heart = styled.img`
  height: 30px;
`;

export const Logo = styled.img`
  width: 130px;
  height: 30px;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Links = styled.div``;

export const Slashes = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px 0px;
  color: #7a003c;
  font-weight: bold;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97%;
  align-items: center;

  @media screen and (max-width: 1375px) {
    flex-direction: column;
    gap: 50px;
    justify-content: space-around;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media screen and (max-width: 1375px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;

  @media screen and (max-width: 415px) {
    justify-content: center;
    align-items: center;
  }
`;

export const LeftInformationContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const HeartImageContainer = styled.div`
  margin-top: 20px;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

export const FirstCircle = styled.div`
  background-color: #d58681;
  padding: 50px;
  height: 200px;
  width: 500px;
  border-radius: 500px 500px 0px 0;
  margin-top: -70px;
  margin-left: 20px;
  border: 0px solid #7a003c;
`;

export const SecondCircle = styled.div`
  background-color: #efd2bf;
  padding: 50px;
  padding-bottom: 70px;
  height: 146px;
  width: 400px;
  border-radius: 500px 500px 0px 0;
  z-index: -1;
  border: 0px solid #7a003c;
`;

export const HeartImage = styled.img`
  z-index: 99999;
  margin-top: -110px;
  margin-left: 0px;
  height: 400px;
`;

export const BigText = styled.div`
  font-weight: bold;
  font-size: 7.5rem;
  line-height: 160px;
  width: min-content;
  height: min-content;
  text-shadow:
    -1px -1px 0 #fff,
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
  z-index: 2;

  @media screen and (max-width: 1035px) {
    font-size: 110px;
  }

  @media screen and (max-width: 948px) {
    font-size: 100px;
  }

  @media screen and (max-width: 870px) {
    font-size: 90px;
  }

  @media screen and (max-width: 799px) {
    font-size: 80px;
  }

  @media screen and (max-width: 722px) {
    font-size: 70px;
  }

  @media screen and (max-width: 650px) {
    font-size: 60px;
  }

  @media screen and (max-width: 571px) {
    font-size: 50px;
  }

  @media screen and (max-width: 415px) {
    font-size: 40px;
  }

  @media screen and (max-width: 312px) {
    font-size: 35px;
  }
`;

export const SmallText = styled.div`
  padding: 20px 0px;
  color: #7a003c;
  font-weight: bold;

  @media screen and (max-width: 571px) {
    display: none;
  }
`;

export const RightSection = styled.div`
  border-left: 7px solid #7a003c;
  padding-left: 20px;
  height: 300px;
  align-items: center;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 1375px) {
    width: 100%;
    border: none;
    padding: none;
    justify-content: start;
    height: max-content;
  }

  @media screen and (max-width: 370px) {
    justify-content: center;
    padding: 0;
  }
`;

export const SubRightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: start;
  width: 300px;

  @media screen and (max-width: 370px) {
    justify-content: center;
    align-items: center;
  }
`;

export const InfoText = styled.div`
  width: fit-content;
  height: 50%;
  align-items: center;
`;

export const LMButton = styled(Link)`
  padding: 10px 20px;
  background-color: #96080a;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  width: fit-content;
  transition: ease-in-out 0.3s;

  &:hover {
    font-weight: bold;
  }
`;
