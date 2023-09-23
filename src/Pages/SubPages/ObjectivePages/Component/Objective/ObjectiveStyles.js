import { styled } from 'styled-components';

export const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LeftBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'futura', sans-serif;
  gap: 20px;
`;

export const Title = styled.div`
  color: #971a35;
  font-weight: bold;
  font-size: 50px;
`;

export const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

export const TextInfo = styled.div``;

export const RightBottomSection = styled.div`
  background-color: #efd2bf;
`;

export const Image = styled.img`
  height: 400px;
`;

export const TapeImage = styled.img`
  height: 200px;
  position: absolute;
  left: 1120px;
  top: 202vh;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const TopArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ColoredArea = styled.div`
  width: 94.8%;
  background-color: #efd2bf;
  padding: 25px 15px;
`;

export const Text = styled.div`
  color: #971a35;
  font-weight: bold;
  font-size: 19px;
`;

export const OptionDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  margin-bottom: 25px;

  @media screen and (max-width: 1035px) {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-items: center;
    gap: 10px;
  }

  @media screen and (max-width: 625px) {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-items: center;
    gap: 10px;
  }

  @media screen and (max-width: 470px) {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    justify-items: center;
    gap: 10px;
  }
`;
export const Options = styled.div`
  background-color: #dda7a2;
  color: white;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: #971a35;
    cursor: pointer;
  }
`;
