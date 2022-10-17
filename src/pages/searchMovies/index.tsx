import { FC, useRef, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { KEYWORD } from 'constants/hooks'
import debounce from 'just-debounce-it'
import useMovies from 'hooks/useMovies'
import useNearScreen from 'hooks/useNearScreen'
import MoviesSearch from 'components/moviesSearch'
import MoviesList from 'components/moviesList'
import './styles.css'

const SearchMovies: FC = () => {
  //? Decido ponerlo aqui en crudo porque solo se usa aqui de momento...
  // Si la aplicacion creciera se podria plantear sacarlo a un componente
  const externalRef = useRef<HTMLDivElement>(null)

  const { keyword }: any = useParams()
  const { setPage, pageIsLoading, movies, moviesIsLoading } = useMovies(
    KEYWORD,
    keyword
  )
  const { isNearScreen } = useNearScreen(moviesIsLoading ? null : externalRef)

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  const title: string = movies
    ? `${movies.length} resultados de ${keyword}`
    : ''

  //Todo los helmet con i18n
  return moviesIsLoading ? (
    <div>
      <Helmet>
        <title>Cargando...</title>
      </Helmet>
      <div>Cargando...</div>
    </div>
  ) : (
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
      {pageIsLoading && <p>Cargando...</p>}
      <div id="visor" ref={externalRef} />
    </div>
  )
}

export default SearchMovies
