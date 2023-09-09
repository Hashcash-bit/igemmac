//Default react imports
import React from "react";

// The Styled component imports
import { PictureArea } from "./ObjectivePagesStyled";

// The Component imports
import Background from "./Component/Background/Background";

// The image imports
import TemplateImage from "../Img/pfp.jpg";
import Objective from "./Component/Objective/Objective";

export default function ObjectivePages() {
  return (
    <div style={{ overflowX: "hidden", overflowY: "auto" }}>
      <PictureArea>
        <img src={TemplateImage} />
      </PictureArea>
      <Background />
      <Objective />
    </div>
  );
}
