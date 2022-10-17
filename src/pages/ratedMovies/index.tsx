import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { LIST } from 'constants/hooks'
import MoviesList from 'components/moviesList'
import MoviesSearch from 'components/moviesSearch'
import useMovies from 'hooks/useMovies'
import './styles.css'

const RatedMovies: FC = () => {
  const { moviesIsLoading, movies } = useMovies(LIST)

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
        <title>Tus votados | Ipglobal Test</title>
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

export default RatedMovies
