import { FC, Suspense, lazy } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { NOT_FOUND_LINK } from 'constants/router'
import MoviesSearch from 'components/moviesSearch'
import useUser from 'hooks/useUser'
import useMovie from 'hooks/useMovie'
import formatDate from 'utils/formatDate'
import './styles.css'

const RateMovie = lazy(() => import('components/movieRate'))

const DetailMovie: FC = () => {
  const { movieId } = useParams()
  const parsedMovieId: number = Number(movieId)
  const { user } = useUser()
  const { movie, movieIsLoading, movieIsError } = useMovie({ parsedMovieId })

  if (movieIsLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <div>Cargando...</div>
      </>
    )
  }

  if (movieIsError) return <Navigate to={NOT_FOUND_LINK} />
  if (!movie) return null

  //Todo los helmet con i18n
  return (
    <div>
      <Helmet>
        <title>{movie.title} | Ipglobal Test</title>
      </Helmet>
      <header>
        <MoviesSearch />
      </header>
      <main>
        <img
          height={200}
          src={
            (movie.poster_path = null
              ? 'https://picsum.photos/200'
              : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`)
          }
          loading="lazy"
          alt="aa"
        />
        <p>{movie.title}</p>
        <p>{formatDate(new Date(movie.release_date))}</p>
        <p>{movie.adult ? 'Para adultos' : 'Para todos los publicos'}</p>
        <img
          height={200}
          src={
            movie.backdrop_path === null
              ? 'https://picsum.photos/200'
              : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
          }
          loading="lazy"
          alt="aa"
        />
        <p>Original idioma: {movie.original_language}</p>
        <p>Original TÍTULO: {movie.original_title}</p>
        <p>{movie.overview}</p>
        <p>Popularidad {movie.popularity}</p>
        <p>{movie.video ? 'Tiene video' : 'No tiene video'}</p>
        <p>Votacion {movie.vote_average}</p>
        <p>Votacion {movie.vote_count}</p>
        <Suspense fallback={null}>
          {user && <RateMovie movieId={parsedMovieId} />}
        </Suspense>
      </main>
    </div>
  )
}

export default DetailMovie
