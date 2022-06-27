import { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext(null)

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState()
  useEffect(() => {}
  )
  return (
    <ProductsContext.Provider value={{ data, setData }}>
      {children}
    </ProductsContext.Provider>
  )
}
