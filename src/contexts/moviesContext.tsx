import { useState, createContext, Dispatch, SetStateAction } from 'react'
import { ContextProviderProps } from 'contexts/globalTypes'
import MovieParams from 'models/movieModel'

interface MoviesContextInterface {
  movies: MovieParams[]
  setMovies: Dispatch<SetStateAction<MovieParams[]>>
}

const MoviesContext = createContext<MoviesContextInterface | undefined>(
  undefined
)

export const MoviesContextProvider = ({ children }: ContextProviderProps) => {
  const [movies, setMovies] = useState<MovieParams[]>([])

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext

/**
 * import { useReducer } from 'react'

type States = {
  times: number
  keyword: string
}

const reducer = (state: States, action: string) => {
  return { ...state, keyword: action, times: state.times + 1 }
}

const useSearch = () => {
  const [{ keyword }, dispatch] = useReducer(reducer, {
    keyword: '',
    times: 0
  })

  const changeKeyword = (keyword: string): void => {
    dispatch(keyword)
  }

  return { keyword, changeKeyword } as const
}

export default useSearch

 */
