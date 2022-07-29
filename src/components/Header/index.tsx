import React from 'react';

import Navigation from 'components/navigation';

import { StyledHeader } from 'components/Header/styled';

const Header = () => (
  <StyledHeader>
    <div>Calculator App</div>
    <Navigation />
  </StyledHeader>
);

export default Header;
