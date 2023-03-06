import { useEffect } from 'react'
import { api } from '../../lib/axios'

export function Dashboard() {
  useEffect(() => {
    api.get('/me').then((response) => {})
  }, [])
  return <h1>Dashboard</h1>
}
