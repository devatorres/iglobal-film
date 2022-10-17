import { API_KEY, API_URL } from 'constants/dbApi'

type DeleteRatedMovieProps = {
  movieId: number
  guestSession: string
}

const deleteRatedMovie = async ({
  movieId,
  guestSession
}: DeleteRatedMovieProps) => {
  const url: string = `${API_URL}/movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSession}`

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  return await response.json()
}

export default deleteRatedMovie
