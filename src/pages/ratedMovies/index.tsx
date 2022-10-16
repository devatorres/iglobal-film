import MoviesList from 'components/moviesList'
import MoviesSearch from 'components/moviesSearch'
import useMovies from 'hooks/useMovies'
import { FC } from 'react'
import './styles.css'

const RatedMovies: FC = () => {
  const { moviesIsLoading, movies } = useMovies('list')

  if (moviesIsLoading) return <div>Cargando...</div>

  return (
    <div>
      <header>
        <MoviesSearch />
      </header>
      <main>
        <MoviesList movies={movies} />
      </main>
    </div>
  )
}

export default RatedMovies
