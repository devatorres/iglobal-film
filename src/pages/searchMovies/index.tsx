import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useMovies from 'hooks/useMovies'
import MoviesSearch from 'components/moviesSearch'
import MoviesList from 'components/moviesList'
import './styles.css'

const SearchMovies: FC = () => {
  const { keyword }: any = useParams()
  const { moviesIsLoading, movies } = useMovies('keyword', keyword)

  const title: string = movies
    ? `${movies.length} resultados de ${keyword}`
    : ''

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
        <title>{title} | Ipglobal Test</title>
        <meta name="description" content={title} />
      </Helmet>
      <header>
        <MoviesSearch initialKeyword={keyword} />
      </header>
      <main>
        <p>
          {movies.length} resultados de {decodeURI(keyword)}
        </p>
        <MoviesList movies={movies} />
      </main>
    </div>
  )
}

export default SearchMovies
