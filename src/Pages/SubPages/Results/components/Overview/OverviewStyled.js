import { styled } from 'styled-components';

const OverviewMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
`;

const OverviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5% 0;
  height: 80vh;
  width: 50%;
`;

const OverviewTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #971a35;
`;

const OverviewParagraph = styled.p`
  font-size: 20px;
  text-align: center;
`;

const OverviewGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'top-left top-right'
    'mid-left mid-right'
    'bottom-left bottom-right';
  gap: 5%;
  margin: 0 5% 0;
  height: 80vh;
  width: 50%;
`;

const OverviewGridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dda7a2;
  color: white;
  font-weight: bold;
  font-size: 2vi;
  text-align: center;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: #971a35;
    cursor: pointer;
  }
`;

export {
  OverviewMainDiv,
  OverviewTextContainer,
  OverviewTitle,
  OverviewParagraph,
  OverviewGridContainer,
  OverviewGridItem,
};
