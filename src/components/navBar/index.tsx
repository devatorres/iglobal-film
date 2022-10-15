import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'constants/localStorage'
import useTheme from 'hooks/useTheme'
import './styles.css'

const NavBar: FC = () => {
  const { i18n, t } = useTranslation()
  const { changeTheme } = useTheme()

  const changeLanguage = (newCode: string) => (): void => {
    i18n.changeLanguage(newCode)
    newCode === 'en'
      ? window.localStorage.setItem(LANGUAGE, newCode)
      : window.localStorage.removeItem(LANGUAGE)
  }

  return (
    <div>
      <button onClick={changeLanguage('es')}>{t('ess')}</button>
      <button onClick={changeLanguage('en')}>{t('enn')}</button>
      <br />
      <button onClick={changeTheme('light')}>Light</button>
      <button onClick={changeTheme('dark')}>Dark</button>
      <button onClick={changeTheme('system')}>System</button>
    </div>
  )
}

export default NavBar
