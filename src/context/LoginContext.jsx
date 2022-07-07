import { createContext, useEffect, useState } from 'react'

export const LoginContext = createContext(null)

export const LoginProvider = ({ children }) => {
  const [tokenAlive, setTokenAlive] = useState()
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) { setTokenAlive(true) } else { setTokenAlive(false) }
  }, [window.localStorage.getItem('token')])
  return (
    <LoginContext.Provider value={{ tokenAlive, setTokenAlive }}>
      {children}
    </LoginContext.Provider>
  )
}
