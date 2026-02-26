/* ============================================================
   ROADMAP.SH-STYLE FLOWCHART — Clean Version
   ============================================================ */

const PHASE_NAMES = ['Fundamentals', 'Core Concepts', 'Intermediate', 'Advanced', 'Specialization'];
const RES_ICONS = { courses: '🎓', videos: '▶', books: '📖', websites: '🌐' };

let _domain = null;
let _activeStep = null;

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (!Auth.requireAuth()) return;

        const params = new URLSearchParams(window.location.search);
        const domainId = params.get('domain');
        const domain = (typeof DOMAINS !== 'undefined') ? DOMAINS.find(d => d.id === domainId) : null;

        if (!domain) {
            console.warn('CourseMap: domain not found for id=', domainId, '— redirecting.');
            window.location.href = 'dashboard.html';
            return;
        }

        _domain = domain;
        const user = Auth.getCurrentUser();

        renderHeader(domain);
        initEnrollButton(domain, user);
        renderFlowChart(domain);
        updateProgress(domain);
        initDrawer(domain);

        const nameEl = document.getElementById('user-display-name');
        if (nameEl) nameEl.textContent = user.name;

        const logoutBtn = document.getElementById('btn-logout');
        if (logoutBtn) logoutBtn.addEventListener('click', () => Auth.logout());

    } catch (err) {
        console.error('CourseMap roadmap init error:', err);
        // Show a visible error on screen instead of a blank page
        document.body.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;
                        background:#080a14;color:#f0f0f5;font-family:Inter,sans-serif;padding:24px;text-align:center;">
                <div>
                    <div style="font-size:40px;margin-bottom:16px">⚠️</div>
                    <h2 style="margin-bottom:8px">Something went wrong loading the roadmap</h2>
                    <p style="color:#6a6a8e;margin-bottom:20px;font-size:14px">${err.message}</p>
                    <a href="dashboard.html" style="padding:10px 22px;background:#6366f1;color:#fff;
                       border-radius:8px;text-decoration:none;font-weight:600;">← Back to Dashboard</a>
                </div>
            </div>`;
    }
});

/* ── Header ── */
function renderHeader(domain) {
    document.getElementById('domain-name').textContent = domain.name;
    const cat = document.getElementById('domain-category');
    cat.textContent = domain.cat;
    cat.style.color = domain.color;
    document.getElementById('domain-steps-count').textContent = '📌 ' + domain.steps.length + ' Steps';

    const totalRes = domain.steps.reduce((s, st) =>
        s + (st.courses?.length || 0) + (st.videos?.length || 0)
        + (st.books?.length || 0) + (st.websites?.length || 0), 0);
    document.getElementById('domain-courses-count').textContent = '📚 ' + totalRes + ' Resources';
    document.title = domain.name + ' Roadmap — CourseMap';
}

/* ── Enroll ── */
function initEnrollButton(domain, user) {
    const btn = document.getElementById('btn-enroll');
    if (!btn) return;
    const key = 'courseMap_enrolled_' + user.email;
    let enrolled = JSON.parse(localStorage.getItem(key) || '[]');
    setEnrollStyle(btn, enrolled.includes(domain.id));
    btn.addEventListener('click', () => {
        enrolled = JSON.parse(localStorage.getItem(key) || '[]');
        const has = enrolled.includes(domain.id);
        enrolled = has ? enrolled.filter(id => id !== domain.id) : [...enrolled, domain.id];
        localStorage.setItem(key, JSON.stringify(enrolled));
        setEnrollStyle(btn, !has);
    });
}
function setEnrollStyle(btn, isEnrolled) {
    btn.textContent = isEnrolled ? '✓ Enrolled' : 'Enroll in Path';
    btn.classList.toggle('enrolled', isEnrolled);
}

/* ── Progress helpers ── */
function getProgressKey(domainId) {
    return 'courseMap_progress_' + Auth.getCurrentUser().email + '_' + domainId;
}
function getCompletedSteps(domainId) {
    const d = localStorage.getItem(getProgressKey(domainId));
    return d ? JSON.parse(d) : [];
}
function toggleStep(domainId, idx) {
    const c = getCompletedSteps(domainId);
    const i = c.indexOf(idx);
    if (i > -1) c.splice(i, 1); else c.push(idx);
    localStorage.setItem(getProgressKey(domainId), JSON.stringify(c));
    return c;
}
function updateProgress(domain) {
    const c = getCompletedSteps(domain.id);
    const total = domain.steps.length;
    const pct = total > 0 ? Math.round((c.length / total) * 100) : 0;

    const fill = document.getElementById('rp-fill');
    if (fill) fill.style.width = pct + '%';
    const pctEl = document.getElementById('rp-pct');
    if (pctEl) pctEl.textContent = pct + '%';
    const lbl = document.getElementById('rp-label');
    if (lbl) lbl.textContent = c.length + ' / ' + total + ' done';
}


/* ============================================================
   renderFlowChart — roadmap.sh connected node list
   ============================================================ */
function renderFlowChart(domain) {
    const canvas = document.getElementById('fc-canvas');
    const completed = getCompletedSteps(domain.id);
    const total = domain.steps.length;
    canvas.innerHTML = '';

    const phaseSize = Math.max(1, Math.ceil(total / PHASE_NAMES.length));
    let lastPhase = -1;

    domain.steps.forEach((step, i) => {
        const phase = Math.min(Math.floor(i / phaseSize), PHASE_NAMES.length - 1);
        const isDone = completed.includes(i);

        /* Phase header */
        if (phase !== lastPhase) {
            lastPhase = phase;
            const ph = document.createElement('div');
            ph.className = 'fc-phase';
            ph.innerHTML = `<div class="fc-phase-line"></div>
                            <div class="fc-phase-pill">${PHASE_NAMES[phase]}</div>
                            <div class="fc-phase-line"></div>`;
            canvas.appendChild(ph);
        }

        /* Count resources */
        const resCounts = ['courses', 'videos', 'books', 'websites']
            .filter(t => step[t]?.length > 0)
            .map(t => `<span class="fc-chip">${RES_ICONS[t]} ${step[t].length}</span>`);

        /* Node */
        const node = document.createElement('div');
        node.className = 'fc-node' + (isDone ? ' fc-done' : '');
        node.dataset.step = i;
        node.style.setProperty('--nc', domain.color || '#6366f1');

        node.innerHTML = `
          <div class="fc-node-box">
            <div class="fc-check">${isDone ? '✓' : ''}</div>
            <div class="fc-body">
              <div class="fc-step-lbl">Step ${i + 1}</div>
              <div class="fc-title">${step.title}</div>
              <div class="fc-desc">${step.desc}</div>
            </div>
            <div class="fc-meta">
              <span class="fc-dur">⏱ ${step.dur}</span>
              <div class="fc-chips">${resCounts.join('')}</div>
            </div>
            <span class="fc-arrow">›</span>
          </div>`;

        node.addEventListener('click', () => openDrawer(domain, i));
        canvas.appendChild(node);

        /* Connector (skip after last) */
        if (i < total - 1) {
            const conn = document.createElement('div');
            conn.className = 'fc-connector';
            canvas.appendChild(conn);
        }
    });
}

/* ============================================================
   DRAWER — slide-up resource panel
   ============================================================ */
function initDrawer(domain) {
    document.getElementById('btn-close-drawer').onclick = closeDrawer;
    document.getElementById('drawer-handle').onclick = closeDrawer;
    document.getElementById('drawer-backdrop').onclick = closeDrawer;

    document.getElementById('drawer-complete-btn').addEventListener('click', () => {
        if (_activeStep === null) return;
        const newC = toggleStep(domain.id, _activeStep);
        const isDone = newC.includes(_activeStep);

        const btn = document.getElementById('drawer-complete-btn');
        btn.className = 'btn-complete' + (isDone ? ' done' : '');
        btn.textContent = isDone ? '✓ Completed' : '○ Mark Complete';

        const nodeEl = document.querySelector(`.fc-node[data-step="${_activeStep}"]`);
        if (nodeEl) {
            nodeEl.classList.toggle('fc-done', isDone);
            nodeEl.querySelector('.fc-check').textContent = isDone ? '✓' : '';
        }
        updateProgress(domain);
    });
}

function openDrawer(domain, stepIdx) {
    _activeStep = stepIdx;
    const step = domain.steps[stepIdx];
    const isDone = getCompletedSteps(domain.id).includes(stepIdx);

    /* Highlight node */
    document.querySelectorAll('.fc-node').forEach(n => n.classList.remove('fc-active'));
    document.querySelector(`.fc-node[data-step="${stepIdx}"]`)?.classList.add('fc-active');

    /* Fill drawer info */
    document.getElementById('drawer-step-label').textContent = `Step ${stepIdx + 1} of ${domain.steps.length}`;
    document.getElementById('drawer-title').textContent = step.title;
    document.getElementById('drawer-desc').textContent = step.desc;

    const btn = document.getElementById('drawer-complete-btn');
    btn.className = 'btn-complete' + (isDone ? ' done' : '');
    btn.textContent = isDone ? '✓ Completed' : '○ Mark Complete';

    /* Build tabs */
    const tabBar = document.getElementById('drawer-tab-bar');
    const body = document.getElementById('drawer-body');
    const types = ['courses', 'videos', 'books', 'websites'];
    const labels = { courses: '🎓 Courses', videos: '▶ Videos', books: '📖 Books', websites: '🌐 Websites' };
    const avail = types.filter(t => step[t]?.length > 0);

    tabBar.innerHTML = avail.map((t, ti) =>
        `<button class="res-tab${ti === 0 ? ' active' : ''}" data-tab="${t}">${labels[t]}</button>`
    ).join('');

    body.innerHTML = avail.length > 0
        ? avail.map((t, ti) =>
            `<div class="res-panel${ti === 0 ? ' active' : ''}" data-panel="${t}">${buildLinks(step[t], t)}</div>`
        ).join('')
        : '<p class="no-resources" style="padding:16px 0">No resources added for this step yet.</p>';

    /* Tab switching */
    tabBar.querySelectorAll('.res-tab').forEach(tabBtn => {
        tabBtn.onclick = () => {
            tabBar.querySelectorAll('.res-tab').forEach(b => b.classList.remove('active'));
            body.querySelectorAll('.res-panel').forEach(p => p.classList.remove('active'));
            tabBtn.classList.add('active');
            body.querySelector(`.res-panel[data-panel="${tabBtn.dataset.tab}"]`)?.classList.add('active');
        };
    });

    /* Broken link guard */
    body.querySelectorAll('.resource-link').forEach(link => {
        link.addEventListener('click', e => {
            const url = link.dataset.url;
            if (!url || url === '#' || url === 'null' || url === 'undefined') {
                e.preventDefault();
                showToast('This link is currently broken. Please try another resource.');
            }
        });
    });

    /* Open drawer */
    document.getElementById('resource-drawer').classList.add('open');
    document.getElementById('drawer-backdrop').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    document.getElementById('resource-drawer').classList.remove('open');
    document.getElementById('drawer-backdrop').classList.remove('open');
    document.querySelectorAll('.fc-node').forEach(n => n.classList.remove('fc-active'));
    document.body.style.overflow = '';
    _activeStep = null;
}

function buildLinks(items, type) {
    if (!items?.length) return '<p class="no-resources">No resources yet.</p>';
    return items.map(r => `
      <a href="${r.url}" target="_blank" rel="noopener"
         class="resource-link resource-${type}" data-url="${r.url}">
        <span class="resource-icon">${RES_ICONS[type]}</span>
        <div class="resource-info">
          <span class="resource-name">${r.name}</span>
          ${r.platform ? `<span class="resource-platform">${r.platform}</span>` : ''}
        </div>
        <span class="${r.paid === true ? 'badge-paid' : 'badge-free'}">${r.paid === true ? 'Paid' : 'Free'}</span>
        <span class="resource-ext">↗</span>
      </a>`).join('');
}

/* ── Toast ── */
function showToast(msg) {
    let t = document.getElementById('error-toast');
    if (!t) { t = document.createElement('div'); t.id = 'error-toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.className = 'toast-show';
    setTimeout(() => t.classList.remove('toast-show'), 3000);
}
