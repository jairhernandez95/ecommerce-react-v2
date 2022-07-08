import 'bootstrap/dist/css/bootstrap.min.css'
import apiSignup from '../services/apiSingup'
import { LoginContext } from '../context/LoginContext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const { tokenAlive } = useContext(LoginContext)
  const [first_name, setFirst_Name] = useState('')
  const [last_name, setLast_Name] = useState('')
  const [birth_date, setBirth_Date] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const updateName = (event) => {
    setFirst_Name(event.target.value)
    console.log(first_name)
  }
  const updateLastName = (event) => {
    setLast_Name(event.target.value)
    console.log(last_name)
  }
  const updateBirthDate = (event) => {
    setBirth_Date(event.target.value)
    console.log(birth_date)
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
    const response = await apiSignup(first_name, last_name, birth_date, gender, email, password)
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
          <input type='text' className='form-control' placeholder='Carlos' onChange={updateName} />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input type='text' className='form-control' placeholder='Mendez' onChange={updateLastName} />
        </div>
        <div className='form-group'>
          <label>Birth Date</label>
          <input type='text' className='form-control' placeholder='1995-01-23' onChange={updateBirthDate} />
        </div>
        <div className='form-group'>
          <label>Gender("F" form female and "M" for male)</label>
          <input type='text' className='form-control' placeholder='M' onChange={updateGender} />
        </div>
        <div className='form-group'>
          <label>E-mail</label>
          <input type='text' className='form-control' placeholder='danylo@gmail.com' onChange={updateEmail} />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' placeholder='********' onChange={updatePassword} />
        </div>
        <div className='form-group'>
          <label>Repeat Password</label>
          <input type='password' className='form-control' placeholder='********' />
        </div>
        <button type='submit' className='btn btn-primary'>Signup</button>
      </form>
    )
  }
}

export default Signup
