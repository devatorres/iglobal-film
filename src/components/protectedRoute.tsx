import { Navigate } from 'react-router-dom'
import { ContextProviderProps } from 'contexts/globalTypes'
import useUser from 'hooks/useUser'

const ProtectedRoute = ({ children }: ContextProviderProps) => {
  const { user } = useUser()

  if (!user) return <Navigate to="/" />

  return children
}

export default ProtectedRoute
