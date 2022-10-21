import { Navigate } from 'react-router-dom'
import { HOME_LINK } from 'constants/router'
import { ContextProviderProps } from 'contexts/globalTypes'
import useUser from 'hooks/useUser'

const ProtectedRoute = ({ children }: ContextProviderProps) => {
  const { user } = useUser()

  if (!user) return <Navigate to={HOME_LINK} />

  return children
}

export default ProtectedRoute
