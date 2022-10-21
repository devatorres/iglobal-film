import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { POPULAR } from 'constants/hooks'
import { useTranslation } from 'react-i18next'
import useMovies from 'hooks/useMovies'
import MoviesSearch from 'components/moviesSearch'
import MoviesList from 'components/moviesList'
import Logo from 'pages/home/logo'
import Preview from 'assets/images/header.png'
import './styles.css'

const Home: FC = () => {
  const { t } = useTranslation()
  const { movies, moviesIsLoading } = useMovies(POPULAR)

  if (moviesIsLoading) {
    return (
      <div className="wrapper-home">
        <Helmet>
          <title>{t('loading')} · iGlobal Film</title>
        </Helmet>
        <header>
          <figure className="preview backdrop">
            <img src={Preview} alt={t('headerPreview')} loading="lazy" />
          </figure>
          <div className="decoration backdrop" />
          <Logo />
          <MoviesSearch />
        </header>
        <main>
          <MoviesList />
        </main>
      </div>
    )
  }

  return (
    <div className="wrapper-home">
      <Helmet>
        <title>{t('home')} · iGlobal Film</title>
      </Helmet>
      <header>
        <figure className="preview backdrop">
          <img src={Preview} alt={t('headerPreview')} loading="lazy" />
        </figure>
        <div className="decoration backdrop" />
        <Logo />
        <MoviesSearch />
      </header>
      <main>
        <MoviesList movies={movies} />
      </main>
    </div>
  )
}

export default Home
