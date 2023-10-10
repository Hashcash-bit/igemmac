import React from 'react';

import {
  Container,
  BackdropButton,
  ButtonInfoContainer,
  IndividualDividers,
  LikkleBlurb,
  TitleContainer,
} from './TopSectionStyles';

export default function TopSection() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        width: '100%',
        gap: '20px',
        marginTop: '100px',
      }}
    >
      <Container>
        <TitleContainer>Overview</TitleContainer>
        <ButtonInfoContainer>
          <IndividualDividers>
            <BackdropButton to="/PolicyReport">Policy Report</BackdropButton>
            <LikkleBlurb>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pretium tortor sit amet dignissim interdum. Etiam vitae malesuada
              purus. Sed fringilla urna id nibh imperdiet laoreet. Praesent
              vestibulum quis enim ac ullamcorper. Suspendisse massa quam,
              sagittis euismod gravida eu, condimentum sit amet sem. Nunc arcu
              ex, consequat a lorem at.
            </LikkleBlurb>
          </IndividualDividers>
          <IndividualDividers>
            <BackdropButton to="/Entrepreneurship">
              Entrepreneurship
            </BackdropButton>
            <LikkleBlurb>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pretium tortor sit amet dignissim interdum. Etiam vitae malesuada
              purus. Sed fringilla urna id nibh imperdiet laoreet. Praesent
              vestibulum quis enim ac ullamcorper. Suspendisse massa quam,
              sagittis euismod gravida eu, condimentum sit amet sem. Nunc arcu
              ex, consequat a lorem at.
            </LikkleBlurb>
          </IndividualDividers>
          <IndividualDividers>
            <BackdropButton to="/IHR&WomensRights">
              IHR & Womens Rights
            </BackdropButton>
            <LikkleBlurb>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pretium tortor sit amet dignissim interdum. Etiam vitae malesuada
              purus. Sed fringilla urna id nibh imperdiet laoreet. Praesent
              vestibulum quis enim ac ullamcorper. Suspendisse massa quam,
              sagittis euismod gravida eu, condimentum sit amet sem. Nunc arcu
              ex, consequat a lorem at.
            </LikkleBlurb>
          </IndividualDividers>
        </ButtonInfoContainer>
      </Container>
    </div>
  );
}
