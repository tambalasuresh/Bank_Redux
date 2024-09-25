import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apislice';

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
