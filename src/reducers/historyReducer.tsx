import { createSlice } from '@reduxjs/toolkit';

import { HistoryItem } from 'components/history/types';

const historyListLS = localStorage.getItem('history');

const historyList: HistoryItem[] = historyListLS ? JSON.parse(historyListLS) : [];

const initialState = {
  historyList,
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    clearAllHistory: (state) => {
      state.historyList = [];
      localStorage.clear();
    },
  },
});

export const historyReducer = historySlice.reducer;

export const { clearAllHistory } = historySlice.actions;
