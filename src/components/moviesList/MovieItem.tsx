import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { movieLink } from 'constants/router'
import { LinearProgress } from '@mui/material'
import MovieParams from 'models/movieModel'
import formatDate from 'utils/formatDate'
import NotFound from 'assets/images/not_found.png'
import './styles.css'

interface MovieItemProps {
  movie: MovieParams
}

const MovieItem: FC<MovieItemProps> = (props) => {
  const { movie } = props
  const navigate = useNavigate()

  const handleSelectMovie = (movieId: number) => () => {
    navigate(movieLink(movieId))
  }

  const getClassName = () => {
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

  return (
    <article className="movie">
      <figure className="poster" onClick={handleSelectMovie(movie.id)}>
        <img
          src={
            movie.poster_path === null
              ? NotFound
              : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          }
          loading="lazy"
          alt={movie.title}
        />
        <span className={`percent ${getClassName()}`}>{`${(
          movie.vote_average * 10
        ).toFixed(0)}%`}</span>
        <LinearProgress
          className={`average ${getClassName()}`}
          variant="determinate"
          value={movie.vote_average * 10}
        />
      </figure>
      <div className="title" onClick={handleSelectMovie(movie.id)}>
        {movie.title}
      </div>
      <span className="date">{formatDate(new Date(movie.release_date))}</span>
    </article>
  )
}

export default MovieItem
