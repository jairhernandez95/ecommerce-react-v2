import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Paths from './Paths'
import './styles/index.css'
import { LoginProvider } from './context/LoginProvider'
import { ProductsProvider } from './context/ProductsProvider'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <BrowserRouter>
        <ProductsProvider>
          <Header />
          <Paths />
        </ProductsProvider>
      </BrowserRouter>
    </LoginProvider>
  </React.StrictMode>
)
