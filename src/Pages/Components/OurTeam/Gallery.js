import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
import {
  Box,
  Container,
  ContainerTitle,
  FilterBar,
  FilterOption,
  GalleryContainer,
  GalleryImage,
  GalleryImages,
  ImageContainer,
  NoImageText,
  PersonName,
  SubTitle,
  Title,
} from './GalleryStyles';


// List of job options
const jobOptions = [
  'All',
  'Researchers',
  'Designers',
  'Developers',
  'Leads',
  // Add more job options
];

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Sample image data for different job categories
  const galleryData = [
    { id: 1, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Designers', name: 'John Doe' },
    { id: 2, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 3, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 4, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 5, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 6, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 7, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 8, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 9, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 10, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 11, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Designers', name: 'John Doe' },
    { id: 12, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 13, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 14, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 15, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 16, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 17, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 18, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 19, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 20, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 21, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Designers', name: 'John Doe' },
    { id: 22, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 23, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 24, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 25, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 26, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 27, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 28, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 29, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    { id: 30, image: 'https://static.igem.wiki/teams/4751/wiki/mgemlogo.png', job: 'Researchers', name: 'Jane Smith' },
    // Add more image data with different job categories
  ];

  // Filter gallery images based on the selected job option
  const filteredGallery =
    selectedFilter === 'All'
      ? galleryData
      : galleryData.filter((item) => item.job === selectedFilter);

  const handleFilterChange = (filterOption) => {
    setSelectedFilter(filterOption);
  };

  return (
    <>
      <Container>
        <ContainerTitle>
          <Title>MEET OUR TEAM</Title>
          <SubTitle>Here is the team that made all this possible</SubTitle>
        </ContainerTitle>
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
        <Box>
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
        </Box>
      </Container>
    </>
  );
};

export default Gallery;
