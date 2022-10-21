import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { ThemeContextProvider } from 'contexts/themeContext'
import { UserContextProvider } from 'contexts/userContext'
import { BrowserRouter } from 'react-router-dom'
import i18n from 'utils/i18n'
import App from 'App'
import './assets/styles/index.css'

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
