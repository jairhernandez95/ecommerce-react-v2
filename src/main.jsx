import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Paths from './Paths'
import './styles/index.css'
import { LoginProvider } from './context/LoginContext'
import { ProductsProvider } from './context/ProductsContext'
import Header from './components/Header'
import { Suspense, StrictMode } from 'react'
import { UserProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <UserProvider>
        <BrowserRouter>
          <ProductsProvider>
            <Header />
            <Suspense>
              <Paths />
            </Suspense>
          </ProductsProvider>
        </BrowserRouter>
      </UserProvider>
    </LoginProvider>
  </StrictMode>
)
