//Styled Components
import styled from "styled-components";

//Routing
import { Link } from "react-router-dom";

export const SubsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubsBox = styled.div`
  width: 1000px;
  background-color: #96080a;
  display: flex;
  align-items: center;
  padding: 30px 30px;
  border-radius: 25px;
  justify-content: space-between;
`;

export const LeftSB = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const LikkleTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: white;
`;

export const LikkleDes = styled.div`
  font-size: 15px;
  color: white;
  text-align: start;
`;

export const RightSB = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px 50px;
  border-radius: 5px;
  outline: none;
  border: 2px solid white;
  color: white;
  background-color: transparent;
`;

export const SubButton = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: white;
  color: #96080a;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #94b2af;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-top: 30px;
  gap: 30px;
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: start;
  width: 100%;
  gap: 5px;
`;

export const HeartLogo = styled.img`
  height: 20px;
`;

export const ActualLogo = styled.img`
  height: 30px;
`;

export const TextContainer = styled.div`
  font-size: 12px;
  color: #4d4d4d;
`;

export const RightArea = styled.div`
  padding-top: 30px;
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LinkHeader = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #303030;
`;

export const SubLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Links = styled(Link)`
  font-size: 14px;
  color: #4d4d4d;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const CopyRightBox = styled.div`
  font-size: 10px;
  color: #666666;
  border-top: 1px solid #666666;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
  gap: 3px;
`;

export const NameLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  position: relative;
  transition: ease-in-out 0.15s;

  &:hover {
    transform: translatey(-3px);
    cursor: pointer;
  }
`;
