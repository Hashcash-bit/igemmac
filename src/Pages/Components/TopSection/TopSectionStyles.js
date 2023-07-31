//Importing Routing
import { Link } from "react-router-dom";

//Importing the Styled Components
import styled from "styled-components";

export const Container = styled.div`
  font-family: Montserrat-Alt1;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Box = styled.div`
  height: max-content;
  background-color: #94b2af;
  display: flex;
  flex-direction: column;
  width: 98%;
  border-radius: 50px;
  margin-top: 15px;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Heart = styled.img`
  height: 30px;
`;

export const Logo = styled.img``;

export const LinksContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Links = styled(Link)``;

export const Slashes = styled.div``;

export const HeroContainer = styled.div``;

export const LeftSection = styled.div``;

export const BigText = styled.div``;

export const SmallText = styled.div``;

export const RightSection = styled.div``;

export const InfoText = styled.div``;

export const LMButton = styled(Link)``;
