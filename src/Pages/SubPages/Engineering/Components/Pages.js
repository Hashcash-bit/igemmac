import React from 'react';
import Title from './Title/Title';
import DesignChange from './DesignChange/DesignChange';
import BuildSystem from './BuildSystem/BuildSystem';
import Butyrate from './Metabolites/Butyrate/Butyrate';
import Indole from './Metabolites/Indole/Indole';
import H2O2 from './Metabolites/H2O2/H2O2';
import Tetrahydrofolate from './Metabolites/Tetrahydrofolate/Tetrahydrofolate';
import Tetrathionate from './Metabolites/Tetrathionate/Tetrathionate';
import Test from './Test/Test';
import Learn from './Learn/Learn';
import Button from './Button/Button';

export default function Pages() {
  return (
    <div>
      <Title />
      <DesignChange />
      <BuildSystem />
      <Butyrate />
      <Indole />
      <H2O2 />
      <Tetrahydrofolate />
      <Tetrathionate />
      <Test />
      <Learn />
      <Button />
    </div>
  );
}
