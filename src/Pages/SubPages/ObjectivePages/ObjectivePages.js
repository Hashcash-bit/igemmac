//Default react imports
import React, { useRef } from 'react';

// The Styled component imports
import { PictureArea } from './ObjectivePagesStyled';

// The Component imports
import Background from './Component/SubPages/Background/Background';
import SubNavbar from '../Components/SubNavbar/SubNavbar';

// import Link and element from react scroll
import { Link, Element } from 'react-scroll';

// The image imports
import Objective from './Component/Objective/Objective';
import Chassis from './Component/ChassisSelection/Chassis';
import Butyrate from './Component/Biomarkers/Butyrate/Butyrate';
import Indole from './Component/Biomarkers/Indole/Indole';
import HydrogenPeroxide from './Component/Biomarkers/HydrogenPeroxide/HydrogenPeroxide';
import Tetrahydrofolate from './Component/Biomarkers/Tetrahydrofolate/Tetrahydrofolate';
import Tetrathionate from './Component/Biomarkers/Tetrathionate/Tetrathionate';
import Title from './Component/SubPages/Title/Title';
import Pages from './Component/SubPages/Objective/Pages';

export default function ObjectivePages() {
  const objectiveRef = useRef(null);
  const butyrateRef = useRef(null);
  const indoleRef = useRef(null);
  const hydrogenPeroxideRef = useRef(null);
  const tetrahydrofolateRef = useRef(null);
  const tetrathionateRef = useRef(null);

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  return (
    <div
      style={{
        overflowX: 'hidden',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        // gap: '100px',
        height: '100%',
      }}
    >
      <SubNavbar />
      <Title />
      <Background />
      <Pages />
      <Chassis />
      <div ref={butyrateRef}>
        <Butyrate scrollToRef={scrollToRef} objectiveRef={objectiveRef} />
      </div>
      <div ref={indoleRef}>
        <Indole scrollToRef={scrollToRef} objectiveRef={objectiveRef} />
      </div>
      <div ref={hydrogenPeroxideRef}>
        <HydrogenPeroxide
          scrollToRef={scrollToRef}
          objectiveRef={objectiveRef}
        />
      </div>
      <div ref={tetrahydrofolateRef}>
        <Tetrahydrofolate
          scrollToRef={scrollToRef}
          objectiveRef={objectiveRef}
        />
      </div>
      <div ref={tetrathionateRef}>
        <Tetrathionate scrollToRef={scrollToRef} objectiveRef={objectiveRef} />
      </div>
    </div>
  );
}
