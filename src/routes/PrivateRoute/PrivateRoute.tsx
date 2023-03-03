import { IPrivateRoute } from './types'
import { useAuth } from '../../contexts/AuthProvider/useAuth'
import { Outlet } from 'react-router-dom'

export function PrivateRoute({ children }: IPrivateRoute) {
  // const auth = useAuth()

  // if (!auth.isAuthenticated) {
  //   return <Outlet />
  // }

  return <>{children}</>
}
