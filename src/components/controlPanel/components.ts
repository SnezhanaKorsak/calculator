import styled from 'styled-components';

export const StyledControlPanel = styled.div`
  height: 100%;

  background: ${({ theme }) => theme.background.secondary};
  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  border-radius: 5px;
`;

export const ButtonStyle = styled.button`
  width: 16px;
  height: 30px;

  background: transparent;
  border: none;
  outline: none;

  text-align: center;
  font-size: 28px;
  line-height: 366px;

  color: ${({ theme }) => theme.colors.accent};

  cursor: pointer;
`;
