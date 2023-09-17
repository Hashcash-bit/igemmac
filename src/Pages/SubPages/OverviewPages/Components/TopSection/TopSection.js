import React from "react";

import {
  BackdropButton,
  ButtonInfoContainer,
  IndividualDividers,
  LikkleBlurb,
  TitleContainer,
} from "./TopSectionStyles";

export default function TopSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "max-content",
        width: "100%",
        gap: "20px",
      }}
    >
      <TitleContainer>Overview</TitleContainer>
      <ButtonInfoContainer>
        <IndividualDividers>
          <BackdropButton>Button1</BackdropButton>
          <LikkleBlurb>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pretium tortor sit amet dignissim interdum. Etiam vitae malesuada
            purus. Sed fringilla urna id nibh imperdiet laoreet. Praesent
            vestibulum quis enim ac ullamcorper. Suspendisse massa quam,
            sagittis euismod gravida eu, condimentum sit amet sem. Nunc arcu ex,
            consequat a lorem at.
          </LikkleBlurb>
        </IndividualDividers>
        <IndividualDividers>
          <BackdropButton>Button2</BackdropButton>
          <LikkleBlurb>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pretium tortor sit amet dignissim interdum. Etiam vitae malesuada
            purus. Sed fringilla urna id nibh imperdiet laoreet. Praesent
            vestibulum quis enim ac ullamcorper. Suspendisse massa quam,
            sagittis euismod gravida eu, condimentum sit amet sem. Nunc arcu ex,
            consequat a lorem at.
          </LikkleBlurb>
        </IndividualDividers>
        <IndividualDividers>
          <BackdropButton>Button3</BackdropButton>
          <LikkleBlurb>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pretium tortor sit amet dignissim interdum. Etiam vitae malesuada
            purus. Sed fringilla urna id nibh imperdiet laoreet. Praesent
            vestibulum quis enim ac ullamcorper. Suspendisse massa quam,
            sagittis euismod gravida eu, condimentum sit amet sem. Nunc arcu ex,
            consequat a lorem at.
          </LikkleBlurb>
        </IndividualDividers>
        <IndividualDividers>
          <BackdropButton>Button4</BackdropButton>
          <LikkleBlurb>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pretium tortor sit amet dignissim interdum. Etiam vitae malesuada
            purus. Sed fringilla urna id nibh imperdiet laoreet. Praesent
            vestibulum quis enim ac ullamcorper. Suspendisse massa quam,
            sagittis euismod gravida eu, condimentum sit amet sem. Nunc arcu ex,
            consequat a lorem at.
          </LikkleBlurb>
        </IndividualDividers>
      </ButtonInfoContainer>
    </div>
  );
}
