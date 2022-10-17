import { FC, Suspense, lazy } from 'react'
import './styles.css'

interface MovieRateProps {
  movieId: number
}

const RateComponent = lazy(() => import('components/movieRate/rateComponent'))

const MovieRate: FC<MovieRateProps> = (props) => {
  const { movieId } = props

  return (
    <Suspense fallback={null}>
      <RateComponent movieId={movieId} />
    </Suspense>
  )
}

export default MovieRate
