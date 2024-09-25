import { configureStore } from '@reduxjs/toolkit';
import authReducer from './apislice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
