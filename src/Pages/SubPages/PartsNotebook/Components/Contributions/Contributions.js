import React from 'react';
import {
  BodyTextContainer,
  Container,
  SubTitleTxt,
  TextBlock,
  TitleTxt,
  TopBar,
} from './ContributionStyles';

import IGEMLOGO from '../../../Img/mgemlogo.png';

export default function Contributions() {
  return (
    <div
      style={{
        height: '100dvh',
      }}
    >
      <Container>
        <TopBar src={IGEMLOGO} />
        <TitleTxt>Contributions</TitleTxt>
        <BodyTextContainer>
          <SubTitleTxt>LITERATURE REVIEW</SubTitleTxt>
          <TextBlock>
            McMaster_Canada 2023 has contributed an extensive literature review
            of gut metabolites for the characterization of major depressive
            disorder (MDD). Outlining 5 metabolites with their correlation and
            proposed mechanism of influence through the gut brain axis.
          </TextBlock>
          <TextBlock>
            - Butyrate
            <br /> - Indole
            <br /> - Hydrogen Peroxide
            <br /> - Tetrahydrofolate
            <br /> - Tetrathionate
          </TextBlock>
          <SubTitleTxt>
            Developing sensing system designs for gut metabolites
          </SubTitleTxt>
          <TextBlock>
            Developing standardized parts of 5 separate sensing systems and
            uploaded composite parts the IGEM Parts Registry
            <br /> - Part Names
          </TextBlock>
          <SubTitleTxt>
            Outlining CRISPR based reporting system use with ingestible
            biosensors{' '}
          </SubTitleTxt>
          <TextBlock>
            Taking inspiration of work from Tang et al, 2018. McMaster_Canada
            identified a novel method to record gut metabolites for ingestible
            biosensors. In addition the team also created a novel AND gate which
            theoretical will allow for the specific recording of metabolites
            exclusively within the large intestines.
          </TextBlock>
          <SubTitleTxt>
            Developing hypothetical pill design for the independeant measurement
            of multiple metabolites simultaneously
          </SubTitleTxt>
          <TextBlock>
            McMaster_Canada developed a 5 compartment bacterial cellulose pill
            design which will allow passive diffusion of metabolites while
            entrapping bacterial sensing system within the pill.{' '}
          </TextBlock>
          <SubTitleTxt>
            Outlined experimentation protocols in free-access notebook for the
            construction of butyrate sensing system in DH5a E. coli{' '}
          </SubTitleTxt>
        </BodyTextContainer>
      </Container>
    </div>
  );
}
