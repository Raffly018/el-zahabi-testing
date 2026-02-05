# 🚀 EL ZAHABI TRAVEL - COMPLETE STARTUP GUIDE

**Status**: ✅ Ready to run (dependencies installed)

---

## ⚡ QUICKEST START (Copy & Paste)

### ONE-TIME SETUP:
```bash
bash install-complete.sh
```

### RUN EVERY TIME (TWO TERMINALS):

Terminal 1:
```bash
bash start-backend.sh
```

Terminal 2 (Ctrl+Shift+` to open new terminal):
```bash
bash start-frontend.sh
```

Then open browser: **http://localhost:3000**

---

## 📋 DETAILED STEPS (If above shortcuts don't work)

### Step 1: Verify Node.js is installed
```bash
node -v    # Should show v18.x.x or higher
npm -v     # Should show 9.x.x or higher
```

If these commands fail, install Node.js from https://nodejs.org/

### Step 2: Install dependencies (one-time only)
```bash
# From workspace root directory
bash install-complete.sh
```

**Expected Output**:
```
✅ Cleanup done
✅ All dependencies installed successfully!
✅ SETUP COMPLETE!
```

### Step 3: Start Backend Server
Open terminal and run:
```bash
cd /workspaces/el-zahabi-testing/backend
npm run dev
```

**WAIT FOR THIS MESSAGE**:
```
🚀 El Zahabi Travel API running at http://localhost:5000
Database: mongodb://localhost:27017/el-zahabi-travel
```

### Step 4: Start Frontend Server
Open ANOTHER terminal (Ctrl+Shift+`) and run:
```bash
cd /workspaces/el-zahabi-testing/frontend
npm run dev
```

**WAIT FOR THIS MESSAGE**:
```
- ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Step 5: Open in Browser
Visit: **http://localhost:3000**

You should see the El Zahabi Travel homepage with:
- ✅ Colorful design
- ✅ Navigation bar
- ✅ Hero section
- ✅ No error messages

---

## 🧪 TEST THE WEBSITE

### Test 1: Visit Each Page
- Click "Flights" → See flight search
- Click "Hotels" → See hotel gallery
- Click "Trains" → See train information
- Click "Tours" → See tour packages

### Test 2: Login
1. Click "Login" in navigation bar
2. Enter email: `demo@elzahabi.com`
3. Enter password: `demo123`
4. Click "Login"
5. You should see Dashboard page

### Test 3: Try Booking
1. Go to Flights or Hotels
2. Add item to cart
3. Go to Checkout
4. Try promo codes:
   - `WELCOME10` (10% off)
   - `FLIGHT20` (20% off)
   - `PROMO25K` (Rp 25K off)

---

## ❌ IF SOMETHING FAILS

### Problem 1: "bash: command not found" or script won't run

**Solution**:
```bash
# Make scripts executable
chmod +x *.sh

# Then try running:
bash install-complete.sh
```

### Problem 2: "Node.js not found" or "npm not found"

**Solution**:
1. Visit https://nodejs.org/
2. Download and install Node.js 18+
3. Restart terminal
4. Verify: `node -v` and `npm -v`

### Problem 3: "Port already in use" (3000 or 5000)

**Solution**:
```bash
# Kill processes on the ports
killall node

# OR specific ports:
lsof -ti :5000 | xargs kill -9    # Backend
lsof -ti :3000 | xargs kill -9    # Frontend
```

### Problem 4: Backend starts but crashes immediately

**Solution**:
```bash
# Check for errors
cd backend
node src/server.js    # Run directly (not npm run dev)

# You'll see the actual error message
```

**Common fixes**:
- Remove node_modules and reinstall:
  ```bash
  cd backend
  rm -rf node_modules
  npm install --legacy-peer-deps
  npm run dev
  ```

### Problem 5: Frontend shows "Cannot connect to backend"

**Solution**:
1. Verify backend is actually running (check terminal 1)
2. Check it shows "http://localhost:5000"
3. Try visiting: http://localhost:5000/health in browser (should show `{"status":"OK"}`)
4. Check file `frontend/.env.local`:
   ```bash
   cat frontend/.env.local
   # Should contain: NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
5. If file is missing:
   ```bash
   cat > frontend/.env.local << 'EOF'
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   EOF
   ```

### Problem 6: "Cannot find module" error

**Solution**:
```bash
# Full clean install
rm -rf node_modules frontend/node_modules backend/node_modules
rm -rf .next
npm cache clean --force
npm install --legacy-peer-deps
cd frontend && npm install --legacy-peer-deps && cd ..
cd backend && npm install --legacy-peer-deps && cd ..

# Start fresh
bash start-backend.sh       # Terminal 1
bash start-frontend.sh      # Terminal 2
```

### Problem 7: Page styles look broken or blank

**Solution**:
```bash
# Restart frontend
cd frontend
npm run dev

# Or hard refresh browser (Ctrl+Shift+R)
```

### Problem 8: Stuck on compiling / very slow

**Solution**:
1. This is normal on first run (can take 2-3 minutes)
2. Wait patiently, don't interrupt
3. If truly stuck:
   ```bash
   # Kill and restart
   killall node
   bash start-backend.sh
   bash start-frontend.sh
   ```

---

## 🔍 DEBUGGING CHECKLIST

If you're totally stuck:

**Check 1**: Node.js installed?
```bash
node -v    # Should show version
```

**Check 2**: Dependencies installed?
```bash
# Should show many folders
ls backend/node_modules | wc -l
ls frontend/node_modules | wc -l
```

**Check 3**: Config files exist?
```bash
cat backend/.env         # Should show DATABASE_URL, PORT, etc.
cat frontend/.env.local  # Should show NEXT_PUBLIC_API_URL
```

**Check 4**: Backend works alone?
```bash
cd backend
npm run dev
# Visit http://localhost:5000/health in browser
# Should see: {"status":"OK"}
```

**Check 5**: Frontend works alone?
```bash
cd frontend
npm run dev
# Visit http://localhost:3000 in browser
# Should see homepage (even with no backend)
```

---

## 🆘 NUCLEAR RESET (If everything broken)

Run this to completely reset:
```bash
# Go to project root
cd /workspaces/el-zahabi-testing

# Remove everything npm-related
rm -rf node_modules frontend/node_modules backend/node_modules
rm -rf .next frontend/.next
rm package-lock.json frontend/package-lock.json backend/package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall everything fresh
npm install --legacy-peer-deps
cd frontend && npm install --legacy-peer-deps && cd ..
cd backend && npm install --legacy-peer-deps && cd ..

# Now start fresh
cd backend && npm run dev        # Terminal 1
cd frontend && npm run dev       # Terminal 2
```

---

## 📞 QUICK REFERENCE

| Component | Port | URL | Command |
|-----------|------|-----|---------|
| **Backend API** | 5000 | `http://localhost:5000` | `cd backend && npm run dev` |
| **Health Check** | 5000 | `http://localhost:5000/health` | (Test in browser) |
| **Frontend** | 3000 | `http://localhost:3000` | `cd frontend && npm run dev` |
| **Both together** | - | - | `npm run dev` |

---

## 🎓 DOCUMENTATION FILES

- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Detailed error solutions
- **[START_HERE.md](./START_HERE.md)** - Alternative guide
- **[QUICK_START.md](./QUICK_START.md)** - 3-step quick guide
- **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - Feature testing  
- **[API_DOCS.md](./API_DOCS.md)** - Backend API reference
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Detailed setup

---

## 🎯 When You're Successful

**You'll see**:
1. Backend terminal shows "running at http://localhost:5000"
2. Frontend terminal shows "ready on 0.0.0.0:3000"
3. Browser shows colorful El Zahabi homepage
4. No red errors in page console (F12)
5. Can click buttons and navigate pages

**Then you can**:
1. Login with `demo@elzahabi.com` / `demo123`
2. Browse flights, hotels, trains, tours
3. Add items to cart
4. Test promo codes in checkout
5. View booking history in dashboard

---

## ⚡ TIPS

- **Hot reload**: Changes appear instantly without restarting
- **Need 2 terminals**: Backend and Frontend must run simultaneously
- **No database needed**: Uses dummy data (works offline)
- **Demo user**: Always available (`demo@elzahabi.com` / `demo123`)
- **Port issues**: Most common problem - see "Port already in use" section

---

**You're ready!** 🚀

Still stuck? Read TROUBLESHOOTING.md or repeat from "COMPLETE RESET" section.

**Last Updated**: February 5, 2026
