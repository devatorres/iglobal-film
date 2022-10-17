import { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import getMovie from 'services/getMovie'
import MovieParams from 'models/movieModel'
import MoviesContext from 'contexts/moviesContext'

type UseMovieProps = {
  parsedMovieId: number
}

const useMovie = ({ parsedMovieId: movieId }: UseMovieProps) => {
  const { i18n } = useTranslation()
  const {
    movies,
    movieIsLoading,
    updateMovieIsLoading,
    movieIsError,
    updateMovieIsError
  }: any = useContext(MoviesContext)

  const movieFromCache = movies.find(
    (movie: MovieParams) => movie.id === movieId
  )
  const [movie, setMovie] = useState<MovieParams | undefined>(movieFromCache)

  useEffect(() => {
    //? Solo entras si no hay movie o cambia el lenguaje
    if (!movie || movie.language !== i18n.language) {
      const controller = new AbortController()
      updateMovieIsLoading(true)

      const successResponse = (movie: MovieParams) => {
        //? Mejorar el objeto añadiendo el lenguaje
        setMovie({ ...movie, language: i18n.language })
        updateMovieIsError(false)
      }

      const errorResponse = (error: Error) => {
        if (error.name === 'AbortError') return updateMovieIsError(false)
        updateMovieIsError(true)
      }

      getMovie({
        movieId,
        language: i18n.language,
        signal: controller.signal
      })
        .then(successResponse)
        .catch(errorResponse)
        .finally(() => updateMovieIsLoading(false))

      return () => {
        controller.abort()
      }
    }
  }, [i18n.language, movie, movieId, updateMovieIsError, updateMovieIsLoading])

  return { movie, movieIsLoading, movieIsError } as const
}

export default useMovie
