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

// media imports
import PrincePhilip from '../Img/philip.jpg';

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
        <img src={PrincePhilip} alt="old hag" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis viverra mi, vitae lacinia sapien ornare sit amet. Aenean ac
            lorem gravida, imperdiet tellus vel, iaculis sem. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Curabitur ultricies pharetra
            turpis. Curabitur nec ligula porta, rutrum nibh quis, euismod massa.
            Aliquam dignissim augue non porta volutpat. Aenean vehicula non
            tortor non sagittis. Nunc euismod quam id erat sodales, vitae
            molestie arcu pellentesque. In feugiat neque in magna blandit
            vulputate. Duis tincidunt tortor sed mi sollicitudin consequat.
            Aliquam vitae augue dui. Pellentesque ac tristique turpis, a
            pulvinar nunc.
          </SectionBodyParagraph>
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={constantsRef}>
        <SectionHeader>Constants</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis viverra mi, vitae lacinia sapien ornare sit amet. Aenean ac
            lorem gravida, imperdiet tellus vel, iaculis sem. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Curabitur ultricies pharetra
            turpis. Curabitur nec ligula porta, rutrum nibh quis, euismod massa.
            Aliquam dignissim augue non porta volutpat. Aenean vehicula non
            tortor non sagittis. Nunc euismod quam id erat sodales, vitae
            molestie arcu pellentesque. In feugiat neque in magna blandit
            vulputate. Duis tincidunt tortor sed mi sollicitudin consequat.
            Aliquam vitae augue dui. Pellentesque ac tristique turpis, a
            pulvinar nunc.
          </SectionBodyParagraph>
        </SectionBody>
        <SectionFooterComponent
          scrollToRef={scrollToRef}
          overviewRef={overviewRef}
        />
      </SectionLayout>

      <SectionLayout ref={modelRef}>
        <SectionHeader>Model</SectionHeader>
        <SectionBody>
          <SectionBodyParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis viverra mi, vitae lacinia sapien ornare sit amet. Aenean ac
            lorem gravida, imperdiet tellus vel, iaculis sem. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Curabitur ultricies pharetra
            turpis. Curabitur nec ligula porta, rutrum nibh quis, euismod massa.
            Aliquam dignissim augue non porta volutpat. Aenean vehicula non
            tortor non sagittis. Nunc euismod quam id erat sodales, vitae
            molestie arcu pellentesque. In feugiat neque in magna blandit
            vulputate. Duis tincidunt tortor sed mi sollicitudin consequat.
            Aliquam vitae augue dui. Pellentesque ac tristique turpis, a
            pulvinar nunc.
          </SectionBodyParagraph>
          <SectionBodyImage src={PrincePhilip} alt="old hag" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis viverra mi, vitae lacinia sapien ornare sit amet. Aenean ac
            lorem gravida, imperdiet tellus vel, iaculis sem. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Curabitur ultricies pharetra
            turpis. Curabitur nec ligula porta, rutrum nibh quis, euismod massa.
            Aliquam dignissim augue non porta volutpat. Aenean vehicula non
            tortor non sagittis. Nunc euismod quam id erat sodales, vitae
            molestie arcu pellentesque. In feugiat neque in magna blandit
            vulputate. Duis tincidunt tortor sed mi sollicitudin consequat.
            Aliquam vitae augue dui. Pellentesque ac tristique turpis, a
            pulvinar nunc.
          </SectionBodyParagraph>
          <SectionBodyImage src={PrincePhilip} alt="old hag" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis viverra mi, vitae lacinia sapien ornare sit amet. Aenean ac
            lorem gravida, imperdiet tellus vel, iaculis sem. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Curabitur ultricies pharetra
            turpis. Curabitur nec ligula porta, rutrum nibh quis, euismod massa.
            Aliquam dignissim augue non porta volutpat. Aenean vehicula non
            tortor non sagittis. Nunc euismod quam id erat sodales, vitae
            molestie arcu pellentesque. In feugiat neque in magna blandit
            vulputate. Duis tincidunt tortor sed mi sollicitudin consequat.
            Aliquam vitae augue dui. Pellentesque ac tristique turpis, a
            pulvinar nunc.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            lobortis viverra mi, vitae lacinia sapien ornare sit amet. Aenean ac
            lorem gravida, imperdiet tellus vel, iaculis sem. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Curabitur ultricies pharetra
            turpis. Curabitur nec ligula porta, rutrum nibh quis, euismod massa.
            Aliquam dignissim augue non porta volutpat. Aenean vehicula non
            tortor non sagittis. Nunc euismod quam id erat sodales, vitae
            molestie arcu pellentesque. In feugiat neque in magna blandit
            vulputate. Duis tincidunt tortor sed mi sollicitudin consequat.
            Aliquam vitae augue dui. Pellentesque ac tristique turpis, a
            pulvinar nunc.
          </SectionBodyParagraph>
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
