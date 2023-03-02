import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './../layouts/defaultLayout'
import { Home } from './../pages/Home'
import { Dashboard } from './../pages/Dashboard'
import { PrivateRoute } from './PrivateRoute/PrivateRoute'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  )
}
