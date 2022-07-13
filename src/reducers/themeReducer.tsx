import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const themeLS = localStorage.getItem('theme');
const theme = themeLS ? JSON.parse(themeLS) : 'coloredTheme';

const initialState = {
  currentTheme: theme || 'coloredTheme',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', JSON.stringify(action.payload));
    },
  },
});

export const themeReducer = themeSlice.reducer;

export const { changeTheme } = themeSlice.actions;
