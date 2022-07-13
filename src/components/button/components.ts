import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 50px;
  height: 50px;

  background: ${({ theme }) => theme.background.gradient};
  box-shadow: ${({ theme }) => theme.boxShadows[1]};

  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  outline: none;
  border-radius: 10px;

  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.background.accent};
  }
`;

export const ButtonNull = styled(StyledButton)`
  width: 100%;

  grid-column: 1/3;
`;

export const ButtonResult = styled(StyledButton)`
  height: 92%;

  grid-column: 5 / auto;
  grid-row: 4/6;

  background: ${({ theme }) => theme.background.secondary};
`;
