import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loadSettings, saveSettings } from './settingsStorage';

interface GlobalState {
  isDarkMode: boolean;
}

const settings = loadSettings();
const initialState: GlobalState = {
  isDarkMode: settings?.theme === 'dark',
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
      saveSettings({ theme: action.payload ? 'dark' : 'light' });
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      saveSettings({ theme: state.isDarkMode ? 'dark' : 'light' });
    },
    resetSettings(state) {
      state.isDarkMode = false;
      saveSettings({ theme: 'light' });
    },
  },
});

export const { setDarkMode, toggleDarkMode, resetSettings } = slice.actions;
export default slice.reducer; 