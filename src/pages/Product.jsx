import { useNavigate, useParams } from 'react-router-dom'
import useAPIProducts from '../hooks/useAPIProducts'
import { LoginContext } from '../context/LoginContext'
import { useContext } from 'react'

const Product = () => {
  const navigate = useNavigate()
  const { tokenAlive } = useContext(LoginContext)
  const { id = '' } = useParams()
  const changeToLoginOrSignup = () => {
    navigate('/login')
  }
  const {
    data: product,
    error
  } = useAPIProducts(`https://ecomerce-master.herokuapp.com/api/v1/item/${id}`)
  if (error) return <p>{error}</p>
  if (tokenAlive === true) {
    return (
      <div className='card mb-3' style={{ maxWidth: 540 }}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={product.image} className='img-fluid rounded-start' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              <button className='btn-primary'>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='card mb-3' style={{ maxWidth: 540 }}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={product.image} className='img-fluid rounded-start' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              <button className='btn-lg' disabled>Comprar</button>
              <button className='btn-primary' onClick={changeToLoginOrSignup}>Logeate o Registrate para comprar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Product
