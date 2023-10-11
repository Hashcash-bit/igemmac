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

const NormModel = () => {
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
        <img src='https://static.igem.wiki/teams/4751/wiki/normtitle.png' alt="kinetic model title" />
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
          Based on exploratory analysis, the relationship between 4-HPA concentrations and base-editing at each of the two locations can be defined by:
          <br /><br />
          <i>Ratio1 = B1 * sqrt([4HPA]) + a1</i> (1) <br /><br />
          <i>Ratio2 = B2 * log([4HPA]) + a2</i> (2) <br /><br />

          Hence, to nullify the relationship between 4-HPA and ratio 2, both sides are divided by the right-hand side of equation 2:<br /><br />

          <i>Ratio2 / (B2 * log[4HPA] + a2 ) = 1</i> (3) <br /><br />

          Substituting from equation 1:<br /><br />

          <i>Normalized ratio = Ratio2 / (B2 * log((Ratio1 - a1)/B1)^2 + a2 )</i> (4) <br /><br />

          Given the logistic relationship between the normalized ratio and indole concentrations (Figure 1), the prediction was linearized using:<br /><br />

          <i>Predicted = exp((Normalized ratio - B3)/a3)</i> (5) <br /><br />

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
          Linear regression showed that this model achieves a strong, linear relationship between the actual and predicted indole concentration when varying indole levels (Figure 2C: R2 = 0.991, p = 1.325x10-9). Furthermore, this model successfully removes the confounding effect of 4-HPA: when indole was held constant and 4-HPA was increased, a logarithmic increase in base-editing at the indole site (Figure 3B) was normalized such that a linear regression model demonstrated no significant relationship between 4-HPA and predicted indole levels (Figure 2D: p = 0.148). 
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
          This normalization model assumes that the duration for which recording takes place is the same between two measurements. However, depending on various conditions, objects may take 8-15 hours to travel through the large intestine (Tobias and Sadiq, 2023). Given that base editing is sensitive to both the duration and amplitude of a stimulus (Kinetic Model Figure 4-5), comparisons between base editing ratios would be invalid if the biosensor takes a significantly different amount of time to pass through the large intestine between two measurements; it is confounded by differences in recording duration. The base editing ratio of the 4-HPA-associated recording site alone provides an insufficient baseline to control for both recording time and 4-HPA concentration as the two confounders have unrelated effects on base editing: increasing 4-HPA concentrations leads to a logarithmic increase in metabolite-associated base editing (Figure 2B), while increasing time leads to an exponential increase (Kinetic Model Figure 5). As such, the relative metabolite concentrations inferred from base editing through this current model will only be valid for comparisons between two measurements with the same recording duration.
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
          Tobias, A., and Sadiq, N. M. (2023). “Physiology, Gastrointestinal Nervous Control,” in StatPearls (Treasure Island (FL): StatPearls Publishing). Available at: http://www.ncbi.nlm.nih.gov/books/NBK545268/ [Accessed August 1, 2023].
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
          src='https://static.igem.wiki/teams/4751/wiki/normalization-model-figures-and-tables.pdf'
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
      <Footer />
    </MainDiv>
  );
};

export default NormModel;
