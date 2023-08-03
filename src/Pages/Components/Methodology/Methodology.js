import React, { useState } from "react";
import styled from "styled-components";

//Images
import Image1 from "../img/1658410385342.jpg";
import Image2 from "../img/gallery1.jpg";
import Image3 from "../img/—Pngtree—3d dna helix sequence element_5340349.png";
import {
  Box,
  Container,
  ContainerTitle,
  MethodologyBox,
  MethodologyDescription,
  MethodologyDropdown,
  MethodologyImage,
  MethodologySection,
  MethodologyTitle,
  MethodologyWrapper,
  SubTitle,
  Title,
} from "./MethodologyStyles";

// Sample methodology data (you can replace this with your own data)
const methodologyData = [
  {
    id: 1,
    title: "Step 1",
    image: Image1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo eget lectus congue iaculis.",
  },
  {
    id: 2,
    title: "Step 2",
    image: Image2,
    text: "Phasellus sit amet nibh at elit auctor aliquet a id orci.",
  },
  {
    id: 3,
    title: "Step 1",
    image: Image1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo eget lectus congue iaculis.",
  },
  {
    id: 4,
    title: "Step 2",
    image: Image2,
    text: "Phasellus sit amet nibh at elit auctor aliquet a id orci.",
  },
  {
    id: 5,
    title: "Step 1",
    image: Image1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo eget lectus congue iaculis.",
  },
  {
    id: 6,
    title: "Step 2",
    image: Image2,
    text: "Phasellus sit amet nibh at elit auctor aliquet a id orci.",
  },
  // Add more methodology data with unique information
];

const Methodology = () => {
  const [activeBoxId, setActiveBoxId] = useState(null);

  const handleBoxClick = (id) => {
    setActiveBoxId((prevId) => (prevId === id ? null : id));
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation(); // Prevent the box click event from being triggered
  };

  return (
    <>
      <Container>
        <ContainerTitle>
          <Title>METHODOLOGY</Title>
          <SubTitle>
            Start here and unwind the vibrant threads of genetics
          </SubTitle>
        </ContainerTitle>
        <Box>
          <MethodologyWrapper>
            <MethodologySection>
              {methodologyData.map((item) => (
                <MethodologyBox
                  key={item.id}
                  onClick={() => handleBoxClick(item.id)}
                  active={activeBoxId === item.id}
                >
                  <MethodologyTitle>{item.title}</MethodologyTitle>
                  <MethodologyImage src={item.image} alt={item.title} />
                  <MethodologyDropdown
                    show={activeBoxId === item.id}
                    onClick={handleDropdownClick}
                  >
                    <MethodologyTitle>{item.title}</MethodologyTitle>
                    <MethodologyImage src={item.image} alt={item.title} />
                    <MethodologyDescription>{item.text}</MethodologyDescription>
                  </MethodologyDropdown>
                </MethodologyBox>
              ))}
            </MethodologySection>
          </MethodologyWrapper>
        </Box>
      </Container>
    </>
  );
};

export default Methodology;
