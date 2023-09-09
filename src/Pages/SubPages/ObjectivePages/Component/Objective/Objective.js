import React from "react";
import TopBar from "../TopBar/TopBar";
import {
  TopSection,
  Image,
  LeftBottomSection,
  RightBottomSection,
  TapeImage,
  TextInfo,
  TextInfoContainer,
  Title,
  BottomSection,
  TopArea,
  ColoredArea,
  Text,
  OptionDisplay,
  Options,
} from "./ObjectiveStyles";

import TemplateImage from "../../../Img/pfp.jpg";
import Tape from "../../../Img/tap.png";

export default function Objective() {
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
      <TopSection>
        <LeftBottomSection>
          <Title>Objective</Title>
          <TextInfoContainer>
            <TextInfo>Some stupid text</TextInfo>
          </TextInfoContainer>
        </LeftBottomSection>
        <RightBottomSection>
          <TapeImage src={Tape} alt="tape" />
          <Image src={TemplateImage} alt="Template" />
        </RightBottomSection>
      </TopSection>
      <BottomSection>
        <TopArea>
          <ColoredArea>
            <Text>
              Object #1: Five sensing systems for Five biomarkers for MDD
            </Text>
          </ColoredArea>
        </TopArea>
        <OptionDisplay>
          <Options>Butyrate</Options>
          <Options>Indole</Options>
          <Options>Hydrogen Peroxide</Options>
          <Options>Tetrahydrofoliate</Options>
          <Options>Tetrathionate</Options>
        </OptionDisplay>
      </BottomSection>
    </div>
  );
}
