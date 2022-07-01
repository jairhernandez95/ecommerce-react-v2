import { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import { ProductsContext } from '../context/ProductsContext'
import { UserContext } from '../context/UserContext'

const Header = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const { userName, userRole } = useContext(UserContext)
  console.log(userName)
  const { tokenAlive, setTokenAlive } = useContext(LoginContext)
  const { handleFilterProducts } = useContext(ProductsContext)
  const logout = () => {
    setTokenAlive(false)
    window.localStorage.clear('token')
    navigate('/home')
  }
  const login = () => {
    navigate('/login')
  }
  const signup = () => {
    navigate('/signup')
  }
  const cargarProducto = () => {
    navigate('/load-product')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const value = searchRef.current.value.trim()
    if (value !== '') {
      handleFilterProducts(value)
      navigate('/home/search', { replace: true })
      event.target.reset()
    }
  }
  console.log(userRole)
  if (userRole === 'ADMIN' && tokenAlive === true) {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='nav-item active text-light'>
              <h2>Hola {userName}</h2>
            </li>
            <li className='nav-item active text-light'>
              <h2>Tu tipo de usuario es {userRole}</h2>
            </li>
          </ul>
        </div>
        <div>
          <form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit}>
            <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' ref={searchRef} />
            <button className='btn btn-warning my-2 my-sm-0' type='submit'>Search</button>
            <button className='btn btn-danger my-2 my-sm-0' onClick={logout}>Logout</button>
            <button className='btn btn-primary my-2 my-sm-0' onClick={cargarProducto}>Cargar Producto</button>
          </form>
        </div>
      </nav>
    )
  } else if (userRole === 'CUSTOMER' && tokenAlive === true) {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='nav-item active text-light'>
              <h2>Hola {userName}</h2>
            </li>
            <li className='nav-item active text-light'>
              <h2>Tu tipo de usuario es {userRole}</h2>
            </li>
          </ul>
        </div>
        <div>
          <form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit}>
            <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' ref={searchRef} />
            <button className='btn btn-warning my-2 my-sm-0' type='submit'>Search</button>
            <button className='btn btn-danger my-2 my-sm-0' onClick={logout}>Logout</button>
          </form>
        </div>
      </nav>
    )
  } else if (tokenAlive === false && (userRole !== 'ADMIN' || userRole !== 'CUSTOMER')) {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link to='/home'>Home</Link>
            </li>
          </ul>
        </div>
        <div>
          <form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit}>
            <input className='form-control mr-sm-2' type='search' placeholder='Search Product' aria-label='Search' ref={searchRef} />
            <button className='btn btn-warning my-2 my-sm-0' type='submit'>Search</button>
            <button className='btn btn-danger my-2 my-sm-0' onClick={login}>Login</button>
            <button className='btn btn-primary my-2 my-sm-0' onClick={signup}>Signup</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header
