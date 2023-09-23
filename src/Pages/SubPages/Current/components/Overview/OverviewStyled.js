import { styled } from 'styled-components';

const OverviewMainDiv = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 100px;
  height: 100%;
`;

const OverviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OverviewGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'top-left top-right'
    'mid-left mid-right'
    'bottom-left bottom-right';
  height: 80vh;
  width: auto;
`;

export { OverviewMainDiv, OverviewTextContainer, OverviewGridContainer };
