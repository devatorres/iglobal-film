import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import MovieParams from 'models/movieModel'
import formatDate from 'utils/formatDate'
import './styles.css'

interface MoviesListProps {
  movies: any
}

const MoviesList: FC<MoviesListProps> = (props) => {
  const { movies } = props
  const navigate = useNavigate()

  const handleSelectMovie = (movieId: number) => (): void => {
    navigate(`/movie/${movieId}`)
  }

  return movies.map((movie: MovieParams) => (
    <div key={movie.id} onClick={handleSelectMovie(movie.id)}>
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
