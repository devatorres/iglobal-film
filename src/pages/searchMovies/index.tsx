import { FC } from 'react'
import { useParams } from 'react-router-dom'
import useMovies from 'hooks/useMovies'
import MoviesSearch from 'components/moviesSearch'
import MoviesList from 'components/moviesList'
import './styles.css'

type SearchMoviesParams = {
  keyword: any
}

const SearchMovies: FC = () => {
  const { keyword } = useParams<SearchMoviesParams>()
  const { loading, movies } = useMovies({ keyword })

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <div>
      <header>
        <MoviesSearch />
      </header>
      <main>
        <p>Resultados de la búsqueda: {decodeURI(keyword)}</p>
        <MoviesList movies={movies} />
      </main>
    </div>
  )
}

export default SearchMovies
