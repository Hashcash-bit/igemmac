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
          Within our proposed system, there are some system level complicating factors that had to be taken into account. This includes bacterial growth, imperfect mediums, signal to noise ratios, as well as safety considerations. 

          </OverviewParagraph>
        </OverviewTextContainer>

        <OverviewGridContainer>
          <OverviewGridItem
            style={{
              gridArea: 'top-left',
            }}
            onClick={() => scrollToRef(equationsRef)}
          >
            Bacterial Growth
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'mid-left',
            }}
            onClick={() => scrollToRef(resultsRef)}
          >
            Imperfect Medium
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'top-right',
            }}
            onClick={() => scrollToRef(limitationsRef)}
          >
            Signal vs Noise
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
