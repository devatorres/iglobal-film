import { createContext, useEffect, useReducer } from 'react'
import { THEME } from 'constants/localStorage'
import { ContextProviderProps } from 'contexts/globalTypes'

type State = { theme: 'light' | 'dark' | 'system' }
type Actions = { type: string }

interface Reducers {
  light: (state: State) => State
  dark: (state: State) => State
  system: (state: State) => State
}

interface ThemeContextInterface {
  changeTheme: (theme: string) => void
}

const ACTIONS_REDUCERS: Reducers = {
  light: (state: State) => {
    window.localStorage.setItem(THEME, 'light')
    window.document.documentElement.setAttribute('data-theme', 'light')
    return state
  },
  dark: (state: State) => {
    window.localStorage.removeItem(THEME)
    window.document.documentElement.setAttribute('data-theme', 'dark')
    return state
  },
  system: (state: State) => {
    window.localStorage.setItem(THEME, 'system')
    window.document.documentElement.setAttribute('data-theme', 'system')
    return state
  }
}

const reducer = (state: State, action: Actions) => {
  const actionReducer = ACTIONS_REDUCERS[action.type as keyof Reducers]
  return actionReducer ? actionReducer(state) : state
}

const initialState = () => {
  const theme = window.localStorage[THEME]
  return Boolean(theme) ? { theme } : { theme: 'dark' }
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined)

export const ThemeContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState())

  useEffect(() => {
    if (state.theme !== 'dark') {
      window.document.documentElement.setAttribute('data-theme', state.theme)
    }
  }, [state])

  const changeTheme = (theme: string) => (): void => {
    dispatch({ type: theme })
  }

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
