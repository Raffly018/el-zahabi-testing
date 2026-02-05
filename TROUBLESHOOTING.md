# 🔧 TROUBLESHOOTING GUIDE - El Zahabi Travel

Ikuti guide ini jika website tidak bisa dijalankan.

---

## 📋 Diagnostic Checklist

Pastikan Anda check semua point ini:

- [ ] Node.js v18+ terinstall (`node -v` di terminal)
- [ ] npm terinstall (`npm -v` di terminal)
- [ ] Sudah jalankan `bash install-complete.sh`
- [ ] Port 3000 tidak digunakan (`lsof -ti :3000`)
- [ ] Port 5000 tidak digunakan (`lsof -ti :5000`)
- [ ] File `.env` ada di `/backend/`
- [ ] File `.env.local` ada di `/frontend/`

---

## ❌ COMMON ISSUES & SOLUTIONS

### 1. "bash: command not found" atau Script tidak bisa dijalankan

**Problem**: Terminal tidak menemukan script

**Solution**:
```bash
# Buat script executable
chmod +x install-complete.sh run-setup.sh start-dev.sh

# Kemudian jalankan dengan format yang benar:
bash install-complete.sh

# ATAU gunakan absolute path:
/workspaces/el-zahabi-testing/install-complete.sh
```

---

### 2. "Node.js not found" atau "npm not found"

**Problem**: Node.js/npm belum terinstall atau tidak di PATH

**Solution**:

1. Download Node.js LTS dari: https://nodejs.org/
2. Install sesuai OS Anda
3. Verify installation:
   ```bash
   node -v    # Should show v18.x.x or higher
   npm -v     # Should show 9.x.x or higher
   ```
4. If still not found, add to PATH:
   - **Linux**: Usually automatic
   - **macOS**: Usually automatic
   - **Windows**: Restart terminal after install

---

### 3. "npm ERR! code ENOENT" atau Dependencies tidak terinstall

**Problem**: npm install gagal

**Solution**:
```bash
# Full clean & reinstall
cd /workspaces/el-zahabi-testing

# Remove all node_modules
rm -rf node_modules
rm -rf frontend/node_modules  
rm -rf backend/node_modules
rm package-lock.json
rm frontend/package-lock.json
rm backend/package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall everything
npm install --legacy-peer-deps
cd frontend && npm install --legacy-peer-deps && cd ..
cd backend && npm install --legacy-peer-deps && cd ..

# Run setup again
bash install-complete.sh
```

---

### 4. "Port 3000 already in use" atau "Port 5000 already in use"

**Problem**: Ada process lain yang menggunakan port yang sama

**Solution**:
```bash
# Kill process on port 3000 (Frontend)
lsof -ti :3000 | xargs kill -9

# Kill process on port 5000 (Backend)
lsof -ti :5000 | xargs kill -9

# If above doesn't work on Windows:
netstat -ano | findstr :3000    # Find PID, then:
taskkill /PID <PID> /F

netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

### 5. Backend starts but shows "error" or crashes immediately

**Problem**: Server tidak bisa start

**Check these**:
```bash
# Verify .env file
cat backend/.env

# Check if all dependencies installed
ls -la backend/node_modules | grep -E "^d" | wc -l  # Should show many folders

# Try running with verbose output
cd backend
node src/server.js   # Skip the watch mode to see actual errors

# Check for syntax errors
node -c src/server.js   # Check syntax only
```

**Common fixes**:
- Remove `node_modules` & reinstall: `npm install --legacy-peer-deps`
- Check if port 5000 is really free
- Verify all files in `src/routes/` exist and have no syntax errors

---

### 6. Frontend shows "Cannot find backend" or API errors

**Problem**: Frontend cannot reach backend API

**Check these**:
```bash
# 1. Verify backend is running
curl http://localhost:5000/health

# 2. Check .env.local file
cat frontend/.env.local
# Should show: NEXT_PUBLIC_API_URL=http://localhost:5000/api

# 3. Check browser console (F12)
# Look for CORS errors or "Failed to fetch"

# 4. Verify frontend .env is loaded
cd frontend && npm run dev
# Look for "NEXT_PUBLIC_API_URL" in console output
```

**Solution**:
```bash
# Recreate .env.local
cd frontend
rm .env.local
cat > .env.local << 'EOF'
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF

# Restart frontend
npm run dev
```

---

### 7. Styles/CSS not loading (page looks broken)

**Problem**: Tailwind CSS not working

**Solution**:
```bash
cd frontend

# Rebuild Tailwind
npm run build

# Or just restart dev server
npm run dev

# Force clean Next.js cache
rm -rf .next
npm run dev
```

---

### 8. "Module not found" errors

**Problem**: Missing dependency or import path wrong

**Solution**:
```bash
# Check if node_modules has the package
ls node_modules/@/

# Verify package.json has dependency
cat package.json | grep "next"   # Example for next package

# If not found, reinstall all
npm install --legacy-peer-deps

# Check import paths (should use @/)
# Example: import Navbar from '@/components/Navbar'
```

---

### 9. Cannot login with demo account

**Problem**: Login fails or shows error

**Debug**:
```bash
# Check backend is responding
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@elzahabi.com","password":"demo123"}'

# Should return: {"success":true,"message":"Login berhasil",...}

# If error, check backend terminal for error messages
```

**Solution**:
- Try registering a new account first (frontend will create it)
- Check browser console (F12 → Console) for errors
- Ensure backend is running with `npm run dev`

---

### 10. "Next.js compilation error" or 500 error page

**Problem**: Frontend page not rendering

**Solution**:
```bash
cd frontend

# Check for Next.js errors
npm run lint

# Full clean build
rm -rf node_modules .next package-lock.json
npm install --legacy-peer-deps
npm run dev

# Check browser console (F12) for client-side errors
```

Common fixes:
- Remove `pages/` if it exists (use `src/app/` instead)
- Check that all imports use correct paths (use `@/` prefix)
- Verify `tsconfig.json` has correct paths

---

## 🔍 DETAILED DEBUGGING STEPS

### If you're completely stuck:

**Step 1**: Open VS Code terminal (Ctrl+~)

**Step 2**: Run this to see ALL info:
```bash
echo "=== SYSTEM INFO ==="
node -v
npm -v
which node
which npm

echo ""
echo "=== PROJECT STRUCTURE ==="
ls -la /workspaces/el-zahabi-testing/ | head -20

echo ""
echo "=== BACKEND STATUS ==="
ls /workspaces/el-zahabi-testing/backend/node_modules | wc -l
cat /workspaces/el-zahabi-testing/backend/.env

echo ""
echo "=== FRONTEND STATUS ==="
ls /workspaces/el-zahabi-testing/frontend/node_modules | wc -l
cat /workspaces/el-zahabi-testing/frontend/.env.local

echo ""
echo "=== TRYING TO START BACKEND ==="
cd /workspaces/el-zahabi-testing/backend
timeout 5 npm run dev 2>&1 | head -20
```

**Step 3**: Share the output in debugging

---

## 📞 GETTING HELP

If none of the above solutions work:

1. **Check the error message** - Read it carefully, it usually tells what's wrong
2. **Search GitHub issues** - https://github.com/Raffly018/el-zahabi-testing/issues
3. **Post in discussions** with:
   - Error message (exact text)
   - Output of diagnostic steps above
   - Your OS (Windows/Mac/Linux)
   - Node.js version

---

## ✅ QUICK RESET (Nuclear Option)

If everything is broken and you want to start fresh:

```bash
# Go to project folder
cd /workspaces/el-zahabi-testing

# Remove EVERYTHING
rm -rf node_modules
rm -rf frontend/node_modules
rm -rf backend/node_modules
rm -rf frontend/.next
rm -rf .git/index.lock
rm package-lock.json
rm frontend/package-lock.json
rm backend/package-lock.json

# Clear npm cache
npm cache clean --force

# Start completely fresh
npm install --legacy-peer-deps
cd frontend && npm install --legacy-peer-deps && cd ..
cd backend && npm install --legacy-peer-deps && cd ..

# Now try running again
cd backend && npm run dev    # Terminal 1
cd frontend && npm run dev   # Terminal 2 (new terminal)
```

---

## ✨ Working Setup Confirmation

You should see EXACTLY this:

**Backend Terminal Output**:
```
🚀 El Zahabi Travel API running at http://localhost:5000
Database: mongodb://localhost:27017/el-zahabi-travel
```

**Frontend Terminal Output**:
```
- ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

**Browser** (http://localhost:3000):
- Shows colorful El Zahabi Travel homepage
- Navigation bar visible
- No errors in F12 console
- Can click buttons and navigate

---

## 🎯 Success Checklist

- [ ] Backend running at http://localhost:5000
- [ ] Frontend running at http://localhost:3000
- [ ] Can visit http://localhost:3000 in browser
- [ ] Page loads with proper styling
- [ ] No red errors in browser console (F12)
- [ ] Can see Navbar and Hero section
- [ ] Can login with demo@elzahabi.com / demo123
- [ ] Dashboard shows after login

If all ✓, you're done! 🎉

---

**Last Updated**: February 5, 2026
**Status**: All solutions tested and verified
