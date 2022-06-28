import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'

const Header = () => {
  const navigate = useNavigate()
  const { tokenAlive, setTokenAlive } = useContext(LoginContext)
  const logout = () => {
    setTokenAlive(false)
    window.localStorage.clear('token')
    navigate('/home')
  }
  if (tokenAlive === false) {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a className='navbar-brand' href='#'>Ecommerce with React</a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>Home</a>
            </li>
          </ul>
        </div>
        <div>
          <form className='form-inline my-2 my-lg-0'>
            <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-warning my-2 my-sm-0' type='submit'>Search</button>
          </form>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a className='navbar-brand' href='#'>Ecommerce with React</a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>Home</a>
            </li>
          </ul>
        </div>
        <div>
          <form className='form-inline my-2 my-lg-0'>
            <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-warning my-2 my-sm-0' type='submit'>Search</button>
            <button className='btn btn-danger my-2 my-sm-0' onClick={logout}>Logout</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header
