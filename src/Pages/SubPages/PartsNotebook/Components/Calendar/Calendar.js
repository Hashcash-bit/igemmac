import React from 'react';
import May from './Components/May/May';
import June from './Components/June/June';
import July from './Components/July/July';
import August from './Components/August/August';
import September from './Components/September/September';

export default function Calendar() {
  return (
    <div>
      <May />
      <June />
      <July />
      <August />
      <September/>
    </div>
  );
}
