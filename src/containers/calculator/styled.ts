import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledCalculator = styled.div`
  height: 388px;
  display: flex;
  align-items: center;
  padding: ${commonTheme.spaces[2]}px;

  .main-block {
    width: ${commonTheme.spaces[9]}%;
    height: ${commonTheme.spaces[9]}%;
    margin-right: ${commonTheme.spaces[2]}px;
  }
`;
