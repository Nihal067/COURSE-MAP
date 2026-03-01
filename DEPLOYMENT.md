# CourseMap Deployment (Fastest Path Today)

This project is now configured so `server` serves:
- API routes (`/api/*`)
- Website pages (`/`, `/dashboard.html`, `/roadmap.html`)

So you can deploy with **one service** and one public URL.

## 1. Push code to GitHub

```powershell
git add .
git commit -m "Prepare production deploy with signup OTP and unified hosting"
git push origin main
```

## 2. Deploy on Render (single service)

Use the `render.yaml` in repo root.

1. Open Render dashboard.
2. Choose **Blueprint** deploy from your GitHub repo.
3. Confirm service from `render.yaml`.
4. Set env vars:
`MONGO_URI`, `JWT_SECRET`, `APP_URL`, `EMAIL_USER`, `EMAIL_PASS`
5. (Optional) `CORS_ORIGIN` can be blank since frontend + API are same origin.

After deploy, your site URL will be:
`https://<your-service>.onrender.com`

## 3. Required OTP email setup

Signup OTP will not send unless these are valid:
- `EMAIL_USER`: your Gmail address
- `EMAIL_PASS`: Gmail **App Password** (not Gmail account password)

Also make sure Gmail has 2-Step Verification enabled.

## 4. Verify production

1. Open `/`
2. Create account:
`Send OTP` -> enter OTP from email -> `Create Account`
3. Login normally (no OTP on login)
4. Open dashboard and roadmap pages

## Local run

```powershell
cd server
npm install
npm start
```

Then open:
`http://localhost:5000`
