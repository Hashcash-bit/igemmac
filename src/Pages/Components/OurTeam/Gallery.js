import React, { useState } from "react";
import styled from "styled-components";

// Sample gallery images
import Image1 from "../img/gallery1.jpg";
import Image2 from "../img/1658410385342.jpg";
// Add more images as needed

// Styled Components
import {
  FilterBar,
  FilterOption,
  GalleryContainer,
  GalleryImage,
  GalleryImages,
  ImageContainer,
  NoImageText,
} from "./GalleryStyles";

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
