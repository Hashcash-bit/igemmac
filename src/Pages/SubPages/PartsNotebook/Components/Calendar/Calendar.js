import React from 'react';
import May from './Components/May/May';
import June from './Components/June/June';
import July from './Components/July/July';
import August from './Components/August/August';
import September from './Components/September/September';

import { Link, Element } from 'react-scroll';

export default function Calendar() {
  return (
    <div
      style={{
        marginBottom: '500px'
      }}
    
    >
      <Element name= "May">
        <May />
      </Element>
      <Element name='June'>
        <June />
      </Element>
      <Element name='July'>
        <July />
      </Element>
      <Element name="August">
        <August />
      </Element>
      <Element name='September'>
        <September />
      </Element>

    </div>
  );
}
