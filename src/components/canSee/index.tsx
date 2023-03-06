import { ReactNode } from 'react'
import { useCan } from '../../hooks/useCan'

interface ICanSeePorps {
  children: ReactNode
  permissions?: string[]
  roles?: string[]
}

export function CanSee({ children, permissions, roles }: ICanSeePorps) {
  const useCanSeeComponent = useCan({ permissions, roles })

  if (!useCanSeeComponent) {
    return null
  }

  return <>{children}</>
}
