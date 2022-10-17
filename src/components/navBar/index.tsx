import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { LANGUAGE } from 'constants/localStorage'
import { DEFAULT_LANGUAGE } from 'constants/default'
import { MY_LIST_LINK } from 'constants/router'
import { CODE_ES, CODE_EN } from 'constants/config'
import { DARK, LIGHT, SYSTEM } from 'constants/theme'
import useTheme from 'hooks/useTheme'
import useUser from 'hooks/useUser'
import './styles.css'

const NavBar: FC = () => {
  const { i18n, t } = useTranslation()
  const { changeTheme } = useTheme()
  const { user, createGuestSession } = useUser()
  const navigate = useNavigate()

  const handleChangeLanguage = (newCode: string) => () => {
    i18n.changeLanguage(newCode)
    newCode === DEFAULT_LANGUAGE
      ? window.localStorage.removeItem(LANGUAGE)
      : window.localStorage.setItem(LANGUAGE, newCode)
  }

  const handleGoMyList = () => {
    navigate(MY_LIST_LINK)
  }

  const handleCreateGuestSession = () => {
    createGuestSession()
  }

  return (
    <div>
      <button onClick={handleChangeLanguage(CODE_ES)}>{t('ess')}</button>
      <button onClick={handleChangeLanguage(CODE_EN)}>{t('enn')}</button>
      <br />
      <button onClick={changeTheme(LIGHT)}>Light</button>
      <button onClick={changeTheme(DARK)}>Dark</button>
      <button onClick={changeTheme(SYSTEM)}>System</button>
      <br />
      {user ? (
        <button onClick={handleGoMyList}>
          Ir a mi lista de películas votadas
        </button>
      ) : (
        <button onClick={handleCreateGuestSession}>
          Iniciar una sesión de invitado
        </button>
      )}
    </div>
  )
}

export default NavBar
