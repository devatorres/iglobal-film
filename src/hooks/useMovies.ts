import { useEffect, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DEFAULT_PAGE } from '@/constants/default'
import getPopularMovies from '@/services/getPopularMovies'
import getSearchMovies from '@/services/getSearchMovies'
import getRatedMovies from '@/services/getRatedMovies'
import MoviesContext from '@/contexts/moviesContext'
import type MovieParams from '@/models/movieModel'
import useUser from './useUser'

const useMovies = (action: string, keyword = undefined) => {
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [pageIsLoading, setPageIsLoading] = useState(false)
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
        language: i18n.language,
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
          signal: controller.signal,
        }),
      keyword: async () =>
        await getSearchMovies({
          language: i18n.language,
          signal: controller.signal,
          page,
          keyword,
        }),
      list: async () =>
        await getRatedMovies({
          language: i18n.language,
          signal: controller.signal,
          guestSession: user?.guest_session_id,
        }),
    }

    fetchData[action]().then(successResponse).catch(errorResponse)

    return () => {
      controller.abort()
    }
  }, [action, keyword, i18n.language, user, updateMovies])

  useEffect(() => {
    if (page === DEFAULT_PAGE) return undefined

    const controller = new AbortController()
    setPageIsLoading(true)

    const successResponse = ({ results }: { results: MovieParams[] }) => {
      //? Mejorar el objeto añadiendo el lenguaje
      const nextMovies = results.map((result: MovieParams) => ({
        ...result,
        language: i18n.language,
      }))

      updateMovies([...movies, ...nextMovies])
      setPageIsLoading(false)
    }

    const errorResponse = (error: Error) => {
      if (error.name === 'AbortError') return undefined

      //! Se puede añadir los avisos de error que sean necesarios
    }

    getSearchMovies({
      language: i18n.language,
      signal: controller.signal,
      page,
      keyword,
    })
      .then(successResponse)
      .catch(errorResponse)

    return () => {
      controller.abort()
    }
  }, [keyword, page, updateMovies])

  return {
    setPage,
    pageIsLoading,
    movies,
    moviesIsLoading,
  } as const
}

export default useMovies
