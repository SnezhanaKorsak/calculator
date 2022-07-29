import styled from 'styled-components';
import commonTheme from 'theme';

export const StyledKeyPad = styled.div`
  width: ${commonTheme.spaces[9]}%;
  height: ${commonTheme.spaces[11]}px;
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
  margin-top: ${commonTheme.spaces[2]}px;
`;
