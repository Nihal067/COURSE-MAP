/* ===================================================
   COURSEMAP MAILER UTILITY
   Uses nodemailer with Gmail SMTP.
   Env vars needed: EMAIL_USER, EMAIL_PASS
   =================================================== */

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS   // Gmail App Password (not account password)
    }
});

/* â”€â”€ Signup OTP email â”€â”€ */
async function sendSignupOtpEmail(toEmail, otp, expiresMinutes = 10) {
    const mailOptions = {
        from: `"CourseMap ðŸ—ºï¸" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: 'Your CourseMap signup OTP',
        html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#080a14;font-family:'Inter',Arial,sans-serif;">
            <div style="max-width:560px;margin:40px auto;background:#0e1028;border-radius:16px;
                        border:1px solid rgba(99,102,241,0.25);overflow:hidden;">
                <div style="padding:28px 32px;border-bottom:1px solid rgba(255,255,255,0.08);">
                    <h1 style="margin:0;font-size:21px;color:#f0f0f5;">Verify your email</h1>
                    <p style="margin:8px 0 0;color:#a0a0c0;font-size:13px;">
                        Use this OTP to complete your CourseMap signup.
                    </p>
                </div>
                <div style="padding:32px;">
                    <div style="display:inline-block;padding:14px 20px;border-radius:10px;
                                background:rgba(99,102,241,0.16);border:1px solid rgba(99,102,241,0.35);
                                color:#f0f0f5;font-size:28px;letter-spacing:6px;font-weight:800;">
                        ${otp}
                    </div>
                    <p style="margin:18px 0 0;color:#a0a0c0;font-size:14px;line-height:1.6;">
                        This code expires in ${expiresMinutes} minutes.
                        If you did not request this, you can ignore this email.
                    </p>
                </div>
            </div>
        </body>
        </html>`
    };

    await transporter.sendMail(mailOptions);
}

/* ── Welcome email ── */
async function sendWelcomeEmail(toEmail, name) {
    const mailOptions = {
        from: `"CourseMap 🗺️" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: `Welcome to CourseMap, ${name}! 🎉`,
        html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#080a14;font-family:'Inter',Arial,sans-serif;">
            <div style="max-width:560px;margin:40px auto;background:#0e1028;border-radius:16px;
                        border:1px solid rgba(99,102,241,0.25);overflow:hidden;">
                <!-- Header -->
                <div style="background:linear-gradient(135deg,rgba(99,102,241,0.2),rgba(168,85,247,0.1));
                            padding:32px 32px 24px;border-bottom:1px solid rgba(255,255,255,0.07);">
                    <h1 style="margin:0;font-size:22px;font-weight:800;
                               background:linear-gradient(135deg,#00d4ff,#a855f7);
                               -webkit-background-clip:text;-webkit-text-fill-color:transparent;
                               background-clip:text;">
                        🗺️ CourseMap
                    </h1>
                    <p style="margin:8px 0 0;color:#a0a0c0;font-size:13px;">Your structured learning platform</p>
                </div>
                <!-- Body -->
                <div style="padding:32px;">
                    <h2 style="margin:0 0 12px;font-size:20px;color:#f0f0f5;">
                        Hey ${name}! 👋
                    </h2>
                    <p style="margin:0 0 16px;color:#a0a0c0;font-size:14px;line-height:1.6;">
                        Welcome to CourseMap — your personal, structured roadmap to mastering any tech skill.
                        You now have access to <strong style="color:#f0f0f5;">50+ learning roadmaps</strong>
                        across domains like Web Dev, Data Science, DevOps, AI/ML, and more.
                    </p>
                    <p style="margin:0 0 24px;color:#a0a0c0;font-size:14px;line-height:1.6;">
                        Each roadmap is broken into steps with hand-picked courses, videos, books, and
                        websites — so you always know exactly what to learn next.
                    </p>
                    <!-- CTA -->
                    <a href="${process.env.APP_URL || 'http://localhost:3000/dashboard'}"
                       style="display:inline-block;padding:12px 26px;
                              background:linear-gradient(135deg,#6366f1,#a855f7);
                              color:#fff;border-radius:10px;text-decoration:none;
                              font-weight:700;font-size:14px;">
                        Start Learning →
                    </a>
                </div>
                <!-- Footer -->
                <div style="padding:16px 32px;border-top:1px solid rgba(255,255,255,0.06);
                            text-align:center;">
                    <p style="margin:0;color:#666688;font-size:11px;">
                        CourseMap — Built for learners who want structure.
                    </p>
                </div>
            </div>
        </body>
        </html>`
    };

    await transporter.sendMail(mailOptions);
}

/* ── Weekly reminder email ── */
async function sendWeeklyReminder(toEmail, name, domainName, pct) {
    const mailOptions = {
        from: `"CourseMap 🗺️" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: `Hey ${name}, your ${domainName} roadmap awaits! 🚀`,
        html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#080a14;font-family:'Inter',Arial,sans-serif;">
            <div style="max-width:560px;margin:40px auto;background:#0e1028;border-radius:16px;
                        border:1px solid rgba(99,102,241,0.25);overflow:hidden;">
                <div style="padding:32px;">
                    <h2 style="margin:0 0 12px;font-size:20px;color:#f0f0f5;">
                        Time to level up, ${name}! ⚡
                    </h2>
                    <p style="margin:0 0 16px;color:#a0a0c0;font-size:14px;line-height:1.6;">
                        You're <strong style="color:#6366f1;">${pct}%</strong> through your
                        <strong style="color:#f0f0f5;">${domainName}</strong> roadmap.
                        You're so close — keep the momentum going!
                    </p>
                    <a href="${process.env.APP_URL || 'http://localhost:3000/dashboard'}"
                       style="display:inline-block;padding:12px 26px;
                              background:linear-gradient(135deg,#6366f1,#a855f7);
                              color:#fff;border-radius:10px;text-decoration:none;
                              font-weight:700;font-size:14px;">
                        Continue Learning →
                    </a>
                </div>
                <div style="padding:12px 32px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
                    <p style="margin:0;color:#666688;font-size:11px;">
                        CourseMap — <a href="#" style="color:#666688;">Unsubscribe</a>
                    </p>
                </div>
            </div>
        </body>
        </html>`
    };

    await transporter.sendMail(mailOptions);
}

module.exports = { sendSignupOtpEmail, sendWelcomeEmail, sendWeeklyReminder };
