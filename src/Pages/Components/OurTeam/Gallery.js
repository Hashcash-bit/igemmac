import React, { useState } from "react";
import styled from "styled-components";

// Sample gallery images
import Image1 from "../img/gallery1.jpg";
import Image2 from "../img/1658410385342.jpg";
// Add more images as needed

// List of job options
const jobOptions = [
  "All",
  "Innovators",
  "Researchers",
  "Engineers",
  "Geneticists",
  "Pioneers",
  // Add more job options
];

const GalleryContainer = styled.div`
  padding: 40px;
  overflow-x: auto;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FilterOption = styled.button`
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

const GalleryImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
`;

const ImageContainer = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 150px; /* Fixed height for all images */
  object-fit: cover;
  border-radius: 5px;
`;

const PersonName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
`;

const NoImageText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: #ccc;
`;

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Sample image data for different job categories
  const galleryData = [
    { id: 1, image: Image1, job: "Innovators", name: "John Doe" },
    { id: 2, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 3, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 4, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 5, image: Image2, job: "Researchers", name: "Jane Smith" },
    { id: 6, image: Image2, job: "Researchers", name: "Jane Smith" },
    { id: 7, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 8, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 9, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 10, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 11, image: Image1, job: "Innovators", name: "John Doe" },
    { id: 12, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 13, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 14, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 15, image: Image2, job: "Researchers", name: "Jane Smith" },
    { id: 16, image: Image2, job: "Researchers", name: "Jane Smith" },
    { id: 17, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 18, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 19, image: Image1, job: "Researchers", name: "Jane Smith" },
    { id: 20, image: Image1, job: "Researchers", name: "Jane Smith" },
    // Add more image data with different job categories
  ];

  // Filter gallery images based on the selected job option
  const filteredGallery =
    selectedFilter === "All"
      ? galleryData
      : galleryData.filter((item) => item.job === selectedFilter);

  const handleFilterChange = (filterOption) => {
    setSelectedFilter(filterOption);
  };

  return (
    <>
      <FilterBar>
        {jobOptions.map((option) => (
          <FilterOption
            key={option}
            onClick={() => handleFilterChange(option)}
            active={selectedFilter === option}
          >
            {option}
          </FilterOption>
        ))}
      </FilterBar>
      <GalleryContainer>
        <GalleryImages>
          {filteredGallery.length === 0 ? (
            <NoImageText>No Image</NoImageText>
          ) : (
            filteredGallery.map((item) => (
              <ImageContainer key={item.id}>
                {item.image ? (
                  <GalleryImage src={item.image} alt={`Job: ${item.job}`} />
                ) : (
                  <NoImageText>No Image</NoImageText>
                )}
                <PersonName>{item.name}</PersonName>
              </ImageContainer>
            ))
          )}
        </GalleryImages>
      </GalleryContainer>
    </>
  );
};

export default Gallery;


