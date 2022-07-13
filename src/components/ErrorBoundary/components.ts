import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
  width: 650px;
  height: 100px;

  background: ${({ theme }) => theme.colors.white};

  border: 6px double red;
  border-radius: 5px;

  padding: 10px;

  text-align: center;
  font-size: 20px;

  .display-history {
    height: 15px;

`;
