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
`;

export const StyledDisplayHistory = styled.div`
  height: 15px;
  font-size: 14px;
  margin: 5px;
`;

export const StyledDisplayResult = styled.input`
  background: transparent;

  border: none;
  outline: none;

  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: right;
`;
