import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { ThemeContextProvider } from 'contexts/themeContext'
import i18n from 'utils/i18n'
import App from 'App'
import './assets/styles/index.css'

const root = createRoot(window.document.getElementById('root') as HTMLElement)

root.render(
  <I18nextProvider i18n={i18n}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </I18nextProvider>
)
