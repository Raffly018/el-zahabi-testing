#!/bin/bash

# Warna untuk output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

clear
echo -e "${MAGENTA}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${MAGENTA}║  El Zahabi Travel - Development Server Launcher            ║${NC}"
echo -e "${MAGENTA}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Check if node_modules exist
if [ ! -d "node_modules" ] || [ ! -d "backend/node_modules" ] || [ ! -d "frontend/node_modules" ]; then
    echo -e "${YELLOW}⚠️  Dependencies not installed. Running setup first...${NC}"
    bash run-setup.sh
    echo ""
fi

# Function to cleanup on exit
cleanup() {
    echo ""
    echo -e "${YELLOW}Stopping servers...${NC}"
    kill $BACKEND_PID 2>/dev/null || true
    kill $FRONTEND_PID 2>/dev/null || true
    echo -e "${MAGENTA}Goodbye! 👋${NC}"
    exit 0
}

trap cleanup SIGINT SIGTERM

# Start Backend
echo -e "${CYAN}🚀 Starting Backend Server (Port 5000)...${NC}"
cd backend
npm run dev &
BACKEND_PID=$!
sleep 2

# Check if backend started successfully
if ! kill -0 $BACKEND_PID 2>/dev/null; then
    echo -e "${RED}❌ Backend failed to start${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Backend started (PID: $BACKEND_PID)${NC}"
echo ""

# Start Frontend  
echo -e "${CYAN}🚀 Starting Frontend Server (Port 3000)...${NC}"
cd ../frontend
npm run dev &
FRONTEND_PID=$!
sleep 3

# Check if frontend started successfully
if ! kill -0 $FRONTEND_PID 2>/dev/null; then
    echo -e "${RED}❌ Frontend failed to start${NC}"
    kill $BACKEND_PID 2>/dev/null || true
    exit 1
fi

echo -e "${GREEN}✅ Frontend started (PID: $FRONTEND_PID)${NC}"
echo ""

# Print success message
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}🎉 Both servers are running!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}📍 Endpoints:${NC}"
echo -e "  🌐 Frontend: ${CYAN}http://localhost:3000${NC}"
echo -e "  🔌 Backend:  ${CYAN}http://localhost:5000${NC}"
echo -e "  💊 Health:   ${CYAN}http://localhost:5000/health${NC}"
echo ""
echo -e "${BLUE}🧪 Test Credentials:${NC}"
echo -e "  Email: ${CYAN}demo@elzahabi.com${NC}"
echo -e "  Password: ${CYAN}demo123${NC}"
echo ""
echo -e "${BLUE}🎟️  Promo Codes:${NC}"
echo -e "  ${CYAN}WELCOME10${NC} - 10% off (min Rp 500K)"
echo -e "  ${CYAN}FLIGHT20${NC} - 20% off (min Rp 1M)"
echo -e "  ${CYAN}PROMO25K${NC} - Rp 25K off (min Rp 200K)"
echo ""
echo -e "${MAGENTA}Press Ctrl+C to stop all servers${NC}"
echo ""

# Wait for both processes
wait
