import styled from 'styled-components';
import commonTheme from 'theme';

export const SubTitle = styled.div`
  margin: ${commonTheme.spaces[2]}px ${commonTheme.spaces[0]}px;
  font-size: ${commonTheme.fontSizes[1]}px;
`;

export const StyledSelect = styled.select`
  width: ${commonTheme.spaces[10]}px;
  border-radius: ${commonTheme.borderRadius[0]}px;
  outline: none;
  padding: ${commonTheme.spaces[2]}px ${commonTheme.spaces[1]}px;
  font-size: ${commonTheme.fontSizes[1]}px;
  cursor: pointer;
`;
