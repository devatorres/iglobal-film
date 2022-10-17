import { API_KEY, API_URL } from 'constants/dbApi'

type GetRatedMoviesProps = {
  language?: string
  signal: AbortSignal
  guestSession: string
}

const getRatedMovies = async ({
  language = undefined,
  signal,
  guestSession
}: GetRatedMoviesProps) => {
  const url: string = !language
    ? `${API_URL}/guest_session/${guestSession}/rated/movies?api_key=${API_KEY}`
    : `${API_URL}/guest_session/${guestSession}/rated/movies?api_key=${API_KEY}&language=${language}`

  const response = await fetch(url, { signal })
  return await response.json()
}

export default getRatedMovies
