import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import type { RootState } from './store';

function RootWithTheme() {
  const isDark = useSelector((state: RootState) => state.global.isDarkMode);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <App />
    </ThemeProvider>
  );
}

function Root() {
  return (
    <Provider store={store}>
      <RootWithTheme />
    </Provider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

export { RootWithTheme, Root };
