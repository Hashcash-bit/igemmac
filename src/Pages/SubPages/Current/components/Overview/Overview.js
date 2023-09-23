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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            suscipit suscipit tortor quis facilisis. Integer vitae massa erat.
            Suspendisse sed ex diam. Sed sapien dolor, tempus ac nisl eget,
            luctus rutrum nulla. Ut fermentum quis massa quis congue. In vel
            lacinia nibh. Nunc nec egestas libero. Nullam congue, magna sit amet
            fringilla malesuada, tortor dolor aliquam nisl, dapibus pellentesque
            erat nisi eget lorem. Donec feugiat scelerisque nisl, et finibus
            mauris.
          </OverviewParagraph>
        </OverviewTextContainer>

        <OverviewGridContainer>
          <OverviewGridItem
            style={{
              gridArea: 'top-left',
            }}
            onClick={() => scrollToRef(equationsRef)}
          >
            Equations
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'mid-left',
            }}
            onClick={() => scrollToRef(constantsRef)}
          >
            Constants
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'bottom-left',
            }}
            onClick={() => scrollToRef(modelRef)}
          >
            Model
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'top-right',
            }}
            onClick={() => scrollToRef(resultsRef)}
          >
            Results
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'mid-right',
            }}
            onClick={() => scrollToRef(limitationsRef)}
          >
            Limitations
          </OverviewGridItem>

          <OverviewGridItem
            style={{
              gridArea: 'bottom-right',
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
