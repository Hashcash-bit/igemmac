import React from 'react';

import MiniLogo from '../../../Img/mgemlogo.png';
import { Image, Logo, TopBarContainer } from './TopBarStyles';

export default function TopBar() {
  return (
    <>
      <TopBarContainer>
        <Logo>
          <Image src={MiniLogo} alt="Logo" />
        </Logo>
      </TopBarContainer>
    </>
  );
}
