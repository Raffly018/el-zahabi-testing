#!/bin/bash

# Warna output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

clear
echo "=================================================="
echo "El Zahabi Travel - Installation & Troubleshooting"
echo "=================================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js NOT FOUND${NC}"
    echo ""
    echo "Install from: https://nodejs.org (v18 or higher)"
    echo ""
    echo "After installation, run this script again."
    exit 1
fi

NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)

echo -e "${BLUE}Node.js: ${GREEN}$NODE_VERSION${NC}"
echo -e "${BLUE}npm: ${GREEN}$NPM_VERSION${NC}"
echo ""

# Get to project root
cd "$(dirname "$0")" || exit 1
PROJECT_ROOT=$(pwd)

echo -e "${BLUE}Project: ${GREEN}$PROJECT_ROOT${NC}"
echo ""

# Step 1: Clean up old installations (optional)
echo "Step 1: Cleaning up old installations (this may take a moment)..."
echo ""

# Frontend cleanup
echo "  Clearing frontend..."
cd "$PROJECT_ROOT/frontend" || exit 1
rm -rf node_modules package-lock.json 2>/dev/null
npm cache clean --force 2>/dev/null || true

# Backend cleanup  
echo "  Clearing backend..."
cd "$PROJECT_ROOT/backend" || exit 1
rm -rf node_modules package-lock.json 2>/dev/null
npm cache clean --force 2>/dev/null || true

# Root cleanup
echo "  Clearing root..."
cd "$PROJECT_ROOT" || exit 1
rm -rf node_modules package-lock.json 2>/dev/null
npm cache clean --force 2>/dev/null || true

echo -e "${GREEN}✅ Cleanup done${NC}"
echo ""

# Step 2: Install dependencies
echo "Step 2: Installing dependencies..."
echo ""

echo "  Installing root dependencies..."
cd "$PROJECT_ROOT" || exit 1
npm install --legacy-peer-deps 2>&1 | tail -5

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install root dependencies${NC}"
    exit 1
fi

echo ""
echo "  Installing backend dependencies..."
cd "$PROJECT_ROOT/backend" || exit 1
npm install --legacy-peer-deps 2>&1 | tail -5

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install backend dependencies${NC}"
    exit 1
fi

echo ""
echo "  Installing frontend dependencies..."
cd "$PROJECT_ROOT/frontend" || exit 1
npm install --legacy-peer-deps 2>&1 | tail -5

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to install frontend dependencies${NC}"
    exit 1
fi

cd "$PROJECT_ROOT" || exit 1
echo ""
echo -e "${GREEN}✅ All dependencies installed successfully!${NC}"
echo ""

# Step 3: Verify structure
echo "Step 3: Verifying installation..."
echo ""

if [ ! -d "node_modules" ]; then
    echo -e "${RED}❌ Root node_modules missing${NC}"
    exit 1
fi

if [ ! -d "backend/node_modules" ]; then
    echo -e "${RED}❌ Backend node_modules missing${NC}"
    exit 1
fi

if [ ! -d "frontend/node_modules" ]; then
    echo -e "${RED}❌ Frontend node_modules missing${NC}"
    exit 1
fi

if [ ! -f "backend/.env" ]; then
    echo -e "${YELLOW}⚠️  Creating backend/.env${NC}"
    cp backend/.env.example backend/.env 2>/dev/null || cat > backend/.env << 'EOF'
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/el-zahabi-travel
JWT_SECRET=your_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=admin@elzahabi.com
EOF
fi

if [ ! -f "frontend/.env.local" ]; then
    echo -e "${YELLOW}⚠️  Creating frontend/.env.local${NC}"
    cat > frontend/.env.local << 'EOF'
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
fi

echo -e "${GREEN}✅ Installation verified${NC}"
echo ""

# Summary
echo "=================================================="
echo -e "${GREEN}✅ SETUP COMPLETE!${NC}"
echo "=================================================="
echo ""
echo -e "${BLUE}📝 Next Steps:${NC}"
echo ""
echo "1. Open TWO terminal windows (Ctrl+~ twice)"
echo ""
echo "2. Terminal 1 - Start Backend:"
echo -e "   ${YELLOW}cd backend${NC}"
echo -e "   ${YELLOW}npm run dev${NC}"
echo ""
echo "3. Terminal 2 - Start Frontend:"
echo -e "   ${YELLOW}cd frontend${NC}"
echo -e "   ${YELLOW}npm run dev${NC}"
echo ""
echo "4. Open in browser:"
echo -e "   ${YELLOW}http://localhost:3000${NC}"
echo ""
echo -e "${BLUE}🧪 Test Credentials:${NC}"
echo -e "   Email: ${YELLOW}demo@elzahabi.com${NC}"
echo -e "   Password: ${YELLOW}demo123${NC}"
echo ""
echo "=================================================="
