//Default react imports
import React from "react";

// The Styled component imports
import { PictureArea } from "./ObjectivePagesStyled";

// The Component imports
import Background from "./Component/Background/Background";

// The image imports
import TemplateImage from "../Img/pfp.jpg";
import Objective from "./Component/Objective/Objective";
import Chassis from "./Component/ChassisSelection/Chassis";
import Butyrate from "./Component/Biomarkers/Butyrate/Butyrate";
import Indole from "./Component/Biomarkers/Indole/Indole";
import HydrogenPeroxide from "./Component/Biomarkers/HydrogenPeroxide/HydrogenPeroxide";

export default function ObjectivePages() {
  return (
    <div style={{ overflowX: "hidden", overflowY: "auto" }}>
      <PictureArea>
        <img src={TemplateImage} />
      </PictureArea>
      <Background />
      <Objective />
      <Chassis />
      <Butyrate />
      <Indole />
      <HydrogenPeroxide />
    </div>
  );
}
