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
} from "./ChassisStyles";

import TemplateImage from "../../../Img/pfp.jpg";
import Tape from "../../../Img/tap.png";

export default function Chassis() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        // gap: "100px",
      }}
    >
      <TopBar />
      <div style={{ display: "flex", flexDirection: "column", gap: "150px" }}>
        <TopSection>
          <Title>Chassis Selection</Title>
        </TopSection>
        <BottomSection>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Escherichia_coli_by_togopic.png"
            alt="Chassis"
          />
        </BottomSection>
      </div>
    </div>
  );
}
