import { useContext } from 'react'
import { SESSION } from 'constants/localStorage'
import createGuestSession from 'services/createGuestSession'
import UserContext from 'contexts/userContext'
import UserParams from 'models/userModel'

const useUser = () => {
  const { user, setUser }: any = useContext(UserContext)

  //? Mejorar el objeto guardando un parametro custom mas
  const createSession = () => {
    const successResponse = (session: UserParams) => {
      const newUser = JSON.stringify({ ...user, ...session })

      window.localStorage.setItem(SESSION, newUser)
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
