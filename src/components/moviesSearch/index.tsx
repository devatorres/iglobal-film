import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { searchLink } from 'constants/router'
import useSearch from 'hooks/useSearch'
import SearchIcon from '@mui/icons-material/Search'
import './styles.css'

interface MoviesSearchProps {
  initialKeyword?: string
}

const MoviesSearch: FC<MoviesSearchProps> = (props) => {
  const { t } = useTranslation()
  const { initialKeyword = '' } = props
  const { keyword, setKeyword } = useSearch({ initialKeyword })
  const navigate = useNavigate()

  const isEmptyKeyword: boolean = keyword === ''

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!isEmptyKeyword) {
      const parsedTitle = encodeURI(keyword.trim())
      navigate(searchLink(parsedTitle))
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  return (
    <form className="movies-search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t('searchBarPlaceholder')}
        value={keyword}
        onChange={handleChange}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  )
}

export default MoviesSearch
