import React from 'react';

import Navigation from 'components/navigation';

import { StyledHeader } from 'components/Header/components';

function Header() {
  return (
    <StyledHeader>
      <div>Calculator App</div>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
