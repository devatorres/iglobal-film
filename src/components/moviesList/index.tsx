import { FC } from 'react'
import { DEFAULT_CASPER_LIST } from 'constants/default'
import { useTranslation } from 'react-i18next'
import MovieItem from 'components/moviesList/MovieItem'
import MovieParams from 'models/movieModel'
import './styles.css'

interface MoviesListProps {
  movies?: MovieParams[] | undefined
}

const MoviesList: FC<MoviesListProps> = (props) => {
  const { t } = useTranslation()
  const { movies } = props

  const isEmptyResults: boolean = movies ? movies.length === 0 : false

  if (isEmptyResults)
    return (
      <section className="movies-list reset">
        <p className="no-results">{t('noResults')}</p>
      </section>
    )

  return (
    <section className="movies-list">
      {!movies
        ? DEFAULT_CASPER_LIST.map((index: number) => (
            <article key={index} className="fake-movie">
              <div className="movie" />
              <div className="title" />
            </article>
          ))
        : movies.map((movie: MovieParams) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
    </section>
  )
}

export default MoviesList
