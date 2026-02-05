# 🚀 Panduan Menjalankan Aplikasi El Zahabi Travel

## 📋 Prasyarat

✅ Node.js v18+ (dari https://nodejs.org/)
✅ npm atau yarn
✅ Git (optional)
✅ Text editor (VS Code recommended)

---

## 🏃 Quick Start (2 Menit)

### 1. Terminal 1 - Jalankan Backend

```bash
cd backend
npm install
npm run dev
```

**Expected output:**
```
🚀 El Zahabi Travel API running at http://localhost:5000
Database: mongodb://localhost:27017/el-zahabi-travel
```

### 2. Terminal 2 - Jalankan Frontend

```bash
cd frontend
npm install
npm run dev
```

**Expected output:**
```
> next dev
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

### 3. Buka Browser

Pergi ke: **http://localhost:3000**

---

## ✨ Testing Fitur

### 1️⃣ Homepage
```
URL: http://localhost:3000
```
- Lihat hero banner
- Coba search bar dengan berbagai pilihan (Flight, Hotel, Train, Tour)
- Scroll ke bawah lihat featured cities & features

**Expected**: Halaman load cepat dengan animasi smooth

### 2️⃣ Cari Penerbangan
```
URL: http://localhost:3000/flights
```

1. Halaman otomatis load hasil dummy flights
2. Klik satu flight untuk add ke cart
3. Coba filter:
   - Urutkan by Harga Terendah
   - Filter Harga Maksimal
   - Filter Rating Minimum

**Expected**: Real-time filtering dan sorting bekerja

### 3️⃣ Cari Hotel
```
URL: http://localhost:3000/hotels
```

1. Lihat 4 hotel default
2. Add ke cart
3. Filter berdasarkan harga

**Expected**: Hotel cards terlihat indah dengan diskon badge

### 4️⃣ Kereta Api
```
URL: http://localhost:3000/trains
```

- Cek kereta dengan berbagai kelas
- Add ke cart

### 5️⃣ Paket Wisata & Promo
```
URL: http://localhost:3000/tours
```

1. Lihat 3 promo cards di atas
2. Klik "WELCOME10" atau promo lain
3. Lihat success toast notification
4. Scroll ke bawah lihat tour packages
5. Add tour ke cart

**Expected**: Toast notification muncul, promo teapply

### 6️⃣ Checkout & Booking
```
URL: http://localhost:3000/checkout
```

1. Jika cart kosong, akan redirect ke homepage
2. Sudah add items dari langkah sebelumnya?
   - Form pembayaran harus terlihat
   - Summary di kanan menunjukkan total
   - Coba input promo code di form

3. Pilih metode pembayaran:
   - Transfer Bank
   - GoPay
   - OVO
   - DANA

4. Check "Setuju dengan S&K"
5. Klik "Bayar Sekarang"

**Expected**: Success toast, redirect ke dashboard

### 7️⃣ Registrasi User
```
URL: http://localhost:3000/register
```

1. Isi form:
   - Nama: John Doe
   - Email: john@example.com
   - No Telp: 081234567890
   - Password: password123
   - Konfirmasi: password123

2. Klik "Daftar"

**Expected**: 
- Success message
- Redirect otomatis ke dashboard
- Navbar menunjukkan nama user

### 8️⃣ Login
```
URL: http://localhost:3000/login
```

1. Isi:
   - Email: john@example.com
   - Password: password123

2. Klik "Login"

**Expected**: Muncul di navbar, bisa akses dashboard

### 9️⃣ Dashboard
```
URL: http://localhost:3000/dashboard
```

1. Setelah login akan melihat:
   - User greeting
   - Stats cards (total booking, spending, points, promos)
   - Booking history dengan dummy bookings

2. Klik "Logout" untuk logout

**Expected**: User info ditampilkan, booking history visible

### 🔟 API Testing
(Optional - menggunakan curl)

```bash
# Health check
curl http://localhost:5000/health

# Search flights
curl "http://localhost:5000/api/flights/search?from=CGK&to=DPS"

# Search hotels  
curl "http://localhost:5000/api/hotels/search?location=Bali"

# Get all tours
curl http://localhost:5000/api/tours

# Get promos
curl http://localhost:5000/api/promos

# Validate promo code
curl -X POST http://localhost:5000/api/promos/validate \
  -H "Content-Type: application/json" \
  -d '{"code":"WELCOME10","amount":500000}'
```

---

## 🎨 Responsive Testing

### Desktop (1920x1080)
```
Keyboard: F12 → uncheck device mode
```

### Tablet (768x1024)
```
F12 → Toggle device toolbar (Ctrl+Shift+M) → iPad
```

### Mobile (375x667)
```
F12 → Toggle device toolbar → iPhone 12 Pro
```

**Expected**: Layout responsif, navigasi jalan, tidak ada broken styles

---

## 🧪 Browser DevTools Testing

### 1️⃣ Network Tab
1. F12 → Network
2. Reload halaman
3. Cek:
   - HTML, CSS, JS files size
   - API calls to http://localhost:5000
   - Images loaded via lazy loading

**Expected**: Total load time < 3 detik

### 2️⃣ Performance Tab
1. F12 → Performance
2. Klik record
3. Lakukan aksi (scroll, click, etc)
4. Stop recording

**Expected**: Smooth 60 FPS animations

### 3️⃣ Console Tab
1. F12 → Console
2. Cek untuk error/warning
3. Coba manual command:
   ```javascript
   localStorage.getItem('token')  // Check if token stored
   ```

**Expected**: No errors, bersih console (mungkin ada warnings saja)

### 4️⃣ Lighthouse
1. F12 → Lighthouse
2. Klik "Analyze page load"
3. Tunggu hasil

**Target:**
- Performance: 80+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

## 📱 Promo Codes untuk Testing

Gunakan di checkout page form "Punya kode promo?":

| Kode | Tipe | Nilai | Min Pembelian |
|------|------|-------|---------------|
| WELCOME10 | % | 10% | Rp 500K |
| FLIGHT20 | % | 20% | Rp 1M |
| PROMO25K | Flat | Rp 25K | Rp 200K |

---

## 🔐 Demo Login

Homepage sudah punya demo login info:

```
Email: demo@elzahabi.com
Password: demo123
```

(Bisa gunakan atau register email baru)

---

## 🐛 Troubleshooting

### ❌ "Cannot find module" di frontend

```bash
cd frontend
rm -rf node_modules
npm install
npm run dev
```

### ❌ "Port 5000 already in use"

```bash
# Cari process
lsof -i :5000

# Kill process
kill -9 <PID>

# atau restart terminal
```

### ❌ API tidak bisa diakses

1. Pastikan backend running di terminal 1
2. Check `.env.local` di frontend:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
3. Restart frontend: `npm run dev`

### ❌ Styles tidak muncul

```bash
cd frontend
npm run dev
```

Next.js akan auto-rebuild Tailwind CSS

### ❌ Toast notifikasi tidak muncul

Refresh browser (F5) dan coba lagi. Toast provider ada di layout.

---

## 📊 Performance Checklist

- [ ] Page load < 2 detik
- [ ] Lighthouse score 80+
- [ ] No console errors
- [ ] Images lazy loading
- [ ] Responsive on mobile
- [ ] Smooth animations (60 FPS)
- [ ] Toast notifications work
- [ ] Can add to cart
- [ ] Can checkout
- [ ] Can login/register
- [ ] Can use promo codes

---

## 🎉 Sukses!

Jika semua ✅, berarti aplikasi berjalan sempurna!

### Next Steps:
1. Explore semua fitur & halaman
2. Baca [SETUP_GUIDE.md](./SETUP_GUIDE.md) untuk detail lebih
3. Baca [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) untuk deploy
4. Untuk API detail, lihat [API_DOCS.md](./API_DOCS.md)

---

## 📞 Bantuan

- Stuck? Baca error message di console
- Check GitHub Issues
- Email: support@elzahabi.com

Happy Testing! 🚀✨
