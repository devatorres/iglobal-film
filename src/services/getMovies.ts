import { API_KEY, API_URL } from 'constants/dbApi'

type GetMoviesProps = {
  languageToUse: string
  signal: AbortSignal
  keyword?: string | null
}

const getMovies = async ({
  languageToUse,
  signal,
  keyword = null
}: GetMoviesProps) => {
  const url =
    keyword === null
      ? `${API_URL}/movie/popular?api_key=${API_KEY}&language=${languageToUse}`
      : `${API_URL}/search/movie?api_key=${API_KEY}&language=${languageToUse}&query=${keyword}`

  const response = await fetch(url, { signal })
  return await response.json()
}

export default getMovies
