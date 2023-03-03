import { IPrivateRoute } from './types'
import { useAuth } from '../../contexts/AuthProvider/useAuth'

export function PrivateRoute({ children }: IPrivateRoute) {
  const auth = useAuth()

  if (!auth.isAuthenticated) {
    return <h1>Not authorized</h1>
  }

  return <>{children}</>
}
