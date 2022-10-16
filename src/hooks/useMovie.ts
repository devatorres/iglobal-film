import { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'constants/localStorage'
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

  const languageToUse: string = i18n.language || window.localStorage[LANGUAGE]
  const [movie, setMovie] = useState<MovieParams | undefined>(
    movies.find((movie: MovieParams) => movie.id === movieId)
  ) //? Coger pelicula de la caché si la tiene

  useEffect(() => {
    if (!movie || movie.language !== languageToUse) {
      const controller = new AbortController()
      updateMovieIsLoading(true)

      const successResponse = (movie: MovieParams) => {
        //? Mejoro el objeto añadiendo el lenguaje
        setMovie({ ...movie, language: languageToUse })
        updateMovieIsError(false)
      }

      const errorResponse = (error: Error) => {
        if (error.name === 'AbortError') return updateMovieIsError(false)
        updateMovieIsError(true)
      }

      const globalResponse = () => {
        updateMovieIsLoading(false)
      }

      const fetchData = async () =>
        await getMovie({ movieId, languageToUse, signal: controller.signal })
      fetchData()
        .then(successResponse)
        .catch(errorResponse)
        .finally(globalResponse)

      return () => {
        controller.abort()
      }
    }
  }, [languageToUse, movie, movieId, updateMovieIsError, updateMovieIsLoading])

  return { movie, movieIsLoading, movieIsError } as const
}

export default useMovie
