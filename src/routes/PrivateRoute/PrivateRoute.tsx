import { IPrivateRoute } from './types'
import { useAuth } from '../../contexts/AuthProvider/useAuth'
import { useNavigate } from 'react-router-dom'

export function PrivateRoute({ children }: IPrivateRoute) {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.isAuthenticated) {
    return <h1>Not authorized</h1>
  }

  return <>{children}</>
}
