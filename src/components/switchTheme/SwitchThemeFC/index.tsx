import React from 'react';

import { StyledSelect, SubTitle } from 'components/switchTheme/components';

function SwitchThemeFC() {
  return (
    <>
      <SubTitle>Switch Theme</SubTitle>
      <StyledSelect>
        <option value="light">Light theme</option>
        <option value="colored">Colored theme</option>
        <option value="dark">Dark theme</option>
      </StyledSelect>
    </>
  );
}

export default SwitchThemeFC;
