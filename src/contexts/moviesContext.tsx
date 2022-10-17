import { createContext, useReducer, useCallback } from 'react'
import { ContextProviderProps } from 'contexts/globalTypes'
import MovieParams from 'models/movieModel'

interface MoviesContextInterface {
  movies: MovieParams[]
  updateMovies: (movies: MovieParams[]) => void
  moviesIsLoading: boolean
  updateMoviesIsLoading: (moviesIsLoading: boolean) => void
  movieIsLoading: boolean
  updateMovieIsLoading: (movieIsLoading: boolean) => void
  movieIsError: boolean
  updateMovieIsError: (movieIsError: boolean) => void
}

type State = {
  movies: MovieParams[]
  moviesIsLoading: boolean
  movieIsLoading: boolean
  movieIsError: boolean
}

type Actions = { type: string; payload: any }

const ACTIONS = {
  UPDATE_MOVIES: 'update_movies',
  UPDATE_MOVIES_SHOW: 'update_movies_show',
  UPDATE_MOVIES_LOADING: 'update_movies_loading',
  UPDATE_MOVIE_LOADING: 'update_movie_loading',
  UPDATE_MOVIE_ERROR: 'update_movie_error'
}

const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_MOVIES]: (state: State, action: Actions) => ({
    ...state,
    movies: action.payload
  }),
  [ACTIONS.UPDATE_MOVIES_LOADING]: (state: State, action: Actions) => ({
    ...state,
    moviesIsLoading: action.payload
  }),
  [ACTIONS.UPDATE_MOVIE_LOADING]: (state: State, action: Actions) => ({
    ...state,
    movieIsLoading: action.payload
  }),
  [ACTIONS.UPDATE_MOVIE_ERROR]: (state: State, action: Actions) => ({
    ...state,
    movieIsError: action.payload
  })
}

const reducer = (state: State, action: Actions) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

const initialArg = {
  movies: [],
  moviesIsLoading: false,
  movieIsLoading: false,
  movieIsError: false
}

const MoviesContext = createContext<MoviesContextInterface | undefined>(
  undefined
)

export const MoviesContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialArg)

  const updateMovies = useCallback((newMovies: MovieParams[]) => {
    _updateMovies(newMovies)
  }, [])

  const updateMoviesIsLoading = useCallback((newState: boolean) => {
    _updateMoviesIsLoading(newState)
  }, [])

  const updateMovieIsLoading = useCallback((newState: boolean) => {
    _updateMovieIsLoading(newState)
  }, [])

  const updateMovieIsError = useCallback((newState: boolean) => {
    _updateMovieIsError(newState)
  }, [])

  const _updateMovies = (newMovies: MovieParams[]) => {
    dispatch({ type: ACTIONS.UPDATE_MOVIES, payload: newMovies })
  }

  const _updateMoviesIsLoading = (newState: boolean) => {
    dispatch({ type: ACTIONS.UPDATE_MOVIES_LOADING, payload: newState })
  }

  const _updateMovieIsLoading = (newState: boolean) => {
    dispatch({ type: ACTIONS.UPDATE_MOVIE_LOADING, payload: newState })
  }

  const _updateMovieIsError = (newState: boolean) => {
    dispatch({ type: ACTIONS.UPDATE_MOVIE_ERROR, payload: newState })
  }

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        updateMovies,
        moviesIsLoading: state.moviesIsLoading,
        updateMoviesIsLoading,
        movieIsLoading: state.movieIsLoading,
        updateMovieIsLoading,
        movieIsError: state.movieIsError,
        updateMovieIsError
      }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext
