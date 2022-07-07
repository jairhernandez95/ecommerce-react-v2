import 'bootstrap/dist/css/bootstrap.min.css'
import apiGetUser from '../services/apiGetUser'
import { LoginContext } from '../context/LoginContext'
import { SignupContext } from '../context/SignupContext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const { tokenAlive } = useContext(LoginContext)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const updateName = (event) => {
    setName(event.target.value)
    console.log(name)
  }
  const updateLastName = (event) => {
    setLastName(event.target.value)
    console.log(lastName)
  }
  const updateBirthDate = (event) => {
    setBirthDate(event.target.value)
    console.log(birthDate)
  }
  const updateGender = (event) => {
    setGender(event.target.value)
    console.log(gender)
  }
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
          <label>First Name</label>
          <input type='email' className='form-control' placeholder='Carlos' onChange={updateName} />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input type='password' className='form-control' placeholder='Mendez' onChange={updateLastName} />
        </div>
        <div className='form-group'>
          <label>Birth Date</label>
          <input type='password' className='form-control' placeholder='1995-01-23' onChange={updateBirthDate} />
        </div>
        <div className='form-group'>
          <label>Gender("F" form female and "M" for male)</label>
          <input type='Text' className='form-control' placeholder='M' onChange={updateGender} />
        </div>
        <div className='form-group'>
          <label>E-mail</label>
          <input type='Text' className='form-control' placeholder='danylo@gmail.com' onChange={updateEmail} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='Text' className='form-control' placeholder='********' onChange={updatePassword} />
        </div>
        <div className='form-group'>
          <label>Repeat Password</label>
          <input type='Text' className='form-control' placeholder='********' />
        </div>
        <button type='submit' className='btn btn-primary'>Signup</button>
      </form>
    )
  }
}

export default Signup
