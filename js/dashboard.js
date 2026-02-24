/* ===== DASHBOARD LOGIC ===== */
document.addEventListener('DOMContentLoaded', () => {
    if (!Auth.requireAuth()) return;

    const user = Auth.getCurrentUser();
    initNavbar(user);
    initHero(user);
    renderTopCourses();
    initCategories();
    renderDomainCards(DOMAINS);
    initSearch();
});

function initNavbar(user) {
    const nameEl = document.getElementById('user-display-name');
    if (nameEl) nameEl.textContent = user.name;

    document.getElementById('btn-logout').addEventListener('click', () => {
        Auth.logout();
    });
}

function initHero(user) {
    const greetEl = document.getElementById('greeting-name');
    if (greetEl) greetEl.textContent = user.name.split(' ')[0];

    const totalCourses = DOMAINS.reduce((sum, d) =>
        sum + d.steps.reduce((s, step) => s + step.courses.length, 0), 0);

    document.getElementById('stat-domains').textContent = DOMAINS.length;
    document.getElementById('stat-courses').textContent = totalCourses;
    document.getElementById('stat-categories').textContent = CATEGORIES.length - 1;
}

/* ── Top Courses Section ── */
function renderTopCourses() {
    const container = document.getElementById('top-courses-grid');
    if (!container) return;

    // Curated top courses from various domains
    const topCourses = [
        { name: "The Complete JavaScript Course", platform: "Udemy", domain: "Web Development", icon: "🌐", color: "#3b82f6", url: "https://www.udemy.com/course/the-complete-javascript-course/" },
        { name: "Machine Learning by Stanford", platform: "Coursera", domain: "AI & ML", icon: "🤖", color: "#ec4899", url: "https://www.coursera.org/learn/machine-learning" },
        { name: "Python for Everybody", platform: "Coursera", domain: "Data Science", icon: "📊", color: "#a855f7", url: "https://www.coursera.org/specializations/python" },
        { name: "React - The Complete Guide", platform: "Udemy", domain: "Frontend", icon: "⚛️", color: "#06b6d4", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
        { name: "AWS Cloud Practitioner", platform: "AWS", domain: "Cloud Computing", icon: "☁️", color: "#f59e0b", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
        { name: "Deep Learning Specialization", platform: "Coursera", domain: "Deep Learning", icon: "🧠", color: "#8b5cf6", url: "https://www.coursera.org/specializations/deep-learning" },
        { name: "Ethical Hacking from Scratch", platform: "Udemy", domain: "Cybersecurity", icon: "🔒", color: "#ef4444", url: "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/" },
        { name: "Google UX Design Certificate", platform: "Coursera", domain: "UI/UX Design", icon: "🎨", color: "#d946ef", url: "https://www.coursera.org/professional-certificates/google-ux-design" },
        { name: "Flutter & Dart Complete Guide", platform: "Udemy", domain: "Mobile Dev", icon: "📱", color: "#22c55e", url: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/" },
        { name: "Docker & Kubernetes", platform: "Udemy", domain: "DevOps", icon: "🔄", color: "#0ea5e9", url: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/" },
        { name: "Financial Markets by Yale", platform: "Coursera", domain: "Finance", icon: "💰", color: "#eab308", url: "https://www.coursera.org/learn/financial-markets-global" },
        { name: "Unity Game Dev Complete", platform: "Udemy", domain: "Game Dev", icon: "🎮", color: "#10b981", url: "https://www.udemy.com/course/unitycourse2/" }
    ];

    topCourses.forEach((course, i) => {
        const card = document.createElement('a');
        card.href = course.url;
        card.target = '_blank';
        card.rel = 'noopener';
        card.className = 'top-course-card';
        card.style.setProperty('--card-accent', course.color);
        card.style.animationDelay = (i * 0.06) + 's';

        card.innerHTML = `
      <div class="top-course-icon">${course.icon}</div>
      <div class="top-course-info">
        <h4>${course.name}</h4>
        <div class="top-course-meta">
          <span class="top-course-platform">${course.platform}</span>
          <span class="top-course-domain">${course.domain}</span>
        </div>
      </div>
      <span class="top-course-arrow">↗</span>
    `;

        container.appendChild(card);
    });

    // Scroll-reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    container.querySelectorAll('.top-course-card').forEach(c => observer.observe(c));
}

function initCategories() {
    const container = document.getElementById('categories');

    CATEGORIES.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = 'chip' + (cat.id === 'all' ? ' active' : '');
        chip.dataset.cat = cat.id;
        chip.innerHTML = cat.icon + ' ' + cat.label;
        chip.addEventListener('click', () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            filterDomains();
        });
        container.appendChild(chip);
    });
}

function renderDomainCards(domains) {
    const grid = document.getElementById('domains-grid');
    grid.innerHTML = '';

    if (domains.length === 0) {
        grid.innerHTML = '<div class="no-results"><h3>No roadmaps found</h3><p>Try a different search term or category.</p></div>';
        return;
    }

    domains.forEach((domain, i) => {
        const card = document.createElement('div');
        card.className = 'domain-card';
        card.style.setProperty('--card-accent', domain.color);
        card.style.transitionDelay = (i * 0.05) + 's';

        card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">${domain.icon}</div>
        <div>
          <h3>${domain.name}</h3>
          <span class="card-category">${domain.cat}</span>
        </div>
      </div>
      <div class="card-meta">
        <span class="card-steps">${domain.steps.length} steps · ${domain.steps.reduce((s, st) => s + st.courses.length, 0)} courses</span>
        <div class="card-arrow">→</div>
      </div>
    `;

        card.addEventListener('click', () => {
            window.location.href = 'roadmap.html?domain=' + domain.id;
        });

        grid.appendChild(card);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.domain-card').forEach(card => observer.observe(card));
}

function initSearch() {
    const input = document.getElementById('search-input');
    input.addEventListener('input', () => filterDomains());
}

function filterDomains() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const activeCat = document.querySelector('.chip.active').dataset.cat;

    let filtered = DOMAINS;

    if (activeCat !== 'all') {
        filtered = filtered.filter(d => d.cat === activeCat);
    }

    if (query) {
        filtered = filtered.filter(d =>
            d.name.toLowerCase().includes(query) ||
            d.cat.toLowerCase().includes(query) ||
            d.id.toLowerCase().includes(query)
        );
    }

    renderDomainCards(filtered);
}
