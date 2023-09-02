//Styled components
import styled from "styled-components";

export const Container = styled.div`
  font-family: Jost;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  cursor: default;
`;

export const Box = styled.div`
  width: 98%;
  //   padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    padding-right: 0px;
  }
`;

export const ContainerTitle = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  gap: 20px;
  margin-top: 35px;
  overflow: hidden;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: 600;
  justify-content: center;
  width: fit-content;
  padding: 10px 40px;
  border-radius: 0px;
  border: 4px solid black;
  display: flex;
  align-items: center;
  text-align: center;
  color: black;

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }

  @media screen and (max-width: 360px) {
    font-size: 25px;
  }

  @media screen and (max-width: 315px) {
    font-size: 20px;
  }
`;

export const SubTitle = styled.div`
  font-size: 18px;
  color: #6d5957;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const MethodologyWrapper = styled.div``;

export const MethodologySection = styled.section`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px;

  @media screen and (max-width: 610px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MethodologyBox = styled.div`
  position: relative; /* Needed for positioning the dropdown */
  background-color: #96080b;
  border-radius: 0px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
`;

export const BoxContainer = styled.div`
  gap: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dda7a2;
  transition: transform 0.2s ease-in-out;
  border-radius: 0px;
  border: 4px solid #7a003c;
  padding: 30px 0px;

  &:hover {
    transform: translatey(-5px);
  }
`;

export const MethodologyDropdown = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 100%; /* Position the dropdown below the box */
  left: 0;
  width: 250px; /* Fixed width for the dropdown */
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 2; /* Ensure the dropdown appears above other elements */
  margin-top: 10px; /* Add some spacing between the box and the dropdown */
  transform: translateX(-50%); /* Center the dropdown horizontally */
  left: 50%; /* Center the dropdown horizontally */

  @media screen and (max-width: 380px) {
    width: 90%;
  }

  @media screen and (max-width: 325px) {
    display: none;
  }
`;

export const MethodologyTitle = styled.h3`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
`;

export const MethodologyImage = styled.img`
  //   width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

export const MethodologyImage1 = styled.img`
  //   width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const MethodologyDescription = styled.p`
  font-size: 14px;
  color: #666;
`;
