import { FormEvent, useState } from 'react'
import { useAuth } from '../../contexts/AuthProvider/useAuth'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = {
      email,
      password,
    }

    try {
      await auth.signIn(data)
      navigate('/dashboard')
    } catch (error) {
      console.log('Invalid email or password')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  )
}
