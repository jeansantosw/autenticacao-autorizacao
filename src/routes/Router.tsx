import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './../layouts/defaultLayout'
import { Home } from './../pages/Home'
import { Dashboard } from './../pages/Dashboard'
import { AuthContext } from './../contexts/AuthContext'
import { useContext } from 'react'

export function Router() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Private>
              <Dashboard />{' '}
            </Private>
          }
        />
      </Route>
    </Routes>
  )
}
