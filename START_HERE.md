# 🚀 Panduan Menjalankan El Zahabi Travel - MULAI DI SINI

## ⚠️ Masalah yang Ditemukan & Diperbaiki:
1. ✅ Removed root `tsconfig.json` (causing conflicts in monorepo)
2. ✅ Created backend `.env` file with configuration
3. ✅ Verified frontend `.env.local` exists

## 📋 STEPS untuk Menjalankan Website:

### Step 1: Buka Terminal di VS Code
Tekan `Ctrl + ~` (atau `Cmd + ~` pada Mac) untuk membuka integrated terminal

### Step 2: Install Dependencies (Jalankan satu kali)
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install backend dependencies
cd backend
npm install
cd ..
```

### Step 3: Jalankan Development Servers

**OPSI A: Jalankan di Terminal Terpisah (Recommended)**

Terminal 1 - Backend (jalankan di /workspaces/el-zahabi-testing/backend):
```bash
cd backend
npm run dev
```
Tunggu sampai melihat: `Server running on http://localhost:5000`

Terminal 2 - Frontend (buka terminal baru dengan Ctrl+Shift+`):
```bash
cd frontend
npm run dev
```
Tunggu sampai melihat:  `ready - started server on 0.0.0.0:3000`

**OPSI B: Jalankan Kedua Servers Sekaligus (jika concurrently sudah terinstall)**
```bash
npm run dev
```

### Step 4: Akses Website
Buka browser dan kunjungi: **http://localhost:3000**

## 🧪 Login Credentials untuk Testing:
- **Email**: demo@elzahabi.com
- **Password**: demo123

## 📝 Promo Codes untuk Testing:
- `WELCOME10` - 10% discount (min Rp 500K)
- `FLIGHT20` - 20% discount (min Rp 1M)
- `PROMO25K` - Rp 25K flat discount (min Rp 200K)

## ✨ Fitur yang Tersedia:
- ✈️ Pemesanan Penerbangan
- 🏨 Pemesanan Hotel
- 🚂 Pemesanan Kereta
- 🎫 Paket Tour
- 💳 Checkout & Pembayaran (dummy)
- 👤 User Dashboard
- 🎟️ Promo Management

## 🐛 Jika Ada Error:

**Error: "npm not found" (exit code 127)**
- Pastikan Node.js 18+ sudah terinstall di system
- Download dari: https://nodejs.org/

**Error: "Port 5000 / 3000 already in use"**
```bash
# Matikan process yang menggunakan port 5000
lsof -ti :5000 | xargs kill -9

# Matikan process yang menggunakan port 3000
lsof -ti :3000 | xargs kill -9
```

**Error: "Cannot find module" atau "node_modules error"**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**API call returns error**
- Pastikan backend running di port 5000
- Cek `frontend/.env.local` - pastikan `NEXT_PUBLIC_API_URL=http://localhost:5000/api`
- Cek backend logs di terminal

## 📚 Dokumentasi Lengkap:
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Setup lengkap
- [TESTING_GUIDE.md](./TESTING_GUIDE.md) - Testing semua fitur
- [API_DOCS.md](./API_DOCS.md) - API dokumentasi
- [STRUCTURE_GUIDE.md](./STRUCTURE_GUIDE.md) - Struktur project

## ✅ Checklist Sebelum Memulai:
- [ ] Node.js 18+ terinstall
- [ ] npm terinstall  
- [ ] Clone/download project
- [ ] Run `npm install` di root
- [ ] Run `npm install` di frontend
- [ ] Run `npm install` di backend
- [ ] Jalankan backend: `cd backend && npm run dev`
- [ ] Jalankan frontend: `cd frontend && npm run dev`
- [ ] Test di http://localhost:3000

## 🎯 Quick Start Command:
Copy-paste ini ke terminal untuk instant setup:
```bash
npm install && cd frontend && npm install && cd ../backend && npm install && cd ..
echo "✅ Setup complete! Run: cd backend && npm run dev (in one terminal)"
echo "Then: cd frontend && npm run dev (in another terminal)"
```

---

**Status**: Website siap dijalankan! 🎉
