# 🔄 CI/CD Setup Guide

Panduan lengkap untuk mengkonfigurasi GitHub Actions CI/CD untuk El Zahabi Travel.

## 📋 Apa itu CI/CD?

- **CI (Continuous Integration)**: Automated testing & building saat ada push ke GitHub
- **CD (Continuous Deployment)**: Automated deployment ke production

## 🔧 Workflow yang Sudah Setup

### 1️⃣ Frontend CI Workflow
📄 File: `.github/workflows/frontend-ci.yml`

**Triggers:**
- Push ke `main` atau `develop` branch
- Pull requests ke `main` atau `develop`
- Perubahan di folder `frontend/`

**Actions:**
- ✅ Install dependencies
- ✅ Run linter
- ✅ Build Next.js project
- ✅ Test di Node.js 18.x dan 20.x

### 2️⃣ Backend CI Workflow
📄 File: `.github/workflows/backend-ci.yml`

**Triggers:**
- Push ke `main` atau `develop` branch
- Pull requests ke `main` atau `develop`
- Perubahan di folder `backend/`

**Actions:**
- ✅ Install dependencies
- ✅ Run linter
- ✅ Verify server starts
- ✅ Run tests (jika ada)
- ✅ Test di Node.js 18.x dan 20.x

### 3️⃣ Frontend CD Workflow (Deploy to Vercel)
📄 File: `.github/workflows/deploy-frontend.yml`

**Triggers:**
- Push ke `main` branch
- Perubahan di folder `frontend/`

**Actions:**
- 🚀 Deploy otomatis ke Vercel Production

### 4️⃣ Backend CD Workflow (Deploy to Railway)
📄 File: `.github/workflows/deploy-backend.yml`

**Triggers:**
- Push ke `main` branch
- Perubahan di folder `backend/`

**Actions:**
- 🚀 Deploy otomatis ke Railway

---

## ⚙️ Setup Secrets di GitHub

Untuk deployment otomatis bekerja, Anda perlu setup **Secrets** di GitHub.

### Langkah 1: Buka GitHub Settings

1. Pergi ke repository Anda: https://github.com/Raffly018/el-zahabi-testing
2. Click **Settings** → **Secrets and variables** → **Actions**

### Langkah 2: Setup Vercel Secrets

**A. Get VERCEL_TOKEN:**
1. Pergi ke https://vercel.com/account/tokens
2. Click "Create" (New Token)
3. Set scope ke akses repository yang diperlukan
4. Copy token → GitHub Secrets dengan nama: `VERCEL_TOKEN`

**B. Get VERCEL_ORG_ID:**
```bash
# Di terminal, login ke Vercel
npm install -g vercel
vercel login

# Cek org ID
vercel project list
```
Atau langsung dari dashboard Vercel di URL project Anda.

**C. Get VERCEL_PROJECT_ID_FRONTEND:**
```bash
# Di folder frontend
vercel link
# Vercel akan menampilkan Project ID
```

Add di GitHub Secrets:
- `VERCEL_TOKEN`: Token dari Vercel
- `VERCEL_ORG_ID`: Organization ID
- `VERCEL_PROJECT_ID_FRONTEND`: Frontend Project ID

### Langkah 3: Setup Railway Secrets

**A. Get RAILWAY_TOKEN:**
1. Pergi ke https://railway.app/?referralCode=5nqUeQ
2. Login dengan GitHub
3. Go to Account Settings → API Tokens
4. Generate new token
5. Copy → GitHub Secrets dengan nama: `RAILWAY_TOKEN`

**B. Setup Railway Project (Manual First Time):**
1. Create new project di https://railway.app
2. Connect GitHub repository
3. Deploy backend manually first time
4. Then GitHub Actions will handle subsequent deployments

---

## 🚀 Cara Kerja

### Scenario 1: Push to Frontend
```bash
git add frontend/
git commit -m "Update homepage"
git push origin main
```

**Otomatis terjadi:**
1. ✅ GitHub Actions runs Frontend CI
2. ✅ Tests & build frontend
3. ✅ If success, deploy to Vercel
4. 📱 Your app live at Vercel URL

### Scenario 2: Push to Backend
```bash
git add backend/
git commit -m "Add new API endpoint"
git push origin main
```

**Otomatis terjadi:**
1. ✅ GitHub Actions runs Backend CI
2. ✅ Tests & build backend
3. ✅ If success, deploy to Railway
4. 🖥️ Your API live at Railway URL

### Scenario 3: Push ke Develop Branch
```bash
git push origin develop
```

**Otomatis terjadi:**
1. ✅ Hanya CI runs (testing)
2. ❌ No deployment
3. Gunakan untuk feature testing sebelum ke main

---

## 📊 Monitor Deployments

### GitHub Actions Dashboard
https://github.com/Raffly018/el-zahabi-testing/actions

Lihat:
- ✅ Workflow status (passed/failed)
- 📊 Build logs
- ⏱️ Duration
- 🔄 Re-run failed workflows

### Vercel Dashboard
https://vercel.com/dashboard

Lihat:
- 🚀 Deployment status
- 📈 Performance metrics
- 🔗 Live URLs
- 📝 Deployment logs

### Railway Dashboard
https://railway.app

Lihat:
- 🚀 Deployment status
- 📊 Logs
- 💾 Environment variables
- 🔗 Service URLs

---

## 🔧 Environment Variables

### Frontend (.env.production)
File: `frontend/.env.production`
```
NEXT_PUBLIC_API_URL=https://el-zahabi-api.railway.app/api
```

### Backend (.env)
File: `backend/.env`
```
NODE_ENV=production
PORT=5000
JWT_SECRET=your_secret_key
MONGODB_URI=your_mongodb_url
```

**Setup di Vercel & Railway:**
1. Go to project settings
2. Add environment variables
3. Redeploy

---

## 🐛 Troubleshooting

### Deployment failed di GitHub Actions

**Check logs:**
1. Go to Actions tab
2. Click failed workflow
3. Read error message
4. Fix locally, commit, push again

### Vercel deployment failed
- Check `package.json` build commands
- Verify environment variables set
- Check build logs in Vercel dashboard

### Railway deployment failed
- Check `package.json` start command
- Verify Node.js version
- Check logs in Railway dashboard

---

## 📝 Next Steps

1. ✅ Setup Secrets di GitHub (VERCEL_TOKEN, RAILWAY_TOKEN)
2. ✅ Deploy frontend manually ke Vercel first time
3. ✅ Deploy backend manually ke Railway first time
4. ✅ Test: push code → auto-deploy happens
5. ✅ Monitor in GitHub Actions dashboard

---

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Express.js Deployment Guide](https://expressjs.com/en/advanced/best-practice-performance.html)

---

## 💡 Tips

- Use `develop` branch untuk feature development
- Merge ke `main` hanya untuk production-ready code
- Watch GitHub Actions untuk deployment status
- Keep secrets safe, never commit `.env` files
- Use `.env.example` untuk template variables

---

**Need help?** Check GitHub Actions logs atau Railway/Vercel dashboards! 🚀
