#!/bin/bash

# El Zahabi Travel - Development Server Script
# Run both frontend dan backend dengan satu command

echo "🚀 El Zahabi Travel - Starting Development Servers"
echo "=================================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

cd "$(dirname "$0")"

# Start backend
echo -e "${BLUE}📦 Starting Backend Server...${NC}"
echo "   Terminal: cd backend && npm run dev"
cd backend
npm run dev &
BACKEND_PID=$!

sleep 3

# Start frontend  
echo ""
echo -e "${BLUE}📦 Starting Frontend Server...${NC}"
echo "   Terminal: cd frontend && npm run dev"
cd ../frontend
npm run dev &
FRONTEND_PID=$!

sleep 2

echo ""
echo -e "${GREEN}✅ Both servers started!${NC}"
echo ""
echo -e "${YELLOW}🔗 URLs:${NC}"
echo -e "   Frontend:  ${BLUE}http://localhost:3000${NC}"
echo -e "   Backend:   ${BLUE}http://localhost:5000${NC}"
echo -e "   API Docs:  ${BLUE}http://localhost:5000/health${NC}"
echo ""
echo -e "${YELLOW}📚 Documentation:${NC}"
echo -e "   Setup:     ${BLUE}SETUP_GUIDE.md${NC}"
echo -e "   Deploy:    ${BLUE}DEPLOYMENT_GUIDE.md${NC}"
echo -e "   API:       ${BLUE}API_DOCS.md${NC}"
echo -e "   Testing:   ${BLUE}TESTING_GUIDE.md${NC}"
echo ""
echo -e "${YELLOW}⚠️  How to stop:${NC}"
echo -e "   Press ${RED}CTRL+C${NC} to stop both servers"
echo ""

# Trap CTRL+C to cleanup
trap "echo ''; echo 'Stopping servers...'; kill $BACKEND_PID 2>/dev/null; kill $FRONTEND_PID 2>/dev/null; exit" SIGINT

# Wait for both to finish
wait
