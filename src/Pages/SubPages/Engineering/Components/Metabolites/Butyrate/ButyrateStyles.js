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

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const NavHeader = styled.div``;

export const Navigation = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavLink = styled.div`
  padding: 20px 30px;
  border: 2px solid #971a35;
  color: #971a35;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #971a35;
    color: white;
  }
`;

export const NavLinkS = styled.div`
  padding: 20px 30px;
  border: 2px solid #971a35;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  background-color: #971a35;
`;

export const NavigationImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavImage = styled.img`
  height: 55px;
`;

export const NavSubHeader = styled.div``;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
`;

export const LeftImage = styled.img`
  height: 380px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 50px;
`;

export const RightCast = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #971a35;
`;

export const RightButton = styled.div`
  border: 2px solid #971a35;
  padding: 20px 30px;
  width: max-content;
  cursor: pointer;
  transition: ease-in-out 0.2s;
`;
