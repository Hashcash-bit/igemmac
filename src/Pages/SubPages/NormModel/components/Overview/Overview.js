import React from 'react';

// component imports
import {
  OverviewMainDiv,
  OverviewTextContainer,
  OverviewTitle,
  OverviewParagraph,
  OverviewGridContainer,
  OverviewGridItem,
} from './OverviewStyled';

import {
  SectionLayout,
  SectionHeader,
  SectionBody,
  SectionBodyParagraph,
  SectionBodyImage,
} from '../Section/SectionStyled';

const Overview = React.forwardRef(
  (
    {
      scrollToRef,
      equationsRef,
      constantsRef,
      modelRef,
      resultsRef,
      limitationsRef,
      referencesRef,
    },
    ref,
  ) => {
    return (
      <OverviewMainDiv ref={ref}>
        <OverviewTextContainer>
          <OverviewTitle>A Post-hoc Normalization Model Corrects for 4-HPA-Concentration Confounding and Linearizes the Relationship Between Actual and Predicted Metabolite Concentration</OverviewTitle>
          <OverviewParagraph>
          Based on our kinetic simulation, the relationship between metabolite concentration and base-editing is logarithmic, not linear (see Kinetic Model Figure 4A). Furthermore, variations in 4-HPA concentration would have a direct impact on base editing at the metabolite-associated recording site (see Kinetic Model Figure 4B). Thus, a normalization model was constructed to achieve two aims: 1) controlling the confounding effect of 4-HPA concentration when using base-editing ratios to more accurately infer metabolite concentrations, and 2) creating a linear relationship between actual and predicted indole concentrations in order to more accurately assess fold-changes in metabolite concentrations. Data from the kinetic simulation at 10 hours was used to determine the relationships and constants required for this model (Table 1). This normalized model is intended to be deployed after extracting and reading the biosensor output; it uses final base editing ratios for each site as inputs, and returns a relative metabolite level with arbitrary units that has been normalized for 4-HPA concentrations. 
          </OverviewParagraph>
        </OverviewTextContainer>

        <OverviewGridContainer>
          <OverviewGridItem
            style={{
              gridArea: 'top-left',
            }}
            onClick={() => scrollToRef(equationsRef)}
          >
            Equations and Constants
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'mid-left',
            }}
            onClick={() => scrollToRef(resultsRef)}
          >
            Results
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'top-right',
            }}
            onClick={() => scrollToRef(limitationsRef)}
          >
            Limitations
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'mid-right',
            }}
            onClick={() => scrollToRef(referencesRef)}
          >
            References
          </OverviewGridItem>
        </OverviewGridContainer>
      </OverviewMainDiv>
    );
  },
);

export default Overview;
