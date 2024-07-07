import { createContext } from 'react'

interface AuthContext {}

export const AuthContext = createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
