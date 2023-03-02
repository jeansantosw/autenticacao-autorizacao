import { ReactNode } from 'react'

interface PrivateRouteProps {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  return <h1>PrivateRoute</h1>
}
