import { API_KEY, API_URL } from 'constants/dbApi'

type GetMoviesProps = {
  languageToUse: string
  signal: AbortSignal
}

const getMovies = async ({ languageToUse, signal }: GetMoviesProps) => {
  const url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=${languageToUse}`

  const response = await fetch(url, { signal })
  return await response.json()
}

export default getMovies
