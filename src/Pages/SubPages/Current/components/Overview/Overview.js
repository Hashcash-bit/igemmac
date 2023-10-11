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
          <OverviewTitle>Overview</OverviewTitle>
          <OverviewParagraph>
          The main goal of the development of a kinetic model is to mathematically simulate the proposed base editing system to analyze its behavior in different environments, verifying that the system achieves AND-gate functionality, and thus, spatiotemporal specificity.

          <br /><br />The model predicts how 4-HPA and metabolite concentrations induce environment-specific plasmid editing in the large intestine. From the sensing of 4-HPA and individual metabolites up to plasmid editing, the following major reactions were characterized in the model: 4-HPA-regulated BE2 and sgRNA1 production, metabolite-regulated sgRNA3 production, sgRNA and BE2 dimerization, BE2 and recording plasmid complexation, and base editing (Figure 1). 

          <br /><br />To simplify the simulation of the base editing system: 1. only one bacterium was included in the model, and 2. the sensing and recording of only one metabolite, indole, was simulated as a placeholder for other metabolites of interest.

          </OverviewParagraph>
          <SectionBodyImage src='https://static.igem.wiki/teams/4751/wiki/figure-1.jpg' alt='simbiology diagram' />
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
