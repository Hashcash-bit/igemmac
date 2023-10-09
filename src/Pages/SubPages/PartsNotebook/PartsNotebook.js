import React from 'react';
import Title from './Components/Title/Title';
import Contributions from './Components/Contributions/Contributions';
import Parts from './Components/Parts/Parts';
import Calendar from './Components/Calendar/Calendar';
import Results from './Components/Results/Results';

export default function PartsNotebook() {
  return (
    <div>
      <Title />
      <Contributions />
      <Parts />
      <Calendar />
      <Results />
    </div>
  );
}
