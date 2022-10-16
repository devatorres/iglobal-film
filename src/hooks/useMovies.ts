import { useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'constants/localStorage'
import getPopularMovies from 'services/getPopularMovies'
import getSearchMovies from 'services/getSearchMovies'
import getRatedMovies from 'services/getRatedMovies'
import MoviesContext from 'contexts/moviesContext'
import MovieParams from 'models/movieModel'
import useUser from './useUser'

const useMovies = (action: string, keyword = undefined) => {
  const { i18n } = useTranslation()
  const { user } = useUser()
  const { movies, updateMovies, moviesIsLoading, updateMoviesIsLoading }: any =
    useContext(MoviesContext)

  const languageToUse: string = i18n.language || window.localStorage[LANGUAGE]

  useEffect(() => {
    const controller = new AbortController()
    updateMoviesIsLoading(true)

    const successResponse = ({ results }: { results: MovieParams[] }): void => {
      //? Mejoro el objeto añadiendo el lenguaje
      const movies = results.map((result: MovieParams) => ({
        ...result,
        language: languageToUse
      }))
      updateMovies(movies)
      updateMoviesIsLoading(false)
    }

    const errorResponse = (error: Error): void => {
      if (error.name === 'AbortError') return undefined
    }

    const fetchData: any = {
      popular: () =>
        getPopularMovies({ languageToUse, signal: controller.signal }),
      keyword: () =>
        getSearchMovies({
          languageToUse,
          signal: controller.signal,
          keyword
        }),
      list: () =>
        getRatedMovies({
          languageToUse,
          signal: controller.signal,
          guestSession: user?.guest_session_id
        })
    }

    fetchData[action]().then(successResponse).catch(errorResponse)

    return () => {
      controller.abort()
    }
  }, [
    action,
    keyword,
    languageToUse,
    updateMovies,
    updateMoviesIsLoading,
    user
  ])

  return { movies, moviesIsLoading } as const
}

export default useMovies
