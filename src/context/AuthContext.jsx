import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
    // Store in memory (later we can add localStorage if needed)
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  const register = (userData) => {
    // In a real app, this would call an API
    // For now, we'll just log the user in after registration
    setUser(userData)
    setIsAuthenticated(true)
  }

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    register,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
