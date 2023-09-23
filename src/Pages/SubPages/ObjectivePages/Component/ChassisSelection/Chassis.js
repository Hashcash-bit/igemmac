import React from 'react';

import TopBar from '../TopBar/TopBar';

import { TopSection, Image, Title, BottomSection } from './ChassisStyles';

export default function Chassis() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
      }}
    >
      <TopBar />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '150px' }}>
        <TopSection>
          <Title>Chassis Selection</Title>
        </TopSection>
        <BottomSection>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Escherichia_coli_by_togopic.png"
            alt="Chassis"
          />
        </BottomSection>
      </div>
    </div>
  );
}
