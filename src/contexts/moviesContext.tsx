import { useState, createContext, Dispatch, SetStateAction } from 'react'
import { ContextProviderProps } from 'contexts/globalTypes'
import MovieProps from 'models/movieModel'

interface MoviesContextInterface {
  movies: MovieProps[]
  setMovies: Dispatch<SetStateAction<MovieProps[]>>
}

const MoviesContext = createContext<MoviesContextInterface | undefined>(
  undefined
)

export const MoviesContextProvider = ({ children }: ContextProviderProps) => {
  const [movies, setMovies] = useState<MovieProps[]>([])

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext
