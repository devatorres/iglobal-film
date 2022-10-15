import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'constants/localStorage'
import useMovies from 'hooks/useMovies'
import getMovie from 'services/getMovie'
import MovieProps from 'models/movieModel'

const useMovie = ({ movieId: id }: { movieId: string | undefined }) => {
  const { movies } = useMovies()

  const movieId = Number(id)
  const movieFromCache = movies.find(
    (movie: MovieProps) => movie.id === movieId
  )
  const [movie, setMovie] = useState(movieFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const { i18n } = useTranslation()
  const languageToUse = i18n.language || window.localStorage[LANGUAGE]

  useEffect(() => {
    if (!movie) {
      setIsLoading(true)

      const controller = new AbortController()
      const signal = controller.signal

      getMovie({ movieId, languageToUse, signal })
        .then((movie: MovieProps) => {
          setMovie(movie)
          setIsError(false)
        })
        .catch((err) => {
          if (err.name === 'AbortError') return setIsError(false)
          setIsError(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [languageToUse, movie, movieId])

  return { movie, isLoading, isError } as const
}

export default useMovie
