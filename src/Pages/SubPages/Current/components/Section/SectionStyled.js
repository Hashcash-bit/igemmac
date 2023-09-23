import { styled } from 'styled-components';

const SectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 50px;
`;

const SectionHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #971a35;
  margin-bottom: 1rem;
  background-color: #efd2c0;
`;

const SectionBody = styled.div``;

const SectionFooter = styled.div``;

export { SectionLayout, SectionHeader, SectionBody, SectionFooter };
