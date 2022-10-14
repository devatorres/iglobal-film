import { useContext } from 'react'
import MoviesContext from 'contexts/moviesContext'

const useMovies = () => {
  const moviesValue = useContext(MoviesContext)
  return moviesValue
}

export default useMovies
