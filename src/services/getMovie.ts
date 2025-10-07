import { API_URL } from '@/constants/dbApi'

type GetMovieProps = {
  movieId: number
  language: string
  signal: AbortSignal
}

const getMovie = async ({ movieId, language, signal }: GetMovieProps) => {
  const url: string = `${API_URL}/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=${language}`

  const response = await fetch(url, { signal })
  return await response.json()
}

export default getMovie
