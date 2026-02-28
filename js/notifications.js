/* ===================================================
   COURSEMAP NOTIFICATIONS FRONTEND
   Notification toggle in dashboard navbar.
   =================================================== */

(function () {
    const style = document.createElement('style');
    style.textContent = `
    .notif-popover {
        display:none; position:fixed;
        background:#0e1028; border:1px solid rgba(99,102,241,0.3);
        border-radius:14px; box-shadow:0 16px 50px rgba(0,0,0,0.7);
        padding:18px 20px; width:250px; z-index:9999;
        animation:notifIn 0.2s ease;
        top:60px; right:20px;
    }
    .notif-popover.show { display:block; }
    @keyframes notifIn {
        from{opacity:0;transform:translateY(-8px)}
        to{opacity:1;transform:translateY(0)}
    }
    [data-theme="light"] .notif-popover {
        background:#fff; border-color:rgba(99,102,241,0.25);
    }
    .notif-popover h4 {
        margin:0 0 10px; font-size:13px; font-weight:700;
        color:#f0f0f5;
    }
    [data-theme="light"] .notif-popover h4 { color:#0f0f2a; }
    .notif-row {
        display:flex; align-items:center; justify-content:space-between;
        gap:10px;
    }
    .notif-label {
        font-size:12px; color:#a0a0c0; line-height:1.4;
    }
    /* Toggle switch */
    .toggle-switch {
        position:relative; width:42px; height:24px; flex-shrink:0;
    }
    .toggle-switch input { opacity:0; width:0; height:0; }
    .toggle-track {
        position:absolute; inset:0; border-radius:12px;
        background:rgba(255,255,255,0.1); cursor:pointer;
        transition:background 0.2s;
    }
    .toggle-track::before {
        content:''; position:absolute;
        width:18px; height:18px; border-radius:50%;
        background:#fff; top:3px; left:3px;
        transition:transform 0.2s;
    }
    .toggle-switch input:checked + .toggle-track {
        background:linear-gradient(135deg,#6366f1,#a855f7);
    }
    .toggle-switch input:checked + .toggle-track::before {
        transform:translateX(18px);
    }
    `;
    document.head.appendChild(style);

    /* ── Inject popover into body ── */
    const popover = document.createElement('div');
    popover.className = 'notif-popover';
    popover.id = 'notif-popover';
    popover.innerHTML = `
        <h4>⚙️ Notification Settings</h4>
        <div class="notif-row">
            <span class="notif-label">Email notifications<br><span style="color:#666688;font-size:10px;">Weekly learning reminders</span></span>
            <label class="toggle-switch">
                <input type="checkbox" id="notif-toggle-checkbox" checked>
                <div class="toggle-track"></div>
            </label>
        </div>`;
    document.body.appendChild(popover);

    document.addEventListener('DOMContentLoaded', async () => {
        // Fetch current status
        try {
            const { emailNotifs } = await API.getNotifStatus();
            const cb = document.getElementById('notif-toggle-checkbox');
            if (cb) cb.checked = emailNotifs;
        } catch (e) { /* backend unavailable */ }

        // Wire toggle
        const cb = document.getElementById('notif-toggle-checkbox');
        if (cb) {
            cb.addEventListener('change', async () => {
                try {
                    const { emailNotifs } = await API.toggleNotifs();
                    cb.checked = emailNotifs;
                } catch (e) {
                    // revert
                    cb.checked = !cb.checked;
                }
            });
        }

        // Wire bell button
        const notifBtn = document.getElementById('btn-notif-settings');
        if (notifBtn) {
            notifBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                popover.classList.toggle('show');
            });
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!popover.contains(e.target) && e.target.id !== 'btn-notif-settings') {
                popover.classList.remove('show');
            }
        });
    });
})();
