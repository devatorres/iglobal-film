import { createContext, useState } from 'react'
import { ContextProviderProps } from 'contexts/globalTypes'
import { SESSION } from 'constants/localStorage'
import UserParams from 'models/userModel'

interface UserContextInterface {
  user: UserParams | undefined
  setUser: (user: UserParams) => void
}

const initialState = (): UserParams | undefined => {
  const session = window.localStorage[SESSION]
  return session ? JSON.parse(session) : undefined
}

const UserContext = createContext<UserContextInterface | undefined>(undefined)

export const UserContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState(initialState())

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
