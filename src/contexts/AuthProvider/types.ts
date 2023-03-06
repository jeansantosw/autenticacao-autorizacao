import { ReactNode } from 'react'

export type User = {
  email: string
  permissions: string[]
  roles: string[]
}

export interface SignInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  signOut: () => void
  signIn: (credentials: SignInCredentials) => Promise<void>
}

export type AuthProviderProps = {
  children: ReactNode
}
