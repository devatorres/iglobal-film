import { FC } from 'react'
import { useParams } from 'react-router-dom'
import useMovies from 'hooks/useMovies'
import MoviesSearch from 'components/moviesSearch'
import MoviesList from 'components/moviesList'
import './styles.css'

const SearchMovies: FC = () => {
  const { keyword }: any = useParams()
  const { moviesIsLoading, movies } = useMovies('keyword', keyword)

  if (moviesIsLoading) return <div>Cargando...</div>

  return (
    <div>
      <header>
        <MoviesSearch initialKeyword={keyword} />
      </header>
      <main>
        <p>Resultados de la búsqueda: {decodeURI(keyword)}</p>
        <MoviesList movies={movies} />
      </main>
    </div>
  )
}

export default SearchMovies
