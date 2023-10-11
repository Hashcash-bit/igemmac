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
import Design1 from './Design1/Design1';
import Build1 from './Build1/Build1';
import Test1 from './Test1/Test1';
import Design2 from './Design2/Design2';
import Build2 from './Build2/Build2';

export default function Pages() {
  return (
    <div>
      <Title />
      <DesignChange />
      <Design1 />
      <Build1 />
      <Test1 />
      <Design2 />
      <BuildSystem />
      <Build2 />
      <Test />
      <Learn />
      <Button />
    </div>
  );
}
