import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './LoginPage.css'

export default function LoginPage() {
    const { login, register, isLoggedIn } = useAuth()
    const navigate = useNavigate()
    const [tab, setTab] = useState('login')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    if (isLoggedIn) { navigate('/dashboard'); return null }

    async function handleLogin(e) {
        e.preventDefault()
        setError(''); setSuccess('')
        const email = e.target.email.value.trim()
        const password = e.target.password.value
        setLoading(true)
        try {
            await login(email, password)
            navigate('/dashboard')
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.')
        } finally { setLoading(false) }
    }

    async function handleRegister(e) {
        e.preventDefault()
        setError(''); setSuccess('')
        const name = e.target.name.value.trim()
        const email = e.target.email.value.trim()
        const password = e.target.password.value
        setLoading(true)
        try {
            await register(name, email, password)
            navigate('/dashboard')
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.')
        } finally { setLoading(false) }
    }

    return (
        <div className="login-page">
            <div className="login-bg">
                <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
            </div>
            <div className="login-container">
                <div className="brand">
                    <div className="brand-icon">🗺️</div>
                    <h1 className="gradient-text">CourseMap</h1>
                    <p>Navigate your learning path with clarity</p>
                </div>
                <div className="login-card">
                    <div className="auth-tabs">
                        <button className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => { setTab('login'); setError('') }}>Sign In</button>
                        <button className={`auth-tab ${tab === 'signup' ? 'active' : ''}`} onClick={() => { setTab('signup'); setError('') }}>Create Account</button>
                    </div>
                    {error && <div className="auth-alert error">{error}</div>}
                    {success && <div className="auth-alert success">{success}</div>}

                    {tab === 'login' ? (
                        <form className="auth-form" onSubmit={handleLogin}>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input name="email" type="email" placeholder="you@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" type="password" placeholder="Enter your password" required />
                            </div>
                            <button type="submit" className="btn-submit" disabled={loading}>
                                {loading ? 'Signing in…' : 'Sign In'}
                            </button>
                        </form>
                    ) : (
                        <form className="auth-form" onSubmit={handleRegister}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input name="name" type="text" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input name="email" type="email" placeholder="you@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" type="password" placeholder="Min. 6 characters" minLength={6} required />
                            </div>
                            <button type="submit" className="btn-submit" disabled={loading}>
                                {loading ? 'Creating account…' : 'Create Account'}
                            </button>
                        </form>
                    )}
                </div>
                <div className="login-footer"><p>Start exploring roadmaps in every domain 🚀</p></div>
            </div>
        </div>
    )
}
