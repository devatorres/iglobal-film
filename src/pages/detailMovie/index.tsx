import { type FC } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { LinearProgress } from '@mui/material'
import { NOT_FOUND_LINK } from '@/constants/router'
import { API_IMAGE_URL, API_IMAGE_URL_ORIGINAL } from '@/constants/dbApi'
import MovieRate from '@/components/movieRate'
import MoviesSearch from '@/components/moviesSearch'
import useMovie from '@/hooks/useMovie'
import type MovieParams from '@/models/movieModel'
import formatDate from '@/utils/formatDate'
import NotFound from '@/assets/images/not_found.png'
import './styles.css'

const DetailMovie: FC = () => {
  const { t } = useTranslation()
  const { movieId } = useParams()
  const parsedMovieId: number = Number(movieId)
  const { movie, movieIsLoading, movieIsError } = useMovie({ parsedMovieId })

  const getClassName = (movie: MovieParams) => {
    let className: string

    if (movie.vote_average >= 0 && movie.vote_average < 3.5) {
      className = 'bad'
    } else if (movie.vote_average >= 3.5 && movie.vote_average < 7.5) {
      className = 'good'
    } else {
      className = 'nice'
    }

    return className
  }

  if (movieIsLoading) {
    return (
      <div className='wrapper-detail'>
        <Helmet>
          <title>{t('loading')} · iGlobal Film</title>
        </Helmet>
        <header>
          <div className='decoration backdrop' />
          <MoviesSearch />
          <figure className='poster loading'>
            <img src={NotFound} loading='lazy' alt={t('notFound')} />
          </figure>
        </header>
        <main></main>
      </div>
    )
  }

  if (movieIsError) return <Navigate to={NOT_FOUND_LINK} />
  if (!movie) return null

  return (
    <div className='wrapper-detail'>
      <Helmet>
        <title>{movie.title} · iGlobal Film</title>
      </Helmet>
      <header>
        {movie.backdrop_path !== null && (
          <figure className='preview backdrop'>
            <img
              src={`${API_IMAGE_URL_ORIGINAL}/${movie.backdrop_path}`}
              alt={movie.title}
              loading='lazy'
            />
          </figure>
        )}
        <div className='decoration backdrop' />
        <MoviesSearch />
        <figure className='poster'>
          <img
            src={
              movie.poster_path === null
                ? NotFound
                : `${API_IMAGE_URL}${movie.poster_path}`
            }
            loading='lazy'
            alt={movie.title}
          />
          <span className={`percent ${getClassName(movie)}`}>{`${(
            movie.vote_average * 10
          ).toFixed(0)}%`}</span>
          <LinearProgress
            className={`average ${getClassName(movie)}`}
            variant='determinate'
            value={movie.vote_average * 10}
          />
        </figure>
      </header>
      <main>
        <h1 className='title'>{movie.title}</h1>
        <p className='date'>{`${formatDate(new Date(movie.release_date))} · ${
          movie.adult ? '+18' : 'CC'
        }`}</p>
        <p className='description'>{movie.overview}</p>
        <div className='extra'>
          <p className='tag'>
            {t('originalLanguage')}: {movie.original_language}
          </p>
          <p className='tag'>
            {t('originalTitle')}: {movie.original_title}
          </p>
        </div>
        <MovieRate movieId={parsedMovieId} />
      </main>
    </div>
  )
}

export default DetailMovie
