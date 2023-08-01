import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: inline-flex;
  animation: ${slideAnimation} 8s linear infinite;
  white-space: nowrap;

  /* Add additional styles to make the sliding smooth */
  &:hover {
    animation-play-state: paused;
  }
`;

const SlideItem = styled.span`
  margin-right: 30px;
  font-size: 24px;
  color: #333;
`;

const StaticText = styled.span`
  font-size: 24px;
  color: #333;
`;

const Slider = () => {
  // Create an array of words to slide
  const words = ["Word 1", "Word 2", "Word 3"];

  return (
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
  );
};

export default Slider;
