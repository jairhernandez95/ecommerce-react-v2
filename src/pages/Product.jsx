import { useParams } from 'react-router-dom'
import useAPIProducts from '../hooks/useAPIProducts'

const Product = () => {
  const { id = '' } = useParams()
  const {
    data: product,
    error
  } = useAPIProducts(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`)
  if (error) return <p>{error}</p>

  return (
    <article>
      <p>{product.product_name}</p>
      <img loading='lazy' src={product.image} alt={product.product_name} />
    </article>
  )
}
export default Product
