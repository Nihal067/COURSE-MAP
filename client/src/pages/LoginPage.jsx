import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './LoginPage.css'

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function LoginPage() {
    const { login, requestSignupOtp, register, isLoggedIn } = useAuth()
    const navigate = useNavigate()

    const [tab, setTab] = useState('login')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [otpSending, setOtpSending] = useState(false)
    const [otpRequestedFor, setOtpRequestedFor] = useState('')

    const [signupName, setSignupName] = useState('')
    const [signupEmail, setSignupEmail] = useState('')
    const [signupPassword, setSignupPassword] = useState('')
    const [signupOtp, setSignupOtp] = useState('')

    useEffect(() => {
        if (isLoggedIn) navigate('/dashboard')
    }, [isLoggedIn, navigate])

    useEffect(() => {
        const normalized = signupEmail.trim().toLowerCase()
        if (otpRequestedFor && normalized !== otpRequestedFor) {
            setOtpRequestedFor('')
        }
    }, [signupEmail, otpRequestedFor])

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
        } finally {
            setLoading(false)
        }
    }

    async function handleSendOtp() {
        setError('')
        setSuccess('')

        const email = signupEmail.trim().toLowerCase()
        if (!email) {
            setError('Please enter your email first.')
            return
        }
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.')
            return
        }

        setOtpSending(true)
        try {
            const data = await requestSignupOtp(email)
            setOtpRequestedFor(email)
            setSuccess(data.message || 'OTP sent to your email.')
        } catch (err) {
            setError(err.response?.data?.message || 'Could not send OTP. Please try again.')
        } finally {
            setOtpSending(false)
        }
    }

    async function handleRegister(e) {
        e.preventDefault()
        setError('')
        setSuccess('')

        const name = signupName.trim()
        const email = signupEmail.trim().toLowerCase()
        const password = signupPassword
        const otp = signupOtp.trim()

        if (!name || !email || !password || !otp) {
            setError('Name, email, password and OTP are required.')
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
        if (!/^\d{6}$/.test(otp)) {
            setError('OTP must be 6 digits.')
            return
        }
        if (otpRequestedFor !== email) {
            setError('Please click "Send OTP" for this email first.')
            return
        }

        setLoading(true)
        try {
            await register(name, email, password, otp)
            navigate('/dashboard')
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-page">
            <div className="login-bg">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>

            <div className="login-container">
                <div className="brand">
                    <div className="brand-icon">CM</div>
                    <h1 className="gradient-text">CourseMap</h1>
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
                                <input name="password" type="password" placeholder="Enter your password" required />
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
                                    placeholder="John Doe"
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
                                    placeholder="Min. 6 characters"
                                    minLength={6}
                                    value={signupPassword}
                                    onChange={(e) => setSignupPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                className="btn-submit"
                                onClick={handleSendOtp}
                                disabled={otpSending}
                            >
                                {otpSending ? 'Sending OTP...' : 'Send OTP'}
                            </button>
                            <div className="form-group">
                                <label>Email OTP</label>
                                <input
                                    name="otp"
                                    type="text"
                                    placeholder="Enter 6-digit OTP"
                                    maxLength={6}
                                    inputMode="numeric"
                                    value={signupOtp}
                                    onChange={(e) => setSignupOtp(e.target.value)}
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
        </div>
    )
}
