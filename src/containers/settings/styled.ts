import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledSettings = styled.div`
  width: ${commonTheme.spaces[9]}%;
  display: flex;
  flex-direction: column;
  padding: ${commonTheme.spaces[3]}px;
`;

export const ButtonClear = styled.button`
  width: ${commonTheme.spaces[10]}px;
  height: ${commonTheme.spaces[6]}px;
  margin: ${commonTheme.spaces[4]}px ${commonTheme.spaces[0]}px;
  padding: ${commonTheme.spaces[2]}px ${commonTheme.spaces[1]}px;
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  border-radius: ${commonTheme.borderRadius[0]}px;
  outline: none;
  text-align: left;
  font-size: ${commonTheme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.background.accent};
  }
`;
