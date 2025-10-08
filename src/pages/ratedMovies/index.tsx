import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { LIST } from '@/constants/hooks'
import { useTranslation } from 'react-i18next'
import MoviesList from '@/components/moviesList'
import MoviesSearch from '@/components/moviesSearch'
import useMovies from '@/hooks/useMovies'
import './styles.css'

const RatedMovies: FC = () => {
  const { t } = useTranslation()
  const { moviesIsLoading, movies } = useMovies(LIST)

  if (moviesIsLoading) {
    return (
      <div className='wrapper-rated'>
        <Helmet>
          <title>{t('loading')} · iGlobal Film</title>
        </Helmet>
        <header>
          <MoviesSearch withBackButton />
          <p className='title'>{t('ratedTitle')}</p>
        </header>
        <main>
          <MoviesList />
        </main>
      </div>
    )
  }

  return (
    <div className='wrapper-rated'>
      <Helmet>
        <title>{t('rated')} · iGlobal Film</title>
      </Helmet>
      <header>
        <MoviesSearch withBackButton />
        <h2 className='title'>{t('ratedTitle')}</h2>
      </header>
      <main>
        <MoviesList movies={movies} />
      </main>
    </div>
  )
}

export default RatedMovies
