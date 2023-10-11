import React from 'react';
import Title from './Components/Title/Title';
import Contributions from './Components/Contributions/Contributions';
import Parts from './Components/Parts/Parts';
import Calendar from './Components/Calendar/Calendar';
import SubNavbar from '../Components/SubNavbar/SubNavbar';
import Footer from '../../Components/Footer/Footer'
import Protocol from './Components/Protocol/Protocol'


export default function PartsNotebook() {
  return (
    <div>
      <SubNavbar />
      <Title />
      <Contributions />
      <Parts />
      <Protocol />
      <Calendar />
      <Footer />
    </div>
  );
}
