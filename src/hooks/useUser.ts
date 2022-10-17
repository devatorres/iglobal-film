import { useContext } from 'react'
import { SESSION } from 'constants/localStorage'
import createGuestSession from 'services/createGuestSession'
import UserContext from 'contexts/userContext'
import UserParams from 'models/userModel'

const useUser = () => {
  const { user, setUser }: any = useContext(UserContext)

  //? Preparo el objeto User para guardar un parametro custom mas
  const createSession = () => {
    const successResponse = (session: UserParams) => {
      window.localStorage.setItem(
        SESSION,
        JSON.stringify({ ...user, ...session })
      )
      setUser((tempUser: any) => ({ ...tempUser, ...session }))
    }

    const errorResponse = (error: Error) => {}

    createGuestSession().then(successResponse).catch(errorResponse)
  }

  return {
    user,
    createGuestSession: createSession
  } as const
}

export default useUser
