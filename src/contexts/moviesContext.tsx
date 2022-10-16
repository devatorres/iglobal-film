import { createContext, useState } from 'react'
import { ContextProviderProps } from 'contexts/globalTypes'
import MovieParams from 'models/movieModel'

//type State = { theme: 'light' | 'dark' | 'system' }
//type Actions = { type: string }

interface MoviesContextInterface {
  movies: MovieParams[]
  updateMovies: (movies: MovieParams[]) => void
  movieIsLoading: boolean
  updateMovieIsLoading: (movieIsLoading: boolean) => void
  movieIsError: boolean
  updateMovieIsError: (movieIsError: boolean) => void
  moviesIsLoading: boolean
  updateMoviesIsLoading: (moviesIsLoading: boolean) => void
}

//const reducer = (state: State, action: Actions) => {return state}

const MoviesContext = createContext<MoviesContextInterface | undefined>(
  undefined
)

//Todo reducer
export const MoviesContextProvider = ({ children }: ContextProviderProps) => {
  //const [state, dispatch] = useReducer(reducer, {})
  const [movies, updateMovies] = useState<MovieParams[]>([])
  const [movieIsLoading, updateMovieIsLoading] = useState(false)
  const [movieIsError, updateMovieIsError] = useState(false)
  const [moviesIsLoading, updateMoviesIsLoading] = useState(false)

  return (
    <MoviesContext.Provider
      value={{
        movies,
        updateMovies,
        movieIsLoading,
        updateMovieIsLoading,
        movieIsError,
        updateMovieIsError,
        moviesIsLoading,
        updateMoviesIsLoading
      }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext
