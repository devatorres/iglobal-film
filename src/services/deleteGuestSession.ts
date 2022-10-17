import { API_KEY, API_URL } from 'constants/dbApi'

type DeleteGuestSessionProps = {
  guestSession: string
}

const deleteGuestSession = async ({
  guestSession
}: DeleteGuestSessionProps) => {
  const url: string = `${API_URL}/authentication/session?api_key=${API_KEY}`

  const response = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ session_id: guestSession })
  })
  return await response.json()
}

export default deleteGuestSession
