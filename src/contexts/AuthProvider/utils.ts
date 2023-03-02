import { api } from '../../lib/axios'
import { SignInCredentials } from './types'

export async function LoginRequest({ email, password }: SignInCredentials) {
  try {
    const request = await api.post('sessions', {
      email,
      password,
    })
    return request.data
  } catch (error) {
    return null
  }
}
