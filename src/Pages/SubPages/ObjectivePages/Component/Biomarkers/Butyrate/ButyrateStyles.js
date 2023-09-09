import { styled } from "styled-components";

export const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LeftBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "futura", sans-serif;
  gap: 20px;
`;

export const Title = styled.div`
  color: #971a35;
  font-weight: bold;
  font-size: 50px;
  padding-left: 20px;
`;

export const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

export const TextInfo = styled.div``;

export const RightBottomSection = styled.div``;

export const Image = styled.img`
  height: 500px;
`;

export const TapeImage = styled.img`
  height: 200px;
  position: absolute;
  left: 1120px;
  top: 420vh;
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
  color: #8f311c;
  font-weight: bold;
  font-size: 19px;
`;

export const OptionDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  margin-bottom: 25px;
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

export const TextContainer = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/c/ca/Butyrate.svg");
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 200px 0px;
  width: 500px;
  background-i
`;

export const ButtonContainer = styled.div`
  width: 90%;
  height: max-content;
  display: flex;
  justify-content: end;
`;

export const ButtonPadding = styled.div`
  padding: 20px 30px;
  border: 2px solid #971a35;
  color: #971a35;
  font-weight: bold;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: #971a35;
    cursor: pointer;
    color: white;
    border: 2px solid white;
  }
`;
