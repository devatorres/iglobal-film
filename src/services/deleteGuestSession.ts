import { API_KEY, API_URL } from 'constants/dbApi'

const deleteGuestSession = async () => {
  const url = `${API_URL}/authentication/session?api_key=${API_KEY}`

  const response = await fetch(url)
  return await response.json()
}

export default deleteGuestSession
