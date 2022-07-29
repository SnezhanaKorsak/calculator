import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledHistory = styled.div<{ visible: boolean }>`
  width: ${commonTheme.spaces[9]}%;
  height: ${commonTheme.spaces[9]}%;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  overflow-y: scroll;
  margin-right: ${commonTheme.spaces[3]}px;
  padding: ${commonTheme.spaces[0]}px ${commonTheme.spaces[2]}px;
  font-size: ${commonTheme.fontSizes[1]}px;

  &::-webkit-scrollbar-thumb {
    border-radius: ${commonTheme.spaces[2]}px;
    background-color: ${({ theme }) => theme.background.accent};
  }
  &::-webkit-scrollbar {
    width: ${commonTheme.spaces[1]}px;
    background-color: ${({ theme }) => theme.background.primary};
  }
`;

export const Title = styled.h3`
  margin: ${commonTheme.spaces[0]}px -${commonTheme.spaces[2]}px ${commonTheme.spaces[2]}px ${commonTheme.spaces[0]}px;
  padding-right: ${commonTheme.spaces[0]}px;
  text-align: center;
`;
