import React, { useRef } from 'react';

// component imports
import { MainDiv } from './components/MainDiv';
import { PictureArea } from './components/PictureArea';
import Overview from './components/Overview/Overview';
import {
  SectionLayout,
  SectionHeader,
  SectionBody,
  SectionBodyParagraph,
  SectionBodyImage,
} from './components/Section/SectionStyled';
import SectionFooterComponent from './components/Section/SectionFooter';
import SubNavbar from '../Components/SubNavbar/SubNavbar'
import Footer from '../../Components/Footer/Footer'

const ResultsPage = () => {
  const overviewRef = useRef(null);
  const equationsRef = useRef(null);
  const constantsRef = useRef(null);
  const modelRef = useRef(null);
  const resultsRef = useRef(null);
  const limitationsRef = useRef(null);
  const referencesRef = useRef(null);

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  return (
    <MainDiv>
      <SubNavbar />

      <PictureArea>
        <img src='https://static.igem.wiki/teams/4751/wiki/resultstitle.png' alt="titleimg" />
      </PictureArea>
      <Overview
        ref={overviewRef}
        scrollToRef={scrollToRef}
        equationsRef={equationsRef}
        constantsRef={constantsRef}
        modelRef={modelRef}
        resultsRef={resultsRef}
        limitationsRef={limitationsRef}
        referencesRef={referencesRef}
      />

      <SectionLayout ref={equationsRef}>
        <SectionHeader>pUC118 Plate Growth</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          pUC118 was quadrant streaked on LB agar plates (6.25g LB broth/L and 3.75g Agar/L) treated with Ampicillin to reach final concentration of (100 ng/uL). Growth was observed in the pUC118 plate, with visible single isolated colonies.
          </SectionBodyParagraph>
          <SectionBodyImage src='https://static.igem.wiki/teams/4751/wiki/plategrowth.png' alt="plate growth" />
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={constantsRef}>
        <SectionHeader>Butyrate Sensing System PCR</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          This is a visualization of the PCR amplification of the butyrate sensing system, NEB Q5® High-Fidelity 2X Master Mix was used for routine PCR. The gel is a small 1% agarose gel with NEB Quick-Load® 1 kb Plus DNA Ladder (lane 1). Lanes 7-13 consists of 5uL of post-PCR butyrate sensing system (expected length 1.5kb) . Lane 2 and 5 are loading dye (LD) and negative controls (BC) respectively where BC consist of the master mix without template DNA.

          <br /><br />Butyrate sensing system expected length: 1.5kb
          Observed length: Between 1 and 2 kb, approximately 1.5kb
          </SectionBodyParagraph>
          <SectionBodyImage src='https://static.igem.wiki/teams/4751/wiki/pcr.png' alt="pcr amp" />
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={modelRef}>
        <SectionHeader>Restriction Enzyme Digest pUC118</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          This is a 1% agarose gel, loaded with NEB Quick-Load® 1 kb Plus DNA Ladder (lane 1). Lane 3 consists of a negative control consisting of only 5 uL pf loading dye. Lane 5 is a control consisting of 10 uL mixture of buffer and pUC118 . Lane 7 and 9 contain 10 uL of the single cut reaction with BamHI and HindIII, respectively. Lane 11 contains 30 uL of double cut (BamHI and HindIII) pUC118 vector plasmid that was extracted for downstream ligation

          <br /><br />pUC118 no cut: Expected Length = 3162 bp
          pUC118 linearized (BamHI or HindII): less supercoil and band above no cut control
          pIC118 double cut: One band that is above than no cut control
          </SectionBodyParagraph>
          <SectionBodyImage src='https://static.igem.wiki/teams/4751/wiki/enzyme.png' alt="enzyme digest" />
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={resultsRef}>
        <SectionHeader>Ligation</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          This is a 1% agarose gel, loaded with NEB Quick-Load® 1 kb Plus DNA Ladder (lane 1). Lane 3 consists of uncut pUC118 plasmid. Lane 5 is a control consisting of digested pUC118 plasmid (BamHI and HindIII) with no DNA insert. Lane 7 contains digested pUC118 plasmid (BamHI and HindIII) with Butyrate DNA insert. 

          <br /><br />pUC118: Expected Length 3162
          pUC118 Lig Control: 
          pUC118 Lig Butyrate:
          </SectionBodyParagraph>
          <SectionBodyImage src='https://static.igem.wiki/teams/4751/wiki/ligation.png' alt="ligation" />
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={limitationsRef}>
        <SectionHeader>pUC118 Transformation</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          This plate depicts transformation in DH5a chemically competent cells, grown in IPTG, X-Gal, and Ampicillin treated plates. Blue-white colony screening allows for the separation of transformed and non-transformed bacteria. The recombinant, transformed colonies of interest are observed in white, while non-transformed colonies are seen in blue.
          </SectionBodyParagraph>
          <SectionBodyImage src='https://static.igem.wiki/teams/4751/wiki/transformation.png' alt="transformation" />
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={referencesRef}>
        <SectionHeader>Sequence Alignment</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          The entire gene was not sequenced due to using only one forward primer; however, for the parts that were sequenced 100% of it matched with the ordered gene sequence with no mutations introduced.

          <br /><br /><u><b>Breakdown of genes sequenced: </b></u>
          pCHA Promoter: 100% Sequenced, 100% Match
          Pcha gene: 100% sequenced, 100% Match
          pLEE1 promoter: 68% sequenced, 100% match
          YFP: 0% sequenced, NA
          </SectionBodyParagraph>
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>
      <Footer />
    </MainDiv>
  );
};

export default ResultsPage;
