import '../styles/Home.css'
import { LoginContext } from '../context/LoginProvider'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()
  const { tokenAlive } = useContext(LoginContext)
  useEffect(() => {
    if (tokenAlive === false) {
      navigate('/login')
    } else if (tokenAlive === true) { navigate('/home') }
  }, [tokenAlive])
  // const response = async () => {await console.log(tokenAlive) }
  return (
    <h1>Estás logeado</h1>
  )
  // return (
  //   <div className='App'>
  //     <button onClick={response}>que rollo</button>
  //   </div>
  // )
}

export default Home
