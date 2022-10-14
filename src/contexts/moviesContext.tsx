import { useState, createContext } from 'react'

type MoviesContextProviderProps = {
  children: JSX.Element
}

const Context = createContext({})

export const MoviesContextProvider = ({
  children
}: MoviesContextProviderProps) => {
  const [movies, setMovies] = useState<any>([])

  return (
    <Context.Provider value={{ movies, setMovies }}>
      {children}
    </Context.Provider>
  )
}

export default Context
