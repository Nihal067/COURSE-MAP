/* ===================================================
   COURSEMAP SHARE ROADMAP
   Adds share modal to roadmap.html.
   Also handles ?shared=1 read-only view mode.
   =================================================== */

(function () {
    /* ── Inject share modal CSS ── */
    const style = document.createElement('style');
    style.textContent = `
    #share-overlay {
        display:none; position:fixed; inset:0;
        background:rgba(0,0,0,0.7); backdrop-filter:blur(6px);
        z-index:11000; align-items:center; justify-content:center;
    }
    #share-overlay.show { display:flex; }

    #share-modal {
        background:#0e1028;
        border:1px solid rgba(99,102,241,0.35);
        border-radius:18px;
        box-shadow:0 24px 80px rgba(0,0,0,0.8);
        width:92%; max-width:480px;
        padding:28px;
        position:relative;
        animation:shareIn 0.25s ease;
    }
    @keyframes shareIn {
        from{opacity:0;transform:scale(0.95)}
        to{opacity:1;transform:scale(1)}
    }
    [data-theme="light"] #share-modal { background:#fff; }

    #share-modal .share-badge {
        display:inline-block; padding:3px 12px;
        border-radius:50px; font-size:10px; font-weight:700;
        text-transform:uppercase; letter-spacing:1px;
        background:rgba(99,102,241,0.12); color:#818cf8;
        border:1px solid rgba(99,102,241,0.3); margin-bottom:10px;
    }
    #share-modal h3 {
        font-size:18px; font-weight:700; color:#f0f0f5; margin-bottom:6px;
    }
    [data-theme="light"] #share-modal h3 { color:#0f0f2a; }
    #share-modal .share-desc {
        font-size:13px; color:#a0a0c0; margin-bottom:18px; line-height:1.5;
    }
    #share-modal .share-url-box {
        display:flex; gap:8px; margin-bottom:16px;
    }
    #share-modal .share-url-input {
        flex:1; padding:9px 13px; border-radius:8px;
        border:1px solid rgba(255,255,255,0.1);
        background:rgba(255,255,255,0.04);
        color:#d0d0e8; font-size:12px; font-family:monospace;
        outline:none;
    }
    [data-theme="light"] #share-modal .share-url-input {
        background:rgba(0,0,0,0.04); border-color:rgba(0,0,0,0.12); color:#2a2a5a;
    }
    #share-modal .btn-copy {
        padding:9px 16px; border-radius:8px;
        background:linear-gradient(135deg,#6366f1,#a855f7);
        color:#fff; font-size:13px; font-weight:600;
        border:none; cursor:pointer; transition:filter 0.15s;
        font-family:inherit; white-space:nowrap;
    }
    #share-modal .btn-copy:hover { filter:brightness(1.1); }
    #share-modal .btn-copy.copied {
        background:rgba(34,197,94,0.15); color:#4ade80;
        border:1px solid rgba(34,197,94,0.3);
    }
    #share-modal .share-divider {
        border:none; border-top:1px solid rgba(255,255,255,0.07); margin:16px 0;
    }
    [data-theme="light"] #share-modal .share-divider { border-color:rgba(0,0,0,0.1); }
    #share-modal .share-text-area {
        width:100%; padding:10px 13px; border-radius:8px;
        border:1px solid rgba(255,255,255,0.08);
        background:rgba(255,255,255,0.03);
        color:#a0a0c0; font-size:12px; resize:none;
        font-family:inherit; line-height:1.5;
    }
    [data-theme="light"] #share-modal .share-text-area {
        background:rgba(0,0,0,0.03); border-color:rgba(0,0,0,0.1); color:#3a3a6a;
    }
    #share-modal .share-footer {
        display:flex; justify-content:flex-end; margin-top:14px;
    }
    #share-modal .btn-share-close {
        padding:8px 18px; border-radius:8px;
        background:rgba(255,255,255,0.05);
        border:1px solid rgba(255,255,255,0.08);
        color:#a0a0c0; font-size:13px; cursor:pointer;
        font-family:inherit;
    }
    #share-modal .btn-share-close:hover { background:rgba(255,255,255,0.09); }

    /* ── Read-only mode banner ── */
    #shared-banner {
        display:none;
        background:linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1));
        border-bottom:1px solid rgba(99,102,241,0.25);
        padding:10px 32px;
        text-align:center;
        font-size:13px; color:#a0a0c0;
    }
    #shared-banner.show { display:block; }
    #shared-banner strong { color:#818cf8; }
    `;
    document.head.appendChild(style);

    /* ── Build share overlay DOM ── */
    const overlay = document.createElement('div');
    overlay.id = 'share-overlay';
    overlay.innerHTML = `
        <div id="share-modal">
            <div class="share-badge">🔗 Share Roadmap</div>
            <h3 id="share-modal-title">Share this Roadmap</h3>
            <div class="share-desc">Anyone with this link can view this roadmap in read-only mode — no login required.</div>
            <div class="share-url-box">
                <input class="share-url-input" id="share-url-field" readonly>
                <button class="btn-copy" id="btn-copy-link">Copy Link</button>
            </div>
            <hr class="share-divider">
            <textarea class="share-text-area" id="share-text" rows="3" readonly></textarea>
            <div class="share-footer">
                <button class="btn-share-close" id="btn-share-close">Close</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);

    /* ── Read-only banner ── */
    const banner = document.createElement('div');
    banner.id = 'shared-banner';
    banner.innerHTML = `👁️ You are viewing a <strong>shared read-only</strong> roadmap. <a href="dashboard.html" style="color:#818cf8;text-decoration:underline;">Create your own account</a> to track progress.`;
    document.body.insertBefore(banner, document.body.firstChild);

    /* ── Check shared mode on load ── */
    document.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const isShared = params.get('shared') === '1';

        if (isShared) {
            // Show banner
            banner.classList.add('show');
            // Hide action buttons
            const hideIds = ['btn-mark-done', 'btn-enroll', 'btn-signout', 'nav-username', 'btn-share-roadmap'];
            hideIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = 'none';
            });
        }

        // Wire share button
        const shareBtn = document.getElementById('btn-share-roadmap');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                const curParams = new URLSearchParams(window.location.search);
                const domainId = curParams.get('domain');
                if (!domainId) return;

                // Build share URL
                const shareUrl = window.location.origin + window.location.pathname
                    + `?domain=${encodeURIComponent(domainId)}&shared=1`;

                // Compute progress %
                let pct = 0;
                try {
                    const domain = (typeof DOMAINS !== 'undefined') ? DOMAINS.find(d => d.id === domainId) : null;
                    if (domain) {
                        const doneKey = Object.keys(localStorage).find(k => k.includes(domainId));
                        const done = doneKey ? JSON.parse(localStorage.getItem(doneKey) || '[]') : [];
                        pct = domain.steps.length > 0
                            ? Math.round((done.length / domain.steps.length) * 100)
                            : 0;
                    }
                } catch (e) { }

                const shareTitle = document.getElementById('share-modal-title');
                const domainNameEl = document.getElementById('domain-name-h1');
                const name = domainNameEl?.textContent || 'this roadmap';
                if (shareTitle) shareTitle.textContent = `Share "${name}"`;

                const urlField = document.getElementById('share-url-field');
                if (urlField) urlField.value = shareUrl;

                const textArea = document.getElementById('share-text');
                if (textArea) textArea.value =
                    `🗺️ Check out my ${name} learning roadmap on CourseMap!\n` +
                    `${pct > 0 ? `I'm ${pct}% through it. ` : ''}Join me! 👇\n${shareUrl}`;

                overlay.classList.add('show');
            });
        }

        // Wire copy button
        const copyBtn = document.getElementById('btn-copy-link');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                const url = document.getElementById('share-url-field')?.value;
                if (!url) return;
                navigator.clipboard.writeText(url).then(() => {
                    copyBtn.textContent = '✓ Copied!';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy Link';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                }).catch(() => {
                    // Fallback: select the field
                    document.getElementById('share-url-field')?.select();
                });
            });
        }

        // Wire close
        const closeBtn = document.getElementById('btn-share-close');
        if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('show'));
        overlay.addEventListener('click', e => {
            if (e.target === overlay) overlay.classList.remove('show');
        });
    });
})();
