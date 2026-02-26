/* ===== DASHBOARD LOGIC ===== */

const ENROLLED_PREFIX = 'courseMap_enrolled_';

function getEnrolledKey(email) {
    return ENROLLED_PREFIX + email;
}

function getEnrolledIds(email) {
    try {
        const raw = localStorage.getItem(getEnrolledKey(email));
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

document.addEventListener('DOMContentLoaded', function () {
    try {
        if (!Auth.requireAuth()) return;
    } catch (e) {
        console.error('Auth error:', e);
        return;
    }

    var user;
    try {
        user = Auth.getCurrentUser();
    } catch (e) {
        console.error('getCurrentUser error:', e);
        return;
    }

    try { initNavbar(user); } catch (e) { console.error('initNavbar error:', e); }
    try { initGreeting(user); } catch (e) { console.error('initGreeting error:', e); }
    try { renderEnrolledDomains(user); } catch (e) {
        console.error('renderEnrolledDomains error:', e);
        // Fallback: show all domains if something crashed
        try { renderAllDomainsAsFallback(); } catch (e2) { console.error('fallback error:', e2); }
    }
    try { initExploreModal(user); } catch (e) { console.error('initExploreModal error:', e); }
    try { updateStats(user); } catch (e) { console.error('updateStats error:', e); }
});

/* ── Navbar ── */
function initNavbar(user) {
    var nameEl = document.getElementById('user-display-name');
    if (nameEl) nameEl.textContent = user.name;
    var logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', function () { Auth.logout(); });
    var exploreBtn = document.getElementById('btn-open-explore');
    if (exploreBtn) exploreBtn.addEventListener('click', openExplore);
}

/* ── Greeting ── */
function initGreeting(user) {
    var el = document.getElementById('greeting-name');
    if (el) el.textContent = user.name.split(' ')[0] + ' 👋';
}

/* ── Stats ── */
function updateStats(user) {
    var enrolled = getEnrolledIds(user.email);
    var enrolledEl = document.getElementById('stat-enrolled');
    if (enrolledEl) enrolledEl.textContent = enrolled.length;
    var domainsEl = document.getElementById('stat-domains');
    if (domainsEl && typeof DOMAINS !== 'undefined') domainsEl.textContent = DOMAINS.length;
}

/* ── Build a domain card ── */
function buildDomainCard(domain, user) {
    var enrolledIds = user ? getEnrolledIds(user.email) : [];
    var isEnrolled = enrolledIds.includes(domain.id);

    var totalRes = 0;
    try {
        totalRes = domain.steps.reduce(function (s, st) {
            return s + (st.courses ? st.courses.length : 0)
                + (st.videos ? st.videos.length : 0)
                + (st.books ? st.books.length : 0)
                + (st.websites ? st.websites.length : 0);
        }, 0);
    } catch (e) { totalRes = 0; }

    var pct = 0;
    try {
        var progressKey = 'courseMap_progress_' + user.email + '_' + domain.id;
        var progressData = localStorage.getItem(progressKey);
        var completed = progressData ? JSON.parse(progressData).length : 0;
        pct = domain.steps.length > 0 ? Math.round((completed / domain.steps.length) * 100) : 0;
    } catch (e) { pct = 0; }

    var card = document.createElement('a');
    card.href = 'roadmap.html?domain=' + domain.id;
    card.className = 'domain-card';
    card.style.setProperty('--card-color', domain.color || '#6366f1');

    var progressBar = isEnrolled
        ? '<div class="card-progress"><div class="card-progress-track"><div class="card-progress-fill" style="width:' + pct + '%;background:' + (domain.color || '#6366f1') + '"></div></div><span class="card-pct">' + pct + '%</span></div>'
        : '';

    card.innerHTML = '<div class="card-body">'
        + '<span class="card-cat">' + (domain.cat || '') + '</span>'
        + '<h3 class="card-title">' + domain.name + '</h3>'
        + '<div class="card-meta">'
        + '<span>📌 ' + domain.steps.length + ' steps</span>'
        + '<span>📦 ' + totalRes + ' resources</span>'
        + '</div>'
        + progressBar
        + '</div>'
        + '<span class="card-arrow">→</span>';

    return card;
}

/* ── Fallback: render all domains if other logic fails ── */
function renderAllDomainsAsFallback() {
    var grid = document.getElementById('enrolled-grid');
    if (!grid || typeof DOMAINS === 'undefined') return;
    grid.innerHTML = '';
    grid.style.display = 'grid';
    DOMAINS.forEach(function (domain, index) {
        var card = buildDomainCard(domain, Auth.getCurrentUser());
        grid.appendChild(card);
        setTimeout(function () { card.classList.add('visible'); }, index * 30);
    });
}

/* ── My Enrolled Domains ── */
function renderEnrolledDomains(user) {
    var enrolledIds = getEnrolledIds(user.email);
    var grid = document.getElementById('enrolled-grid');
    var emptyState = document.getElementById('empty-state');

    if (!grid) return;

    grid.innerHTML = '';

    // Always show all domains (enrolled ones show progress bar, others don't)
    // If no enrollments: show empty-state prompt above the full grid
    if (enrolledIds.length === 0) {
        if (emptyState) {
            emptyState.style.display = 'flex';
            var ctaBtn = document.getElementById('btn-explore-cta');
            if (ctaBtn) ctaBtn.addEventListener('click', openExplore);
        }
    } else {
        if (emptyState) emptyState.style.display = 'none';
    }

    grid.style.display = 'grid';

    // Show only enrolled domains
    var enrolledDomains = [];

    if (typeof DOMAINS !== 'undefined' && Array.isArray(DOMAINS)) {
        DOMAINS.forEach(function (d) {
            if (enrolledIds.includes(d.id)) {
                enrolledDomains.push(d);
            }
        });
    }

    enrolledDomains.forEach(function (domain, index) {
        var card = buildDomainCard(domain, user);
        grid.appendChild(card);
        setTimeout(function () { card.classList.add('visible'); }, index * 40);
    });
}

/* ── Explore Modal ── */
var exploreInitialized = false;
var currentFilter = 'all';

function openExplore() {
    var overlay = document.getElementById('explore-overlay');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (!exploreInitialized) {
        try {
            initExploreModal(Auth.getCurrentUser());
            exploreInitialized = true;
        } catch (e) { console.error('initExploreModal in openExplore:', e); }
    }
}

function closeExplore() {
    var overlay = document.getElementById('explore-overlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

function initExploreModal(user) {
    var closeBtn = document.getElementById('btn-close-modal');
    if (closeBtn) closeBtn.addEventListener('click', closeExplore);

    var overlay = document.getElementById('explore-overlay');
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeExplore();
        });
    }

    // Category chips
    var catContainer = document.getElementById('modal-cats');
    if (catContainer && typeof CATEGORIES !== 'undefined') {
        catContainer.innerHTML = '';
        CATEGORIES.forEach(function (cat) {
            var btn = document.createElement('button');
            btn.className = 'modal-cat-chip' + (cat.id === 'all' ? ' active' : '');
            btn.textContent = cat.label;
            btn.dataset.cat = cat.id;
            btn.addEventListener('click', function () {
                document.querySelectorAll('.modal-cat-chip').forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                currentFilter = cat.id;
                var searchInput = document.getElementById('modal-search');
                renderExploreGrid(user, searchInput ? searchInput.value : '');
            });
            catContainer.appendChild(btn);
        });
    }

    // Search
    var searchInput = document.getElementById('modal-search');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            renderExploreGrid(user, e.target.value);
        });
    }

    renderExploreGrid(user, '');
}

function renderExploreGrid(user, query) {
    var grid = document.getElementById('explore-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (typeof DOMAINS === 'undefined' || !Array.isArray(DOMAINS)) {
        grid.innerHTML = '<p class="no-results">No domains found. Please reload the page.</p>';
        return;
    }

    var q = (query || '').trim().toLowerCase();
    var filtered = DOMAINS.filter(function (d) {
        var matchCat = currentFilter === 'all' || d.cat === currentFilter;
        var matchQ = !q || d.name.toLowerCase().includes(q) || (d.cat || '').toLowerCase().includes(q);
        return matchCat && matchQ;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="no-results">No domains match your search.</p>';
        return;
    }

    filtered.forEach(function (domain, index) {
        var card = buildDomainCard(domain, user);
        grid.appendChild(card);
        setTimeout(function () { card.classList.add('visible'); }, index * 30);
    });
}
