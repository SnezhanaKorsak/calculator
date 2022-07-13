import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.background.secondary};

  padding: 10px;

  line-height: 30px;
`;
