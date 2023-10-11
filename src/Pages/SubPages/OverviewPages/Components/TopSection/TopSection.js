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
              Integrated Human Practices
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
            <BackdropButton to="/womensreport">
              Women's Report
            </BackdropButton>
            <LikkleBlurb>
            The purpose of this paper is to examine depressive disorders in context to women, primarily focusing on the struggles of cisgendered women. As women are more likely to develop Major Depressive Disorders today, our team aims to illuminate the historic injustices women have faced and how history actively influences our modern day treatment of women struggling with MDD. As the specific issues women face have often been neglected in academic research, we also wish to highlight how said issues can also contribute to MDD. This paper is an essential aspect of our exploration of integrative human practices, as we aim to create a product for societal good.
            </LikkleBlurb>
          </IndividualDividers>
        </ButtonInfoContainer>
      </Container>
    </div>
  );
}
