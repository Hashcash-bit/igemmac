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

const CurrentPage = () => {
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
        <img src='https://static.igem.wiki/teams/4751/wiki/kinetictitle.png' alt="kinetic model title" />
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
        <SectionHeader>Equations</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          <b>1.1 Transcription</b>
          <br /><br />
          Mass action kinetics were used to model gene transcription. A steady state assumption was made, where the concentration of transcription reactants are not rate-limiting. This yields the following equation for the rate of mRNA production within one E. coli cell:
          <br /><br /><i>d[mRNA]/dt=ktrsc × nRNAP   (1) </i><br /><br />
          where ktrsc represents the transcription rate in E. coli, and  nRNAP represents the number of RNA polymerases present in the cell.

          <br /><br />For sgRNA and BE2 transcription, as they are positively regulated by their respective activators, the following form of the Hill equation was used:

          <br /><br /><i>d[mRNA]/dt=ktrsc × nRNAP × ([Activator]/K)^H / (1 + ([Activator]/K)^H)  (2) </i><br /><br />

          where K represents the concentration of the activator that is required to achieve half-optimal activation power (ie. the activation coefficient). H represents the Hill coefficient, which equals 1, since we assumed that the activator/DNA interaction exhibits no cooperativity.

          <br /><br />It is important to note that the model does not take into account the effect of varying strength of constitutive promoters. All constitutive transcription reactions were modeled following Equation (1).
           
          <br /><br /><b>1.2 Translation</b><br /><br />
          Applying mass action kinetics and the steady state assumption, gene translation was modeled with the following equation: 
          <br /><br /><i>d[Protein]/dt=ktrsl × nRibosomes  × [mRNA]</i>  (3) <br /><br />
          where ktrsl represents the translation rate in E. coli, and  nRibosomes represents the number of ribosomes present in the cell.
          <br /><br /><b>1.3 Dimerization</b><br /><br />
          Mass action kinetics were assumed for dimerization to yield a general equation representing the binding of the reactants and dissociation of the formed dimer: 
          <br /><br /><i>d[Dimer]/dt=kassociation × [Reactants] -kdissociation × [Dimer]</i> (4) <br /><br />
          kassociation and kdissociation are the association constant and dissociation constant, respectively.

          <br /><br /><b>1.4 Degradation </b><br /><br />

          A zero rate assumption was made for the loss of mRNA (including sgRNA) and proteins; mRNA loss is dominated by decay, and protein loss is dominated by dilution. Mass action kinetics were used to yield:

          <br /><br /><i>d[Species]/dt = -kdeg[Species]</i> (5) <br /><br />

          where kdeg is the degradation rate of the species in E. coli.

          <br /><br /><b>1.5 Enzyme Kinetics</b><br /><br />

          The activity of CDA after formation of the BE2-plasmid complex was characterized as a constantly saturated enzyme: once sgRNA has directed the BE2-complex to bind to the plasmid, CDA is already positioned at the target base site, and as such, would not be subject to the stochastic interaction that normally precedes catalysis (Komar et al, 2016). Hence, the rate of plasmid editing, based on Michaelis-Menten kinetics, was modeled as:

          <br /><br /><i>d[Product]/dt=kcat[Enzyme] </i> (6) <br /><br />

          where kcat is the turnover number or catalytic rate constant.  We assume that the behavior of this enzyme is not dependent on the specific sgRNA.

          <br /><br /><b>1.6 Constants</b><br /><br />

          Constants were sourced from the literature (Table 1).

          <br /><br /><b>1.7 Final Output</b><br /><br />

          The final output of the model is the ratio of base editing at the indole and 4-HPA locations, calculated based on the equation:

          <br /><br /><i>ratio=[Edited Plasmids]/([Edited Plasmids] + [Unedited Plasmids]) </i> (7)  <br /><br />

          In the model, the base editing ratio of the 4-HPA- and indole-associated recording sites are denoted as Ratio_1 and Ratio_2, respectively.




          </SectionBodyParagraph>
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={resultsRef}>
        <SectionHeader>Results</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          To validate the functionality of the base editing system, the model was tested with varying concentrations of the two inputs, 4-HPA and indole, over a period of 10 hours, similar to the expected time required for food to travel through the large intestine (Tobias and Sadiq, 2023). Initial concentrations of 4-HPA were based on 4-HPA concentrations in the colonic content of mice, 0.08 mM (Meier et al., 2023). Indole concentrations were based on ranges found in human fecal samples: the mean fecal indole concentration in healthy individuals is 2.59 mM, though concentrations can vary widely, from 0.30 mM to 6.64 mM, among individuals (Darkoh et al., 2015). Concentrations of each metabolite exhibited negligible change during the 50-hour simulation period. Results are shown in Figures 2-5, and demonstrate that the system behaves as expected in several key aspects, enabling targeted sensing within the large intestine.
          <br /><br />
[FIGURE 2 HERE]
<br /><br />
First, the system responds to metabolite input as intended under typical large intestinal conditions. In Figure 2, the input metabolite concentrations were set to simulate normal large intestine conditions: the initial indole concentration was set as 2.59 mM, and the initial 4-HPA concentration was set to 0.08 mM. Expression of sgRNA and BE2 occur immediately in response to the metabolites, followed by the subsequent dimerization and complexation with recording plasmids, leading to increased concentrations of BE2-DNA complexes. The concentration of edited plasmids increases shortly after, confirming that base-editing occurs as a result of metabolite input.
<br /><br />
[FIGURE 3 HERE]
<br /><br />
Second, the base editing system exhibits AND-gate functionality; in theory, since base editing of the indole-associated recording site can only occur when both BE2 and sgRNA2 are expressed, it is expected that both 4-HPA and indole are required to induce the system. In simulations where either 4-HPA or indole are absent, and when both are absent, the graphs show no base editing activity (Figure 6A-C). Only when both 4-HPA and indole are present, the base editing ratio of the indole-associated recording site increases (Figure 6D), verifying that the system functions as an AND gate.
<br /><br />
[FIGURE 4 HERE]
<br /><br />
Third, the system displays time- and dose-dependent editing ratios. Increased concentrations of indole with constant levels of 4-HPA lead to increased base editing of the indole-associated recording site in a time- and dose-dependent manner. (Figure 4A) Of note, the increases in base editing ratios were not linear with respect to input indole concentrations. Increased concentrations of 4-HPA also lead to increased levels of editing at the 4-HPA-associated recording site in a time- and dose-dependent manner (Figure 4B). However, it also causes increased editing at the indole-associated recording site on orders of magnitude similar to the editing changes due to changes in indole concentrations. This is congruent with the 4-HPA-dependent expression of BE2, which exhibits first-order kinetics with respect to the final editing ratio by means of its dimerization with the indole-associated sgRNA. To this end, a normalization model is required to correct for this influence which will be discussed in the next section.
<br /><br />
[FIGURE 5 HERE]
<br /><br />
Fourth, recording of metabolite concentrations is robust past 15 hours. As seen in Figure 5, when the initial concentration of 4-HPA is constant and the initial indole concentration varies, the base editing ratios only start to become saturated at around 25 hours. Since the expected time it takes for food to travel through the large intestine is 8-15 hours, the recording duration of the system is suitable and robust for sensing within the large intestine. 
<br /><br />
Based on the results from the kinetic model, the system achieves AND-gate functionality, and base editing is dependent on metabolite concentration. It is expected that the base editing ratios fall within the order of 10-3 to 10-2 for both the 4-HPA- and indole-associated recording sites. Overall, our results support the use of this system for recording metabolite concentrations in a location-dependent manner. 

          </SectionBodyParagraph>
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={limitationsRef}>
        <SectionHeader>Limitations</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          The kinetic model itself also has several limitations in addition to the assumptions pertaining to specific reaction equations (see 1.0 Equations) and kinetic constants (see Table 1). 

          <br /><br />

First, as we were unable to model base editing of both the indole- and 4-HPA-associated recording sites within one plasmid, two separate species of recording plasmids were created to clearly track base editing in response to each metabolite: Recording_Plasmids_1 was dedicated to recording 4-HPA concentrations, and Recording_Plasmids_2 for recording indole concentrations. It was assumed that each recording plasmid could only be edited once. In reality, the two BE2-sgRNA complexes compete for the same recording plasmids, so all plasmids can be edited twice at different locations.
<br /><br />
Second, the model represents a single cell, and does not account for bacterial growth or decay: we assume that the findings from a single cell are generalizable to the behavior of individual cells in a bacterial population. Since the amount of metabolite sequestered by bacterial receptors is negligible compared to typical concentrations, bacterial growth should not affect the effective concentration of metabolites. However, changes in the physiology of the cell during growth have been shown to affect the performance of synthetic constructs, which could limit the applicability of the simulated results (Borkowski et al., 2016).
<br /><br />
Third, the base editing ratios predicted by the model are limited by time. As noted earlier, the final base editing ratio after 10 hours is typically on the order of 10-2, which is fairly low compared to the percentages achieved by the CAMERA systems (Tang and Liu, 2018). By increasing the run time of the model simulations, we found that the base editing ratios of our system increased exponentially. Furthermore, CAMERA 2.7 achieved 57% base editing for recording light exposure after a time period of three days (Tang and Liu, 2018). Since our proposed system functions in a substantially shorter time frame, it is reasonable to expect lower base editing ratios.
          </SectionBodyParagraph>
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={referencesRef}>
        <SectionHeader>References</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          <br /><br />Bakshi, S., Siryaporn, A., Goulian, M., and Weisshaar, J. C. (2012). Superresolution imaging of ribosomes and RNA polymerase in live Escherichia coli cells. Mol. Microbiol. 85, 21–38. doi: 10.1111/j.1365-2958.2012.08081.x.
          <br /><br />Borkowski, O., Ceroni, F., Stan, G.-B., and Ellis, T. (2016). Overloaded and stressed: whole-cell considerations for bacterial synthetic biology. Curr. Opin. Microbiol. 33, 123–130. doi: 10.1016/j.mib.2016.07.009.
          <br /><br />Bremer, H., and Dennis, P. P. (2008). Modulation of Chemical Composition and Other Parameters of the Cell at Different Exponential Growth Rates. EcoSal Plus 3, 10.1128/ecosal.5.2.3. doi: 10.1128/ecosal.5.2.3.
          <br /><br />Darkoh, C., Chappell, C., Gonzales, C., and Okhuysen, P. (2015). A rapid and specific method for the detection of indole in complex biological samples. Appl. Environ. Microbiol. 81, 8093–8097. doi: 10.1128/AEM.02787-15.
          <br /><br />Dierckx, S., Van Puyvelde, S., Venken, L., Eberle, W. and Vanderleyden, J. (2015). Design and construction of a whole cell bacterial 4-hydroxyphenylacetic acid and 2-phenylacetic acid bioassay. Front. Bioeng. Biotechnol. 3, 88. doi: 10.3389/fbioe.2015.00088
          <br /><br />Hall, R. S., Fedorov, A. A., Xu, C., Fedorov, E. V., Almo, S. C., and Raushel, F. M. (2011). The Three-Dimensional Structure and Catalytic Mechanism of Cytosine Deaminase. Biochemistry 50, 5077–5085. doi: 10.1021/bi200483k.
          <br /><br />Komor, A. C., Kim, Y. B., Packer, M. S., Zuris, J. A., and Liu, D. R. (2016). Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage. Nature 533, 420–424. doi: 10.1038/nature17946.
          <br /><br />Krzysztoń, R., Woschée, D., Reiser, A., Schwake, G., Strey, H. H., and Rädler, J. O. (2019). Single-cell kinetics of siRNA-mediated mRNA degradation. Nanomedicine Nanotechnol. Biol. Med. 21, 102077. doi: 10.1016/j.nano.2019.102077.
          <br /><br />Matulis, P., Kutraite, I., Augustiniene, E., Valanciene, E., Jonuskiene, I., and Malys, N. (2022). Development and Characterization of Indole-Responsive Whole-Cell Biosensor Based on the Inducible Gene Expression System from Pseudomonas putida KT2440. Int J Mol Sci 23, 4649. doi: 10.3390/IJMS23094649/S1.
          <br /><br />Meier, K.H., Trouillon, J., Li, H., Lang, M., Fuhrer, T., Zamboni, N., et al. (2023). Metabolic landscape of the male mouse gut identifies different niches determined by microbial activities. Nature metabolism, pp.1-13. doi: 10.1038/s42255-023-00802-1
          <br /><br />Outten, C. E., and O’Halloran,  and T. V. (2001). Femtomolar Sensitivity of Metalloregulatory Proteins Controlling Zinc Homeostasis. Science 292, 2488–2492. doi: 10.1126/science.1060331.
          <br /><br />Raper, A. T., Stephenson, A. A., and Suo, Z. (2018). Functional Insights Revealed by the Kinetic Mechanism of CRISPR/Cas9. J. Am. Chem. Soc. 140, 2971–2984. doi: 10.1021/jacs.7b13047.
          <br /><br />Tang, W., and Liu, D. R. (2018). Rewritable multi-event analog recording in bacterial and mammalian cells. Science 360, eaap8992. doi: 10.1126/science.aap8992.
          <br /><br />Tobias, A., and Sadiq, N. M. (2023). “Physiology, Gastrointestinal Nervous Control,” in StatPearls (Treasure Island (FL): StatPearls Publishing). Available at: http://www.ncbi.nlm.nih.gov/books/NBK545268/ [Accessed August 1, 2023].
          <br /><br />Yu, J., Xiao, J., Ren, X., Lao, K., and Xie, X. S. (2006). Probing Gene Expression in Live Cells, One Protein Molecule at a Time. Science 311, 1600–1603. doi: 10.1126/science.1119623.

          </SectionBodyParagraph>
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout>
        <SectionHeader>All Tables and Figures</SectionHeader>
        <SectionBody>
        <iframe
          src='https://static.igem.wiki/teams/4751/wiki/kinetic-model-wiki-figures-tables-google-docs.pdf'
          width="100%"
          height="500px"
          title="PDF in an iFrame"
        />
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>
    </MainDiv>
  );
};

export default CurrentPage;
