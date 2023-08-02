import styled from "styled-components";

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
