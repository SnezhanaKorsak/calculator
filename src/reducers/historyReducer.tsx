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
    setHistoryToLC: (state, action: PayloadAction<HistoryItem>) => {
      localStorage.setItem('history', JSON.stringify(action.payload.value));
    },
  },
});

export const historyReducer = historySlice.reducer;

// actions
export const { setHistoryToLC } = historySlice.actions;
