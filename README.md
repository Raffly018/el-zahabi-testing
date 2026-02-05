# El Zahabi Travel 🌍✈️

**Platform Booking Perjalanan Modern - Tiket Pesawat, Hotel, Kereta Api & Paket Wisata**

Website ini adalah contoh lengkap website Travel & Tour profesional yang menyerupai Tiket.com dengan performa cepat, desain modern, dan user experience terbaik.

---

## 🎨 Fitur Utama

✈️ **Tiket Pesawat** - Cari & pesan penerbangan  
🏨 **Hotel** - Akomodasi di seluruh Indonesia  
🚂 **Kereta Api** - Pesan tiket kereta dengan mudah  
🎒 **Paket Wisata** - Liburan lengkap dengan pemandu wisata  
💳 **Pembayaran Aman** - Transfer, GoPay, OVO, DANA  
🎉 **Promo & Diskon** - Kode voucher & flash sale  
📱 **Responsive** - Mobile, tablet, desktop sempurna  
⚡ **Cepat** - Loading < 2 detik  
🔐 **Aman** - Enkripsi data & validasi input  

---

## 🚀 Quick Start

### Setup Local Development:
```bash
cd /workspaces/el-zahabi-testing
bash setup.sh
```

### Terminal 1 - Backend:
```bash
cd backend
npm run dev  # Berjalan di http://localhost:5000
```

### Terminal 2 - Frontend:
```bash
cd frontend
npm run dev  # Berjalan di http://localhost:3000
```

---

## 📚 Dokumentasi Lengkap

- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Panduan instalasi lengkap
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Deploy ke Vercel & Railway

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| **Frontend** | Next.js 14, React 18, Tailwind CSS, Framer Motion |
| **Backend** | Express.js, Node.js, JWT, Helmet |
| **Database** | MongoDB (optional) |
| **Hosting** | Vercel (Frontend), Railway (Backend) |

---

## 📁 Struktur Proyek

```
el-zahabi-testing/
├── frontend/              # Next.js React App
│   ├── src/app/          # Pages
│   ├── src/components/   # Components
│   ├── src/lib/          # Utils & API
│   ├── src/store/        # State management
│   └── src/styles/       # Styling
├── backend/              # Express.js API
│   ├── src/server.js     # Main server
│   ├── src/routes/       # API endpoints
│   └── src/.env          # Environment config
└── docs/                 # Documentation
```

---

## 🎯 Halaman-Halaman

| Halaman | URL | Fitur |
|---------|-----|-------|
| **Home** | `/` | Hero section, search bar, features |
| **Pesawat** | `/flights` | Search flights, filter, sorting |
| **Hotel** | `/hotels` | Search hotels, reviews, book |
| **Kereta** | `/trains` | Search trains, class selection |
| **Paket Wisata** | `/tours` | Tour packages, promo display |
| **Login** | `/login` | User authentication |
| **Register** | `/register` | New account creation |
| **Checkout** | `/checkout` | Booking & payment |
| **Dashboard** | `/dashboard` | Booking history, profile |

---

## 🧪 Testing Fitur

### 1. Homepage
```
http://localhost:3000
```
- Cek hero section, search bar, popular cities

### 2. Search & Filter
```
http://localhost:3000/flights
```
- Cari penerbangan, filter harga & rating

### 3. Booking & Checkout
- Add items to cart → Checkout page
- Coba promo: `WELCOME10`, `FLIGHT20`, `PROMO25K`

### 4. User Auth
- Register: `/register`
- Login: `/login`
- Dashboard: `/dashboard`

---

## 🌐 API Endpoints

```
Base URL: http://localhost:5000/api

GET  /flights/search?from=CGK&to=DPS
GET  /hotels/search?location=Bali
GET  /trains/search
GET  /tours
POST /auth/register
POST /auth/login
POST /bookings
POST /promos/validate
```

---

## 💾 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/el-zahabi
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:3000
```

---

## 📊 Data Dummy

Website menggunakan data dummy untuk development:
- **Flights**: 5 penerbangan Jakarta-Bali
- **Hotels**: 4 hotel di berbagai kota
- **Trains**: 3 kereta api populer
- **Tours**: 3 paket wisata
- **Promos**: 3 kode diskon siap pakai

Data ini dapat diganti dengan koneksi database real.

---

## ⚡ Performance

Optimasi performa yang sudah diimplementasikan:
- ✅ Lazy loading images
- ✅ Code splitting (Next.js automatic)
- ✅ Image optimization
- ✅ Minification & compression
- ✅ Browser caching

**Target:**
- Lighthouse: 90+
- Load time: < 2 detik
- First Paint: < 1 detik

---

## 🚀 Deployment

### Frontend ke Vercel:
```bash
cd frontend
vercel
```

### Backend ke Railway:
1. Push ke GitHub
2. Buat project di railway.app
3. Koneksi repository
4. Set env variables
5. Deploy!

Lihat [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) untuk detail lengkap.

---

## 🔐 Keamanan

- ✅ CORS protection
- ✅ Rate limiting
- ✅ Input validation
- ✅ Security headers (Helmet)
- ✅ Environment variables
- ✅ HTTPS (production)

---

## 🌟 Komponen-Komponen Utama

| Komponen | Fungsi |
|----------|--------|
| `Navbar` | Header dengan navigation |
| `SearchBar` | Form pencarian utama |
| `FlightCard` | Display penerbangan |
| `HotelCard` | Display hotel |
| `PromoCard` | Display promo & diskon |
| `CartSummary` | Resume pembelian |
| `SearchFilter` | Filter & sorting results |

---

## 🎨 Desain & Branding

- **Warna Utama**: Biru (#007BFF)
- **Aksen**: Hijau (#22c55e)
- **Font**: System UI (sans-serif)
- **Logo**: ✈️ (emoji)
- **Tagline**: "Travel Mudah & Aman"

---

## 💬 Support & Kontak

- 📧 Email: support@elzahabi.com
- 📞 Phone: +62 812 3456 7890
- 💬 WhatsApp: +62 812 3456 7890

---

## 📄 License

MIT License - Gratis untuk personal & komersial

---

## 🎉 Next Steps

- [ ] Integrasikan MongoDB real
- [ ] Setup payment gateway (Midtrans)
- [ ] Add live chat
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Advanced analytics
- [ ] Mobile app

---

**Dibuat dengan ❤️ menggunakan Next.js + Express.js + Tailwind CSS**

⭐ Star repo ini jika bermanfaat! ⭐

Happy Traveling! ✈️🌍🎒
