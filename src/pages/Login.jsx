import 'bootstrap/dist/css/bootstrap.min.css'
import apiTypeRol from '../services/apiTypeRol'
import { LoginContext } from '../context/LoginProvider'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { tokenAlive, setTokenAlive } = useContext(LoginContext)
  const [email, setEmail] = useState('danylo@gmail.com')
  const [password, setPassword] = useState('gatito123')
  console.log(email)
  console.log(password)
  const updateEmail = (event) => {
    setEmail(event.target.value)
    console.log(email)
  }
  const updatePassword = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }
  const callAPI = async (event) => {
    console.log()
    event.preventDefault()
    await apiTypeRol(email, password)
    setTokenAlive(true)
    navigate('/home')
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
