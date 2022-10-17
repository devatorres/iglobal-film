import { useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
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

  useEffect(() => {
    const controller = new AbortController()
    updateMoviesIsLoading(true)

    const successResponse = ({ results }: { results: MovieParams[] }) => {
      //? Mejorar el objeto añadiendo el lenguaje
      const movies = results.map((result: MovieParams) => ({
        ...result,
        language: i18n.language
      }))
      updateMovies(movies)
      updateMoviesIsLoading(false)
    }

    const errorResponse = (error: Error) => {
      if (error.name === 'AbortError') return undefined
    }

    const fetchData: any = {
      popular: async () =>
        await getPopularMovies({
          language: i18n.language,
          signal: controller.signal
        }),
      keyword: async () =>
        await getSearchMovies({
          language: i18n.language,
          signal: controller.signal,
          keyword
        }),
      list: async () =>
        await getRatedMovies({
          language: i18n.language,
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
    i18n.language,
    updateMovies,
    updateMoviesIsLoading,
    user
  ])

  return { movies, moviesIsLoading } as const
}

export default useMovies
