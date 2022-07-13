import styled from 'styled-components';

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Card = styled.div`
  width: 550px;
  height: 450px;

  flex-grow: 0.2;

  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  border: 6px double;
  border-color: ${({ theme }) => theme.mainBorderColor};
`;
