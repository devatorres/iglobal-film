import { FC } from 'react'
import useRate from 'hooks/useRate'
import './styles.css'

interface RateComponentProps {
  movieId: number
}

const RateComponent: FC<RateComponentProps> = (props) => {
  const { movieId } = props
  const { value, setValue, rateMovie } = useRate({ movieId })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    rateMovie()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue: number = Number(event.target.value)
    setValue(parsedValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Votar</button>
      <input type="number" value={value} onChange={handleChange} />
    </form>
  )
}

export default RateComponent
