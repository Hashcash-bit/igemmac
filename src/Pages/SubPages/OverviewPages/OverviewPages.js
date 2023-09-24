import React from 'react';
import TopSection from './Components/TopSection/TopSection';

export default function OverviewPages() {
  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'hidden',
        overflowY: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TopSection />
    </div>
  );
}
