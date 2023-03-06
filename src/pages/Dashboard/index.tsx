import { useEffect } from 'react'
import { api } from '../../lib/axios'
import { useCan } from '../../hooks/useCan'
import { useAuth } from '../../contexts/AuthProvider/useAuth'
import { CanSee } from '../../components/canSee'

export function Dashboard() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get('/me').then((response) => {})
  }, [])
  return (
    <>
      <h1>Dashboard: {user?.email}</h1>
      <button onClick={signOut}>Sign out</button>
      <CanSee permissions={['metrics.list']}>
        <h1>Métricas</h1>
      </CanSee>
    </>
  )
}
