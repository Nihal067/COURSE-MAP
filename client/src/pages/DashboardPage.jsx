import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../services/api'
import './DashboardPage.css'

// Import domain data from existing JS data files via a helper
// We load DOMAINS from the window global (included via index.html script tags) or import here
// Since data.js sets window.DOMAINS we access it directly
function getDomains() {
    return window.DOMAINS || []
}

export default function DashboardPage() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [enrolledIds, setEnrolledIds] = useState([])
    const [progressMap, setProgressMap] = useState({})
    const [loading, setLoading] = useState(true)
    const [showExplore, setShowExplore] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [catFilter, setCatFilter] = useState('all')

    const domains = getDomains()
    const categories = [{ id: 'all', label: '🌐 All' },
    ...([...new Set(domains.map(d => d.cat).filter(Boolean))].map(c => ({ id: c, label: c })))]

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await api.get('/enrollment')
                const ids = data.domainIds || []
                setEnrolledIds(ids)
                const pMap = {}
                await Promise.all(ids.map(async id => {
                    try {
                        const r = await api.get(`/progress/${id}`)
                        pMap[id] = r.data.completedSteps || []
                    } catch { pMap[id] = [] }
                }))
                setProgressMap(pMap)
            } catch (e) { console.warn('Fetch error:', e) }
            finally { setLoading(false) }
        }
        fetchData()
    }, [])

    const enrolledDomains = domains.filter(d => enrolledIds.includes(d.id))
    const filteredDomains = domains.filter(d => {
        const matchCat = catFilter === 'all' || d.cat === catFilter
        const matchQ = !searchQuery || d.name.toLowerCase().includes(searchQuery.toLowerCase())
        return matchCat && matchQ
    })

    function getProgress(domain) {
        const steps = progressMap[domain.id] || []
        const total = domain.steps?.length || 0
        return total > 0 ? Math.round((steps.length / total) * 100) : 0
    }

    return (
        <div className="dashboard">
            {/* Navbar */}
            <nav className="navbar">
                <a className="nav-brand" href="/dashboard">
                    <span className="nav-logo">🗺️</span>
                    <h2>CourseMap</h2>
                </a>
                <div className="nav-user">
                    <span className="nav-user-name">Hey, <strong>{user?.name}</strong></span>
                    <button className="btn-logout" onClick={logout}>Sign Out</button>
                </div>
            </nav>

            {/* Hero */}
            <section className="hero">
                <h1>Start Your Journey <span className="gradient-text">{user?.name?.split(' ')[0]} 👋</span></h1>
                <p>Pick up where you left off. Your enrolled domains are below.</p>
            </section>

            {/* Stats */}
            <div className="stats-bar">
                <div className="stat-item">
                    <div className="stat-number">{enrolledIds.length}</div>
                    <div className="stat-label">Enrolled</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">{domains.length}</div>
                    <div className="stat-label">Domains Available</div>
                </div>
            </div>

            {/* My Learning Paths */}
            <section className="my-domains-section">
                <div className="section-header">
                    <h2>📚 My Learning Paths</h2>
                    <button className="btn-explore-nav" onClick={() => setShowExplore(true)}>🔍 Explore More Domains</button>
                </div>
                {loading ? (
                    <div className="spinner-wrap"><div className="spinner" /></div>
                ) : enrolledDomains.length === 0 ? (
                    <div className="empty-state">
                        <div style={{ fontSize: 48 }}>🗺️</div>
                        <h3>No learning paths yet</h3>
                        <p>Explore over 50+ domains and start your first roadmap today.</p>
                        <button className="btn-explore-cta" onClick={() => setShowExplore(true)}>Browse All Domains</button>
                    </div>
                ) : (
                    <div className="domains-grid">
                        {enrolledDomains.map(d => (
                            <a key={d.id} className="domain-card" href={`/roadmap/${d.id}`}
                                onClick={e => { e.preventDefault(); navigate(`/roadmap/${d.id}`) }}
                                style={{ '--card-color': d.color || '#6366f1' }}>
                                <div className="card-body">
                                    <span className="card-cat">{d.cat}</span>
                                    <h3 className="card-title">{d.name}</h3>
                                    <div className="card-meta">
                                        <span>📌 {d.steps?.length} steps</span>
                                    </div>
                                    <div className="card-progress">
                                        <div className="card-progress-track">
                                            <div className="card-progress-fill" style={{ width: `${getProgress(d)}%`, background: d.color || '#6366f1' }} />
                                        </div>
                                        <span className="card-pct">{getProgress(d)}%</span>
                                    </div>
                                </div>
                                <span className="card-arrow">→</span>
                            </a>
                        ))}
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer className="dashboard-footer">
                <p>CourseMap — Built for learners who want structure.</p>
            </footer>

            {/* Explore Modal */}
            {showExplore && (
                <div className="explore-overlay open" onClick={e => { if (e.target.classList.contains('explore-overlay')) setShowExplore(false) }}>
                    <div className="explore-modal">
                        <div className="explore-modal-header">
                            <h2>🔍 Explore All Domains</h2>
                            <button className="btn-close-modal" onClick={() => setShowExplore(false)}>✕</button>
                        </div>
                        <div className="explore-controls">
                            <input className="modal-search" type="text" placeholder="Search domains…"
                                value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                            <div className="modal-cats">
                                {categories.map(cat => (
                                    <button key={cat.id} className={`modal-cat-chip ${catFilter === cat.id ? 'active' : ''}`}
                                        onClick={() => setCatFilter(cat.id)}>{cat.label}</button>
                                ))}
                            </div>
                        </div>
                        <div className="explore-grid">
                            {filteredDomains.map(d => (
                                <a key={d.id} className="domain-card" style={{ '--card-color': d.color || '#6366f1' }}
                                    onClick={e => { e.preventDefault(); setShowExplore(false); navigate(`/roadmap/${d.id}`) }} href={`/roadmap/${d.id}`}>
                                    <div className="card-body">
                                        <span className="card-cat">{d.cat}</span>
                                        <h3 className="card-title">{d.name}</h3>
                                        <div className="card-meta"><span>📌 {d.steps?.length} steps</span></div>
                                    </div>
                                    <span className="card-arrow">→</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
