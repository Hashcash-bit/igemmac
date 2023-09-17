import React, { useRef } from "react";
import TopBar from "../../TopBar/TopBar";
import {
  TopSection,
  Image,
  LeftBottomSection,
  RightBottomSection,
  TapeImage,
  TextInfo,
  TextInfoContainer,
  Title,
  TopArea,
  ColoredArea,
  Text,
  TextContainer,
  ButtonContainer,
  ButtonPadding,
} from "./HydrogenPeroxideStyles";

import TemplateImage from "../../../../Img/pfp.jpg";
import Tape from "../../../../Img/tap.png";

export default function HydrogenPeroxide({ scrollToRef, objectiveRef }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TopBar />
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <TopArea>
          <ColoredArea>
            <TextContainer
              style={{
                backgroundImage:
                  "https://upload.wikimedia.org/wikipedia/commons/c/ca/Butyrate.svg",
              }}
            >
              <div style={{ backgroundColor: "#efd2bf", opacity: "0.85" }}>
                <Text>Biomaker 3</Text>
                <Title>HYDROGEN PEROXIDE</Title>
              </div>
            </TextContainer>
          </ColoredArea>
        </TopArea>
        <TopSection>
          <LeftBottomSection>
            <TextInfoContainer>
              <TextInfo>Some stupid text</TextInfo>
              <TextInfo>Some stupid text</TextInfo>
              <TextInfo>Some stupid text</TextInfo>
            </TextInfoContainer>
          </LeftBottomSection>
          <RightBottomSection>
            {/* <TapeImage src={Tape} alt="tape" /> */}
            <Image src={TemplateImage} alt="Template" />
          </RightBottomSection>
        </TopSection>
        <ButtonContainer>
          <ButtonPadding onClick={() => scrollToRef(objectiveRef)}>
            Back to Objective
          </ButtonPadding>
        </ButtonContainer>
      </div>
    </div>
  );
}
