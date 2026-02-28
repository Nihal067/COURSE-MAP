/* ===================================================
   COURSEMAP QUIZ ENGINE
   Provides:
     openStepQuiz(domainId, stepIdx, stepName, onPass)
     openDomainQuiz(domain, onPassAll)
   =================================================== */

(function () {
    /* ── Inject quiz modal CSS ── */
    const style = document.createElement('style');
    style.textContent = `
    #quiz-overlay {
        display: none; position: fixed; inset: 0;
        background: rgba(0,0,0,0.75); backdrop-filter: blur(6px);
        z-index: 12000; align-items: center; justify-content: center;
    }
    #quiz-overlay.show { display: flex; }

    #quiz-modal {
        background: #0e1028;
        border: 1px solid rgba(99,102,241,0.3);
        border-radius: 18px;
        box-shadow: 0 24px 80px rgba(0,0,0,0.8);
        width: 92%; max-width: 540px;
        max-height: 88vh; overflow-y: auto;
        padding: 32px 28px 28px;
        position: relative;
        animation: quizFadeIn 0.28s ease;
    }
    @keyframes quizFadeIn {
        from { opacity:0; transform:translateY(16px); }
        to   { opacity:1; transform:translateY(0); }
    }

    [data-theme="light"] #quiz-modal { background:#fff; }

    #quiz-modal .quiz-header { margin-bottom: 20px; }
    #quiz-modal .quiz-badge {
        display: inline-block; padding: 3px 12px;
        border-radius: 50px; font-size: 10px; font-weight: 700;
        text-transform: uppercase; letter-spacing: 1px;
        background: rgba(99,102,241,0.15); color: #818cf8;
        border: 1px solid rgba(99,102,241,0.3); margin-bottom: 8px;
    }
    #quiz-modal .quiz-title {
        font-size: 19px; font-weight: 700; color: #f0f0f5;
        margin-bottom: 4px;
    }
    [data-theme="light"] #quiz-modal .quiz-title { color: #0f0f2a; }
    #quiz-modal .quiz-subtitle {
        font-size: 13px; color: #a0a0c0;
    }
    #quiz-modal .quiz-progress-row {
        display:flex; align-items:center; gap:10px;
        margin-bottom: 22px;
    }
    #quiz-modal .quiz-prog-track {
        flex:1; height:4px; background:rgba(255,255,255,0.07); border-radius:2px;
    }
    #quiz-modal .quiz-prog-fill {
        height:100%; border-radius:2px;
        background: linear-gradient(90deg,#6366f1,#22c55e);
        transition: width 0.3s;
    }
    #quiz-modal .quiz-prog-label {
        font-size:11px; color:#666688; min-width:40px; text-align:right;
    }
    #quiz-modal .quiz-question {
        font-size: 15px; font-weight: 600; color: #f0f0f5;
        line-height: 1.5; margin-bottom: 16px;
    }
    [data-theme="light"] #quiz-modal .quiz-question { color: #0f0f2a; }
    #quiz-modal .quiz-options {
        display: flex; flex-direction: column; gap: 9px;
        margin-bottom: 22px;
    }
    #quiz-modal .quiz-opt {
        padding: 11px 15px; border-radius: 9px;
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(255,255,255,0.03);
        color: #d0d0e8; font-size: 13px; font-weight: 500;
        cursor: pointer; text-align: left; transition: all 0.15s;
        font-family: inherit;
    }
    #quiz-modal .quiz-opt:hover:not(:disabled) {
        background: rgba(99,102,241,0.1);
        border-color: rgba(99,102,241,0.4);
        color: #f0f0f5;
    }
    #quiz-modal .quiz-opt.correct {
        background: rgba(34,197,94,0.12);
        border-color: rgba(34,197,94,0.5);
        color: #4ade80;
    }
    #quiz-modal .quiz-opt.wrong {
        background: rgba(239,68,68,0.1);
        border-color: rgba(239,68,68,0.4);
        color: #f87171;
    }
    #quiz-modal .quiz-opt:disabled { cursor: default; }
    [data-theme="light"] #quiz-modal .quiz-opt {
        background: rgba(0,0,0,0.03);
        border-color: rgba(0,0,0,0.12);
        color: #2a2a5a;
    }
    #quiz-modal .quiz-feedback {
        font-size: 13px; font-weight: 600; padding: 10px 14px;
        border-radius: 8px; margin-bottom: 14px; display:none;
    }
    #quiz-modal .quiz-feedback.pass {
        background: rgba(34,197,94,0.1); color: #4ade80;
        border: 1px solid rgba(34,197,94,0.25); display:block;
    }
    #quiz-modal .quiz-feedback.fail {
        background: rgba(239,68,68,0.09); color: #f87171;
        border: 1px solid rgba(239,68,68,0.25); display:block;
    }
    #quiz-modal .quiz-footer {
        display:flex; gap:10px; justify-content:flex-end; flex-wrap:wrap;
    }
    #quiz-modal .btn-quiz-next, #quiz-modal .btn-quiz-retry,
    #quiz-modal .btn-quiz-skip, #quiz-modal .btn-quiz-close {
        padding: 9px 20px; border-radius: 8px;
        font-size: 13px; font-weight: 600; cursor:pointer;
        transition: all 0.18s; font-family:inherit;
        border: none;
    }
    #quiz-modal .btn-quiz-next {
        background: linear-gradient(135deg,#6366f1,#a855f7);
        color:#fff;
    }
    #quiz-modal .btn-quiz-next:hover { filter: brightness(1.1); }
    #quiz-modal .btn-quiz-retry {
        background: rgba(99,102,241,0.1); color:#818cf8;
        border: 1px solid rgba(99,102,241,0.3);
    }
    #quiz-modal .btn-quiz-skip {
        background: transparent; color: #666688;
        border: 1px solid rgba(255,255,255,0.06);
        font-size:12px;
    }
    #quiz-modal .btn-quiz-close {
        background: rgba(239,68,68,0.07); color:#f87171;
        border: 1px solid rgba(239,68,68,0.18);
    }
    #quiz-modal .quiz-score-display {
        text-align:center; padding: 10px 0 20px;
    }
    #quiz-modal .quiz-score-big {
        font-size: 52px; font-weight: 800; line-height:1;
        background: linear-gradient(135deg,#6366f1,#22c55e);
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        background-clip:text; margin-bottom:8px;
    }
    #quiz-modal .quiz-score-text {
        font-size: 15px; color: #a0a0c0;
    }
    `;
    document.head.appendChild(style);

    /* ── Build overlay DOM once ── */
    const overlay = document.createElement('div');
    overlay.id = 'quiz-overlay';
    overlay.innerHTML = '<div id="quiz-modal"></div>';
    document.body.appendChild(overlay);
    const modal = overlay.querySelector('#quiz-modal');

    /* ── State ── */
    let _onPass = null;
    let _onFail = null;

    /* ── Helpers ── */
    function showOverlay() { overlay.classList.add('show'); document.body.style.overflow = 'hidden'; }
    function hideOverlay() { overlay.classList.remove('show'); document.body.style.overflow = ''; }

    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    /* ── Run a quiz session ─────────────────────────────────
       questions: array of {q, opts, ans}
       minPass: minimum correct to pass
       title, badge: display strings
       onPass, onFail: callbacks
       showSkip: show skip button
    ─────────────────────────────────────────────────────── */
    function runQuiz({ questions, minPass, title, badge, subtitle, onPass, onFail, showSkip = true }) {
        _onPass = onPass;
        _onFail = onFail;

        let current = 0;
        let score = 0;
        let answered = false;

        function renderQuestion() {
            const q = questions[current];
            const pct = Math.round(((current) / questions.length) * 100);

            modal.innerHTML = `
                <div class="quiz-header">
                    <div class="quiz-badge">${badge}</div>
                    <div class="quiz-title">${title}</div>
                    <div class="quiz-subtitle">${subtitle || `Pass ${minPass}/${questions.length} to continue`}</div>
                </div>
                <div class="quiz-progress-row">
                    <div class="quiz-prog-track">
                        <div class="quiz-prog-fill" style="width:${pct}%"></div>
                    </div>
                    <div class="quiz-prog-label">${current + 1}/${questions.length}</div>
                </div>
                <div class="quiz-question">${q.q}</div>
                <div class="quiz-options">
                    ${q.opts.map((o, i) => `<button class="quiz-opt" data-idx="${i}">${o}</button>`).join('')}
                </div>
                <div class="quiz-feedback"></div>
                <div class="quiz-footer">
                    ${showSkip ? `<button class="btn-quiz-skip">Skip Quiz</button>` : ''}
                    <button class="btn-quiz-next" style="display:none">Next →</button>
                </div>`;

            answered = false;
            const optBtns = modal.querySelectorAll('.quiz-opt');
            const nextBtn = modal.querySelector('.btn-quiz-next');
            const feedback = modal.querySelector('.quiz-feedback');
            const skipBtn = modal.querySelector('.btn-quiz-skip');

            // Answer keys: A=0, B=1, C=2, D=3
            const correctIdx = 'ABCD'.indexOf(q.ans);

            optBtns.forEach((btn, idx) => {
                btn.onclick = () => {
                    if (answered) return;
                    answered = true;

                    optBtns.forEach(b => b.disabled = true);

                    if (idx === correctIdx) {
                        score++;
                        btn.classList.add('correct');
                        feedback.textContent = '✓ Correct!';
                        feedback.className = 'quiz-feedback pass';
                    } else {
                        btn.classList.add('wrong');
                        optBtns[correctIdx].classList.add('correct');
                        feedback.textContent = '✗ Incorrect — the correct answer is highlighted.';
                        feedback.className = 'quiz-feedback fail';
                    }
                    nextBtn.style.display = 'inline-block';
                };
            });

            nextBtn.onclick = () => {
                current++;
                if (current < questions.length) {
                    renderQuestion();
                } else {
                    showResult();
                }
            };

            if (skipBtn) {
                skipBtn.onclick = () => {
                    hideOverlay();
                    if (onFail) onFail(score, questions.length);
                };
            }
        }

        function showResult() {
            const passed = score >= minPass;
            modal.innerHTML = `
                <div class="quiz-header">
                    <div class="quiz-badge">${badge}</div>
                    <div class="quiz-title">${passed ? '🎉 Quiz Passed!' : '😬 Not quite!'}</div>
                </div>
                <div class="quiz-score-display">
                    <div class="quiz-score-big">${score}/${questions.length}</div>
                    <div class="quiz-score-text">${passed
                    ? `Amazing! You scored ${score} out of ${questions.length}. Keep going!`
                    : `You need ${minPass} correct to pass. You got ${score}. Try again!`
                }</div>
                </div>
                <div class="quiz-footer">
                    ${!passed ? '<button class="btn-quiz-retry">🔄 Try Again</button>' : ''}
                    ${!passed ? '<button class="btn-quiz-skip">Skip (mark anyway)</button>' : ''}
                    <button class="btn-quiz-${passed ? 'next' : 'close'}" style="background:${passed ? 'linear-gradient(135deg,#6366f1,#22c55e)' : ''};color:#fff;">
                        ${passed ? '✓ Continue' : 'Close'}
                    </button>
                </div>`;

            const retryBtn = modal.querySelector('.btn-quiz-retry');
            const skipBtn = modal.querySelector('.btn-quiz-skip');
            const mainBtn = modal.querySelector(`.btn-quiz-${passed ? 'next' : 'close'}`);

            if (retryBtn) retryBtn.onclick = () => {
                current = 0; score = 0;
                renderQuestion();
            };
            if (skipBtn) skipBtn.onclick = () => {
                hideOverlay();
                if (onFail) onFail(score, questions.length);
            };
            if (mainBtn) mainBtn.onclick = () => {
                hideOverlay();
                if (passed && onPass) onPass(score, questions.length);
                else if (!passed && onFail) onFail(score, questions.length);
            };
        }

        showOverlay();
        renderQuestion();
    }

    /* ── PUBLIC: Step quiz (5 questions, need 3 to pass) ── */
    window.openStepQuiz = function (domainId, stepIdx, stepName, onPass, onFail) {
        const questions = getStepQuestions(domainId, stepIdx);
        runQuiz({
            questions: shuffle(questions).slice(0, 5),
            minPass: 3,
            badge: `Step ${stepIdx + 1} Quiz`,
            title: stepName || `Step ${stepIdx + 1} Knowledge Check`,
            subtitle: 'Answer at least 3/5 correctly to mark this step complete.',
            onPass,
            onFail,
            showSkip: true
        });
    };

    /* ── PUBLIC: Domain final quiz (15 Qs from all steps, need 10) ── */
    window.openDomainQuiz = function (domain, onPass, onFail) {
        const domainId = domain.id;
        const steps = domain.steps || [];
        const allQuestions = [];

        // Pick 3 questions from each step (up to 5 steps = 15 total)
        const stepCount = Math.min(steps.length, 5);
        for (let i = 0; i < stepCount; i++) {
            const qs = shuffle(getStepQuestions(domainId, i));
            allQuestions.push(...qs.slice(0, 3));
        }
        // If less than 15, pad with generic fallback
        while (allQuestions.length < 15) {
            const fallback = getStepQuestions('__fallback__', 0);
            allQuestions.push(...shuffle(fallback).slice(0, 15 - allQuestions.length));
        }

        runQuiz({
            questions: shuffle(allQuestions).slice(0, 15),
            minPass: 10,
            badge: '🏆 Final Domain Quiz',
            title: `${domain.name} — Final Test`,
            subtitle: 'Score 10/15 to complete this domain!',
            onPass,
            onFail,
            showSkip: false
        });
    };

})();
