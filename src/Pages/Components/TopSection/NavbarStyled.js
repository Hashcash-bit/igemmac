//Importing Routing
import { Link } from "react-router-dom";

//Importing the Styled Components
import styled from "styled-components";

//Icons
import { BiX } from "react-icons/bi";

export const Container = styled.div`
  font-family: Montserrat-Alt1;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: default;
`;

export const Box = styled.div`
  display: none;
  @media screen and (max-width: 1375px) {
    height: max-content;
    display: flex;
    flex-direction: column;
    width: 98%;
    margin-top: 15px;
    padding: 10px;
    gap: 40px;
    justify-content: center;
    align-items: center;
    z-index: 0;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
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

export const Links = styled.div`
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Slashes = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px 0px;
  color: white;
  font-weight: bold;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

//Hidden menu
export const MenuToggle = styled.div`
  display: none;
  @media screen and (max-width: 1100px) {
    font-size: 30px;
    height: 70%;
    align-items: center;
    display: flex;
    margin-right: 25px;
    color: #f1eed3;
  }
`;

export const HiddenContainer = styled.div`
  display: none;
  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: start;
    position: fixed; /* Position the hidden menu */
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.95); /* Semi-transparent background */
    z-index: 999; /* Set a higher z-index to place the hidden menu above other content */
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: end;
  height: 80px;
  align-items: center;
`;

export const CloseIcon = styled(BiX)`
  font-size: 30px;
  margin-right: 25px;
  color: #f1eed3;
  transition: ease-in-out 0.15s;
  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
`;

export const HiddenButtonContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LeftArea = styled.div`
  height: fit-content;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const AboutUsBox = styled.div``;
export const ProjectsBox = styled.div``;
export const NewsBox = styled.div``;

export const RightArea = styled.div``;
export const PartnerBox = styled.div``;
export const InitiativesBox = styled.div``;
export const ContactBox = styled.div``;

export const Heading = styled.div``;
export const LinksSection = styled.div``;
export const LinksH = styled(Link)``;
