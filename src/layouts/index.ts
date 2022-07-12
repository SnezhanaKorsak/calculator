import styled from 'styled-components';

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  height: 450px;

  flex-grow: 0.35;

  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  border: 6px double #b3c7de;
`;
