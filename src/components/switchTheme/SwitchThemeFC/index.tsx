import React, { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { changeTheme } from 'reducers/themeReducer';

import { StyledSelect, SubTitle } from 'components/switchTheme/styled';

const SwitchThemeFC = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.theme);

  const changeThemeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeTheme(event.currentTarget.value));
  };

  return (
    <>
      <SubTitle>Switch Theme</SubTitle>
      <StyledSelect value={currentTheme} onChange={changeThemeHandler}>
        <option value="colored">Colored theme</option>
        <option value="light">Light theme</option>
        <option value="dark">Dark theme</option>
      </StyledSelect>
    </>
  );
};

export default SwitchThemeFC;
