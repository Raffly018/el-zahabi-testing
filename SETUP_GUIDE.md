# El Zahabi Travel - README Setup & Deployment Guide

## 🎯 Deskripsi Proyek

**El Zahabi Travel** adalah website Travel & Tour modern yang menyerupai Tiket.com dengan fitur lengkap untuk booking tiket pesawat, hotel, kereta api, dan paket wisata di Indonesia. Platform ini dirancang untuk performa cepat, responsif, dan user experience yang optimal.

## 🏗️ Struktur Proyek

```
el-zahabi-testing/
├── frontend/                 # Next.js React App
│   ├── src/
│   │   ├── app/             # Next.js App Router
│   │   │   ├── page.jsx              # Homepage
│   │   │   ├── flights/page.jsx      # Flights results
│   │   │   ├── hotels/page.jsx       # Hotels search
│   │   │   ├── trains/page.jsx       # Trains search
│   │   │   ├── tours/page.jsx        # Tour packages
│   │   │   ├── login/page.jsx        # Login page
│   │   │   ├── register/page.jsx     # Register page
│   │   │   ├── checkout/page.jsx     # Checkout page
│   │   │   ├── dashboard/page.jsx    # User dashboard
│   │   │   └── layout.jsx            # Root layout
│   │   ├── components/              # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── FlightCard.jsx
│   │   │   ├── HotelCard.jsx
│   │   │   ├── TourCard.jsx
│   │   │   ├── TrainCard.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── SearchFilter.jsx
│   │   │   ├── CartSummary.jsx
│   │   │   ├── PromoCard.jsx
│   │   │   ├── PromoInput.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   ├── lib/
│   │   │   ├── api.js               # Axios API setup
│   │   │   ├── utils.js             # Helper functions
│   │   │   ├── dummyData.js         # Mock data
│   │   ├── store/
│   │   │   └── index.js             # Zustand stores
│   │   └── styles/
│   │       └── globals.css          # Global styles
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── .env.local
│
├── backend/                  # Express.js API Server
│   ├── src/
│   │   ├── server.js               # Main server
│   │   └── routes/
│   │       ├── flights.js
│   │       ├── hotels.js
│   │       ├── trains.js
│   │       ├── tours.js
│   │       ├── auth.js
│   │       ├── bookings.js
│   │       ├── promos.js
│   │       ├── payments.js
│   │       └── cities.js
│   ├── package.json
│   └── .env.example
│
└── README.md                # Setup documentation
```

## 🚀 Instalasi & Setup (Local Development)

### Prerequisites
- Node.js 18+ (Download dari [nodejs.org](https://nodejs.org/))
- npm atau yarn

### Step 1: Clone Repository
```bash
cd /workspaces/el-zahabi-testing
```

### Step 2: Setup Frontend

```bash
cd frontend
npm install
# or
yarn install
```

Environment variables sudah di-set di `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Step 3: Setup Backend

```bash
cd ../backend
npm install
# or
yarn install
```

Buat file `.env` dari `.env.example`:
```bash
cp .env.example .env
```

Edit `.env` sesuai kebutuhan:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/el-zahabi-travel
JWT_SECRET=your_jwt_secret_here
FRONTEND_URL=http://localhost:3000
```

## 🎮 Menjalankan Aplikasi (Local)

### Terminal 1: Run Backend
```bash
cd backend
npm run dev
# atau
yarn dev
```

Backend akan berjalan di `http://localhost:5000`

Cek health check: `http://localhost:5000/health`

### Terminal 2: Run Frontend
```bash
cd frontend
npm run dev
# atau
yarn dev
```

Frontend akan berjalan di `http://localhost:3000`

Buka browser: `http://localhost:3000`

## 🧪 Testing Fitur Utama

### 1. Homepage
- Url: `http://localhost:3000`
- Cek hero section, search bar, popular cities, features

### 2. Pecarian Penerbangan
- Klik "Cari Penerbangan" atau pergi ke `/flights`
- Coba sort by price, duration, rating
- Klik "Pilih" untuk add to cart

### 3. Search Hotel
- Url: `/hotels`
- Filter berdasarkan harga dan rating
- Add to cart

### 4. Booking & Checkout
- Add beberapa item ke cart
- Pergi ke `/checkout`
- Coba gunakan promo: `WELCOME10`, `FLIGHT20`, `PROMO25K`
- Pilih metode pembayaran
- Submit booking

### 5. Login & Dashboard
- Pergi ke `/register` untuk registrasi
- Login dengan akun yang dibuat
- Cek dashboard di `/dashboard`
- Lihat riwayat booking

### 6. Promo System
- Di halaman tours (`/tours`), klik "Gunakan" pada promo
- Atau di checkout page, gunakan form promo input

## 📦 Build untuk Production

### Frontend (Vercel)

Vercel akan otomatis detect Next.js project dan build sesuai default settings.

Untuk build manual:
```bash
cd frontend
npm run build
npm start
```

### Backend (Railway/Heroku)

Untuk railway.app:
1. Push code ke GitHub
2. Koneksi repository ke Railway
3. Railway akan auto-detect Node.js project
4. Set environment variables di Railway dashboard

Manual build:
```bash
cd backend
npm install --production
npm start
```

## 🌐 Deployment ke Vercel (Frontend)

### Opsi 1: Vercel CLI
```bash
cd frontend
npm install -g vercel
vercel
```

### Opsi 2: GitHub Integration
1. Push kode ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import project dari GitHub
4. Set environment variables
5. Deploy

### Konfigurasi Environment di Vercel:
- `NEXT_PUBLIC_API_URL`: URL backend API yang sudah di-deploy

Contoh: `https://el-zahabi-api.railway.app/api`

## 🚀 Deployment Backend ke Railway

1. Buat akun di [railway.app](https://railway.app)
2. New Project → GitHub → Cari repository
3. Railway akan auto-detect Node.js
4. Konfigurasi:
   - Root Directory: `backend/`
   - Start Command: `npm start`

5. Set Environment Variables di Railway Dashboard:
```
NODE_ENV=production
PORT=5000
MONGODB_URI=<dari MongoDB Atlas>
JWT_SECRET=<strong secret>
FRONTEND_URL=https://your-vercel-domain.vercel.app
```

6. Railway akan auto-deploy dan memberikan URL publik

## 💾 Database Setup (MongoDB)

### Option 1: MongoDB Atlas (Cloud)
1. Buat account di [mongodb.com/cloud](https://www.mongodb.com/cloud)
2. Buat cluster gratis
3. Dapatkan connection string
4. Update `.env` dengan connection string

### Option 2: Local MongoDB
```bash
# Install MongoDB
brew install mongodb-community  # macOS
# atau download dari mongodb.com

# Start MongoDB service
mongod
```

## 🎨 Customization

### Warna Brand
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  'el-blue': { /* Biru dominan */ },
  'el-green': { /* Hijau aksen */ },
}
```

### Logo & Favicon
Ganti di `frontend/src/app/layout.jsx`

### Text Content
Edit di component-component dan halaman

## 📱 Responsive Design

Aplikasi sudah fully responsive:
- Desktop: Grid 3+ columns
- Tablet: Grid 2 columns
- Mobile: Grid 1 column (full width)

Test dengan:
```bash
# Chrome DevTools
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
```

## ⚡ Performance Tips

1. **Lazy Loading**: Images menggunakan `loading="lazy"`
2. **Minification**: Next.js sudah auto-minify di production
3. **Caching**: Browser cache dipandu oleh Next.js cache headers
4. **Code Splitting**: Next.js auto-split code per route

Check Lighthouse Score:
```bash
# Di Chrome DevTools
F12 → Lighthouse → Generate report
```

Cek speeds di [PageSpeed Insights](https://pagespeed.web.dev/)

## 🔐 Security Best Practices

1. **Never commit `.env`**: Sudah di `.gitignore`
2. **Validate Input**: Data validation di frontend & backend
3. **CORS**: Backend hanya accept dari frontend domain
4. **Rate Limiting**: Express rate limit middleware applied
5. **Helmet**: Security headers via helmet middleware

## 🐛 Troubleshooting

### Frontend error: "Cannot find module"
```bash
cd frontend
rm -rf node_modules
npm install
npm run dev
```

### Backend error: "Port 5000 already in use"
```bash
# Kill process on port 5000
lsof -ti :5000 | xargs kill -9
npm run dev
```

### API call returns 500
- Check backend console untuk error message
- Verify `.env` variables
- Restart backend server

### Styles tidak loading
```bash
# Rebuild Tailwind CSS
cd frontend
npx tailwindcss -i ./src/styles/globals.css -o ./src/styles/output.css
npm run dev
```

## 📚 Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **State Management**: Zustand 4
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Date**: date-fns 2
- **Icons**: Heroicons 2

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 4
- **Security**: Helmet, CORS, Express Rate Limit
- **Validation**: express-validator
- **Auth**: JWT (jsonwebtoken)
- **Database**: MongoDB (optional)
- **Email**: Nodemailer (optional)

## 📝 API Endpoints

### Flights
- `GET /api/flights/search?from=CGK&to=DPS` - Search flights
- `GET /api/flights/:id` - Get flight details

### Hotels
- `GET /api/hotels/search?location=Bali` - Search hotels
- `GET /api/hotels/:id` - Get hotel details

### Trains
- `GET /api/trains/search` - Search trains
- `GET /api/trains/:id` - Get train details

### Tours
- `GET /api/tours` - Get all tours
- `GET /api/tours/:id` - Get tour details

### Auth
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id/cancel` - Cancel booking

### Promos
- `GET /api/promos` - Get all promos
- `POST /api/promos/validate` - Validate promo code

### Payments
- `POST /api/payments` - Create payment
- `GET /api/payments/:id` - Get payment details
- `POST /api/payments/:id/verify` - Verify payment

## 🎉 Fitur yang Sudah Diimplementasi

✅ Homepage dengan hero section & search bar
✅ Search flights, hotels, trains, tours
✅ Filter & sort hasil pencarian
✅ Promo system dengan code validation
✅ Shopping cart & checkout
✅ User registration & login
✅ User dashboard & booking history
✅ Multiple payment methods
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations (Framer Motion)
✅ Toast notifications
✅ Lazy loading images
✅ Modern UI dengan Tailwind CSS
✅ Backend API dummy dengan Express

## 🚧 Fitur Lanjutan (Future)

- [ ] Integrasi MongoDB real
- [ ] Integrasi payment gateway (Midtrans, Xendit)
- [ ] Live chat customer service
- [ ] Email notification
- [ ] SMS notification
- [ ] Admin panel untuk manage inventory
- [ ] Advanced analytics
- [ ] User reviews & ratings
- [ ] Wishlist functionality
- [ ] Integration dengan travel API (Amadeus, Sabre, etc)

## 📧 Kontak & Support

- Email: support@elzahabi.com
- WhatsApp: +62 812 3456 7890
- Website: https://elzahabi.travel

## 📄 License

MIT License - Feel free to use for personal & commercial projects

---

**Happy Traveling! ✈️🎉**

Dibuat dengan ❤️ menggunakan Next.js + Express.js + Tailwind CSS
