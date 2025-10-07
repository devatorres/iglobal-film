interface UserParams {
  success: boolean
  guest_session_id: string
  expires_at: string
  rated_movies_id: number[]
}

export type { UserParams as default }
