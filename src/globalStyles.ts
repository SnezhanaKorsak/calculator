import { createGlobalStyle } from 'styled-components';

import commonTheme from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${commonTheme.font};
  }
`;
