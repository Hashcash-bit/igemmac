import React from 'react';

// component imports
import { SectionFooter, SectionFooterButton } from './SectionStyled';

const SectionFooterComponent = ({ scrollToRef, overviewRef }) => {
  return (
    <SectionFooter>
      <SectionFooterButton onClick={() => scrollToRef(overviewRef)}>
        Back to Overview
      </SectionFooterButton>
    </SectionFooter>
  );
};

export default SectionFooterComponent;
