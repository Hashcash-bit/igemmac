import styled from "styled-components";

export const Entireelement = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
  background-color: #efd2bf;
  align-items: start;
`;

export const InternalComponents = styled.div`
  width: 100%;
  max-width: 1700px;
  overflow-y: scroll; // make the list scrollable vertically
  max-height: 100vh; // limit the height of the list
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 100px;
    justify-content: none;
    align-items: none;
    align-content: none;
  }

  &::-webkit-scrollbar-track {
    // background-color: #0f0f0f; /* Change the color as desired */
    transition: ease-in-out 2s;
  }

  &::-webkit-scrollbar-thumb {
    // background-color: #f1eed3; /* Change the color as desired */
    border-radius: 4px; /* Adjust the border radius as desired */
  }
`;
