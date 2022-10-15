import { FC } from 'react'
import useMovies from 'hooks/useMovies'
import MovieProps from 'models/movieModel'
import formatDate from 'utils/formatDate'
import './styles.css'

const MoviesList: FC = () => {
  const { movies } = useMovies()

  return movies.map((movie: MovieProps) => (
    <div key={movie.id}>
      <img
        height={200}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        loading="lazy"
        alt="aa"
      />
      <span>{movie.title}</span>
      <span>{formatDate(new Date(movie.release_date))}</span>
    </div>
  ))
}

export default MoviesList
