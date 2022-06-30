import 'bootstrap/dist/css/bootstrap.min.css'
import apiTypeRol from '../services/apiTypeRol'
import apiGetUser from '../services/apiGetUser'
import { LoginContext } from '../context/LoginContext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { tokenAlive, setTokenAlive } = useContext(LoginContext)
  const [email, setEmail] = useState('danylo@gmail.com')
  const [password, setPassword] = useState('gatito123')
  const updateEmail = (event) => {
    setEmail(event.target.value)
    console.log(email)
  }
  const updatePassword = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }
  const callAPI = async (event) => {
    event.preventDefault()
    const response = await apiTypeRol(email, password)
    if (response.request.status === 200) {
      setTokenAlive(true)
      const newResponse = await apiGetUser()
      console.log(newResponse)
      navigate('/home')
    } else if (response.request.status !== 200) {
      console.log('equivocado')
    }
  }

  if (tokenAlive === true) {
    navigate('/home')
  } else {
    return (
      <form onSubmit={callAPI}>
        <div className='form-group'>
          <label>Email address</label>
          <input type='email' className='form-control' placeholder='danylo@gmail.com' onChange={updateEmail} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' placeholder='gatito123' onChange={updatePassword} />
        </div>
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>
    )
  }
}

export default Login
