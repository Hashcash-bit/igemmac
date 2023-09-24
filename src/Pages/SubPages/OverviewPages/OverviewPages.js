import React from 'react';
import TopSection from './Components/TopSection/TopSection';
import SubNavbar from '../Components/SubNavbar/SubNavbar';

export default function OverviewPages() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dda7a2',
      }}
    >
      <SubNavbar />
      <TopSection />
    </div>
  );
}
