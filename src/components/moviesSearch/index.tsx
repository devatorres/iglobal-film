import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import useSearch from 'hooks/useSearch'
import './styles.css'

interface MoviesSearchProps {
  initialKeyword?: string
}

const MoviesSearch: FC<MoviesSearchProps> = (props) => {
  const { initialKeyword = '' } = props
  const { keyword, setKeyword } = useSearch({ initialKeyword })
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()

    if (keyword !== '') {
      const parsedTitle = encodeURI(keyword.trim())
      navigate(`/search/${parsedTitle}`)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Buscar</button>
      <input
        type="text"
        placeholder="Buscar película aquí..."
        value={keyword}
        onChange={handleChange}
      />
    </form>
  )
}

export default MoviesSearch
