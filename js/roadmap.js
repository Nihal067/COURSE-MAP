/* ===== ROADMAP PAGE LOGIC ===== */
document.addEventListener('DOMContentLoaded', () => {
    if (!Auth.requireAuth()) return;

    const params = new URLSearchParams(window.location.search);
    const domainId = params.get('domain');
    const domain = DOMAINS.find(d => d.id === domainId);

    if (!domain) {
        window.location.href = 'dashboard.html';
        return;
    }

    const user = Auth.getCurrentUser();

    renderHeader(domain);
    initEnrollButton(domain, user);
    renderTimeline(domain);
    updateProgress(domain);
    initScrollReveal();

    // Navbar
    const nameEl = document.getElementById('user-display-name');
    if (nameEl) nameEl.textContent = user.name;
    document.getElementById('btn-logout').addEventListener('click', () => Auth.logout());
});

function initEnrollButton(domain, user) {
    const btn = document.getElementById('btn-enroll');
    if (!btn) return;

    const enrolledKey = 'courseMap_enrolled_' + user.email;
    let enrolled = JSON.parse(localStorage.getItem(enrolledKey) || '[]');
    let isEnrolled = enrolled.includes(domain.id);

    updateEnrollButtonState(btn, isEnrolled);

    btn.addEventListener('click', () => {
        enrolled = JSON.parse(localStorage.getItem(enrolledKey) || '[]');
        if (enrolled.includes(domain.id)) {
            // Un-enroll
            enrolled = enrolled.filter(id => id !== domain.id);
            isEnrolled = false;
        } else {
            // Enroll
            enrolled.push(domain.id);
            isEnrolled = true;
        }
        localStorage.setItem(enrolledKey, JSON.stringify(enrolled));
        updateEnrollButtonState(btn, isEnrolled);
    });
}

function updateEnrollButtonState(btn, isEnrolled) {
    if (isEnrolled) {
        btn.textContent = '✓ Enrolled';
        btn.classList.add('enrolled');
    } else {
        btn.textContent = 'Enroll in Path';
        btn.classList.remove('enrolled');
    }
}

function getProgressKey(domainId) {
    const user = Auth.getCurrentUser();
    return 'courseMap_progress_' + user.email + '_' + domainId;
}

function getCompletedSteps(domainId) {
    const data = localStorage.getItem(getProgressKey(domainId));
    return data ? JSON.parse(data) : [];
}

function toggleStep(domainId, stepIndex) {
    const completed = getCompletedSteps(domainId);
    const idx = completed.indexOf(stepIndex);
    if (idx > -1) {
        completed.splice(idx, 1);
    } else {
        completed.push(stepIndex);
    }
    localStorage.setItem(getProgressKey(domainId), JSON.stringify(completed));
    return completed;
}

function renderHeader(domain) {
    var iconEl = document.getElementById('domain-icon');
    if (iconEl) iconEl.style.display = 'none';
    document.getElementById('domain-name').textContent = domain.name;
    document.getElementById('domain-category').textContent = domain.cat;
    document.getElementById('domain-category').style.color = domain.color;
    document.getElementById('domain-steps-count').textContent = domain.steps.length + ' Steps';

    // Count total resources across all types
    const totalResources = domain.steps.reduce((s, st) => {
        return s +
            (st.courses ? st.courses.length : 0) +
            (st.videos ? st.videos.length : 0) +
            (st.books ? st.books.length : 0) +
            (st.websites ? st.websites.length : 0);
    }, 0);
    document.getElementById('domain-courses-count').textContent = totalResources + ' Resources';

    document.title = domain.name + ' — CourseMap Roadmap';
}

/* Build one tab panel's links */
function buildResourceLinks(items, type) {
    if (!items || items.length === 0) return '<p class="no-resources">No resources yet.</p>';

    const icons = { courses: '🎓', videos: '▶️', books: '📖', websites: '🌐', certificates: '🎖️' };
    return items.map(r => `
        <a href="${r.url}" target="_blank" rel="noopener" class="resource-link resource-${type}" data-url="${r.url}">
            <span class="resource-icon">${icons[type]}</span>
            <div class="resource-info">
                <span class="resource-name">${r.name}</span>
                ${r.platform ? `<span class="resource-platform">${r.platform}</span>` : ''}
            </div>
            <span class="${r.paid === true ? 'badge-paid' : 'badge-free'}">${r.paid === true ? 'Paid' : 'Free'}</span>
            <span class="resource-ext">↗</span>
        </a>
    `).join('');

}

function renderTimeline(domain) {
    const container = document.getElementById('timeline');
    const completed = getCompletedSteps(domain.id);

    domain.steps.forEach((step, i) => {
        const isComplete = completed.includes(i);
        const stepEl = document.createElement('div');
        stepEl.className = 'timeline-step' + (isComplete ? ' completed' : '');
        stepEl.style.transitionDelay = (i * 0.1) + 's';

        const tabTypes = ['courses', 'videos', 'books', 'websites', 'certificates'];
        const tabLabels = { courses: '🎓 Courses', videos: '▶ Videos', books: '📖 Books', websites: '🌐 Websites', certificates: '🎖️ Certificates' };

        // Only show tabs for types that exist and have data
        const availableTabs = tabTypes.filter(t => step[t] && step[t].length > 0);

        const tabsHTML = availableTabs.map((t, ti) => `
            <button class="res-tab${ti === 0 ? ' active' : ''}" data-tab="${t}">${tabLabels[t]}</button>
        `).join('');

        const panelsHTML = availableTabs.map((t, ti) => `
            <div class="res-panel${ti === 0 ? ' active' : ''}" data-panel="${t}">
                ${buildResourceLinks(step[t], t)}
            </div>
        `).join('');

        stepEl.innerHTML = `
            <div class="step-dot"></div>
            <div class="step-card">
                <div class="step-top">
                    <span class="step-number">Step ${i + 1}</span>
                    <span class="step-duration">⏱ ${step.dur}</span>
                </div>
                <h3>${step.title}</h3>
                <p>${step.desc}</p>
                ${availableTabs.length > 0 ? `
                <div class="resource-tabs">
                    <div class="res-tab-bar">${tabsHTML}</div>
                    <div class="res-panels">${panelsHTML}</div>
                </div>` : ''}
                <button class="btn-complete ${isComplete ? 'done' : ''}" data-step="${i}">
                    ${isComplete ? '✓ Completed' : '○ Mark Complete'}
                </button>
            </div>
        `;

        // Tab switching logic
        stepEl.querySelectorAll('.res-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.dataset.tab;
                stepEl.querySelectorAll('.res-tab').forEach(b => b.classList.remove('active'));
                stepEl.querySelectorAll('.res-panel').forEach(p => p.classList.remove('active'));
                btn.classList.add('active');
                stepEl.querySelector(`.res-panel[data-panel="${tabName}"]`).classList.add('active');
            });
        });

        // Broken link handling
        stepEl.querySelectorAll('.resource-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const url = link.dataset.url;
                if (!url || url === '#' || url === 'null' || url === 'undefined') {
                    e.preventDefault();
                    showToastError('Sorry, this resource link is currently broken or unassigned. Please try another one.');
                }
            });
        });

        // Mark complete button
        stepEl.querySelector('.btn-complete').addEventListener('click', (e) => {
            const stepIdx = parseInt(e.currentTarget.dataset.step);
            const newCompleted = toggleStep(domain.id, stepIdx);
            const isDone = newCompleted.includes(stepIdx);

            e.currentTarget.className = 'btn-complete' + (isDone ? ' done' : '');
            e.currentTarget.textContent = isDone ? '✓ Completed' : '○ Mark Complete';
            stepEl.classList.toggle('completed', isDone);
            updateProgress(domain);
        });

        container.appendChild(stepEl);
    });
}

function updateProgress(domain) {
    const completed = getCompletedSteps(domain.id);
    const total = domain.steps.length;
    const pct = total > 0 ? Math.round((completed.length / total) * 100) : 0;

    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-pct').textContent = pct + '%';
    document.getElementById('progress-text').textContent = completed.length + ' of ' + total + ' steps completed';

    const iconEl = document.getElementById('progress-icon');
    if (pct === 100) iconEl.textContent = '🎉';
    else if (pct >= 50) iconEl.textContent = '🔥';
    else if (pct > 0) iconEl.textContent = '🚀';
    else iconEl.textContent = '📋';
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.timeline-step').forEach(el => observer.observe(el));
}

// Small toast notification system for link errors
function showToastError(msg) {
    let toast = document.getElementById('error-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'error-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = 'toast-show';
    setTimeout(() => { toast.classList.remove('toast-show'); }, 3000);
}
