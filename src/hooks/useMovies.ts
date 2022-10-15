import { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE } from 'constants/localStorage'
import getMovies from 'services/getMovies'
import MoviesContext from 'contexts/moviesContext'
import MovieProps from 'models/movieModel'

type GetMoviesProps = {
  results: MovieProps[]
}

const useMovies = ({ keyword } = { keyword: null }) => {
  const { i18n } = useTranslation()
  const { movies, setMovies }: any = useContext(MoviesContext)
  const [loading, setLoading] = useState<boolean>(false)

  const languageToUse = i18n.language || window.localStorage[LANGUAGE]

  useEffect(() => {
    console.count()

    setLoading(true)

    const controller = new AbortController()
    const signal = controller.signal

    getMovies({ languageToUse, signal })
      .then(({ results }: GetMoviesProps) => {
        setMovies(results)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return undefined
      })

    return () => {
      controller.abort()
    }
  }, [languageToUse, setMovies])

  return { loading, movies } as const
}

export default useMovies
