import { useContext } from 'react'
import { SESSION } from '@/constants/localStorage'
import createGuestSession from '@/services/createGuestSession'
import UserContext from '@/contexts/userContext'
import type UserParams from '@/models/userModel'

const useUser = () => {
  const { user, setUser }: any = useContext(UserContext)

  //? Mejorar el objeto guardando un parametro custom mas
  const createSession = async () => {
    const successResponse = (session: UserParams) => {
      const newUser = JSON.stringify({ ...user, ...session })

      window.localStorage.setItem(SESSION, newUser)
      setUser((tempUser: any) => ({ ...tempUser, ...session }))
    }

    const errorResponse = (_error: unknown) => {
      //! Se puede añadir los avisos de error que sean necesarios
    }

    try {
      const session = await createGuestSession()
      return successResponse(session)
    } catch (error) {
      return errorResponse(error)
    }
  }

  return {
    user,
    createGuestSession: createSession,
  } as const
}

export default useUser
