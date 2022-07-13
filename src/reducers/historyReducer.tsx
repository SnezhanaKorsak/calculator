import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    setHistory: (state, action: PayloadAction<HistoryItem>) => {
      state.historyList.push(action.payload);
      localStorage.setItem('history', JSON.stringify(state.historyList));
    },
    clearAllHistory: (state) => {
      state.historyList = [];
      localStorage.clear();
    },
  },
});

export const historyReducer = historySlice.reducer;

export const { setHistory, clearAllHistory } = historySlice.actions;
