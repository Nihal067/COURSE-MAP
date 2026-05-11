/* Dashboard logic - backend connected */

document.addEventListener('DOMContentLoaded', async function () {
    try { if (!Auth.requireAuth()) return; } catch (e) { return; }

    const user = Auth.getCurrentUser();
    if (!user) { window.location.href = 'index.html'; return; }

    initNavbar(user);
    initGreeting(user);
    updateStats(user);
    initExploreModal(user);
    await renderEnrolledDomains(user);
});

function initNavbar(user) {
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', () => Auth.logout());

    // Attach to all "Explore" or "Add Domain" buttons
    const exploreButtons = [
        'btn-open-explore', 
        'btn-open-explore2', 
        'btn-explore-cta'
    ];
    exploreButtons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', openExplore);
    });
}

function initGreeting(user) {
    const el = document.getElementById('greeting-name');
    if (el) el.textContent = user.name.split(' ')[0];
}

async function updateStats(user) {
    const domainsEl = document.getElementById('stat-domains');
    if (domainsEl && typeof DOMAINS !== 'undefined') domainsEl.textContent = DOMAINS.length;

    const localKey = 'courseMap_enrolled_' + user.email;
    const localIds = JSON.parse(localStorage.getItem(localKey) || '[]');

    try {
        const { domainIds } = await API.getEnrollment();
        const mergedIds = [...new Set([...(domainIds || []), ...localIds])];
        const enrolledEl = document.getElementById('stat-enrolled');
        if (enrolledEl) enrolledEl.textContent = mergedIds.length;
    } catch (e) {
        const enrolledEl = document.getElementById('stat-enrolled');
        if (enrolledEl) enrolledEl.textContent = localIds.length;
        console.warn('Could not fetch enrollment stats:', e.message);
    }
}

function buildDomainCard(domain, enrolledIds, progressMap) {
    const isEnrolled = enrolledIds.includes(domain.id);
    const completedSteps = progressMap[domain.id] || [];
    const totalSteps = domain.steps ? domain.steps.length : 0;
    const pct = totalSteps > 0 ? Math.round((completedSteps.length / totalSteps) * 100) : 0;

    let totalRes = 0;
    try {
        totalRes = domain.steps.reduce((s, st) =>
            s + (st.courses?.length || 0) + (st.videos?.length || 0)
            + (st.books?.length || 0) + (st.websites?.length || 0), 0);
    } catch (e) {
        totalRes = 0;
    }

    const card = document.createElement('a');
    card.href = 'roadmap.html?domain=' + domain.id;
    card.className = 'domain-card';
    card.style.setProperty('--card-accent', domain.color || '#6366f1');

    const progressBar = isEnrolled
        ? `<div class="card-progress"><div class="card-progress-track"><div class="card-progress-fill" style="width:${pct}%;background:${domain.color || '#6366f1'}"></div></div><span class="card-pct">${pct}%</span></div>`
        : '';

    let courseCount = 0;
    let videoCount = 0;
    try {
        domain.steps.forEach(st => {
            courseCount += (st.courses?.length || 0);
            videoCount += (st.videos?.length || 0);
        });
    } catch (e) {}

    let catLabel = domain.cat || 'General';
    if (typeof CATEGORIES !== 'undefined') {
        const catObj = CATEGORIES.find(c => c.id === domain.cat);
        if (catObj) catLabel = catObj.label;
    }

    card.innerHTML = `
        <div class="card-body">
            <h3 style="margin: 0 0 12px 0; font-size: 18px; color: var(--text-primary); text-transform: none;">${domain.name}</h3>
            <div class="card-meta" style="display: flex; gap: 12px; font-size: 13px; color: var(--text-secondary); border-top: 1px solid var(--bg-glass-border); padding-top: 10px;">
                <span>${totalSteps} Steps</span>
                <span style="color: var(--accent-purple); font-weight: 600;">${courseCount} Courses</span>
                <span>${videoCount} Videos</span>
            </div>
            ${progressBar}
        </div>
        <span class="card-arrow" style="position: absolute; right: 16px; bottom: 16px;">></span>`;

    return card;
}

async function renderEnrolledDomains(user) {
    const grid = document.getElementById('enrolled-grid');
    const emptyState = document.getElementById('empty-state');
    if (!grid) return;

    grid.innerHTML = '<p style="color:var(--t2);padding:16px">Loading your domains...</p>';

    const localKey = 'courseMap_enrolled_' + user.email;
    const localIds = JSON.parse(localStorage.getItem(localKey) || '[]');
    let enrolledIds = [];
    let progressMap = {};

    try {
        const data = await API.getEnrollment();
        const backendIds = data.domainIds || [];
        enrolledIds = [...new Set([...backendIds, ...localIds])];

        // Sync fallback local enrollments into backend when possible.
        const missingInBackend = enrolledIds.filter(id => !backendIds.includes(id));
        if (missingInBackend.length > 0) {
            await Promise.all(missingInBackend.map(id => API.enroll(id).catch(() => null)));
        }
        localStorage.setItem(localKey, JSON.stringify(enrolledIds));

        const progressResults = await Promise.all(
            enrolledIds.map(id =>
                API.getProgress(id).then(r => ({ id, steps: r.completedSteps || [] })).catch(() => ({ id, steps: [] }))
            )
        );
        progressResults.forEach(({ id, steps }) => { progressMap[id] = steps; });
    } catch (e) {
        console.warn('Backend unavailable, falling back to localStorage:', e.message);
        enrolledIds = localIds;
    }

    grid.innerHTML = '';
    grid.style.display = 'grid';

    if (enrolledIds.length === 0) {
        if (emptyState) {
            emptyState.style.display = 'flex';
            const ctaBtn = document.getElementById('btn-explore-cta');
            if (ctaBtn) ctaBtn.addEventListener('click', openExplore);
        }
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    const enrolledDomains = (typeof DOMAINS !== 'undefined' ? DOMAINS : [])
        .filter(d => enrolledIds.includes(d.id));

    enrolledDomains.forEach((domain, i) => {
        const card = buildDomainCard(domain, enrolledIds, progressMap);
        grid.appendChild(card);
        setTimeout(() => card.classList.add('visible'), i * 40);
    });
}

let exploreInitialized = false;
let currentFilter = 'all';

function openExplore() {
    const overlay = document.getElementById('explore-overlay');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (!exploreInitialized) {
        initExploreModal(Auth.getCurrentUser());
        exploreInitialized = true;
    }
}

function closeExplore() {
    const overlay = document.getElementById('explore-overlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

function initExploreModal(user) {
    const closeBtn = document.getElementById('btn-close-modal');
    if (closeBtn) closeBtn.addEventListener('click', closeExplore);

    const overlay = document.getElementById('explore-overlay');
    if (overlay) {
        overlay.addEventListener('click', e => {
            if (e.target === overlay) closeExplore();
        });
    }

    const catContainer = document.getElementById('modal-cats');
    if (catContainer && typeof CATEGORIES !== 'undefined') {
        catContainer.innerHTML = '';
        CATEGORIES.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'modal-cat-chip' + (cat.id === 'all' ? ' active' : '');
            btn.textContent = cat.label;
            btn.dataset.cat = cat.id;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.modal-cat-chip').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = cat.id;
                const q = document.getElementById('modal-search');
                renderExploreGrid(user, q ? q.value : '');
            });
            catContainer.appendChild(btn);
        });
    }

    const searchInput = document.getElementById('modal-search');
    if (searchInput) {
        searchInput.addEventListener('input', e => renderExploreGrid(user, e.target.value));
    }

    renderExploreGrid(user, '');
}

function renderExploreGrid(user, query) {
    const grid = document.getElementById('explore-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (typeof DOMAINS === 'undefined' || !Array.isArray(DOMAINS)) {
        grid.innerHTML = '<p class="no-results">No domains found. Please reload the page.</p>';
        return;
    }

    const q = (query || '').trim().toLowerCase();
    let filtered = DOMAINS.filter(d => {
        const matchCat = currentFilter === 'all' || d.cat === currentFilter;
        const matchQ = !q || d.name.toLowerCase().includes(q) || (d.cat?.toLowerCase() || '').includes(q);
        return matchCat && matchQ;
    });

    // Shuffle only for "All Domains" to show variety
    if (currentFilter === 'all' && !q) {
        filtered = [...filtered].sort(() => Math.random() - 0.5);
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="no-results">No domains match your search.</p>';
        return;
    }

    filtered.forEach((domain, i) => {
        const card = buildDomainCard(domain, [], {});
        grid.appendChild(card);
        setTimeout(() => card.classList.add('visible'), i * 30);
    });
}
