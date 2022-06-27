import { Navigate, useRoutes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Error404 from './pages/Error404'

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/home' replace />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/404',
      element: <Error404 />
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])
  return element
}

export default Paths