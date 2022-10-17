import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { POPULAR } from 'constants/hooks'
import useMovies from 'hooks/useMovies'
import MoviesSearch from 'components/moviesSearch'
import MoviesList from 'components/moviesList'
import './styles.css'

const Home: FC = () => {
  const { movies, moviesIsLoading } = useMovies(POPULAR)

  if (moviesIsLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <div>Cargando...</div>
      </>
    )
  }

  //Todo los helmet con i18n
  return (
    <div>
      <Helmet>
        <title>Home | Ipglobal Test</title>
      </Helmet>
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
