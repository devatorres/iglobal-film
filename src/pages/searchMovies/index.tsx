import { type FC, useRef, useEffect, useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { KEYWORD } from '@/constants/hooks'
import { useTranslation } from 'react-i18next'
import debounce from 'just-debounce-it'
import useMovies from '@/hooks/useMovies'
import useNearScreen from '@/hooks/useNearScreen'
import MoviesSearch from '@/components/moviesSearch'
import MoviesList from '@/components/moviesList'
import './styles.css'

const SearchMovies: FC = () => {
  //? Decido ponerlo aqui en crudo porque solo se usa aqui de momento...
  // Si la aplicacion creciera se podria plantear sacarlo a un componente
  const externalRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  const { keyword }: any = useParams()
  const { setPage, movies, moviesIsLoading } = useMovies(KEYWORD, keyword)
  const { isNearScreen } = useNearScreen(moviesIsLoading ? null : externalRef)

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  const title: string = useMemo(
    () => (movies ? `${movies.length} ${t('results')} ${keyword}` : ''),
    [movies.length, keyword]
  )

  return moviesIsLoading ? (
    <div className='wrapper-search'>
      <Helmet>
        <title>{t('loading')} · iGlobal Film</title>
      </Helmet>
      <header>
        <MoviesSearch initialKeyword={keyword} withBackButton />
        <p className='results'>{`${movies.length} ${t('results')} ${decodeURI(
          keyword
        )}`}</p>
      </header>
      <main>
        <MoviesList />
      </main>
    </div>
  ) : (
    <div className='wrapper-search'>
      <Helmet>
        <title>{title} · iGlobal Film</title>
        <meta name='description' content={title} />
      </Helmet>
      <header>
        <MoviesSearch initialKeyword={keyword} withBackButton />
        <p className='results'>{`${movies.length} ${t('results')} ${decodeURI(
          keyword
        )}`}</p>
      </header>
      <main>
        <MoviesList movies={movies} />
      </main>
      <div id='visor' ref={externalRef} />
    </div>
  )
}

export default SearchMovies
