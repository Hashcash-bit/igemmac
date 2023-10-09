import React from 'react';

//Background Image
// import EngineeringImage from '../../../Img/EngineeringImage.png';

export default function Title() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://media.canva.com/1/image-resize/1/600_800_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hRFRnMC9NQUZ2ckJhRFRnMC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAEm4oxK1keVzLsFvIb5m4SKJG2C5LHyDg5AlqTW6Jh9U&exp=1696892715&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAIO2lDQ0yY4Uncjnx64FjY9OUjCrTiigUrs4NS_8lWN1)',
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
      Parts | Notebook
    </div>
  );
}
