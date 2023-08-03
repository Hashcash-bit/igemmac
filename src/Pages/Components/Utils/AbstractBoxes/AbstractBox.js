import React from "react";
import styled from "styled-components";

const AbstractBox = ({ type }) => {
  return (
    <BoxWrapper>
      {type === "quote" && (
        <QuoteBox>
          <QuoteText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </QuoteText>
          <LearnMoreButton>
            Learn More <ArrowIcon />
          </LearnMoreButton>
        </QuoteBox>
      )}
      {type === "image" && (
        <ImageBox>
          <Image src="your-image-url.jpg" alt="Abstract Box" />
          <BoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </BoxText>
          <RoundedButton>Read More</RoundedButton>
        </ImageBox>
      )}
      {type === "video" && (
        <VideoBox>
          {/* Embed your video here */}
          <VideoEmbed src="your-video-url.mp4" />
        </VideoBox>
      )}
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BoxBaseStyles = `
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  color: #fff;
  text-align: center;
  transition: transform 0.3s ease-in-out;
`;

const QuoteBox = styled.div`
  ${BoxBaseStyles}
  background-color: #f95d9b;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 20% 80%, 20% 100%, 0% 100%);
`;

const QuoteText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const LearnMoreButton = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fff;
    color: #f95d9b;
  }
`;

const ArrowIcon = styled.span`
  margin-left: 5px;
`;

const ImageBox = styled.div`
  ${BoxBaseStyles}
  background-color: #6c63ff;
  position: relative;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 80% 100%, 80% 80%, 0 80%, 0 20%);
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const BoxText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const RoundedButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f95d9b;
    color: #fff;
  }
`;

const VideoBox = styled.div`
  ${BoxBaseStyles}
  background-color: #49cdb5;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
`;

const VideoEmbed = styled.video`
  width: 100%;
  max-width: 400px;
`;

export default AbstractBox;
