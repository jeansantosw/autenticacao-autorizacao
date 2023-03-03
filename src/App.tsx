import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { AuthProvider } from './contexts/AuthProvider'

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}
