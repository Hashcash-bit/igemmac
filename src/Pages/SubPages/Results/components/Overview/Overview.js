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

//media imports
import Workflow from '../../../Img/workflow.png';

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
          <OverviewTitle>Workflow</OverviewTitle>
          <OverviewParagraph>
            <SectionBodyImage src={Workflow} alt="plate growth" />
          </OverviewParagraph>
        </OverviewTextContainer>

        <OverviewGridContainer>
          <OverviewGridItem
            style={{
              gridArea: 'top-left',
            }}
            onClick={() => scrollToRef(equationsRef)}
          >
            Plate Growth
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'mid-left',
            }}
            onClick={() => scrollToRef(constantsRef)}
          >
            PCR Amplification
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'bottom-left',
            }}
            onClick={() => scrollToRef(modelRef)}
          >
            Restriction Enzyme Digest
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'top-right',
            }}
            onClick={() => scrollToRef(resultsRef)}
          >
            Ligation
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'mid-right',
            }}
            onClick={() => scrollToRef(limitationsRef)}
          >
            Transformation
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'bottom-right',
            }}
            onClick={() => scrollToRef(referencesRef)}
          >
            Sequence Alignment
          </OverviewGridItem>
        </OverviewGridContainer>
      </OverviewMainDiv>
    );
  },
);

export default Overview;
