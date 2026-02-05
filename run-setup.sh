#!/bin/bash
set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  🚀 El Zahabi Travel - AUTOMATIC SETUP & START            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Check Node.js
echo -e "${CYAN}📋 Checking prerequisites...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found!${NC}"
    echo "   Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm not found!${NC}"
    echo "   npm should come with Node.js"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v)${NC}"
echo -e "${GREEN}✅ npm $(npm -v)${NC}"
echo ""

# Get project root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Step 1: Install Root Dependencies
echo -e "${BLUE}📦 Step 1: Installing root dependencies...${NC}"
npm install 2>&1 | grep -v "^$"
echo -e "${GREEN}✅ Root dependencies installed${NC}"
echo ""

# Step 2: Install Frontend
echo -e "${BLUE}📦 Step 2: Installing frontend dependencies...${NC}"
cd frontend
npm install 2>&1 | grep -v "^$"
echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
cd ..
echo ""

# Step 3: Install Backend
echo -e "${BLUE}📦 Step 3: Installing backend dependencies...${NC}"
cd backend
npm install 2>&1 | grep -v "^$"
echo -e "${GREEN}✅ Backend dependencies installed${NC}"
cd ..
echo ""

# Success
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ Setup complete! Project is ready to run${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo ""

# Print next steps
echo -e "${CYAN}🎯 Next Steps:${NC}"
echo ""
echo -e "${YELLOW}Option A: Run both servers (recommended):${NC}"
echo -e "  ${BLUE}npm run dev${NC}"
echo ""
echo -e "${YELLOW}Option B: Run servers in separate terminals:${NC}"
echo -e "  Terminal 1: ${BLUE}cd backend && npm run dev${NC}"
echo -e "  Terminal 2: ${BLUE}cd frontend && npm run dev${NC}"
echo ""
echo -e "${CYAN}🌐 Then open browser:${NC}"
echo -e "  ${BLUE}http://localhost:3000${NC}"
echo ""
echo -e "${CYAN}🧪 Test Login:${NC}"
echo -e "  Email: ${BLUE}demo@elzahabi.com${NC}"
echo -e "  Password: ${BLUE}demo123${NC}"
echo ""
echo -e "${CYAN}🎟️  Test Promo Codes:${NC}"
echo -e "  ${BLUE}WELCOME10${NC}, ${BLUE}FLIGHT20${NC}, ${BLUE}PROMO25K${NC}"
echo ""
echo -e "${GREEN}Happy coding! 🚀✨${NC}"
