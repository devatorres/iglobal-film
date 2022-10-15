import { API_KEY, API_URL } from 'constants/dbApi'

type GetMoviesProps = {
  languageToUse: string
  signal: AbortSignal
  keyword?: string | null
}

// ? Obtiene peliculas populares o busca en base a un nombre
// dependiendo de si viene el parametro keyword
const getMovies = async ({
  languageToUse: language,
  signal,
  keyword = null
}: GetMoviesProps) => {
  const url =
    keyword === null
      ? getUrlPopularMovies(language)
      : getUrlSearchedMovies(language, keyword)

  const response = await fetch(url, { signal })
  return await response.json()
}

const getUrlPopularMovies = (language: string) =>
  `${API_URL}/movie/popular?api_key=${API_KEY}&language=${language}`
const getUrlSearchedMovies = (language: string, keyword: string) =>
  `${API_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${keyword}`

export default getMovies
