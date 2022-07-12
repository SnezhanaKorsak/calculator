import { configureStore } from '@reduxjs/toolkit';

import { historyReducer } from 'reducers/historyReducer';

export const store = configureStore({
  reducer: {
    history: historyReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
