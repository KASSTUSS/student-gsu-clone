import { ThemeProvider } from '@contexts/ThemeContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from '@components/Root'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Root>
        <App />
      </Root>
    </ThemeProvider>
  </React.StrictMode>,
)
