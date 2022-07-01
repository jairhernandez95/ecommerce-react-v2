import { createContext, useState, useEffect } from 'react'
import apiGetUser from '../services/apiGetUser'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiGetUser()
      const name = await response.data.user.first_name
      setUserName(name)
      console.log(userName)
      const role = await response.data.role
      setUserRole(role)
      console.log(userRole)
    }
    if (window.localStorage.getItem('token')) {
      fetchData()
    }
  }, [])

  const initialValue = {
    userName,
    setUserName,
    userRole,
    setUserRole
  }
  return (
    <UserContext.Provider value={initialValue}>
      {children}
    </UserContext.Provider>
  )
}
