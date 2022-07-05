import styled from 'styled-components';

export const StyledKeyPad = styled.div`
  width: 100%;
  height: 306px;

  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;

  margin-top: 10px;
`;
