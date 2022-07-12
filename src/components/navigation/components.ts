import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: black;
  line-height: 30px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:active {
    border-bottom: 1px solid black;
  }
`; */

export const StyledNavigation = styled.div`
  width: 250px;

  display: flex;
  justify-content: space-between;
`;

export const NavLink =
  styled(Link) <
  { isActive: boolean } >
  `
  border-bottom: 2px solid;
  border-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : 'transparent')};
  
  text-decoration: none;
  font-size: 14px;
  color: black;
  line-height: 30px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
