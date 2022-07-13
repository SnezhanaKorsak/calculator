import styled from 'styled-components';

export const StyledDisplay = styled.div`
  width: 100%;
  height: 60px;

  background: ${({ theme }) => theme.background.gradient};

  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  border-radius: 5px;

  padding: 3px 10px;

  text-align: right;
  font-size: 20px;

  .display-history {
    height: 15px;

    font-size: 14px;
    margin: 5px;
  }
`;
