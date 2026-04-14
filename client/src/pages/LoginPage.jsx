import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './LoginPage.css'

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function LoginPage() {
    const { login, register, isLoggedIn } = useAuth()
    const navigate = useNavigate()

    const [theme, setTheme] = useState('dark')
    const [tab, setTab] = useState('login')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const [signupName, setSignupName] = useState('')
    const [signupEmail, setSignupEmail] = useState('')
    const [signupPassword, setSignupPassword] = useState('')
    const [shouldRedirect, setShouldRedirect] = useState(false)

    // Only redirect if user is already logged in (not on initial page load)
    useEffect(() => {
        if (isLoggedIn && shouldRedirect) {
            navigate('/dashboard')
        }
        // Set flag after first render to allow login form to display
        setShouldRedirect(true)
    }, [isLoggedIn, navigate])

    useEffect(() => {
        const saved = localStorage.getItem('cm_theme')
        const system = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
        const active = saved || system
        document.documentElement.setAttribute('data-theme', active)
        setTheme(active)
    }, [])

    function toggleTheme() {
        const next = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('cm_theme', next)
        document.documentElement.setAttribute('data-theme', next)
        setTheme(next)
    }

    async function handleLogin(e) {
        e.preventDefault()
        setError('')
        setSuccess('')

        const email = e.target.email.value.trim().toLowerCase()
        const password = e.target.password.value

        setLoading(true)
        try {
            await login(email, password)
            navigate('/dashboard')
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.')
            setLoading(false)
        }
    }

    async function handleRegister(e) {
        e.preventDefault()
        setError('')
        setSuccess('')

        const name = signupName.trim()
        const email = signupEmail.trim().toLowerCase()
        const password = signupPassword

        if (!name || !email || !password) {
            setError('Name, email and password are required.')
            return
        }
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.')
            return
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.')
            return
        }

        setLoading(true)
        try {
            await register(name, email, password)
            navigate('/dashboard')
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.')
            setLoading(false)
        }
    }

    return (
        <div className="login-page">
            <button
                type="button"
                className="theme-toggle-login"
                onClick={toggleTheme}
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
                {theme === 'light' ? 'Dark' : 'Light'}
            </button>
            <div className="login-bg">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>

            {loading && (
                <div className="spinner-wrap login-spinner-wrap">
                    <div className="spinner" />
                </div>
            )}

            {!loading && (
                <div className="login-container">
                    <div className="brand">
                        <div className="brand-icon">CM</div>
                        <h1>CourseMap</h1>
                        <p>Navigate your learning path with clarity</p>
                    </div>

                    <div className="login-card">
                        <div className="auth-tabs">
                            <button
                                type="button"
                                className={`auth-tab ${tab === 'login' ? 'active' : ''}`}
                                onClick={() => {
                                    setTab('login')
                                    setError('')
                                    setSuccess('')
                                }}
                            >
                                Sign In
                            </button>
                            <button
                                type="button"
                                className={`auth-tab ${tab === 'signup' ? 'active' : ''}`}
                                onClick={() => {
                                    setTab('signup')
                                    setError('')
                                    setSuccess('')
                                }}
                            >
                                Create Account
                            </button>
                        </div>

                        {error && <div className="auth-alert error">{error}</div>}
                        {success && <div className="auth-alert success">{success}</div>}

                        {tab === 'login' ? (
                            <form className="auth-form" onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input name="email" type="email" required />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="password" type="password" required />
                                </div>
                                <button type="submit" className="btn-submit" disabled={loading}>
                                    {loading ? 'Signing in...' : 'Sign In'}
                                </button>
                            </form>
                        ) : (
                            <form className="auth-form" onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        value={signupName}
                                        onChange={(e) => setSignupName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={signupEmail}
                                        onChange={(e) => setSignupEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        minLength={6}
                                        value={signupPassword}
                                        onChange={(e) => setSignupPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-submit" disabled={loading}>
                                    {loading ? 'Creating account...' : 'Create Account'}
                                </button>
                            </form>
                        )}
                    </div>
                    <div className="login-footer"><p>Start exploring roadmaps in every domain.</p></div>
                </div>
            )}
        </div>
    )
}
