import { Navigate, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import Product from './pages/Product'
import Search from './components/Search'
import Signup from './pages/Signup'
import AddProduct from './pages/AddProduct'

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
      path: '/home/product/:id',
      element: <Product />
    },
    {
      path: '/home/search',
      element: <Search />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/load-product',
      element: <AddProduct />
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
