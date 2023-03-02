import { createContext, useState } from 'react'
import { api } from '../../lib/axios'
import {
  AuthContextData,
  AuthProviderProps,
  SignInCredentials,
  User,
} from './types'
import { LoginRequest } from './utils'

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>()
  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInCredentials) {
    const response = await LoginRequest({ email, password })

    const { permissions, roles } = response

    setUser({ email, permissions, roles })
  }

  function Logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
