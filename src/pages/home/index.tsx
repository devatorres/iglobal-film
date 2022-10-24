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
        <meta
          name="og:url"
          content="https://silly-squirrel-fbbe1c.netlify.app"
        />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="iGlobal Film" />
        <meta
          name="og:title"
          content="iGlobal Film | Mini-webapp sobre listado de películas usando ReactJS y TheMovieDB API"
        />
        <meta
          name="og:description"
          content="La prueba consiste en realizar una mini-webapp con un listado de películas con su buscador y formulario de puntaje."
        />
        <meta
          name="og:image"
          content="https://res.cloudinary.com/djc5s7mud/image/upload/v1666634214/iglobal_film_wussxu.png"
        />
        <meta name="og:image:width" content="768" />
        <meta name="og:image:height" content="512" />
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
