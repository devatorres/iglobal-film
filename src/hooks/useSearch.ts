import { useReducer } from 'react'

type States = {
  times: number
  keyword: string
}

const reducer = (state: States, action: string) => {
  return { ...state, keyword: action, times: state.times + 1 }
}

const useSearch = () => {
  const [{ keyword }, dispatch] = useReducer(reducer, {
    keyword: '',
    times: 0
  })

  const changeKeyword = (keyword: string): void => {
    dispatch(keyword)
  }

  return { keyword, changeKeyword } as const
}

export default useSearch
