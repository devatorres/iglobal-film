import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from 'App'
import 'services/i18n'
import './assets/styles/index.css'

createRoot(window.document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
