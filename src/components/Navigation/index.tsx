import React from 'react';

import { HOME_CC_PAGE_ROUTE, HOME_FC_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from 'constants/router';

import { NavLink, StyledNavigation } from 'components/Navigation/components';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <StyledNavigation>
      <NavLink to={HOME_FC_PAGE_ROUTE} isActive={path === HOME_FC_PAGE_ROUTE}>
        Home_FC
      </NavLink>
      <NavLink to={HOME_CC_PAGE_ROUTE} isActive={path === HOME_CC_PAGE_ROUTE}>
        Home_CC
      </NavLink>
      <NavLink to={SETTINGS_PAGE_ROUTE} isActive={path === SETTINGS_PAGE_ROUTE}>
        Settings
      </NavLink>
    </StyledNavigation>
  );
}

export default Navigation;
