# 📚 Struktur Proyek El Zahabi Travel - Penjelasan Detail

## 🎯 Overview

Website Travel & Tour dibagi menjadi 2 bagian utama:

```
el-zahabi-testing/
├── 📁 frontend/   ← React/Next.js (PORT 3000)
├── 📁 backend/    ← Express.js API (PORT 5000)
└── 📄 Documentation files
```

---

## 📁 Frontend Structure

### `/frontend/src/app/` - Pages (Next.js App Router)

```
├── page.jsx                  ✨ Homepage
│   └── Menampilkan: Hero banner, search bar, features, CTA
│
├── flights/page.jsx          ✈️ Flights listing & results
│   └── Fitur: Search flights, filter by price/duration/rating, add to cart
│
├── hotels/page.jsx           🏨 Hotels search
│   └── Fitur: Search hotels, filter, ratings, booking
│
├── trains/page.jsx           🚂 Trains search
│   └── Fitur: Search kereta api, class selection
│
├── tours/page.jsx            🎒 Tour packages
│   └── Fitur: Display tours, promo cards, booking
│
├── login/page.jsx            🔐 User login
│   └── Fitur: Email/password login, demo account info
│
├── register/page.jsx         📝 User registration
│   └── Fitur: New account creation form
│
├── checkout/page.jsx         💳 Payment checkout
│   └── Fitur: Order review, promo input, payment method selection
│
├── dashboard/page.jsx        👤 User dashboard
│   └── Fitur: User profile, booking history, stats
│
└── layout.jsx                🏗️ Root layout
    └── Metadata, fonts, global setup
```

### `/frontend/src/components/` - Reusable Components

**Layout Components**
```
├── Navbar.jsx               Navigation bar with branding
├── Footer.jsx              Footer with contact & links
└── HeroSection.jsx         Hero banner & search bar area
```

**Search & Browse**
```
├── SearchBar.jsx           Main search bar (flights, hotels, trains, tours)
├── SearchFilter.jsx        Filter & sort sidebar
├── FeaturesSection.jsx     Features showcase section
```

**Cards (Display)**
```
├── FlightCard.jsx          Flight search result card
├── HotelCard.jsx           Hotel listing card
├── TrainCard.jsx           Train option card
├── TourCard.jsx            Tour package card
```

**Cart & Checkout**
```
├── CartSummary.jsx         Order summary sidebar
├── PromoCard.jsx           Promo/discount card display
├── PromoInput.jsx          Promo code input form
└── LoadingSpinner.jsx      Animated loading spinner
```

### `/frontend/src/lib/` - Utilities & Config

```
├── api.js                  🌐 Axios API client setup & endpoints
├── utils.js                🛠️ Helper functions (format currency, date, etc)
├── dummyData.js            📊 Mock data (flights, hotels, trains, tours, promos)
```

### `/frontend/src/store/` - State Management

```
└── index.js                🔄 Zustand stores:
    ├── useSearchStore()    - Flight/hotel/train search state
    ├── useAuthStore()      - User authentication state
    ├── useBookingStore()   - Shopping cart state
    └── usePromoStore()     - Applied promo state
```

### `/frontend/src/styles/` - Styling

```
└── globals.css             🎨 Global CSS + custom animations + Tailwind
```

### Frontend Config Files

```
├── package.json            Dependencies
├── next.config.js          Next.js configuration
├── tailwind.config.js      Tailwind CSS customization (colors, animation)
├── postcss.config.js       PostCSS setup
├── tsconfig.json           TypeScript configuration
├── .env.local              Environment variables (development)
└── .env.production         Environment variables (production)
```

---

## 📁 Backend Structure

### `/backend/src/server.js` - Main Server

```javascript
// Express app initialization
// Middleware setup (CORS, helmet, rate limiting)
// Route mounting
// Error handling
// Listening on PORT 5000
```

### `/backend/src/routes/` - API Endpoints

**Authentication**
```
└── auth.js                 🔐 Login, Register, Get Profile
    ├── POST /auth/register
    ├── POST /auth/login
    └── GET /auth/profile
```

**Travel Products**
```
├── flights.js              ✈️ Flight search & details
│   ├── GET /flights/search
│   └── GET /flights/:id
│
├── hotels.js               🏨 Hotel search & details
│   ├── GET /hotels/search
│   └── GET /hotels/:id
│
├── trains.js               🚂 Train search & details
│   ├── GET /trains/search
│   └── GET /trains/:id
│
└── tours.js                🎒 Tour listings
    ├── GET /tours
    └── GET /tours/:id
```

**Booking Management**
```
├── bookings.js             📋 Booking CRUD operations
│   ├── POST /bookings             (Create)
│   ├── GET  /bookings             (Read all)
│   ├── GET  /bookings/:id         (Read single)
│   └── PUT  /bookings/:id/cancel  (Cancel)
│
├── payments.js             💰 Payment processing
│   ├── POST /payments             (Create payment)
│   ├── GET  /payments/:id         (Get payment)
│   └── POST /payments/:id/verify  (Verify payment)
│
└── promos.js               🎉 Promotion codes
    ├── GET  /promos               (Get all)
    └── POST /promos/validate      (Validate code)
```

**Utility**
```
└── cities.js               🌐 Cities & airports list
    ├── GET /cities
    └── GET /cities/airports
```

### `/backend/src/middleware/` - Middleware

```
├── auth.js                 🔐 JWT token validation
└── errorHandler.js         ❌ Global error handling
```

### Backend Config Files

```
├── package.json            Dependencies
├── .env                    Environment variables (development)
├── .env.example            Environment variables template
└── src/server.js           Main entry point
```

---

## 🎨 Tailwind CSS Color Scheme

### Defined Colors in `tailwind.config.js`

```javascript
'el-blue': {
  50: '#f0f7ff',    // Lightest
  100: '#e0efff',
  200: '#b3d9ff',
  300: '#80c1ff',
  400: '#4da6ff',
  500: '#0066ff',   // Primary blue (Dark)
  600: '#0052cc',
  700: '#003d99',
  800: '#002966',
  900: '#001433',   // Darkest
}

'el-green': {
  500: '#22c55e',   // Action buttons
  600: '#16a34a',   // Hover state
  // ... etc
}
```

### Usage Examples
```jsx
className="bg-el-blue-600 text-white"      // Primary button
className="border-el-blue-300"             // Border
className="text-el-green-500 hover:el-green-600"  // Action
className="bg-el-blue-50"                  // Light background
```

---

## 🔄 Data Flow Architecture

### Frontend Search Flow
```
User Input (Search Bar)
    ↓
useSearchStore dispatch
    ↓
API call via axios
    ↓
Results fetched & filtered
    ↓
Displayed in cards
    ↓
User clicks "Pilih"
    ↓
useBookingStore (add to cart)
    ↓
Toast notification
```

### Authentication Flow
```
Register/Login Form
    ↓
API call (POST /auth/register or /auth/login)
    ↓
Token returned
    ↓
useAuthStore (save user & token)
    ↓
localStorage (persist token)
    ↓
Redirect to dashboard
```

### Booking Flow
```
Add items to cart
    ↓
Go to checkout page
    ↓
Apply promo (optional)
    ↓
Select payment method
    ↓
Submit booking
    ↓
API call (POST /bookings)
    ↓
Booking created
    ↓
Api call (POST /payments)
    ↓
Success message
    ↓
Redirect to dashboard
```

---

## 📦 Dependencies Overview

### Frontend (`/frontend/package.json`)

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^14.0.0 | React framework |
| react | ^18.2.0 | UI library |
| tailwindcss | ^3.3.0 | Styling |
| framer-motion | ^10.16.0 | Animations |
| zustand | ^4.4.0 | State management |
| axios | ^1.6.0 | HTTP client |
| date-fns | ^2.30.0 | Date utilities |
| react-hot-toast | ^2.4.1 | Notifications |

### Backend (`/backend/package.json`)

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.18.2 | Web framework |
| cors | ^2.8.5 | CORS middleware |
| helmet | ^7.1.0 | Security headers |
| express-rate-limit | ^7.1.5 | Rate limiting |
| jsonwebtoken | ^9.1.0 | JWT authentication |
| uuid | ^9.0.1 | ID generation |
| mongoose | ^8.0.0 | Database (optional) |

---

## 🚀 Environment Variables

### Frontend (`.env.local` & `.env.production`)

```bash
# Development
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Production (example)
NEXT_PUBLIC_API_URL=https://el-zahabi-api.railway.app/api
```

### Backend (`.env`)

```bash
# Server
NODE_ENV=development
PORT=5000

# Database (optional)
MONGODB_URI=mongodb://localhost:27017/el-zahabi-travel

# JWT
JWT_SECRET=your_jwt_secret_key_min_32_chars
JWT_EXPIRE=7d

# URLs
FRONTEND_URL=http://localhost:3000

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=admin@elzahabi.com
```

---

## 📊 Key Features Implementation

### Search & Filter
- **Location**: `src/components/SearchFilter.jsx`
- **Logic**: Client-side filtering pada dummy data
- **Sorts**: Price, Duration, Rating

### Cart System
- **Store**: `src/store/index.js` → `useBookingStore()`
- **Add**: Click "Pilih" button on any card
- **View**: Sticky cart on `/flights` page

### Promo System
- **Store**: `src/store/index.js` → `usePromoStore()`
- **Validate**: API call `POST /api/promos/validate`
- **Apply**: Form pada `/checkout` page
- **Test**: WELCOME10, FLIGHT20, PROMO25K

### User Authentication
- **Pages**: `/login`, `/register`
- **Store**: `src/store/index.js` → `useAuthStore()`
- **Protected**: `/checkout`, `/dashboard`
- **Storage**: localStorage for token persistence

### Responsive Design
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3+ columns)

---

## 🔗 API Integration Pattern

### Example: Flight Search dalam Aplikasi

**1. Component (flights/page.jsx):**
```jsx
useEffect(() => {
  // Fetch data saat component mount atau filter berubah
  setTimeout(() => {
    // Simulasi API call
    setFlights(dummyFlights);
  }, 800);
}, [filters]);
```

**2. Akan jadi real API call (dengan database):**
```jsx
api.get('/flights/search', {
  params: { from, to, departDate }
}).then(res => setFlights(res.data.data));
```

**3. Backend menangani:**
```js
// flights.js route
router.get('/search', (req, res) => {
  // Query database untuk flights
  // Filter & return results
});
```

---

## 🎯 Next Steps untuk Development

### For Frontend Development
1. Add TypeScript types
2. Add form validation (react-hook-form)
3. Add more animations
4. Add error boundaries
5. Add skeleton loaders

### For Backend Development
1. Setup MongoDB connection
2. Create database models/schemas
3. Add JWT middleware properly
4. Add email notifications
5. Add payment gateway integration

### For DevOps
1. Setup GitHub Actions for CI/CD
2. Configure Vercel auto-deployment
3. Setup Railway auto-build
4. Add logging (Sentry, LogRocket)
5. Add monitoring (Uptime Robot)

---

## 📖 Quick Reference

| Need | Location |
|------|----------|
| Change brand color | `frontend/tailwind.config.js` |
| Add new API endpoint | `backend/src/routes/` |
| Add new page | `frontend/src/app/` |
| Add new component | `frontend/src/components/` |
| Change dummy data | `frontend/src/lib/dummyData.js` |
| Setup environment | `backend/.env` |
| View API docs | `API_DOCS.md` |
| Deploy frontend | `DEPLOYMENT_GUIDE.md` → Vercel |
| Deploy backend | `DEPLOYMENT_GUIDE.md` → Railway |

---

**Happy Coding! 🚀✨**
