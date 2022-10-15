import { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'constants/localStorage'
import getMovies from 'services/getMovies'
import MoviesContext from 'contexts/moviesContext'

const useMovies = ({ keyword } = { keyword: null }) => {
  const { i18n } = useTranslation()
  const { movies, setMovies }: any = useContext(MoviesContext)
  //Todo loading en usereducer
  const [loading, setLoading] = useState<boolean>(false)

  const languageToUse: string = i18n.language || window.localStorage[LANGUAGE]

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)

    //? Si no hay keyword, no lo mando
    getMovies({
      languageToUse,
      signal: controller.signal,
      ...(keyword !== null && { keyword })
    })
      .then(({ results }) => {
        setMovies(results)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return undefined
      })

    return () => {
      controller.abort()
    }
  }, [keyword, languageToUse, setMovies])

  return { loading, movies } as const
}

export default useMovies
