import { API_KEY, API_URL } from 'constants/dbApi'

type DeleteRatedMovieProps = {
  movieId: number
  guestSession: string
}

const deleteRatedMovie = async ({
  movieId,
  guestSession
}: DeleteRatedMovieProps) => {
  const url = `${API_URL}/movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSession}`

  const response = await fetch(url, { method: 'DELETE' })
  return await response.json()
}

export default deleteRatedMovie
