import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { CODE_ES } from 'constants/config'
import { LANGUAGE_LIST } from 'components/languageSelector/languageList'
import { LANGUAGE } from 'constants/localStorage'
import { DEFAULT_LANGUAGE } from 'constants/default'
import PopOver from 'components/popOver'
import PopOverItem from 'components/popOver/popOverItem'

type LanguageSelectorProps = {
  id?: string | undefined
  open: boolean
  anchorEl: any
  setAnchorEl: (anchorEl: any) => void
}

const LanguageSelector: FC<LanguageSelectorProps> = ({
  id,
  open,
  anchorEl,
  setAnchorEl
}) => {
  const { i18n } = useTranslation()

  const handleCloseLanguageList = () => {
    setAnchorEl(null)
  }

  const handleChangeLanguage = (newCode: string) => () => {
    handleCloseLanguageList()
    i18n.changeLanguage(newCode)
    newCode === DEFAULT_LANGUAGE
      ? window.localStorage.removeItem(LANGUAGE)
      : window.localStorage.setItem(LANGUAGE, newCode)
  }

  const currentLanguage: string = i18n.language || window.localStorage[LANGUAGE]

  return (
    <PopOver
      id={id}
      open={open}
      anchorEl={anchorEl}
      close={handleCloseLanguageList}>
      {LANGUAGE_LIST.map((item: any) => (
        <PopOverItem
          key={item.code}
          stylename="lng"
          current={currentLanguage ?? CODE_ES}
          click={handleChangeLanguage}
          {...item}
        />
      ))}
    </PopOver>
  )
}

export default LanguageSelector
