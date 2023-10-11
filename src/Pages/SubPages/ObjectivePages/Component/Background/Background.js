import React from 'react';
import {
  BodyTextContainer,
  Container,
  SubTitleTxt,
  SubTitleTxt1,
  TextBlock,
  TextBlock1,
  TextBlock2,
  TitleTxt,
  TopBar,
  ImgTxtContainer,
  LeftContainer,
  RightContainer,
} from './BackgroundStyles';

// import IGEMLOGO from '../../../../Img/mgemlogo.png';

export default function Background() {
  return (
    <div
      style={{
        height: 'max-content',
      }}
    >
      <Container>
        <TopBar src="https://static.igem.wiki/teams/4751/wiki/mgemlogo.png" />
        <TitleTxt>Background</TitleTxt>
        <BodyTextContainer>
          <SubTitleTxt>
            The Gut-Brain Axis in Relation to Mood Disorders
          </SubTitleTxt>
          <TextBlock1>
            The GBA, referring to the bidirectional pathway between the enteric
            nervous system (ENS) and the central nervous system (CNS), may be
            critical to the investigation of mood disorder pathogenesis and
            treatment (Carabotti et al., 2015) (Figure 2). It serves as a
            connection between neural functions in the brain and intestinal
            functions in the gut. This process is impacted by changes in gut
            microbiota; for example , dysbiosis, the imbalance of microbiota,
            has been found to contribute to the development of various mood
            disorders such as generalized anxiety disorder, chronic stress, and
            MDD (Carabotti et al., 2015; Caspani et al. 2019). Taxonomic
            association studies in humans have identified a high prevalence of
            microbiome dysbiosis in MDD patients compared to healthy individuals
            (Caspani et al., 2019; Jiang et al., 2015; Naseribafrouei et al.,
            2014; Ressler and Mayberg, 2007; Zheng et al., 2016). Numerous
            studies using germ-free mice have also revealed the detrimental
            effects of uncolonized and dysbiotic gut microbiomes (Clarke et al.,
            2013; Luczynski et al., 2016; Matcovitch-Natan et al., 2016). A
            study by Zhang et al. (2020) demonstrated that depression-like
            behaviors can be induced in germ-free mice who have received
            transplantation of microbiota derived from MDD patients. On the
            other hand, administration of the probiotic Lactobacillus rhamnosus
            JB-1 in mice models demonstrated a positive influence on the
            expression of GABA receptors in regions of the brain associated with
            fear and additionally modulated anxiety-like behaviors (Bravo et
            al., 2011).
          </TextBlock1>
          <ImgTxtContainer>
            <LeftContainer src="https://static.igem.wiki/teams/4751/wiki/design1.png" />
            <RightContainer>
              Figure 2. Pathogenesis of MDD in relation to the gut brain axis.
              Chronic stress can result in the dysregulation of several pathways
              that to lead to MDD including: (A) LPS binding to TLR-4 on the
              nodose ganglion, (B) inflammation of peripheral tissues and
              increased activity of pro-inflammatory cytokines and immune cells,
              (C) LPS-induced dysregulation of hippocampal BDNF and neuronal
              signaling by NMDA-receptors (D) disruption of IEB integrity,
              translocation of LPS, and elevated pathogenic bacterial
              concentrations in the gut allowing. Furthering a devastating cycle
              that exacerbates the severity and persistence of MDD.
            </RightContainer>
          </ImgTxtContainer>
          <SubTitleTxt>Pathogenesis of MDD in Relation to the GBA</SubTitleTxt>
          <TextBlock1>
            While the pathophysiology of MDD in relation to the GBA is not fully
            elucidated in current literature, it is believed that the complex
            interplay involving the nervous, endocrine, immune, integumentary,
            and digestive systems can help define the mechanism of MDD.
          </TextBlock1>
          <div
            style={{
              paddingLeft: '100px',
              gap: '10px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <SubTitleTxt1>LPS, THE VAGUS NERVE, AND BDNF</SubTitleTxt1>
            <TextBlock2>
              Lipopolysaccharide (LPS), a bacterial product formed from the
              outer membrane of Gram-negative species, is one notable endotoxin
              that has been reported at higher concentrations in participants
              with DSM-IV diagnosed MDD (Ulevitch and Tobias, 1995). In fact,
              administration of LPS in healthy human participants was found to
              induce mild depressive and cognitive symptoms via the nodose
              ganglion and afferent vagus nerve (Ulevitch and Tobias, 1995;
              Kiecolt-Glaser et al., 2018; Zhang et al., 2020; Howland, 2014);
              here LPS is suggested to act on toll-like receptor 4 (TLR-4) on
              the nodose ganglion, inducing an innate immune response that leads
              to the subsequent cascade of proinflammatory signaling molecules
              such as IL-18, IL-6, IL-1b, TNF-a, IL-22 (Kiecolt-Glaser et al.,
              2018). The cellular mechanisms of LPS on the vagus nerve and the
              brain are unclear, however, it is suggested that brain derived
              neurotrophic factor (BDNF) levels are significantly influenced by
              LPS. A study by Guan and Fang (2006) found that LPS induction
              resulted in a 20% decrease in hippocampal BDNF, and a 19-63%
              decrease in other brain regions. On the other hand, direct
              stimulation of the vagus nerve in rats seemed to significantly
              increase BDNF mRNA concentration in the hippocampus and cerebral
              cortex by 26.3% and 58.1% respectively (Follesa et al., 2007).
              Therefore, stress and mutations, or even a deficient vagus nerve
              stimulation can lead to decreased or dysfunctional BDNF.
              <br />
              <br />
              Hippocampal neurons stimulated with BDNF have also been correlated
              to the upregulation of NMDA subunits (NR1, NR2A and NR2B) in the
              plasma membrane (Caldeira et al., 2007). This results in increased
              NMDA receptor activation which is observed to mediate LPS-induced
              depressive-like behavior and impair long-term potentiation (LTP)
              within the hippocampus (Caldeira et al., 2007; Walker et al.,
              2013). LTP impairment can subsequently have detrimental effects on
              synaptic plasticity, memory, and learning, all of which are
              observed to be dysregulated in MDD patients (Parrott et al., 2021;
              Pittenger, 2013).f (Martin and Finsterwald, 2011; Yang et al.,
              2020; O’Leary et al., 2018).
            </TextBlock2>
            <br />
            <SubTitleTxt1>
              Stress, Inflammation, and MDD pathogenesis
            </SubTitleTxt1>
            <TextBlock2>
              Psychological stress has also been shown to increase incidence
              levels of depression via elevated cortisol and adrenocorticotropic
              hormone secretion; this can inhibit BDNF production and therefore
              decrease synaptic plasticity and memory (Neufeld et al., 2011;
              Sudo et al., 2004; Westfall et al., 2021). The inflammatory
              mechanisms of chronic stress can modify gut microbial health and
              epithelial permeability (Braniste et al., 2014; Swidsinski et al.,
              2002; Madison and Kiecolt-Glaser, 2019). Specifically, prolonged
              stress stimulates the sympathetic nervous system, leading to
              increased catecholamine production; this has been correlated to
              elevated pathogenic bacterial concentrations by 10,000-fold
              (Freestone et al., 2002). In a study conducted using mouse models,
              28 days of stress-induced stimulation led to elevated levels of
              norepinephrine followed by significant differences in the
              concentration of 36 genera of bacteria (Geng et al., 2020).
              Primary mechanisms proposed to influence bacterial translocation
              (BT) include the following: 1) disrupted homeostatic equilibrium
              of the gut epithelium which reduces alpha-diversity, 2) increased
              permeability of the IEB, and 3) deficiencies in host immune
              defenses (Berg, 1998).
              <br />
              <br />A study inducing chronic social defeat in mice models found
              lower efficacy of synthetic and metabolic neurotransmitter
              precursor pathways such as the serotonin-tryptophan pathway, and
              reduced functional alpha-diversity of gut microbiota (Bharwani et
              al., 2016). The same study found elevated IL-6 levels and
              suppressed anti-inflammatory IL-10 CD4+ CD25+ T cells in spleens
              (Bharwani et al., 2016). IL-6 is found at first-wave inflammatory
              sites (Tanaka et al., 2014), and its increase is directly
              correlated with the reduction of microbiota abundance and blooming
              of pro-inflammatory genera (Bailey et al., 2011). A recent study
              on acute stress examined the mobilization of neutrophils and
              various cytokines in peripheral gut tissue (Poller et al., 2022).
              Specifically, in response to gut inflammation, neutrophils
              released chemoattractants and cytokines, which can cross the
              epithelium into the intestinal microbiome (Poller et al., 2022;
              Fournier and Parkos, 2012) where cytokines such as IL-6 may then
              disrupt microbial homeostasis (Bailey et al., 2011). Thus, this
              supports a larger, complex interplay of immune mechanisms involved
              in prolonged gut inflammation.
            </TextBlock2>
          </div>
        </BodyTextContainer>
      </Container>
    </div>
  );
}
