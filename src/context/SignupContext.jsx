import { createContext } from 'react'

export const SignupContext = createContext(null)

export const SignupProvider = ({ children }) => {
  return (
    <SignupContext.Provider>
      {children}
    </SignupContext.Provider>
  )
}
