import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledControlPanel = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.background.secondary};
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  border-radius: ${commonTheme.borderRadius[0]}px;
`;

export const ButtonStyle = styled.button`
  width: ${commonTheme.spaces[3]}px;
  height: ${commonTheme.spaces[5]}px;
  background: transparent;
  border: none;
  outline: none;
  text-align: center;
  font-size: ${commonTheme.fontSizes[5]}px;
  line-height: ${commonTheme.spaces[13]}px;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`;
