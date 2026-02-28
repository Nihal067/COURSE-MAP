import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../services/api'
import './RoadmapPage.css'

function getDomain(id) {
    return (window.DOMAINS || []).find(d => d.id === id)
}

const PHASE_NAMES = ['Fundamentals', 'Core Concepts', 'Intermediate', 'Advanced', 'Specialization']

export default function RoadmapPage() {
    const { domainId } = useParams()
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const domain = getDomain(domainId)

    const [completedSteps, setCompletedSteps] = useState([])
    const [isEnrolled, setIsEnrolled] = useState(false)
    const [activeStep, setActiveStep] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!domain) { navigate('/dashboard'); return }
        async function load() {
            try {
                const [progRes, enrollRes] = await Promise.all([
                    api.get(`/progress/${domainId}`),
                    api.get('/enrollment')
                ])
                setCompletedSteps(progRes.data.completedSteps || [])
                setIsEnrolled((enrollRes.data.domainIds || []).includes(domainId))
            } catch (e) { console.warn(e) }
            finally { setLoading(false) }
        }
        load()
    }, [domainId])

    if (!domain) return null

    const total = domain.steps?.length || 0
    const pct = total > 0 ? Math.round((completedSteps.length / total) * 100) : 0
    const phaseSize = Math.max(1, Math.ceil(total / PHASE_NAMES.length))

    async function toggleEnroll() {
        try {
            if (isEnrolled) { await api.delete(`/enrollment/${domainId}`); setIsEnrolled(false) }
            else { await api.post(`/enrollment/${domainId}`); setIsEnrolled(true) }
        } catch (e) { console.warn(e) }
    }

    async function toggleStep(idx) {
        const next = completedSteps.includes(idx)
            ? completedSteps.filter(i => i !== idx)
            : [...completedSteps, idx]
        setCompletedSteps(next)
        try { await api.post(`/progress/${domainId}`, { completedSteps: next }) } catch (e) { console.warn(e) }
    }

    const activeStepData = activeStep !== null ? domain.steps[activeStep] : null

    return (
        <div className="roadmap-page">
            {/* Nav */}
            <nav className="roadmap-nav">
                <button className="back-btn" onClick={() => navigate('/dashboard')}>← Dashboard</button>
                <a className="roadmap-nav-brand" href="/dashboard" onClick={e => { e.preventDefault(); navigate('/dashboard') }}>
                    <span>🗺️</span><span className="roadmap-nav-brand-name">CourseMap</span>
                </a>
                <div className="nav-right">
                    <span className="nav-username">{user?.name}</span>
                    <button className="btn-signout" onClick={logout}>Sign Out</button>
                </div>
            </nav>

            {/* Domain Header */}
            <div className="domain-header">
                <span className="cat-badge" style={{ color: domain.color }}>{domain.cat}</span>
                <h1 className="domain-title">{domain.name}</h1>
                <div className="domain-meta">
                    <span>📌 {total} Steps</span>
                    <span>📚 {domain.steps?.reduce((s, st) => s + (st.courses?.length || 0) + (st.videos?.length || 0) + (st.books?.length || 0) + (st.websites?.length || 0), 0)} Resources</span>
                </div>
                <button className={`btn-enroll ${isEnrolled ? 'enrolled' : ''}`} onClick={toggleEnroll}>
                    {isEnrolled ? '✓ Enrolled' : 'Enroll in Path'}
                </button>
            </div>

            {/* Progress Bar */}
            <div className="prog-row">
                <div className="prog-inner">
                    <span className="prog-label">{completedSteps.length}/{total} done</span>
                    <div className="prog-track"><div className="prog-fill" style={{ width: `${pct}%` }} /></div>
                    <span className="prog-pct">{pct}%</span>
                </div>
            </div>

            {/* Flow Canvas */}
            {loading ? <div className="spinner-wrap"><div className="spinner" /></div> : (
                <div className="flow-canvas">
                    {domain.steps.map((step, i) => {
                        const phase = Math.min(Math.floor(i / phaseSize), PHASE_NAMES.length - 1)
                        const prevPhase = i > 0 ? Math.min(Math.floor((i - 1) / phaseSize), PHASE_NAMES.length - 1) : -1
                        const isDone = completedSteps.includes(i)
                        const isActive = activeStep === i
                        return (
                            <div key={i} style={{ width: '100%', maxWidth: 700, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {phase !== prevPhase && (
                                    <div className="flow-phase">
                                        <div className="flow-phase-line" />
                                        <div className="flow-phase-label">{PHASE_NAMES[phase]}</div>
                                        <div className="flow-phase-line" />
                                    </div>
                                )}
                                <div className={`flow-node ${isDone ? 'fc-done' : ''} ${isActive ? 'fc-active' : ''}`}
                                    style={{ '--nc': domain.color || '#6366f1' }}
                                    onClick={() => setActiveStep(isActive ? null : i)}>
                                    <div className="flow-node-box">
                                        <div className="fc-check">{isDone ? '✓' : ''}</div>
                                        <div className="fc-body">
                                            <div className="fc-step-lbl">Step {i + 1}</div>
                                            <div className="fc-title">{step.title}</div>
                                            <div className="fc-desc">{step.desc}</div>
                                        </div>
                                        <div className="fc-meta">
                                            <span className="fc-dur">⏱ {step.dur}</span>
                                        </div>
                                        <span className="fc-arrow">›</span>
                                    </div>
                                </div>
                                {/* Inline resource panel */}
                                {isActive && (
                                    <div className="step-panel">
                                        <button className={`btn-mark-done ${isDone ? 'done' : ''}`} onClick={() => toggleStep(i)}>
                                            {isDone ? '✓ Completed' : '○ Mark Complete'}
                                        </button>
                                        <p className="step-panel-desc">{step.desc}</p>
                                        {['courses', 'videos', 'books', 'websites'].map(type => (
                                            step[type]?.length > 0 && (
                                                <div key={type} className="res-group">
                                                    <h4 className="res-group-title">
                                                        {type === 'courses' ? '🎓 Courses' : type === 'videos' ? '▶ Videos' : type === 'books' ? '📖 Books' : '🌐 Websites'}
                                                    </h4>
                                                    {step[type].map((r, ri) => (
                                                        <a key={ri} href={r.url} target="_blank" rel="noopener" className={`res-item r-${type}`}>
                                                            <div className="res-info">
                                                                <span className="res-name">{r.name}</span>
                                                                {r.platform && <span className="res-plat">{r.platform}</span>}
                                                            </div>
                                                            <span className={r.paid ? 'badge-p' : 'badge-f'}>{r.paid ? 'Paid' : 'Free'}</span>
                                                            <span className="res-arrow">↗</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            )
                                        ))}
                                    </div>
                                )}
                                {i < total - 1 && <div className="flow-connector" />}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
