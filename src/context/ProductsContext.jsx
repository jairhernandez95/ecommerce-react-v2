import { createContext, useState } from 'react'

export const ProductsContext = createContext(null)

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sms, setSms] = useState({ type: '' })

  const handleFilterProducts = (value) => {
    const filtered = products.filter(product => {
      console.log(product.product_name.toLowerCase().match(value.toLowerCase()))
      return product.product_name.toLowerCase().match(value.toLowerCase())
    })

    if (filtered.length === 0) {
      setFilteredProducts([])
      console.log(filteredProducts)
      setSms({
        type: 'error',
        message: 'Product not found'
      })
    } else {
      setFilteredProducts(filtered)
      console.log(products)
      setSms({
        type: 'success',
        message: 'Products found'
      })
    }
  }
  return (
    <ProductsContext.Provider value={{ products, setProducts, filteredProducts, sms, handleFilterProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
