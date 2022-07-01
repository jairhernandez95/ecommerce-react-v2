import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState([])
  const [userRole, setUserRole] = useState([])
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
