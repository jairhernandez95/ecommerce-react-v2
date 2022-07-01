import 'bootstrap/dist/css/bootstrap.min.css'
import apiGetUser from '../services/apiGetUser'
import { LoginContext } from '../context/LoginContext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const { tokenAlive } = useContext(LoginContext)
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
    const response = await apiGetUser()
    console.log(response)
    // setTokenAlive(true)
    // navigate('/home')
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
        <button type='submit' className='btn btn-primary'>Signup</button>
      </form>
    )
  }
}

export default Signup
