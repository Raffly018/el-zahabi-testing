# El Zahabi Travel - Complete Deployment Guide

## 🎯 Quick Start (Production Deployment)

### 1. Deploy Frontend to Vercel (Fastest Way)

```bash
# Option A: Using Vercel CLI
npm install -g vercel
cd frontend
vercel

# Option B: Push to GitHub & connect to Vercel
# 1. Create GitHub account & repository
# 2. Push code: git push origin main
# 3. Go to vercel.com & import project
# 4. Set env variables & deploy
```

### 2. Deploy Backend to Railway

```bash
# 1. Create account at railway.app
# 2. Connect GitHub repository
# 3. Select "backend" as root directory
# 4. Set environment variables
# 5. Railway auto-deploys
```

### 3. Complete Step-by-Step Deployment

#### A. GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit: El Zahabi Travel"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/el-zahabi-travel.git
git push -u origin main
```

#### B. Frontend Deployment (Vercel)

**Step 1**: Go to [vercel.com](https://vercel.com)
**Step 2**: Click "New Project"
**Step 3**: Import GitHub repository
**Step 4**: Configure:
- Framework: Next.js
- Root Directory: `./frontend`
- Build Command: `npm run build`
- Output Directory: `.next`

**Step 5**: Set Environment Variables:
```
NEXT_PUBLIC_API_URL=https://your-railway-domain.railway.app/api
```

**Step 6**: Deploy!

Your frontend will be live at: `https://your-project-name.vercel.app`

#### C. Backend Deployment (Railway)

**Step 1**: Go to [railway.app](https://railway.app)
**Step 2**: Create new project
**Step 3**: Connect GitHub repository
**Step 4**: Configure:
- Service Name: el-zahabi-api
- Root Directory: `./backend`

**Step 5**: Set Environment Variables:
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/el-zahabi
JWT_SECRET=your-super-secret-key-min-32-chars
FRONTEND_URL=https://your-vercel-domain.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Step 6**: Wait for deployment

Your backend API will be live at: `https://your-project-id.railway.app`

### 4. Connect Frontend to Production Backend

1. Go back to Vercel dashboard
2. Project settings → Environment Variables
3. Update `NEXT_PUBLIC_API_URL` = Your Railway API URL
4. Redeploy project

## 🗄️ Database Setup (MongoDB Atlas)

1. Go to [mongodb.com/cloud](https://www.mongodb.com/cloud)
2. Create account
3. Create free M0 cluster
4. Get connection string
5. Update backend `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.abc123.mongodb.net/el-zahabi?retryWrites=true&w=majority
```

## 📊 Monitor & Debug

### Vercel Dashboard
- Check deployment logs
- Monitor performance
- View analytics

### Railway Dashboard
- View logs
- CPU/Memory usage
- Restart services

### Test APIs
```bash
# Health check
curl https://your-railway-domain.railway.app/health

# Search flights
curl "https://your-railway-domain.railway.app/api/flights/search?from=CGK&to=DPS"

# Search hotels
curl "https://your-railway-domain.railway.app/api/hotels/search?location=Bali"
```

## 🔄 Update & Redeploy

### Frontend Update
```bash
cd frontend
git add .
git commit -m "Update homepage"
git push origin main
# Vercel auto-redeploys
```

### Backend Update
```bash
cd backend
git add .
git commit -m "Fix API endpoint"
git push origin main
# Railway auto-redeploys
```

## 📈 Performance Optimization

### Frontend (Vercel)
- Next.js auto-optimizes images
- Automatic code splitting
- Built-in analytics

### Backend (Railway)
- Scale as needed
- Add more memory if slow
- Use caching headers

## 🚨 Troubleshooting

### Frontend showing "Cannot find backend"
- Check `NEXT_PUBLIC_API_URL` in Vercel env vars
- Verify backend is deployed on Railway
- Redeploy frontend

### Backend returning CORS error
- Frontend URL must be in `FRONTEND_URL` env var
- Restart backend service on Railway

### Database connection failing
- Verify `MONGODB_URI` is correct
- Check whitelist IP on MongoDB Atlas
- Add Railway IP to whitelist

### Payment/Email not working
- Set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`
- Use app-specific passwords for Gmail
- Test with Postman

## 💰 Cost Estimation

| Service | Free Tier | Production Cost |
|---------|-----------|-----------------|
| **Vercel** | ✅ Unlimited | ~$20/month |
| **Railway** | ✅ $5/month | ~$10-50/month |
| **MongoDB** | ✅ 512MB | ~$10-100/month |
| **Total** | Free | **~$30-170/month** |

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Frontend deployed on Vercel
- [ ] Backend deployed on Railway  
- [ ] MongoDB Atlas created & connected
- [ ] Environment variables set (all services)
- [ ] CORS configured correctly
- [ ] Frontend points to production API
- [ ] Test all features on production
- [ ] Check mobile responsiveness
- [ ] Monitor performance (Lighthouse score)
- [ ] Setup error logging (Sentry, LogRocket)
- [ ] Configure domain (if custom domain)

## 🎉 Congrats!

Your El Zahabi Travel website is now live! 🚀

Share your deployment:
- Production URL: https://your-domain.vercel.app
- API URL: https://your-api.railway.app

---

Need help? Check official docs:
- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)
- [MongoDB Docs](https://docs.mongodb.com)
- [Next.js Docs](https://nextjs.org/docs)
- [Express Docs](https://expressjs.com)
