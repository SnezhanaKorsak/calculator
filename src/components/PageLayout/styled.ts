import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledPageLayout = styled.div`
  width: ${commonTheme.spaces[9]}vw;
  height: ${commonTheme.spaces[9]}vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Card = styled.div`
  width: ${commonTheme.spaces[16]}px;
  height: ${commonTheme.spaces[14]}px;
  flex-grow: 0.2;
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
  border: 6px double;
  border-color: ${({ theme }) => theme.mainBorderColor};
`;
