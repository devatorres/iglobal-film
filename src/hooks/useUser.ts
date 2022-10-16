import { useContext } from 'react'
import { SESSION } from 'constants/localStorage'
import createGuestSession from 'services/createGuestSession'
import deleteGuestSession from 'services/deleteGuestSession'
import UserContext from 'contexts/userContext'

const useUser = () => {
  const { user, setUser }: any = useContext(UserContext)

  const createSession = (): void => {
    const successResponse = (session: any): void => {
      window.localStorage.setItem(SESSION, JSON.stringify(session))
      setUser(session)
    }

    const errorResponse = (error: Error): void => {
      //Todo
    }

    const fetchData = async () => createGuestSession()
    fetchData().then(successResponse).catch(errorResponse)
  }

  const deleteSession = (): void => {
    const successResponse = (): void => {
      window.localStorage.removeItem(SESSION)
      setUser(undefined)
    }

    const errorResponse = (error: Error): void => {
      //Todo
    }

    const fetchData = async () => deleteGuestSession()
    fetchData().then(successResponse).catch(errorResponse)
  }

  return {
    user,
    createGuestSession: createSession,
    deleteGuestSession: deleteSession
  } as const
}

export default useUser
