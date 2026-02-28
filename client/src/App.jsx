import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import RoadmapPage from './pages/RoadmapPage'

function PrivateRoute({ children }) {
    const { isLoggedIn } = useAuth()
    return isLoggedIn ? children : <Navigate to="/login" replace />
}

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            <Route path="/roadmap/:domainId" element={<PrivateRoute><RoadmapPage /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}
