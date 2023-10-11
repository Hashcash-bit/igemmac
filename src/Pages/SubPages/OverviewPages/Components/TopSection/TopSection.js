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
            <BackdropButton to="/treatment-report">Policy Report</BackdropButton>
            <LikkleBlurb>
            The Global Burden of Disease Study (GBD) in 2019 has found that MDD contributes to
46.9 million disability-adjusted life years (DALYs) or the number of years lost due to depressive
disorders (Moitra et al, 2022). Depressive disorders were ranked 13th overall for the leading
cause of disease burden and 7th for non-fatal burden in the world (WHO). The impact of MDD
extends beyond the primary symptoms, as it contributes to loss of life through suicide. According
to government statistics of The Survey on COVID-19 and Mental Health (SCMH), 15.2% of
Canadians were recorded to experience debilitating symptoms correlated with MDD; There was
a higher prevalence for MDD in women, at 17.5% as compared to males, 12.6%. The number of
individuals to be diagnosed with MDD has drastically increased in the last 3 years. Despite the
growing number of individuals with MDD, it is estimated that only 7% to 28% of patients
receive proper care and treatment (SCMH).

            </LikkleBlurb>
          </IndividualDividers>
          <IndividualDividers>
            <BackdropButton to="/entrepreneurship">
              Entrepreneurship
            </BackdropButton>
            <LikkleBlurb>
            When a major depressive disorder diagnosis occurs, people who are in the process of
being assessed by physicians may experience a misdiagnosis, cultural disregard, and difficulty
adhering to treatment. Because of this, they feel stressed and frustrated, then experience a
decrease in their quality of life due to deteriorating mental health. Currently, traditional
diagnostic tools involve the DSM-5, and self reports which are not quantitative. The MDD
Biosensor is biosensor tech that aims to be a predictive tool that harnesses information from the
microbiome in order to identify those at a high risk for developing MDD. It will also be trained
on the social determinants of health (SDH) in order to suggest prevention strategies based on
patients’ culture and SES. This will eliminate long wait times for test results, increase treatment
adherence, decrease the incidence of MDD, and improve doctor-patient relationships.
            </LikkleBlurb>
          </IndividualDividers>
          <IndividualDividers>
            <BackdropButton to="/human-practices">
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
