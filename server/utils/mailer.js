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
        pass: process.env.EMAIL_PASS // Gmail app password
    }
});

async function sendWelcomeEmail(toEmail, name) {
    const mailOptions = {
        from: `"CourseMap" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: `Welcome to CourseMap, ${name}!`,
        html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#000;font-family:Inter,Arial,sans-serif;">
            <div style="max-width:560px;margin:40px auto;background:#0f0f0f;border-radius:16px;
                        border:1px solid rgba(99,102,241,0.25);overflow:hidden;">
                <div style="padding:32px 32px 24px;border-bottom:1px solid rgba(255,255,255,0.07);">
                    <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">CourseMap</h1>
                    <p style="margin:8px 0 0;color:#d1d5db;font-size:13px;">Your structured learning platform</p>
                </div>
                <div style="padding:32px;">
                    <h2 style="margin:0 0 12px;font-size:20px;color:#ffffff;">Hey ${name},</h2>
                    <p style="margin:0 0 16px;color:#d1d5db;font-size:14px;line-height:1.6;">
                        Welcome to CourseMap. You now have access to 50+ learning roadmaps across domains.
                    </p>
                    <a href="${process.env.APP_URL || 'http://localhost:3000/dashboard'}"
                       style="display:inline-block;padding:12px 26px;
                              background:linear-gradient(135deg,#6366f1,#a855f7);
                              color:#fff;border-radius:10px;text-decoration:none;
                              font-weight:700;font-size:14px;">
                        Start Learning ->
                    </a>
                </div>
            </div>
        </body>
        </html>`
    };

    await transporter.sendMail(mailOptions);
}

async function sendWeeklyReminder(toEmail, name, domainName, pct) {
    const mailOptions = {
        from: `"CourseMap" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: `Hey ${name}, your ${domainName} roadmap awaits!`,
        html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#000;font-family:Inter,Arial,sans-serif;">
            <div style="max-width:560px;margin:40px auto;background:#0f0f0f;border-radius:16px;
                        border:1px solid rgba(99,102,241,0.25);overflow:hidden;">
                <div style="padding:32px;">
                    <h2 style="margin:0 0 12px;font-size:20px;color:#ffffff;">Time to level up, ${name}.</h2>
                    <p style="margin:0 0 16px;color:#d1d5db;font-size:14px;line-height:1.6;">
                        You are ${pct}% through your ${domainName} roadmap. Keep going.
                    </p>
                    <a href="${process.env.APP_URL || 'http://localhost:3000/dashboard'}"
                       style="display:inline-block;padding:12px 26px;
                              background:linear-gradient(135deg,#6366f1,#a855f7);
                              color:#fff;border-radius:10px;text-decoration:none;
                              font-weight:700;font-size:14px;">
                        Continue Learning ->
                    </a>
                </div>
            </div>
        </body>
        </html>`
    };

    await transporter.sendMail(mailOptions);
}

module.exports = { sendWelcomeEmail, sendWeeklyReminder };
