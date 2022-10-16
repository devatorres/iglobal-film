import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { LANGUAGE } from 'constants/localStorage'
import useTheme from 'hooks/useTheme'
import useUser from 'hooks/useUser'
import './styles.css'

const NavBar: FC = () => {
  const { i18n, t } = useTranslation()
  const { changeTheme } = useTheme()
  const { user, createGuestSession, deleteGuestSession } = useUser()
  const navigate = useNavigate()

  const handleChangeLanguage = (newCode: string) => (): void => {
    i18n.changeLanguage(newCode)
    newCode === 'en'
      ? window.localStorage.setItem(LANGUAGE, newCode)
      : window.localStorage.removeItem(LANGUAGE)
  }

  const handleGoMyList = (): void => {
    navigate('mylist/rated')
  }

  const handleCreateGuestSession = (): void => {
    createGuestSession()
  }

  const handleDeleteGuestSession = (): void => {
    deleteGuestSession()
  }

  return (
    <div>
      <button onClick={handleChangeLanguage('es')}>{t('ess')}</button>
      <button onClick={handleChangeLanguage('en')}>{t('enn')}</button>
      <br />
      <button onClick={changeTheme('light')}>Light</button>
      <button onClick={changeTheme('dark')}>Dark</button>
      <button onClick={changeTheme('system')}>System</button>
      <br />
      {user ? (
        <>
          <button onClick={handleGoMyList}>
            Ir a mi lista de películas votadas
          </button>
          <button onClick={handleDeleteGuestSession}>Eliminar sesión</button>
        </>
      ) : (
        <button onClick={handleCreateGuestSession}>
          Iniciar una sesión de invitado
        </button>
      )}
    </div>
  )
}

export default NavBar
