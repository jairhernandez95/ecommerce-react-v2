import '../styles/Home.css'
import { ProductsContext } from '../context/ProductsProvider'
import { useContext, useEffect, useState } from 'react'
import apiGetProducts from '../services/apiGetProducts'

const Home = () => {
  const { data } = useContext(ProductsContext)
  const [dataProducts, setDataProducts] = useState([])
  useEffect(() => {
    const response = apiGetProducts()
    console.log(response)
  })
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
