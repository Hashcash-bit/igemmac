import { styled } from 'styled-components';

const SectionLayout = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 50px;
`;

const SectionHeader = styled.h2`
  height: 7rem;
  font-size: 3rem;
  font-weight: bold;
  color: #971a35;
  background-color: #efd2c0;
  line-height: 7rem;
  padding: 0 0 0 5%;
  margin: 0 0 0 10%;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 5% 0 15%;
`;

const SectionBodyParagraph = styled.p`
  font-size: 20px;
  text-align: left;
`;

const SectionBodyImage = styled.img`
  height: 50vh;
  width: auto;
  margin: 0 0 0 5%;
`;

const SectionFooter = styled.div`
  margin: 0 5% 0 auto;
`;

const SectionFooterButton = styled.button`
  height: 3rem;
  padding: 0 2rem 0 2rem;
  background-color: white;
  border-color: #971a35;
  color: #971a35;
  font-size: 20px;
  font-weight: bold;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: #971a35;
    color: white;
    cursor: pointer;
  }
`;

export {
  SectionLayout,
  SectionHeader,
  SectionBody,
  SectionBodyParagraph,
  SectionBodyImage,
  SectionFooter,
  SectionFooterButton,
};
