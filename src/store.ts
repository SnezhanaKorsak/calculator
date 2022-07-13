import { configureStore } from '@reduxjs/toolkit';

import { historyReducer } from 'reducers/historyReducer';
import { themeReducer } from 'reducers/themeReducer';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    theme: themeReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
