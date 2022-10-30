import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    ui: uiReducer,
  },
});
