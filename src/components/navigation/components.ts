import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.div`
  width: 350px;

  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled(Link)<{ isActive: boolean }>`
  border-bottom: 2px solid;
  border-color: ${({ isActive, theme }) => (isActive ? theme.colors.accent : 'transparent')};

  text-decoration: none;
  font-size: 14px;
  color: black;
  line-height: 30px;

  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;