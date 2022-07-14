import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavLink, StyledNavigation } from 'components/navigation/components';

import {
  HOME_CC_PAGE_ROUTE,
  HOME_FC_PAGE_ROUTE,
  SETTINGS_CC_PAGE_ROUTE,
  SETTINGS_FC_PAGE_ROUTE,
} from 'constants/router';

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <StyledNavigation>
      <NavLink to={HOME_FC_PAGE_ROUTE} isActive={path === HOME_FC_PAGE_ROUTE}>
        HomeFC
      </NavLink>
      <NavLink to={HOME_CC_PAGE_ROUTE} isActive={path === HOME_CC_PAGE_ROUTE}>
        HomeCC
      </NavLink>
      <NavLink to={SETTINGS_FC_PAGE_ROUTE} isActive={path === SETTINGS_FC_PAGE_ROUTE}>
        SettingsFC
      </NavLink>
      <NavLink to={SETTINGS_CC_PAGE_ROUTE} isActive={path === SETTINGS_CC_PAGE_ROUTE}>
        SettingsCC
      </NavLink>
    </StyledNavigation>
  );
}

export default Navigation;
