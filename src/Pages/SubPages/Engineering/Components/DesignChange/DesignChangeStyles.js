import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 200px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.img`
  width: 50px;
`;

export const Titletxt = styled.div`
  font-size: 49.2px;
  font-weight: bold;
  color: #971a35;
  padding-left: 30px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const TopBox = styled.div`
  border: 5px solid #971a35;
  cursor: pointer;
`;

export const BottomBox = styled.div`
  border: 5px solid #971a35;
  cursor: pointer;
`;

export const TopText = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 20px 30px;
`;

export const BottomText = styled.div`
  background-color: #971a35;
  color: white;
  padding: 20px 50px;
  font-size: 37.8px;
  font-weight: 600;
  text-align: center;
`;

//Popups
export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 100px;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid #971a35;
  width: 50%;
  padding: 30px;
`;

export const TextBoxTitle = styled.div`
  font-size: 29.8px;
  font-weight: bold;
  color: #971a35;
`;

export const TextBoxInfo = styled.div`
  font-size: 18px;
`;
