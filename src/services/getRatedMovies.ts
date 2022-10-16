import { API_KEY, API_URL } from 'constants/dbApi'

type GetRatedProps = {
  languageToUse: string
  signal: AbortSignal
  guestSession: string
}

const getRatedMovies = async ({
  languageToUse: language,
  signal,
  guestSession
}: GetRatedProps) => {
  const url = `${API_URL}/guest_session/${guestSession}/rated/movies?api_key=${API_KEY}&language=${language}`

  const response = await fetch(url, { signal })
  return await response.json()
}

export default getRatedMovies
