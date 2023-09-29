import ContextsProvider from '@contexts/ContextsProviver'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from '@components/Root'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextsProvider>
      <Root>
        <App />
      </Root>
    </ContextsProvider>
  </React.StrictMode>,
)
