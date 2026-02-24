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

    renderHeader(domain);
    renderTimeline(domain);
    updateProgress(domain);
    initScrollReveal();

    // Navbar
    const user = Auth.getCurrentUser();
    const nameEl = document.getElementById('user-display-name');
    if (nameEl) nameEl.textContent = user.name;
    document.getElementById('btn-logout').addEventListener('click', () => Auth.logout());
});

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
    document.getElementById('domain-icon').textContent = domain.icon;
    document.getElementById('domain-name').textContent = domain.name;
    document.getElementById('domain-category').textContent = domain.cat;
    document.getElementById('domain-category').style.color = domain.color;
    document.getElementById('domain-steps-count').textContent = domain.steps.length + ' Steps';

    const totalCourses = domain.steps.reduce((s, st) => s + st.courses.length, 0);
    document.getElementById('domain-courses-count').textContent = totalCourses + ' Courses';

    document.title = domain.name + ' — CourseMap Roadmap';
}

function renderTimeline(domain) {
    const container = document.getElementById('timeline');
    const completed = getCompletedSteps(domain.id);

    domain.steps.forEach((step, i) => {
        const isComplete = completed.includes(i);
        const stepEl = document.createElement('div');
        stepEl.className = 'timeline-step' + (isComplete ? ' completed' : '');
        stepEl.style.transitionDelay = (i * 0.1) + 's';

        let coursesHTML = step.courses.map(c => `
      <a href="${c.url}" target="_blank" rel="noopener" class="course-link">
        <div class="course-info">
          <span class="course-name">${c.name}</span>
          <span class="course-platform">${c.platform}</span>
        </div>
        <span class="course-ext">Open ↗</span>
      </a>
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
        <div class="step-courses">${coursesHTML}</div>
        <button class="btn-complete ${isComplete ? 'done' : ''}" data-step="${i}">
          ${isComplete ? '✓ Completed' : '○ Mark Complete'}
        </button>
      </div>
    `;

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
