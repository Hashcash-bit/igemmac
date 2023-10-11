import { styled } from 'styled-components';

export const PictureArea = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;
