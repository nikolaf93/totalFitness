import { createSlice } from '@reduxjs/toolkit';

interface GlobalState {
  isDarkMode: boolean;
}

const initialState: GlobalState = {
  isDarkMode: false,
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = slice.actions;
export default slice.reducer; 