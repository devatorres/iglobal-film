import { API_KEY, API_URL } from 'constants/dbApi'

type GetMovieProps = {
  movieId: number
  languageToUse: string
  signal: AbortSignal
}

const getMovie = async ({ movieId, languageToUse, signal }: GetMovieProps) => {
  const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=${languageToUse}`

  const response = await fetch(url, { signal })
  return await response.json()
}

export default getMovie
