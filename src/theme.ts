const font = 'Orbitron, sans-serif';

// Color palette
const black = '#000000';
const white = '#ffffff';
const lightBlue = '#d9e4f1';
const steelBlue = '#b3c7de';
const darkBlue = '#759ac6';
const lightGray = '#e8e8e8';
const gray = '#8f908c';
const darkGray = '#272739';
const dark = '#121212';
const aquamarine = '#64ffda';
const borderColor = '#a8aaac';
const error = '#e25837';

const boxShadows = [
  '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  '0 3px 7px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22)',
];

const gradientLight = 'linear-gradient(180deg, #e5effa,#f5f9fd,#ffffff)';
const gradientDark = 'linear-gradient(0deg, #000000 0%, #414141 54%)';

export default {
  font,
  boxShadows,
  gradientColor: gradientLight,
  colors: {
    white,
    lightBlue,
    darkBlue,
    borderColor,
    aquamarine,
    error,
  },
  spaces: [0, 5, 10, 15, 25, 30, 50, 60, 90, 100, 250, 306, 350, 366, 450, 650, 550],
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 40],
  borderRadius: [5, 10],
};

export const coloredTheme = {
  background: {
    primary: lightBlue,
    secondary: darkBlue,
    accent: aquamarine,
    gradient: gradientLight,
  },
  colors: {
    primary: black,
    secondary: darkBlue,
    accent: aquamarine,
  },
  mainBorderColor: steelBlue,
  font,
  boxShadows,
  borderColor,
};

export const lightTheme = {
  ...coloredTheme,
  background: {
    primary: lightGray,
    secondary: gray,
    accent: aquamarine,
    gradient: gradientLight,
  },
  colors: {
    primary: black,
    secondary: darkBlue,
    accent: aquamarine,
  },
  mainBorderColor: gray,
};

export const darkTheme = {
  ...coloredTheme,
  background: {
    primary: dark,
    secondary: darkGray,
    accent: aquamarine,
    gradient: gradientDark,
  },
  colors: {
    primary: white,
    secondary: darkBlue,
    accent: aquamarine,
  },
  mainBorderColor: gray,
};
