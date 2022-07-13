import styled from 'styled-components';

export const StyledSettings = styled.div`
  width: 100%;
  height: 388px;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;

export const ButtonClear = styled.button`
  width: 250px;
  height: 40px;

  margin: 20px 0;
  padding: 10px 5px;

  background-color: ${({ theme }) => theme.colors.blue};

  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  outline: none;

  text-align: left;
  font-size: 14px;

  cursor: pointer;
`;
