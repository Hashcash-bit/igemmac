import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  font-family: Montserrat-Alt1;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: default;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const Box = styled.div`
  height: max-content;
  background-color: #971a35;
  display: flex;
  height: 75px;
  width: 98%;
  border-radius: 0px;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
  border: 4px solid white;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    padding-right: 0px;
  }
`;

export const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  // background-color: blue;
`;

export const HiddenWA = styled.div`
  display: none;

  @media screen and (max-width: 650px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: #971a35;
  }
`;

export const SlideWrapper = styled.div`
  display: inline-flex;
  animation: ${slideAnimation} 10s linear infinite;
  white-space: nowrap;
  width: 80%;

  /* Add additional styles to make the sliding smooth */
  &:hover {
    animation-play-state: paused;
  }
`;

export const SlideItem = styled.span`
  margin-right: 30px;
  font-size: 24px;
  color: #daa9a9;
  font-weight: bold;
`;

export const StaticText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: #971a35;
  z-index: 5;
  height: 75px;
  width: 200px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-top: 5px solid white;
  border-right: 5px solid white;
  border-bottom: 5px solid white;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
