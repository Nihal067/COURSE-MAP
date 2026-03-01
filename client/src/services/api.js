import axios from 'axios'

const configuredApiBase = (import.meta.env.VITE_API_BASE_URL || '').trim()
const baseURL = configuredApiBase ? configuredApiBase.replace(/\/$/, '') : '/api'

const api = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' }
})

// Auto-attach JWT token to every request
api.interceptors.request.use(config => {
    const token = localStorage.getItem('cm_token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

// Auto-logout on 401
api.interceptors.response.use(
    res => res,
    err => {
        if (err.response?.status === 401) {
            localStorage.removeItem('cm_token')
            localStorage.removeItem('cm_user')
            window.location.href = '/login'
        }
        return Promise.reject(err)
    }
)

export default api
