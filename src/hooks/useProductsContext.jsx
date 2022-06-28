import { useContext } from 'react'

import { ProductsContext } from '../context/ProductsContext'

const useProductsContext = () => {
  const context = useContext(ProductsContext)

  if (!context) throw new Error('No hay un contexto activo')

  return context
}

export default useProductsContext
