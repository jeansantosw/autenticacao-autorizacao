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
  signIn: (credentials: SignInCredentials) => Promise<void>
  user: User
  isAuthenticated: boolean
}

export type AuthProviderProps = {
  children: ReactNode
}
