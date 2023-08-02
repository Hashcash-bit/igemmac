import styled from "styled-components";

export const Container = styled.div`
  font-family: Montserrat-Alt1;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  cursor: default;
`;

export const Box = styled.div`
  height: max-content;
  background-color: #94b2af;
  display: flex;
  flex-direction: column;
  width: 98%;
  border-radius: 50px;
  margin-top: 15px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 40px;
  justify-content: center;
  align-items: center;
  border: 4px solid white;

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
  border-radius: 100px;
  border: 4px solid black;
  display: flex;
  align-items: center;
  text-align: center;
  color: black;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  color: #6D5957;
`;

export const GalleryContainer = styled.div`
  padding: 40px;
  overflow-x: auto;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const FilterOption = styled.button`
  background-color: ${({ active }) => (active ? "#f95d9b" : "#3a3a3a")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: ${({ active }) => (active ? "#f95d9b" : "#555")};
  }
`;

export const GalleryImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
`;

export const ImageContainer = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 150px; /* Fixed height for all images */
  object-fit: cover;
  border-radius: 5px;
`;

export const PersonName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`;

export const NoImageText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: #ccc;
`;
