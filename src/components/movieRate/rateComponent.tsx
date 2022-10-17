import { FC } from 'react'
import useRate from 'hooks/useRate'
import useUser from 'hooks/useUser'
import './styles.css'

interface RateComponentProps {
  movieId: number
}

const RateComponent: FC<RateComponentProps> = (props) => {
  const { movieId } = props
  const { user } = useUser()
  const { value, setValue, rateMovie, deleteRateMovie } = useRate({ movieId })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    rateMovie()
  }

  const handleDeleteRate = (event: React.FormEvent) => {
    event.preventDefault()
    deleteRateMovie()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue: number = Number(event.target.value)
    setValue(parsedValue)
  }

  const isRated: boolean = user?.rated_movies_id?.find(
    (id: number) => id === movieId
  )

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Votar</button>
        <input type="number" value={value} onChange={handleChange} />
      </form>
      {isRated && <button onClick={handleDeleteRate}>Borrar votación</button>}
    </>
  )
}

export default RateComponent
