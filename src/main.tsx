import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import {store} from "./store"
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme } from './theme'

function Root() {
  const [isDark, setIsDark] = useState(false)
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Provider store={store}>
        <App isDark={isDark} onToggleTheme={() => setIsDark((v) => !v)} />
      </Provider>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
