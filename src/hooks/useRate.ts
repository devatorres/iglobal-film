import { useState } from 'react'
import { DEFAULT_RATE } from 'constants/default'
import rateMovie from 'services/rateMovie'
import useUser from './useUser'

const labels: any = {
  0.5: 1,
  1: 2,
  1.5: 3,
  2: 4,
  2.5: 5,
  3: 6,
  3.5: 7,
  4: 8,
  4.5: 9,
  5: 10
}

const useRate = ({ movieId }: { movieId: number }) => {
  const [value, setValue] = useState(DEFAULT_RATE)
  const { user } = useUser()

  const ratedMovie = () => {
    const errorResponse = (error: Error): void => {
      //! Se puede añadir los avisos de error que sean necesarios
    }

    return rateMovie({
      movieId,
      value: labels[value],
      guestSession: user.guest_session_id
    }).catch(errorResponse)
  }

  return {
    value,
    setValue,
    rateMovie: ratedMovie
  } as const
}

export default useRate
