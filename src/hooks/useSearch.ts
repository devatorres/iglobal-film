import { useState } from 'react'

const useSearch = ({ initialKeyword }: { initialKeyword: string }) => {
	const [keyword, setKeyword] = useState(initialKeyword)

	return { keyword, setKeyword } as const
}

export default useSearch
