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
  PersonJob,
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
    { id: 1, image: 'https://static.igem.wiki/teams/4751/wiki/mya-george-co-president.jpg', job: 'Co-President', name: 'Mya George' },
    { id: 2, image: 'https://static.igem.wiki/teams/4751/wiki/hala-mahdi-co-president.png', job: 'Co-President', name: 'Hala Mahdi' },
    { id: 3, image: 'https://static.igem.wiki/teams/4751/wiki/andrew-chami-wl-lead.jpg', job: 'Wet Lab Lead', name: 'Andrew Chami' },
    { id: 4, image: 'https://static.igem.wiki/teams/4751/wiki/alyssa-mark-former-wl-lead.jpg', job: 'Former Wet Lab Lead', name: 'Alyssa Mark' },
    { id: 5, image: 'https://static.igem.wiki/teams/4751/wiki/amanda-densil-wl-mentor.jpg', job: 'Wet Lab Mentor', name: 'Amanda Densil' },
    { id: 6, image: 'https://static.igem.wiki/teams/4751/wiki/audrey-dong-wl.jpg', job: 'Wet Lab', name: 'Audrey Dong' },
    { id: 7, image: 'https://static.igem.wiki/teams/4751/wiki/isabella-valentini-wl.jpg', job: 'Wet Lab', name: 'Isabella Valentini' },
    { id: 8, image: 'https://static.igem.wiki/teams/4751/wiki/rubani-singh-suri-wl.jpg', job: 'Wet Lab', name: 'Rubani Singh Suri' },
    { id: 9, image: 'https://static.igem.wiki/teams/4751/wiki/alice-pao-wl.jpg', job: 'Wet Lab', name: 'Alice Pao' },
    { id: 10, image: 'https://static.igem.wiki/teams/4751/wiki/chantal-luo-dl-lead.jpg', job: 'Dry Lab Lead', name: 'Chantal Luo' },
    { id: 11, image: 'https://static.igem.wiki/teams/4751/wiki/yifan-wang-dl-lead.png', job: 'Dry Lab Lead', name: 'Yifan Wang' },
    { id: 12, image: 'https://static.igem.wiki/teams/4751/wiki/alesha-singh-dl.jpg', job: 'Dry Lab', name: 'Alesha Singh' },
    { id: 13, image: 'https://static.igem.wiki/teams/4751/wiki/franky-liu-dl.jpg', job: 'Dry Lab', name: 'Franky Liu' },
    { id: 14, image: 'https://static.igem.wiki/teams/4751/wiki/lila-al-arabi-dl.jpg', job: 'Dry Lab', name: 'Lila Al-Arabi' },
    { id: 15, image: 'https://static.igem.wiki/teams/4751/wiki/aribah-ali-hp-lead.jpg', job: 'Human Practices Lead', name: 'Aribah Ali' },
    { id: 16, image: 'https://static.igem.wiki/teams/4751/wiki/selina-tang-hp-lead.jpg', job: 'Human Practices Lead', name: 'Selina Tang' },
    { id: 17, image: 'https://static.igem.wiki/teams/4751/wiki/helen-peng-hp.png', job: 'Human Practices', name: 'Helen Peng' },
    { id: 18, image: 'https://static.igem.wiki/teams/4751/wiki/jayden-hewitt-hp.jpg', job: 'Human Practices', name: 'Jayden Hewitt' },
    { id: 19, image: 'https://static.igem.wiki/teams/4751/wiki/linda-wu-hp.jpg', job: 'Human Practices', name: 'Linda Wu' },
    { id: 20, image: 'https://static.igem.wiki/teams/4751/wiki/zoha-ali-naqvi-hp.jpg', job: 'Researchers', name: 'Zoha Ali Naqvi' },
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
        {/*
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
        */}
        <Box>
          <GalleryContainer>
          {/*<GalleryImages>
              {filteredGallery.length === 0 ? (
                <NoImageText>No Image</NoImageText>
              ) : (
                filteredGallery.map((item) => (
                  <ImageContainer key={item.id}>
                    {item.image ? (
                      <GalleryImage src={item.image} loading='lazy' alt={`Job: ${item.job}`} />
                    ) : (
                      <NoImageText>No Image</NoImageText>
                    )}
                    <PersonName>{item.name}</PersonName>
                    <PersonJob>{item.job}</PersonJob>
                  </ImageContainer>
                ))
              )}
            </GalleryImages>
            */}
            <GalleryImage src="https://static.igem.wiki/teams/4751/wiki/team1.png" />
          </GalleryContainer>
        </Box>
      </Container>
    </>
  );
};

export default Gallery;
