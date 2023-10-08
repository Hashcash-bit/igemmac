import React from 'react';

//Background Image
import EngineeringImage from '../../../Img/EngineeringImage.png';

export default function Title() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(' +
          EngineeringImage +
          ')',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
