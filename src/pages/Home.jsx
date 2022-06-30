import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAPIProducts from '../hooks/useAPIProducts'
import useProductsContext from '../hooks/useProductsContext'
import '../styles/Home.css'

const Home = () => {
  const { products, setProducts } = useProductsContext()
  const { data, error } = useAPIProducts('https://ecomerce-master.herokuapp.com/api/v1/item')
  if (error) return <p>{error.message}</p>
  useEffect(() => {
    setProducts(data)
  })
  return (
    <section className='row gy-4'>
      {products.map((product, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`product/${product._id}`}>
            <article className='card'>
              <img loading='lazy' className='card-img-top' src={product.image} alt={product.product_name} />
              <div className='card-body'>
                <p className='card-title'>{product.product_name}</p>
                <p className='card-title'>{product.brand}</p>
                <p className='card-title'>${product.price}.00 MXN</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Home

// function Home () {
//   const navigate = useNavigate()
//   const { tokenAlive } = useContext(LoginContext)
//   useEffect(() => {
//     if (tokenAlive === false) {
//       navigate('/login')
//     } else if (tokenAlive === true) { navigate('/home') }
//   }, [tokenAlive])
//   // const response = async () => {await console.log(tokenAlive) }
//   return (
//     <h1>Estás logeado</h1>
//   )
//   // return (
//   //   <div className='App'>
//   //     <button onClick={response}>que rollo</button>
//   //   </div>
//   // )
// }
