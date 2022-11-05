import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { ThemeContextProvider } from 'contexts/themeContext'
import { UserContextProvider } from 'contexts/userContext'
import { BrowserRouter } from 'react-router-dom'
import i18n from 'utils/i18n'
import App from 'App'
import pjson from '../package.json'
import './assets/styles/index.css'

console.log(
  `\n%c  %c\n\n%ciGlobal Film\n%c${pjson.version}`,
  'background: linear-gradient(124.21deg, #e67f19 0%, #1980e6 55.06%, #0a1929 89.11%);border-radius: 6px;',
  'background: none;',
  'color: #888; font-size: 20px;',
  'color: #666; font-size: 15px;'
)

const root = createRoot(window.document.getElementById('root') as HTMLElement)

//? Estos Context tienen que ser accesibles en toda la app
root.render(
  <I18nextProvider i18n={i18n}>
    <UserContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </UserContextProvider>
  </I18nextProvider>
)
