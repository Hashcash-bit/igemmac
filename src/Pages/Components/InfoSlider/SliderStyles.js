
import styled, { keyframes } from 'styled-components';

export const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const SlideWrapper = styled.div`
  display: inline-flex;
  animation: ${slideAnimation} 150s linear infinite;
  white-space: nowrap;

  /* Add additional styles to make the sliding smooth */
  &:hover {
    animation-play-state: paused;
  }
`;

export const SlideItem = styled.span`
  margin-right: 30px;
  font-size: 24px;
  color: #333;
`;

export const StaticText = styled.span`
  font-size: 24px;
  color: #333;
`;