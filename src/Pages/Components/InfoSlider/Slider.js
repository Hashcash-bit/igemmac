// Default Deps
import React from "react";

//Styled Components
import {
  Box,
  Container,
  SlideItem,
  SlideWrapper,
  SliderContainer,
  StaticText,
  HiddenWA,
} from "./SliderStyles";

//Importing Words
import words from "../Utils/Words Slider/Words";

const Slider = () => {
  // Create an array of words to slide

  return (
    <Container>
      <HiddenWA>WE ARE:</HiddenWA>
      <Box>
        <SliderContainer>
          <StaticText>WE ARE:</StaticText>
          <SlideWrapper>
            {words.map((word, index) => (
              <SlideItem key={index}>{word}</SlideItem>
            ))}
            {/* Duplicate the words to create a seamless revolving effect */}
            {words.map((word, index) => (
              <SlideItem key={index + words.length}>{word}</SlideItem>
            ))}
          </SlideWrapper>
        </SliderContainer>
      </Box>
    </Container>
  );
};

export default Slider;
