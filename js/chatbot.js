/* ===== COURSEMAP HYBRID CHATBOT ENGINE ===== */
(function () {
    'use strict';

    // ─── Constants ───────────────────────────────────────────────
    const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';
    // ↓ Paste your free Gemini API key here  →  aistudio.google.com/app/apikey
    const GEMINI_API_KEY = 'AIzaSyAtN07bbyFw6_URwj6uJlpUoTVJLT9OBaQ';


    const SYSTEM_PROMPT = `You are CourseBot, a friendly and knowledgeable assistant for CourseMap — a website that provides structured learning roadmaps for 50+ domains like Web Development, Data Science, AI/ML, Cybersecurity, Cloud Computing, and more. 
You help students choose the right learning path, answer questions about technologies, suggest study strategies, and motivate learners. 
Keep responses concise (3-5 sentences max unless listing items). Use emojis sparingly to stay friendly. Respond in the same language the user uses (Hindi or English).`;

    // ─── Suggestion Chips ────────────────────────────────────────
    const SUGGESTIONS = [
        '🎯 Recommend a domain',
        '📚 Free Python courses',
        '🗺️ Web Dev steps',
        '📅 Study plan for AI',
        '❓ What is ML?',
    ];

    // ─── FAQ / Rule-Based Pairs ───────────────────────────────────
    const RULES = [
        // Greetings
        {
            patterns: [/^(hi|hello|hey|namaste|helo|hii|yo)\b/i],
            response: () => `👋 Hey there! I'm **CourseBot**, your learning guide on CourseMap.\n\nI can help you:\n• 🎯 Find the right domain to learn\n• 📚 Discover free courses & resources\n• 🗺️ Navigate roadmaps step by step\n• 📅 Build a study plan\n\nWhat would you like to explore today?`
        },
        // How many domains
        {
            patterns: [/how many domain/i, /total domain/i, /domains available/i],
            response: () => {
                const count = (typeof DOMAINS !== 'undefined') ? DOMAINS.length : '50+';
                return `📊 CourseMap currently has **${count} domains** across Tech, Design, Business, and more!\n\nUse the "Explore All Domains" button on the dashboard to browse them all. 🚀`;
            }
        },
        // Recommend domain
        {
            patterns: [/recommend|suggest|which domain|what should i (learn|study)|not sure what to/i],
            response: () => recommendDomain()
        },
        // Study plan
        {
            patterns: [/study plan|learning plan|schedule|how (long|many months|many weeks)|plan for/i],
            response: (msg) => studyPlan(msg)
        },
        // Resource finder — free courses
        {
            patterns: [/free (course|video|resource|tutorial)/i, /course.*(free|no cost)/i],
            response: () => `🆓 Great news! CourseMap highlights many **free resources**:\n• **freeCodeCamp** – Full courses on Web Dev, Python, ML\n• **Kaggle** – Free courses on Python, ML, SQL\n• **NPTEL** – IIT-backed free courses (India 🇮🇳)\n• **YouTube channels** – CodeWithHarry, Apna College, Campus X\n\nTell me a specific topic and I'll pull the exact resources! 🔍`
        },
        // Python resources
        {
            patterns: [/python (course|resource|video|tutorial|learn)/i, /learn python/i],
            response: () => findResources('python', 'data-science')
        },
        // Web Dev resources
        {
            patterns: [/web dev|html|css|react|frontend|front.end/i],
            response: () => findResources('html', 'web-frontend')
        },
        // ML/AI resources
        {
            patterns: [/machine learning|ml course|ai course|deep learning/i],
            response: () => findResources('machine learning', 'ml-ai')
        },
        // Data Science
        {
            patterns: [/data science|data scientist/i],
            response: () => domainInfo('data-science')
        },
        // Cybersecurity
        {
            patterns: [/cyber|ethical hack|hacking|security course/i],
            response: () => domainInfo('cybersecurity')
        },
        // Cloud
        {
            patterns: [/cloud computing|aws|azure|gcp|google cloud/i],
            response: () => domainInfo('cloud')
        },
        // DevOps
        {
            patterns: [/devops|docker|kubernetes|ci.cd|jenkins/i],
            response: () => domainInfo('devops')
        },
        // Mobile
        {
            patterns: [/mobile app|flutter|react native|android|ios dev/i],
            response: () => domainInfo('mobile-dev')
        },
        // Domain steps / roadmap info
        {
            patterns: [/steps? (in|for|of)|how (many steps|long is|many phases)/i],
            response: (msg) => domainSteps(msg)
        },
        // What is ML
        {
            patterns: [/what is (ml|machine learning)/i],
            response: () => `🤖 **Machine Learning (ML)** is a branch of AI where computers learn patterns from data — without being explicitly programmed.\n\n**Example**: A spam filter that learns to recognise junk emails.\n\nML is used in: 📱 recommendations, 🏥 medical diagnosis, 🚗 self-driving cars, and more!\n\n👉 Check out the **ML & AI roadmap** on CourseMap to get started.`
        },
        // What is AI
        {
            patterns: [/what is (ai|artificial intelligence)/i],
            response: () => `🧠 **Artificial Intelligence (AI)** is the broad field of making machines simulate human intelligence — reasoning, learning, problem-solving.\n\n**ML** is a subset of AI. **Deep Learning** is a subset of ML.\n\nThe roadmap on CourseMap covers AI from Math foundations → Neural Networks → LLMs. 🚀`
        },
        // Which language first
        {
            patterns: [/which (language|lang).*(first|start|begin|learn)/i, /first programming language/i, /language should i learn/i],
            response: () => `💻 Here's my recommendation based on your goal:\n\n• **Web Development** → Start with **HTML, CSS, JavaScript**\n• **Data Science / AI / ML** → Start with **Python**\n• **Android apps** → **Kotlin** or **Flutter (Dart)**\n• **iOS apps** → **Swift**\n• **Game Dev** → **C#** (Unity) or **C++** (Unreal)\n\nWhat's your goal? Tell me and I'll guide you step-by-step! 🎯`
        },
        // Hindi support
        {
            patterns: [/kya karu|mujhe kya|kahan se start|shuru kaise/i],
            response: () => `नमस्ते! 🙏 मैं आपकी मदद कर सकता हूँ!\n\nआप मुझसे पूछ सकते हैं:\n• कौन सा domain सीखें?\n• किससे शुरू करें?\n• Free courses कौन से हैं?\n• Study plan कैसे बनाएं?\n\nبताइए, आपका goal क्या है? 🎯`
        },
        // Motivation
        {
            patterns: [/motivat|discourag|give up|hard|difficult|struggling|not able to/i],
            response: () => `💪 Hey, it's okay to feel stuck — every expert was once a beginner!\n\n**Remember:**\n• 🌱 Small progress daily = massive results\n• 🎯 Focus on *one* thing at a time\n• 🔄 Consistency > Intensity\n\n*"The secret of getting ahead is getting started."* — Mark Twain\n\nYou've got this! What can I help you move forward with? 🚀`
        },
        // Thank you
        {
            patterns: [/thank|thanks|tysm|thx|shukriya/i],
            response: () => `You're welcome! 😊 Happy learning on **CourseMap**! If you have more questions, I'm always here. 🤖✨`
        },
        // Help menu
        {
            patterns: [/^(help|what can you do|commands|menu)$/i],
            response: () => `🤖 Here's what I can help you with:\n\n**🎯 Domain Discovery**\n• "Recommend a domain for me"\n\n**📚 Resources**\n• "Free Python courses"\n• "Best ML videos"\n\n**🗺️ Roadmaps**\n• "How many steps in Data Science?"\n• "Tell me about the Web Dev roadmap"\n\n**📅 Planning**\n• "Study plan for AI in 3 months"\n\n**❓ Concepts**\n• "What is Machine Learning?"\n• "Which language should I learn first?"\n\nOr ask **anything** — I'll use AI to answer! 🧠`
        },
    ];

    // ─── Domain Helper Functions ──────────────────────────────────
    function getDomains() {
        return (typeof DOMAINS !== 'undefined') ? DOMAINS : [];
    }

    function findDomainById(id) {
        return getDomains().find(d => d.id === id);
    }

    function domainInfo(id) {
        const d = findDomainById(id);
        if (!d) return aiResponse(`Tell me about the ${id} learning roadmap on CourseMap.`);
        const steps = d.steps || [];
        const stepList = steps.map((s, i) => `${i + 1}. **${s.title}** *(${s.dur})*`).join('\n');
        return `📍 **${d.name} Roadmap** — ${steps.length} phases:\n\n${stepList}\n\n💡 Open this roadmap from the dashboard to access all courses, videos, and books!`;
    }

    function domainSteps(msg) {
        const domains = getDomains();
        const lower = msg.toLowerCase();
        const found = domains.find(d => lower.includes(d.name.toLowerCase().split(' ')[0].toLowerCase())
            || lower.includes(d.id.replace(/-/g, ' ')));
        if (found) return domainInfo(found.id);
        return `🗺️ CourseMap has roadmaps with **4-6 learning phases** each — covering beginner to advanced.\n\nWhich domain are you curious about? (e.g., "steps in Data Science" or "how long is Web Dev?") 🎯`;
    }

    function findResources(keyword, domainId) {
        const d = findDomainById(domainId);
        if (!d || !d.steps || !d.steps[0]) {
            return `I couldn't find specific resources right now. Try browsing the **${domainId}** roadmap from the dashboard! 📚`;
        }
        // Gather first step resources
        const step = d.steps[0];
        const freeVideos = (step.videos || []).slice(0, 3);
        const freeWebsites = (step.websites || []).slice(0, 2);

        let msg = `📚 Here are top resources to learn **${keyword.charAt(0).toUpperCase() + keyword.slice(1)}**:\n\n`;

        if (freeVideos.length) {
            msg += `**🎬 Free Videos:**\n`;
            freeVideos.forEach(v => { msg += `• [${v.name}](${v.url})\n`; });
        }
        if (freeWebsites.length) {
            msg += `\n**🌐 Websites:**\n`;
            freeWebsites.forEach(w => { msg += `• [${w.name}](${w.url})\n`; });
        }
        msg += `\n💡 Visit the **${d.name}** roadmap for 10x more curated resources!`;
        return msg;
    }

    function recommendDomain() {
        pendingQuiz = true;
        return `🎯 Let's find your perfect domain! Tell me:\n\n**What excites you more?**\n\n1️⃣ **Building websites / apps**\n2️⃣ **Working with data / AI**\n3️⃣ **Security & hacking** (ethical!)\n4️⃣ **Cloud & infrastructure**\n5️⃣ **Mobile apps**\n6️⃣ **Design & creativity**\n7️⃣ **Business / Finance**\n\nReply with a number or describe your interest! 🚀`;
    }

    function handleQuizAnswer(msg) {
        pendingQuiz = false;
        const m = msg.toLowerCase();
        if (m.includes('1') || /website|web|frontend|html|css|react/i.test(m))
            return domainInfo('web-frontend');
        if (m.includes('2') || /data|ai|ml|python|science/i.test(m))
            return domainInfo('data-science');
        if (m.includes('3') || /secur|hack|cyber/i.test(m))
            return domainInfo('cybersecurity');
        if (m.includes('4') || /cloud|aws|infra|devops/i.test(m))
            return domainInfo('cloud');
        if (m.includes('5') || /mobile|android|ios|flutter/i.test(m))
            return domainInfo('mobile-dev');
        if (m.includes('6') || /design|ui|ux|creative|art/i.test(m))
            return domainInfo('uiux');
        if (m.includes('7') || /business|finance|marketing|mba/i.test(m))
            return `💼 CourseMap has roadmaps for **Finance, Marketing, MBA Prep, Digital Marketing**, and more in the Business category!\n\nHead to the dashboard → click **Explore All Domains** → filter by **Business** to see them all. 📊`;
        return `Interesting choice! Let me help you explore. ${domainInfo('web-frontend')}`;
    }

    function studyPlan(msg) {
        const monthMatch = msg.match(/(\d+)\s*month/i);
        const weekMatch = msg.match(/(\d+)\s*week/i);
        let durationText = '3 months';
        let totalWeeks = 12;

        if (monthMatch) { totalWeeks = parseInt(monthMatch[1]) * 4; durationText = `${monthMatch[1]} month${monthMatch[1] > 1 ? 's' : ''}`; }
        else if (weekMatch) { totalWeeks = parseInt(weekMatch[1]); durationText = `${weekMatch[1]} weeks`; }

        const domains = getDomains();
        // Try to detect domain from message
        const lower = msg.toLowerCase();
        let targetDomain = domains.find(d =>
            lower.includes(d.name.toLowerCase().split(' ')[0]) ||
            lower.includes(d.id.replace(/-/g, ' '))
        ) || domains[0];

        const steps = targetDomain?.steps || [];
        const weeksPerStep = Math.max(2, Math.floor(totalWeeks / Math.max(steps.length, 1)));

        let plan = `📅 **${durationText} Study Plan — ${targetDomain?.name || 'Web Dev'}**\n\n`;
        steps.forEach((step, i) => {
            const weekStart = i * weeksPerStep + 1;
            const weekEnd = Math.min((i + 1) * weeksPerStep, totalWeeks);
            plan += `**Week ${weekStart}–${weekEnd}:** ${step.title}\n`;
            plan += `   ↳ _${step.desc.slice(0, 60)}..._\n\n`;
        });
        plan += `💡 **Tips:** Study 1-2 hrs/day, build projects each week, and track on your dashboard!`;
        return plan;
    }

    // ─── Rule Matcher ─────────────────────────────────────────────
    let pendingQuiz = false;

    function matchRule(msg) {
        if (pendingQuiz) return handleQuizAnswer(msg);
        for (const rule of RULES) {
            if (rule.patterns.some(p => p.test(msg))) {
                return rule.response(msg);
            }
        }
        return null; // No match → AI fallback
    }

    // ─── Gemini AI Fallback ───────────────────────────────────────
    let _lastAiCall = 0; // cooldown tracker

    async function callGemini(userMsg, isRetry) {
        if (!GEMINI_API_KEY || GEMINI_API_KEY === 'PASTE_YOUR_KEY_HERE') {
            return '🔑 AI mode is not configured yet. (Owner needs to add the API key in chatbot.js)';
        }

        // 2-second cooldown between calls to avoid rapid-fire 429s
        const now = Date.now();
        const wait = 2000 - (now - _lastAiCall);
        if (wait > 0) await new Promise(r => setTimeout(r, wait));
        _lastAiCall = Date.now();

        const body = {
            contents: [{
                role: 'user',
                parts: [{ text: SYSTEM_PROMPT + '\n\nUser message: ' + userMsg }]
            }]
        };

        try {
            const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await res.json();

            if (!res.ok) {
                const errMsg = data?.error?.message || `HTTP ${res.status}`;
                console.error('[CourseBot Gemini Error]', res.status, errMsg, data);

                // Auto-retry once after 3s on rate limit
                if (res.status === 429 && !isRetry) {
                    console.warn('[CourseBot] Rate limited — retrying in 3s…');
                    await new Promise(r => setTimeout(r, 3000));
                    return callGemini(userMsg, true);
                }

                if (res.status === 400) return `⚠️ Bad request to AI (${errMsg}). Please try again.`;
                if (res.status === 403) return `🔑 API key rejected (${errMsg}). Check the key in chatbot.js.`;
                if (res.status === 429) return '⏳ You\'re sending messages too fast! Please wait a few seconds.';
                return `⚠️ AI error (${res.status}): ${errMsg}`;
            }

            return data?.candidates?.[0]?.content?.parts?.[0]?.text
                || '🤔 I couldn\'t form a response. Please try rephrasing your question!';
        } catch (e) {
            console.error('[CourseBot Network Error]', e);
            return '⚠️ Network error reaching AI. Check your connection and try again!';
        }
    }

    async function aiResponse(msg) {
        return await callGemini(msg, false);
    }

    // ─── Render Helpers ───────────────────────────────────────────
    function renderMarkdown(text) {
        // Bold **text**
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Italic _text_ or *text*
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        // Links [text](url)
        text = text.replace(/\[(.+?)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
        // Newlines
        text = text.replace(/\n/g, '<br>');
        return text;
    }

    function addMessage(role, text, isHtml = false) {
        const container = document.getElementById('chatbot-messages');
        const wrapper = document.createElement('div');
        wrapper.className = `chat-msg ${role}`;

        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.textContent = role === 'bot' ? '🤖' : '👤';

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';
        if (isHtml) {
            bubble.innerHTML = text;
        } else {
            bubble.innerHTML = renderMarkdown(text);
        }

        wrapper.appendChild(avatar);
        wrapper.appendChild(bubble);
        container.appendChild(wrapper);
        scrollToBottom();
        return bubble;
    }

    function showTyping() {
        const container = document.getElementById('chatbot-messages');
        const wrapper = document.createElement('div');
        wrapper.className = 'chat-msg bot';
        wrapper.id = 'typing-indicator-wrapper';

        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.textContent = '🤖';

        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';

        wrapper.appendChild(avatar);
        wrapper.appendChild(indicator);
        container.appendChild(wrapper);
        scrollToBottom();
    }

    function hideTyping() {
        const el = document.getElementById('typing-indicator-wrapper');
        if (el) el.remove();
    }

    function scrollToBottom() {
        const c = document.getElementById('chatbot-messages');
        if (c) c.scrollTop = c.scrollHeight;
    }

    // ─── Send Message ─────────────────────────────────────────────
    async function sendMessage(text, skipUserBubble = false) {
        const msg = text.trim();
        if (!msg) return;

        // Handle "set api key" special command
        if (/^set api key$/i.test(msg)) {
            showApiKeyPrompt('');
            return;
        }

        if (!skipUserBubble) {
            addMessage('user', msg);
        }

        showTyping();

        // Short delay to feel natural
        await new Promise(r => setTimeout(r, 400));

        // Try rule-based first
        let response = matchRule(msg);

        if (response === null) {
            // Gemini fallback
            response = await aiResponse(msg);
            if (response === null) {
                // showApiKeyPrompt was handled — just remove typing
                hideTyping();
                return;
            }
        }

        hideTyping();
        addMessage('bot', response);
    }

    // ─── UI Setup ─────────────────────────────────────────────────
    // Detect mode: if the dashboard already has the section, use inline mode.
    const isInlineMode = !!document.getElementById('coursebot-section');

    function injectFloatingHTML() {
        const markup = `
      <!-- ===== CHATBOT WIDGET ===== -->
      <button id="chatbot-toggle" aria-label="Open CourseBot">
        <span id="chatbot-badge"></span>
        <svg class="icon-chat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div id="chatbot-panel" role="dialog" aria-label="CourseBot chat">
        <div id="chatbot-header">
          <div class="chatbot-avatar">🤖</div>
          <div class="chatbot-header-info">
            <h4>CourseBot</h4>
            <span>Online • AI-powered</span>
          </div>
          <button id="chatbot-clear-btn" title="Clear chat">Clear</button>
        </div>
        <div id="chatbot-messages"></div>
        <div id="chatbot-suggestions"></div>
        <div id="chatbot-input-area">
          <input type="text" id="chatbot-input" placeholder="Ask me anything…" autocomplete="off" maxlength="300" />
          <button id="chatbot-send" aria-label="Send">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>`;
        document.body.insertAdjacentHTML('beforeend', markup);
    }

    function setupSuggestions() {
        const container = document.getElementById('chatbot-suggestions');
        if (!container) return;
        SUGGESTIONS.forEach(s => {
            const chip = document.createElement('button');
            chip.className = 'suggestion-chip';
            chip.textContent = s;
            chip.addEventListener('click', () => {
                const clean = s.replace(/^[^\w]+ ?/, '');
                document.getElementById('chatbot-input').value = clean;
                sendMessage(clean);
                document.getElementById('chatbot-input').value = '';
            });
            container.appendChild(chip);
        });
    }

    function setupEventListeners() {
        const input = document.getElementById('chatbot-input');
        const sendBtn = document.getElementById('chatbot-send');
        const clearBtn = document.getElementById('chatbot-clear-btn');

        if (sendBtn) {
            sendBtn.addEventListener('click', () => {
                const val = input.value.trim();
                if (val) { sendMessage(val); input.value = ''; }
            });
        }

        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    const val = input.value.trim();
                    if (val) { sendMessage(val); input.value = ''; }
                }
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                const msgs = document.getElementById('chatbot-messages');
                if (msgs) msgs.innerHTML = '';
                pendingQuiz = false;
                addMessage('bot', `Chat cleared! 🌟 How can I help you?\n\nTry: "Recommend a domain", "Free Python courses", or ask me anything!`);
            });
        }

        // Floating-mode only: toggle button
        if (!isInlineMode) {
            const toggle = document.getElementById('chatbot-toggle');
            const panel = document.getElementById('chatbot-panel');
            if (toggle && panel) {
                toggle.addEventListener('click', () => {
                    const isOpen = panel.classList.toggle('open');
                    toggle.classList.toggle('open', isOpen);
                    if (isOpen) {
                        const badge = document.getElementById('chatbot-badge');
                        if (badge) badge.remove();
                        setTimeout(() => input && input.focus(), 350);
                    }
                });
            }
        }
    }

    function showWelcome() {
        addMessage('bot', `👋 Hello! I'm **CourseBot** — your AI learning guide!\n\nI can help you:\n🎯 Find the right domain\n📚 Discover free resources\n🗺️ Navigate roadmaps\n📅 Build a study plan\n\nWhat would you like to explore? _(or pick a suggestion below)_`);
    }

    // ─── Init ─────────────────────────────────────────────────────
    function init() {
        if (!isInlineMode) {
            // Roadmap / other pages → inject floating widget
            injectFloatingHTML();
        }
        // In inline mode the HTML already exists in dashboard.html
        setupSuggestions();
        setupEventListeners();
        showWelcome();
    }

    // Run after DOM + data scripts are ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
