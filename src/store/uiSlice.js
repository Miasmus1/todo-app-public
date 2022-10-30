import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { theme: 'dark', loading: false },
  reducers: {
    toggleTheme(state, action) {
      state.theme = action.payload;
    },
    showSpinner(state, action) {
      state.loading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
