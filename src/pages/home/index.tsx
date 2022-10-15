import { FC } from 'react'
import useMovies from 'hooks/useMovies'
import MoviesSearch from 'components/moviesSearch'
import MoviesList from 'components/moviesList'
import './styles.css'

const Home: FC = () => {
  const { movies } = useMovies()

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

export default Home
