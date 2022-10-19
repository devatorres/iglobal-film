import { useContext } from 'react'
import ThemeContext from 'contexts/themeContext'

const useTheme = () => {
  const { theme, changeTheme }: any = useContext(ThemeContext)

  return { theme, changeTheme } as const
}

export default useTheme
