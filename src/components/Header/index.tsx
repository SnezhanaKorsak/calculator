import React from 'react';

import Navigation from 'components/Navigation';

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
