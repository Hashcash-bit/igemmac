import React from 'react';
import TopBar from '../TopBar/TopBar';
import {
  BottomSection,
  Image,
  LeftBottomSection,
  RightBottomSection,
  TapeImage,
  TextInfo1,
  TextInfo2,
  TextInfo,
  TextInfoContainer,
  Title,
  MainTitle
} from './BackgroundStyles';

import TemplateImage from '../../../Img/pfp.jpg';
import Tape from '../../../Img/tap.png';

export default function Background() {
  return (
    <div style={{ height: '100vh' }}>
      <TopBar />
      <MainTitle>Background</MainTitle>
      <Title> The Gut-Brain Axis in Relation to Mood Disorders</Title>
      <TextInfo1>The GBA, referring to the bidirectional pathway between the enteric nervous system (ENS) and the central nervous system (CNS), may be critical to the investigation of mood disorder pathogenesis and treatment (Carabotti et al., 2015) (Figure 2). It serves as a connection between neural functions in the brain and intestinal functions in the gut. This process is impacted by changes in gut microbiota; for example , dysbiosis, the imbalance of microbiota, has been found to contribute to the development of various mood disorders such as generalized anxiety disorder, chronic stress, and MDD (Carabotti et al., 2015; Caspani et al. 2019). Taxonomic association studies in humans have identified a high prevalence of microbiome dysbiosis in MDD patients compared to healthy individuals (Caspani et al., 2019; Jiang et al., 2015; Naseribafrouei et al., 2014; Ressler and Mayberg, 2007; Zheng et al., 2016). Numerous studies using germ-free mice have also revealed the detrimental effects of uncolonized and dysbiotic gut microbiomes (Clarke et al., 2013; Luczynski et al., 2016; Matcovitch-Natan et al., 2016). A study by Zhang et al. (2020) demonstrated that depression-like behaviors can be induced in germ-free mice who have received transplantation of microbiota derived from MDD patients. On the other hand, administration of the probiotic Lactobacillus rhamnosus JB-1 in mice models demonstrated a positive influence on the expression of GABA receptors in regions of the brain associated with fear and additionally modulated anxiety-like behaviors (Bravo et al., 2011). </TextInfo1>
      <BottomSection>
        <LeftBottomSection>
          <TextInfoContainer>
            <TextInfo2>Figure 2. Pathogenesis of MDD in relation to the gut brain axis. Chronic stress can result in the dysregulation of several pathways that to lead to MDD including: (A) LPS binding to TLR-4 on the nodose ganglion, (B) inflammation of peripheral tissues and increased activity of pro-inflammatory cytokines and immune cells, (C) LPS-induced dysregulation of hippocampal BDNF and neuronal signaling by NMDA-receptors (D) disruption of IEB integrity, translocation of LPS, and elevated pathogenic bacterial concentrations in the gut allowing. Furthering a devastating cycle that exacerbates the severity and persistence of MDD.</TextInfo2>
          </TextInfoContainer>
        </LeftBottomSection>
        <RightBottomSection>
          {/* <TapeImage src={Tape} alt="tape" /> */}
          <Image src={TemplateImage} alt="Template" />
        </RightBottomSection>
      </BottomSection>
      <Title> Pathogenesis of MDD in Relation to the GBA</Title>
    </div>
  );
}
