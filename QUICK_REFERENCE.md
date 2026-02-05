# El Zahabi Travel - Quick Reference Card

## 🎯 Essentials

| Kebutuhan | Command |
|-----------|---------|
| **Setup semua** | `bash setup.sh` |
| **Run dev servers** | Terminal 1: `cd backend && npm run dev` |
| | Terminal 2: `cd frontend && npm run dev` |
| **Frontend only** | `cd frontend && npm run dev` → http://localhost:3000 |
| **Backend only** | `cd backend && npm run dev` → http://localhost:5000 |
| **Build frontend** | `cd frontend && npm run build` |
| **Build backend** | `cd backend && npm install --production` |

---

## 📱 Testing Endpoints

### Homepage √
http://localhost:3000

### Search Results √
- /flights (search flights)
- /hotels (search hotels)
- /trains (search trains)
- /tours (see tour packages)

### User Account √
- /register (create account)
- /login (login)
- /dashboard (view bookings)

### Checkout √
- /checkout (review & pay)

---

## 🔐 Test Promo Codes

| Code | Type | Value | Min | Usage |
|------|------|-------|-----|-------|
| WELCOME10 | % | 10% off | 500K | New users |
| FLIGHT20 | % | 20% off | 1M | Flight only |
| PROMO25K | Flat | 25K off | 200K | Any |

**Use at**: /checkout → "Punya kode promo?" form

---

## 🛠️ Main Files to Edit

### Brand & Colors
- `frontend/tailwind.config.js` - Colors & animations
- `frontend/src/components/Navbar.jsx` - Header/logo
- `frontend/src/components/Footer.jsx` - Footer text

### Add New Page
- Create `frontend/src/app/newpage/page.jsx`
- Add navigation in `Navbar.jsx`

### Add New API Endpoint
- Create `backend/src/routes/newroute.js`
- Mount in `backend/src/server.js`

### Change Dummy Data
- `frontend/src/lib/dummyData.js`

---

## 📊 Project Stats

| Item | Count |
|------|-------|
| Frontend Pages | 8 |
| Components | 14 |
| API Routes | 9 |
| Tailwind Colors | 20+ |
| Mock Data Items | 15+ |
| Total Lines Code | 3000+ |

---

## 🔍 Folder Tree (Brief)

```
.
├── frontend/
│   ├── src/
│   │   ├── app/           ← Pages (create new here)
│   │   ├── components/    ← Reusable UI components
│   │   ├── lib/           ← Utils & API
│   │   ├── store/         ← State management
│   │   └── styles/        ← CSS
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── server.js      ← Main entry point
│   │   ├── routes/        ← API endpoints
│   │   └── middleware/    ← Auth, error handling
│   └── package.json
├── SETUP_GUIDE.md         ← Full setup instructions
├── DEPLOYMENT_GUIDE.md    ← Deploy to Vercel & Railway
├── API_DOCS.md           ← API reference
├── TESTING_GUIDE.md      ← How to test features
└── STRUCTURE_GUIDE.md    ← Detailed architecture
```

---

## ⚡ Performance Checklist

- [ ] Page loads < 2 seconds
- [ ] Lighthouse score > 80
- [ ] No console errors
- [ ] Images lazy load
- [ ] Mobile responsive
- [ ] Smooth animations
- [ ] Toast notifications work
- [ ] Can add to cart
- [ ] Can checkout
- [ ] Can login/register
- [ ] Promo codes work

---

## 🚀 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Environment variables set (.env files)
- [ ] Frontend deployed on Vercel
- [ ] Backend deployed on Railway
- [ ] API URL updated in Vercel env
- [ ] CORS configured
- [ ] Database connected (if using)
- [ ] Email configured (if needed)
- [ ] Payment gateway setup (if needed)
- [ ] Monitoring enabled

---

## 🆘 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| Port 5000 in use | `lsof -ti :5000 \| xargs kill -9` |
| Port 3000 in use | `lsof -ti :3000 \| xargs kill -9` |
| npm ERR! | `rm -rf node_modules && npm install` |
| API call fails | Check NEXT_PUBLIC_API_URL in .env.local |
| Styles not loading | `npm run dev` again, check Tailwind CSS |
| Login not working | Check localStorage in DevTools |

---

## 📞 Quick Links

- **Docs**: See README.md
- **Setup**: SETUP_GUIDE.md
- **Deploy**: DEPLOYMENT_GUIDE.md
- **Testing**: TESTING_GUIDE.md
- **Structure**: STRUCTURE_GUIDE.md
- **API Docs**: API_DOCS.md

---

## 🎓 Learning Path

1. **Day 1**: Setup & understand structure (SETUP_GUIDE.md)
2. **Day 2**: Explore all features (TESTING_GUIDE.md)
3. **Day 3**: Modify styles & content (STRUCTURE_GUIDE.md)
4. **Day 4**: Add new features (see API_DOCS.md)
5. **Day 5**: Deploy to production (DEPLOYMENT_GUIDE.md)

---

## 🎉 You're Ready!

Everything is set up. Go build something amazing! 🚀

**Questions?** Check the docs or open an issue on GitHub.

Happy Coding! 💻✨
