import { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import { ProductsContext } from '../context/ProductsContext'

const Header = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const { tokenAlive, setTokenAlive } = useContext(LoginContext)
  const { handleFilterProducts } = useContext(ProductsContext)
  const logout = () => {
    setTokenAlive(false)
    window.localStorage.clear('token')
    navigate('/home')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const value = searchRef.current.value.trim()
    if (value !== '') {
      handleFilterProducts(value)
      navigate('/product/search', { replace: true })
      event.target.reset()
    }
  }
  if (tokenAlive === false) {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
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
