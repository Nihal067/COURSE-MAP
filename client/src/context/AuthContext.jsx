import { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try { return JSON.parse(localStorage.getItem('cm_user')) } catch { return null }
    })
    const [loading, setLoading] = useState(false)

    const login = async (email, password) => {
        const { data } = await api.post('/auth/login', { email, password })
        localStorage.setItem('cm_token', data.token)
        localStorage.setItem('cm_user', JSON.stringify(data.user))
        setUser(data.user)
        return data.user
    }

    const register = async (name, email, password) => {
        const { data } = await api.post('/auth/register', { name, email, password })
        localStorage.setItem('cm_token', data.token)
        localStorage.setItem('cm_user', JSON.stringify(data.user))
        setUser(data.user)
        return data.user
    }

    const logout = () => {
        localStorage.removeItem('cm_token')
        localStorage.removeItem('cm_user')
        setUser(null)
    }

    const isLoggedIn = !!user && !!localStorage.getItem('cm_token')

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
