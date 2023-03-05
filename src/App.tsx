import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { AuthProvider } from './contexts/AuthProvider'

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  )
}
