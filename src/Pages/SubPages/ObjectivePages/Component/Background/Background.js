import React from "react";
import TopBar from "../TopBar/TopBar";
import {
  BottomSection,
  Image,
  LeftBottomSection,
  RightBottomSection,
  TapeImage,
  TextInfo,
  TextInfoContainer,
  Title,
} from "./BackgroundStyles";

import TemplateImage from "../../../Img/pfp.jpg";
import Tape from "../../../Img/tap.png";

export default function Background() {
  return (
    <div style={{ height: "100vh" }}>
      <TopBar />
      <BottomSection>
        <LeftBottomSection>
          <Title>Background</Title>
          <TextInfoContainer>
            <TextInfo>1. Some stupid text</TextInfo>
            <TextInfo>a. Some stupid text</TextInfo>
            <TextInfo>b. Some stupid text</TextInfo>
            <TextInfo>c. Some stupid text</TextInfo>
          </TextInfoContainer>
        </LeftBottomSection>
        <RightBottomSection>
          <TapeImage src={Tape} alt="tape" />
          <Image src={TemplateImage} alt="Template" />
        </RightBottomSection>
      </BottomSection>
    </div>
  );
}
