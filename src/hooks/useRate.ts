import { useState } from 'react'
import { DEFAULT_RATE } from 'constants/default'
import rateMovie from 'services/rateMovie'
import useUser from './useUser'

const useRate = ({ movieId }: { movieId: number }) => {
  const [value, setValue] = useState(DEFAULT_RATE)
  const { user } = useUser()

  const ratedMovie = () => {
    if (!user) {
      //Todo añadir aviso
      console.log('debes iniciar sesión')

      return undefined
    }

    const successResponse = (response: any): void => {}

    const errorResponse = (error: Error): void => {}

    rateMovie({ movieId, value, guestSession: user.guest_session_id })
      .then(successResponse)
      .catch(errorResponse)
  }

  return {
    value,
    setValue,
    rateMovie: ratedMovie
  } as const
}

export default useRate
