import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from 'App'
import './assets/styles/index.css'

const root = createRoot(window.document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
