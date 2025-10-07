import { API_URL } from '@/constants/dbApi'

type RateMovieProps = {
  movieId: number
  value: number
  guestSession: string
}

const rateMovie = async ({ movieId, value, guestSession }: RateMovieProps) => {
  const url: string = `${API_URL}/movie/${movieId}/rating?api_key=${import.meta.env.VITE_API_KEY}&guest_session_id=${guestSession}`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ value }),
  })
  return await response.json()
}

export default rateMovie
