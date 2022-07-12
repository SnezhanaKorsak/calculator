import React from 'react';

import Navigation from 'components/navigation';

import { StyledHeader } from 'components/header/components';

function Header() {
  return (
    <StyledHeader>
      <div>Calculator App</div>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
