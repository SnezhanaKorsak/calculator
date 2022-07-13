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

  background-color: ${({ theme }) => theme.background.secondary};

  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  outline: none;

  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.background.accent};
  }
`;
