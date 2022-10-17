import { API_KEY, API_URL } from 'constants/dbApi'

type GetSearchMoviesProps = {
  language: string
  signal: AbortSignal
  page: number
  keyword?: string
}

const getSearchMovies = async ({
  language,
  signal,
  page,
  keyword
}: GetSearchMoviesProps) => {
  const url: string = `${API_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${keyword}&page=${page}`

  const response = await fetch(url, { signal })
  return await response.json()
}

export default getSearchMovies