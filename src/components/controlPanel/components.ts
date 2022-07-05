import styled from 'styled-components';

export const StyledControlPanel = styled.div`
  width: 16px;
  height: 100%;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  border-radius: 5px;

  color: ${({ theme }) => theme.colors.blue};

  text-align: center;
  font-size: 28px;
  line-height: 366px;

  &:hover {
    cursor: pointer;
  }
`;

// border: 6px double;
