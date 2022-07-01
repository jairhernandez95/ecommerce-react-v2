import 'bootstrap/dist/css/bootstrap.min.css'
import apiTypeRol from '../services/apiTypeRol'
import apiGetUser from '../services/apiGetUser'
import { LoginContext } from '../context/LoginContext'
import { UserContext } from '../context/UserContext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { tokenAlive, setTokenAlive } = useContext(LoginContext)
  const { setUserName, setUserRole } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      const name = await newResponse.data.user.first_name
      setUserName(name)
      const role = await newResponse.data.role
      setUserRole(role)
      navigate('/home')
    } else if (response.request.status !== 200) {
      console.log('equivocado')
    }
  }
  const changeToLogin = () => {
    navigate('/signup')
  }

  if (tokenAlive === true) {
    navigate('/home')
  } else {
    return (
      <>
        <form onSubmit={callAPI}>
          <div className='form-group'>
            <label>Email address</label>
            <input className='form-control' placeholder='danylo@gmail.com' onChange={updateEmail} />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input className='form-control' placeholder='gatito123' onChange={updatePassword} />
          </div>
          <button type='submit' className='btn btn-primary'>Login</button>
        </form>
        <button className='btn btn-warning' onClick={changeToLogin}>Registrarse</button>
      </>
    )
  }
}

export default Login
