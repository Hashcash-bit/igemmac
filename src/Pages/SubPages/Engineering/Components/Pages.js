import React from 'react';
import Title from './Title/Title';
import DesignChange from './DesignChange/DesignChange';
import BuildSystem from './BuildSystem/BuildSystem';
import Metabolites from '../../Metabolites/Metabolites';

export default function Pages() {
  return (
    <div>
      <Title />
      <DesignChange />
      <BuildSystem />
      <Metabolites />
    </div>
  );
}
