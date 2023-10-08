import React from 'react';

export default function Title() {
  return (
    <div
      style={{
        height: '100dvh',
        backgroundImage: "require('../../../Img/EngineeringImage.png')",
        objectFit: 'cover',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '100px',
        fontWeight: 'bold',
        color: '#971A35',
      }}
    >
      Engineering
    </div>
  );
}
