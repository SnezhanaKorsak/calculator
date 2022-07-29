import { coloredTheme, darkTheme, lightTheme } from 'theme';

export const getSelectedTheme = (theme: string) => {
  switch (theme) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return coloredTheme;
  }
};
