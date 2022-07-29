import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledHeader = styled.div`
  width: ${commonTheme.spaces[9]}%;
  height: ${commonTheme.spaces[6]}px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: ${commonTheme.spaces[2]}px;
  line-height: ${commonTheme.spaces[5]}px;
`;
