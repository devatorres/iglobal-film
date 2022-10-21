import { createContext, useEffect, useReducer } from 'react'
import { THEME } from 'constants/localStorage'
import { LIGHT, DARK, SYSTEM, DATA_THEME } from 'constants/theme'
import { ContextProviderProps } from 'contexts/globalTypes'

type State = { theme: typeof LIGHT | typeof DARK | typeof SYSTEM }
type Actions = { type: string }

interface Reducers {
  light: (state: State) => State
  dark: (state: State) => State
  system: (state: State) => State
}

interface ThemeContextInterface {
  theme: string
  changeTheme: (theme: string) => void
}

const ACTIONS_REDUCERS: Reducers = {
  light: (state: State) => {
    window.localStorage.setItem(THEME, LIGHT)
    window.document.documentElement.setAttribute(DATA_THEME, LIGHT)
    return { ...state, theme: LIGHT }
  },
  dark: (state: State) => {
    window.localStorage.removeItem(THEME)
    window.document.documentElement.setAttribute(DATA_THEME, DARK)
    return { ...state, theme: DARK }
  },
  system: (state: State) => {
    window.localStorage.setItem(THEME, SYSTEM)
    window.document.documentElement.setAttribute(DATA_THEME, SYSTEM)
    return { ...state, theme: SYSTEM }
  }
}

const reducer = (state: State, action: Actions) => {
  const actionReducer = ACTIONS_REDUCERS[action.type as keyof Reducers]
  return actionReducer ? actionReducer(state) : state
}

const initialState = () => {
  const theme = window.localStorage[THEME]
  return Boolean(theme) ? { theme } : { theme: DARK }
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined)

export const ThemeContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState())

  useEffect(() => {
    if (state.theme !== DARK)
      window.document.documentElement.setAttribute(DATA_THEME, state.theme)
  }, [state])

  const changeTheme = (theme: string) => {
    dispatch({ type: theme })
  }

  return (
    <ThemeContext.Provider value={{ theme: state.theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
