# 🚀 El Zahabi Travel - Quick Start Guide

## ✅ Issues Fixed:
1. ✅ Removed conflicting `tsconfig.json` from root
2. ✅ Created backend `.env` configuration
3. ✅ Verified frontend `.env.local`
4. ✅ Created setup and startup scripts

---

## 🎯 FASTEST WAY TO START (3 Simple Steps):

### Step 1: Open Terminal
In VS Code: Press `Ctrl + ~` to open terminal at bottom

### Step 2: Install (Run ONCE, takes 3-5 minutes)
Copy-paste this command:
```bash
bash install-complete.sh
```
Wait until you see: **✅ SETUP COMPLETE!**

### Step 3: Start Servers (Run EVERY TIME you want to use the app)

**Option A: Both servers together (automatic startup)**
```bash
npm run dev
```
Wait for both servers to start (2-3 minutes)

**Option B: Separate terminals (more control) - RECOMMENDED**

Terminal 1 (start backend first):
```bash
bash start-backend.sh
```
Wait to see: `🚀 El Zahabi Travel API running at http://localhost:5000`

Then open NEW terminal (Ctrl+Shift+`) and run:
```bash
bash start-frontend.sh
```
Wait to see: `ready - started server on 0.0.0.0:3000`

### Step 4: Visit Website
Open browser and go to: **http://localhost:3000**

✅ You're done! 🎉

---

## 📊 Success Indicators

You'll know it's working when you see:

**Terminal 1 (Backend)** shows:
```
🚀 El Zahabi Travel API running at http://localhost:5000
Database: mongodb://localhost:27017/el-zahabi-travel
```

**Terminal 2 (Frontend)** shows:
```
- ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

**Browser** at `http://localhost:3000` displays:
- El Zahabi Travel homepage (colorful hero section)
- Navigation bar at top
- No red/orange errors visible
- Can click on links and buttons

---

## 🧪 Test It Out

### Login Page:
1. Click "Login" in navbar
2. Use these credentials:
   - **Email**: demo@elzahabi.com
   - **Password**: demo123
3. Click "Login" button
4. You should see Dashboard with your bookings

### Test Features:
- Click "Flights" → Search for flights
- Click "Hotels" → Browse hotels
- Click "Trains" → Check train schedules  
- Click "Tours" → See tour packages
- Click "Cart" at top → Use promo codes

### Test Promo Codes (in checkout):
```
WELCOME10  → 10% off (min Rp 500K)
FLIGHT20   → 20% off (min Rp 1M)
PROMO25K   → Rp 25K off (min Rp 200K)
```

---

## ❌ SOMETHING NOT WORKING?

### If backend won't start:
```bash
# Kill any old processes
killall node 2>/dev/null || true

# Try again
bash start-backend.sh
```

### If you see "API Error" or "Cannot reach backend":
1. Make sure backend is running (check Terminal 1)
2. Check that it says port 5000
3. Try visiting http://localhost:5000/health in browser
4. If that works, check browser console (F12) for errors

### If styles look broken:
1. Refresh page (F5)
2. Hard refresh (Ctrl+Shift+R)
3. Restart frontend server

### If nothing works:
1. Read [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
2. Or do complete reset:
   ```bash
   bash install-complete.sh
   ```

---

## 📁 Project Structure:

```
el-zahabi-testing/
├── backend/                    # Express.js API Server
│   ├── src/
│   │   ├── server.js          # Main server file
│   │   ├── routes/            # API endpoints
│   │   └── middleware/        # Auth, error handling
│   ├── .env                   # Configuration (created ✅)
│   └── package.json
│
├── frontend/                   # Next.js React App
│   ├── src/
│   │   ├── app/              # Pages (flights, hotels, etc)
│   │   ├── components/       # Reusable components
│   │   ├── lib/              # Utilities & API client
│   │   └── store/            # State management (Zustand)
│   ├── .env.local            # Configuration (exists ✅)
│   └── package.json
│
├── run-setup.sh              # Setup script (created ✅)
├── start-dev.sh              # Development starter (created ✅)
├── START_HERE.md             # Detailed guide (created ✅)
└── package.json              # Root package.json
```

---

## 🎓 Detailed Documentation:

- **[START_HERE.md](./START_HERE.md)** - Comprehensive setup guide
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Advanced setup instructions
- **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - Feature testing walkthrough
- **[API_DOCS.md](./API_DOCS.md)** - Complete API reference
- **[STRUCTURE_GUIDE.md](./STRUCTURE_GUIDE.md)** - Code architecture explanation
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Deploy to production

---

## 🎯 Development Workflow:

### Make Changes and See Them Live:
Both frontend and backend use hot-reload, so changes appear instantly!

```bash
# Terminal 1: Backend runs on :5000
cd backend && npm run dev

# Terminal 2: Frontend runs on :3000
cd frontend && npm run dev

# Edit files and watch them reload automatically
```

### Build for Production:
```bash
npm run build
```

---

## 🌐 Features Available:

### Flights Module
- Search flights by date & destination
- Multiple airline options
- Real-time prices
- Seat selection

### Hotels Module  
- Browse hotel options
- Check-in/check-out dates
- Filter by price & amenities
- Instant booking

### Train Module
- Search train schedules
- Different classes (Economy, Business, Executive)
- Multiple operators (PT KAI)
- Easy booking

### Tours Module
- Pre-made tour packages
- 3-5 day itineraries
- Includes flights, hotels, guide
- Direct booking

### User System
- Register new account
- Login with demo credentials
- View booking history
- Manage reservations

### Checkout System
- Mock payment processor
- Promo code application
- Invoice generation
- Booking confirmation

---

## 📞 Support:

If you encounter issues:
1. Check the error message in terminal - most are self-explanatory
2. Review the documentation files listed above
3. Ensure Node.js 18+ is installed
4. Try clearing node_modules and reinstalling

---

## ⚡ Quick Commands Reference:

```bash
# Setup (run once)
bash run-setup.sh

# Start development (run anytime)
bash start-dev.sh

# Or start manually in separate terminals
cd backend && npm run dev        # Terminal 1
cd frontend && npm run dev       # Terminal 2

# Build for production
npm run build

# Clean everything
rm -rf node_modules frontend/node_modules backend/node_modules
npm install
```

---

**You're all set! Happy coding! 🚀✨**
