import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import {
  AuthContextData,
  AuthProviderProps,
  SignInCredentials,
  User,
} from './types'
import { LoginRequest } from './utils'
import { api } from '../../lib/axios'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('userAuth.token')

    if (token) {
      api
        .get('/me')
        .then((response) => {
          const { email, permissions, roles } = response.data

          setUser({ email, permissions, roles })
        })
        .catch(() => {
          Cookies.remove('useAuth.refreshtoken')
          Cookies.remove('userAuth.token')
          navigate('/')
        })
    }
  }, [navigate])

  async function signIn({ email, password }: SignInCredentials) {
    const response = await LoginRequest({ email, password })

    const { permissions, roles, token, refreshToken } = response

    Cookies.set('userAuth.token', token, {
      expires: 1,
      path: '/',
    })
    Cookies.set('useAuth.refreshtoken', refreshToken, {
      expires: 1,
      path: '/',
    })

    setUser({ email, permissions, roles })

    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
