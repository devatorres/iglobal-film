import { useContext } from 'react'
import ThemeContext from 'contexts/themeContext'

const useTheme = () => {
  const { changeTheme }: any = useContext(ThemeContext)

  return { changeTheme } as const
}

export default useTheme
