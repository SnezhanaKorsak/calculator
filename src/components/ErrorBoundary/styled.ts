import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledErrorMessage = styled.div`
  width: ${commonTheme.spaces[15]}px;
  height: ${commonTheme.spaces[9]}px;
  background: ${commonTheme.colors.white};
  border: ${commonTheme.spaces[1]}px double ${commonTheme.colors.error};
  border-radius: ${commonTheme.borderRadius[1]}px;
  padding: ${commonTheme.spaces[2]}px;
  text-align: center;
  font-size: ${commonTheme.fontSizes[3]}px;
`;
