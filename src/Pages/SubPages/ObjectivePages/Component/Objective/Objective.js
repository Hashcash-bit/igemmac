import React, { useRef } from "react";
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

const Objective = React.forwardRef(
  (
    {
      scrollToRef,
      butyrateRef,
      indoleRef,
      hydrogenPeroxideRef,
      tetrahydrofolateRef,
      tetrathionateRef,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
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
            {/* <TapeImage src={Tape} alt="tape" /> */}
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
            <Options onClick={() => scrollToRef(butyrateRef)}>Butyrate</Options>
            <Options onClick={() => scrollToRef(indoleRef)}>Indole</Options>
            <Options onClick={() => scrollToRef(hydrogenPeroxideRef)}>
              Hydrogen Peroxide
            </Options>
            <Options onClick={() => scrollToRef(tetrahydrofolateRef)}>
              Tetrahydrofoliate
            </Options>
            <Options onClick={() => scrollToRef(tetrathionateRef)}>
              Tetrathionate
            </Options>
          </OptionDisplay>
        </BottomSection>
      </div>
    );
  }
);

export default Objective;
