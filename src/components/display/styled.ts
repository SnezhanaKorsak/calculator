import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledDisplay = styled.div`
  width: 100%;
  height: ${commonTheme.spaces[7]}px;
  background: ${({ theme }) => theme.background.gradient};
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  border-radius: ${commonTheme.borderRadius[0]}px;
  padding: ${commonTheme.spaces[1]}px ${commonTheme.spaces[2]}px;
  text-align: right;
`;

export const StyledDisplayHistory = styled.div`
  height: ${commonTheme.spaces[3]}px;
  font-size: ${commonTheme.fontSizes[0]}px;
  margin: ${commonTheme.spaces[1]}px;
`;

export const StyledDisplayResult = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: ${commonTheme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: right;
`;
