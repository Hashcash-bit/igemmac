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

const Safety = () => {
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
        <img src='https://static.igem.wiki/teams/4751/wiki/safetytitle.png' alt="kinetic model title" />
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
        <SectionHeader>Bacterial Growth</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          Many assumptions and considerations were made relating to bacterial growth. Firstly, the amount of bacteria placed into the pills capsule initially is assumed to be roughly 65% of the area available. Although E. coli doubles population approximately every 30 minutes in regular conditions (Pletnev et al., 2015), during the stationary phase of growth, this will slow down significantly and bacterial populations should remain relatively constant (Rafferty, 2023). Cells input in the capsule are assumed to be in the early stationary phase of growth. For most optimal results, the capsule confluence should never exceed 80% to ensure that metabolites can easily flow and that cells remain healthy (Sigma, 2023). With the assumption that the pill will take 36 hours to move through the bowels (Rajan, 2019), the maximum the confluence should never exceed 80%, even if some cells continue to divide. Growth rates and estimations can be models using Michaelis–Menten kinetics for the stationary phase of the bacterial cell cycle. 
<br /><br />Although cell death is inevitable, to ensure the majority of the bacteria in the capsule does not enter the death stage, we will choose colonies that are in the starting stages of the stationary phase. Furthermore, the pathway from the filling of the capsule to the patient should be within an hour, as to ensure that bacterial cells are not progressing too far without being in the body. However, if some cells are dead after removal from the patient, the plasmids can still be recovered, with the assumption that not 100% of the data will be accurate due to the unknown time of death (Nocker & Camper, 2006). 

          </SectionBodyParagraph>
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={resultsRef}>
        <SectionHeader>Imperfect Medium</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          Essential nutrients for bacterial growth include water, any carbon and nitrogen source, and some mineral salts (Bonnet et al., 2019). Optimal growth conditions can include a myriad of growth hormones, enzymes and metabolites to help give the cultures a competitive edge (Bonnet et al., 2019). In this case however, within the capsule, competition is not an issue. 
          <br /><br />To ensure that the bacteria stay in the stationary phase of growth, it is important to not add too many nutrients to the medium that will allow for competitive growth conditions (Pletnev et al., 2015). This means only providing the essential nutrients to ensure the bacteria can continue their operations to ensure that the death phase will not start, and without any excess to ensure that growth is not promoted. 
          <br /><br />Although there will be five different bacterial species within the same capsule, it is assumed that competition between all strains will be controllable, due to sufficient nutrients being provided for survival, without any supplements to promote secondary metabolite functions, which are often those that offer competitive advantages (Joyce et al., 2011).


          </SectionBodyParagraph>
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={limitationsRef}>
        <SectionHeader>Signal vs Noise</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
          A large concern in the design of our system is the ability to differentiate between ideal and non-ideal behaviour. For in-vitro validation, high inducer or metabolite concentrations were used to produce strong promoter responses. For future applications, translating this to in-vivo uses requires taking into consideration the surrounding environmental effects. In practice, salts and metabolites in the surrounding environment may alter the ability of the CAS9 complex to bind to DNA (Zhang et al., 2020). Between groups, inducer concentrations will also vary extremely slightly, especially for mood related biomarkers which increases the impact of noise in rendering the results non-significant. (https://pubmed.ncbi.nlm.nih.gov/31745238/) For future in-vivo applications, it will be crucial to limit the impact of noise on the system, for example decreasing the likelihood of other similar substrates binding to the promoters by increasing their specificity. 
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
          Bonnet, M. et al. (2019) Bacterial culture through selective and non-selective conditions: The evolution of Culture Media in Clinical Microbiology, New microbes and new infections. Available at: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6961714/ (Accessed: 11 October 2023).
          <br /><br />Joyce, S.A., Lango, L. and Clarke, D.J. (2011) The regulation of secondary metabolism and mutualism in the insect pathogenic bacterium Photorhabdus luminescens, Advances in Applied Microbiology. Available at: https://www.sciencedirect.com/science/article/abs/pii/B9780123870483000015 (Accessed: 11 October 2023).
          <br /><br />Nocker, A. and Camper, A.K. (2006) National Library of Medicine, National Center for Biotechnology Information. Available at: https://www.ncbi.nlm.nih.gov/pmc/ (Accessed: 11 October 2023).
          <br /><br />Pletnev, P. et al. (2015) Survival guide: Escherichia coli in the stationary phase, Acta naturae. Available at: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4717247/#:~:text=Once%20nutrients%20in%20the%20medium,plateau%20in%20the%20growth%20curve (Accessed: 11 October 2023).
          <br /><br />Rafferty, J.P. (2023) Stationary phase, Encyclopædia Britannica. Available at: https://www.britannica.com/science/stationary-phase-bacterial-growth-curve (Accessed: 11 October 2023).
          <br /><br />Rajan, E. (2019) Digestion: How long does it take?, Mayo Clinic. Available at: https://www.mayoclinic.org/digestive-system/expert-answers/faq-20058340#:~:text=It%20takes%20about%2036%20hours,days%2C%20depending%20on%20the%20individual (Accessed: 11 October 2023).
          <br /><br />Sigma (2023) Poor Cell Growth Troubleshooting, Poor cell growth troubleshooting. Available at: https://www.sigmaaldrich.com/CA/en/technical-documents/technical-article/cell-culture-and-cell-culture-analysis/mammalian-cell-culture/poor-cell-growth (Accessed: 11 October 2023).
          <br /><br />Zhang, S. et al. (2020) Dynamics of staphylococcus aureus cas9 in DNA target association and ... Available at: https://www.embopress.org/doi/10.15252/embr.202050184 (Accessed: 11 October 2023). 

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

export default Safety;
