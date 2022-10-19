import { FC, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { MY_LIST_LINK } from 'constants/router'
import useUser from 'hooks/useUser'
import Logo from 'components/navBar/logo'
import IconButton from 'components/iconButton'
import LanguageSelector from 'components/languageSelector'
import ThemeSelector from 'components/themeSelector'
import GuestSessionModal from 'components/guestSessionModal'
import Notification from 'components/notification'
import LanguageIcon from '@mui/icons-material/Language'
import ThemeIcon from '@mui/icons-material/InvertColors'
import UserIcon from '@mui/icons-material/PersonOutline'
import ListIcon from '@mui/icons-material/MovieCreationOutlined'
import './styles.css'

const NavBar: FC = () => {
  const { t } = useTranslation()
  const { user, createGuestSession } = useUser()
  const [openSessionModal, setOpenSessionModal] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const [anchorLanguage, setAnchorLanguage] = useState(null)
  const [anchorTheme, setAnchorTheme] = useState(null)
  const navigate = useNavigate()
  const openLanguage = Boolean(anchorLanguage)
  const openTheme = Boolean(anchorTheme)
  const idLanguage = openLanguage ? 'btnChangeLanguage' : undefined
  const idTheme = openTheme ? 'btnChangeTheme' : undefined

  const handleGoDashboard = () => {
    navigate('/')
  }

  const handleOpenLanguageList = (event: {
    currentTarget: SetStateAction<null>
  }) => {
    setAnchorLanguage(event.currentTarget)
  }

  const handleOpenThemeList = (event: {
    currentTarget: SetStateAction<null>
  }) => {
    setAnchorTheme(event.currentTarget)
  }

  const handleGoMyList = () => {
    if (!user) {
      setOpenSessionModal(true)
      return undefined
    }

    navigate(MY_LIST_LINK)
  }

  const handleCreateGuestSession = async () => {
    await createGuestSession()
    setOpenNotification(true)
  }

  const handleCloseNotification = () => {
    setOpenNotification(false)
  }

  return (
    <nav className="wrapper-navbar">
      <Logo click={handleGoDashboard} />
      <IconButton
        id={idLanguage}
        title={t('changeLanguage')}
        click={handleOpenLanguageList}>
        <LanguageIcon />
      </IconButton>
      <IconButton
        id={idTheme}
        title={t('changeTheme')}
        click={handleOpenThemeList}>
        <ThemeIcon />
      </IconButton>
      <IconButton click={handleGoMyList} title={t('goMyList')}>
        <ListIcon />
      </IconButton>
      {!user && (
        <IconButton
          click={handleCreateGuestSession}
          title={t('createGuestSession')}>
          <UserIcon />
        </IconButton>
      )}
      <LanguageSelector
        id={idLanguage}
        open={openLanguage}
        anchorEl={anchorLanguage}
        setAnchorEl={setAnchorLanguage}
      />
      <ThemeSelector
        id={idTheme}
        open={openTheme}
        anchorEl={anchorTheme}
        setAnchorEl={setAnchorTheme}
      />
      <GuestSessionModal
        open={openSessionModal}
        setOpen={setOpenSessionModal}
        action={handleCreateGuestSession}
      />
      <Notification
        message={t('notification.sessionCreate')}
        open={openNotification}
        close={handleCloseNotification}
      />
    </nav>
  )
}

export default NavBar
