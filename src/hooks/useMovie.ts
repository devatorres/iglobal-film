import { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'constants/localStorage'
import getMovie from 'services/getMovie'
import MovieParams from 'models/movieModel'
import MoviesContext from 'contexts/moviesContext'

type UseMovieProps = {
  parsedMovieId: number
}

type GetMovieFromCacheProps = {
  movies: MovieParams[]
  movieId: number
}

const getMovieFromCache = ({
  movies,
  movieId
}: GetMovieFromCacheProps): MovieParams | undefined =>
  movies.find((movie: MovieParams) => movie.id === movieId)

const useMovie = ({ parsedMovieId: movieId }: UseMovieProps) => {
  const { i18n } = useTranslation()
  const { movies }: any = useContext(MoviesContext)

  //Todo isloading iserror en usereducer
  const [movie, setMovie] = useState<MovieParams | undefined>(
    getMovieFromCache({ movies, movieId })
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const languageToUse: string = i18n.language || window.localStorage[LANGUAGE]

  useEffect(() => {
    if (!movie) {
      const controller = new AbortController()
      setIsLoading(true)

      console.log('aa')

      getMovie({ movieId, languageToUse, signal: controller.signal })
        .then((movie: MovieParams) => {
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
