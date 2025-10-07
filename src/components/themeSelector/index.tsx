import { type FC } from 'react'
import { THEME_LIST } from '@/components/themeSelector/themeList'
import { DARK } from '@/constants/theme'
import { THEME } from '@/constants/localStorage'
import PopOver from '@/components/popOver'
import PopOverItem from '@/components/popOver/popOverItem'
import useTheme from '@/hooks/useTheme'

type ThemeSelectorProps = {
  id?: string | undefined
  open: boolean
  anchorEl: any
  setAnchorEl: (anchorEl: any) => void
}

const ThemeSelector: FC<ThemeSelectorProps> = ({ id, open, anchorEl, setAnchorEl }) => {
  const { theme, changeTheme } = useTheme()

  const handleCloseThemeList = () => {
    setAnchorEl(null)
  }

  const handleChangeTheme = (code: string) => () => {
    handleCloseThemeList()
    changeTheme(code)
  }

  const currentTheme: string = theme || window.localStorage[THEME]

  return (
    <PopOver id={id} open={open} anchorEl={anchorEl} close={handleCloseThemeList}>
      {THEME_LIST.map((item: any) => (
        <PopOverItem
          key={item.code}
          stylename='theme'
          current={currentTheme ?? DARK}
          click={handleChangeTheme}
          {...item}
        />
      ))}
    </PopOver>
  )
}

export default ThemeSelector
