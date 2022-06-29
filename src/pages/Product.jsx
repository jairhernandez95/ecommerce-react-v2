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
    // <article>
    //   <p>{product.product_name}</p>
    //   <img loading='lazy' src={product.image} alt={product.product_name} />
    // </article>
    <div className='card mb-3' style={{ maxWidth: 540 }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={product.image} className='img-fluid rounded-start' alt='...' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{product.product_name}</h5>
            <p className='card-text'>{product.description}</p>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Product
