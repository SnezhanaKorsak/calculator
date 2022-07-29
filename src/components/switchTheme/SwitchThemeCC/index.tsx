import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';

import { AppRootState } from 'store';
import { changeTheme } from 'reducers/themeReducer';

import { MapStateProps, SwitchThemeProps } from 'components/switchTheme/types';

import { StyledSelect, SubTitle } from 'components/switchTheme/styled';

class SwitchThemeCC extends React.PureComponent<SwitchThemeProps> {
  render(): React.ReactNode {
    const { theme, changeTheme: changeCurrentTheme } = this.props;

    const changeThemeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      changeCurrentTheme(event.currentTarget.value);
    };

    return (
      <>
        <SubTitle>Switch Theme</SubTitle>
        <StyledSelect value={theme} onChange={changeThemeHandler}>
          <option value="colored">Colored theme</option>
          <option value="light">Light theme</option>
          <option value="dark">Dark theme</option>
        </StyledSelect>
      </>
    );
  }
}

const mapStateToProps = (state: AppRootState): MapStateProps => ({
  theme: state.theme.currentTheme,
});

export default connect(mapStateToProps, { changeTheme })(SwitchThemeCC);
