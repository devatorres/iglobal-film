import { API_KEY, API_URL } from 'constants/dbApi'

const createGuestSession = async () => {
  const url: string = `${API_URL}/authentication/guest_session/new?api_key=${API_KEY}`

  const response = await fetch(url)
  return await response.json()
}

export default createGuestSession
