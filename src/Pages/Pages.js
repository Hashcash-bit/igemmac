import React from 'react';

// The External Components
import TopSection from './Components/TopSection/TopSection';
import { Entireelement, InternalComponents } from './PagesStyles';
import Navbar from './Components/TopSection/Navbar';
import Slider from './Components/InfoSlider/Slider';
import Gallery from './Components/OurTeam/Gallery';
import Methodology from './Components/Methodology/Methodology';
import Footer from './Components/Footer/Footer';
import LearnMore from './Components/LearnMore/LearnMore';

export default function Pages() {
  return (
    <>
      <Entireelement>
        <InternalComponents>
          <Navbar />
          <TopSection />
          <Slider />
          <Methodology />
          <Gallery />
          <LearnMore />
          <Footer />
        </InternalComponents>
      </Entireelement>
    </>
  );
}
