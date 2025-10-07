import { API_URL } from '@/constants/dbApi'

type GetPopularMoviesProps = {
  language: string
  signal: AbortSignal
}

const getPopularMovies = async ({ language, signal }: GetPopularMoviesProps) => {
  const url: string = `${API_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=${language}`

  const response = await fetch(url, { signal })
  return await response.json()
}

export default getPopularMovies
