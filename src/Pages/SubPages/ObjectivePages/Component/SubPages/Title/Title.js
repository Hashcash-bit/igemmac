import React from 'react';

export default function Title() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://media.canva.com/1/image-resize/1/600_800_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8tRG8zcy9NQUZ2dnUtRG8zcy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAFban_vUDA2xfVTVq518PDaEscMe8yBP1jxBXioVuCyN&exp=1696974983&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAGfYkn56hQ1Vmz0ob6W8w8bTGxmc-rH0QVpHiLrTKcAX)',
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
      Design
    </div>
  );
}
