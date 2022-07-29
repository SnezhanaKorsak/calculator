import { Link } from 'react-router-dom';
import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledNavigation = styled.div`
  width: ${commonTheme.spaces[12]}px;
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled(Link)<{ isActive: boolean }>`
  border-bottom: 2px solid;
  border-color: ${({ isActive, theme }) => (isActive ? theme.colors.accent : 'transparent')};
  text-decoration: none;
  font-size: ${commonTheme.fontSizes[1]}px;
  color: black;
  line-height: ${commonTheme.spaces[5]}px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
