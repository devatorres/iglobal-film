import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import useSearch from 'hooks/useSearch'
import './styles.css'

const MoviesSearch: FC = () => {
  const navigate = useNavigate()
  const { keyword, changeKeyword } = useSearch()

  const handleSubmit = (event: any): void => {
    event.preventDefault()

    if (keyword !== '') {
      const parsedTitle = encodeURI(keyword.trim())
      navigate(`/search/${parsedTitle}`)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const keyword: string = event.target.value
    changeKeyword(keyword)
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
