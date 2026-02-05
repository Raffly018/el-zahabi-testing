#!/bin/bash

# El Zahabi Travel - Quick Start Script
# Script ini akan setup dan jalankan semua server

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  🚀 El Zahabi Travel - Auto Setup & Start                 ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_ROOT"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}📁 Project Root: ${PROJECT_ROOT}${NC}"
echo ""

# Step 1: Backend Setup
echo -e "${BLUE}📦 Step 1: Backend Setup...${NC}"
cd "$PROJECT_ROOT/backend"
npm cache clean --force 2>/dev/null || true
rm -rf node_modules package-lock.json 2>/dev/null || true
npm install --legacy-peer-deps
echo -e "${GREEN}✅ Backend dependencies installed${NC}"
echo ""

# Step 2: Frontend Setup
echo -e "${BLUE}📦 Step 2: Frontend Setup...${NC}"
cd "$PROJECT_ROOT/frontend"
npm cache clean --force 2>/dev/null || true
rm -rf node_modules package-lock.json .next 2>/dev/null || true
npm install
echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
echo ""

# Step 3: Start Backend
echo -e "${BLUE}🚀 Step 3: Starting Backend Server...${NC}"
cd "$PROJECT_ROOT/backend"
npm run dev &
BACKEND_PID=$!
echo -e "${GREEN}✅ Backend started (PID: $BACKEND_PID)${NC}"
sleep 3
echo ""

# Step 4: Start Frontend
echo -e "${BLUE}🚀 Step 4: Starting Frontend Server...${NC}"
cd "$PROJECT_ROOT/frontend"
npm run dev &
FRONTEND_PID=$!
echo -e "${GREEN}✅ Frontend started (PID: $FRONTEND_PID)${NC}"
sleep 3
echo ""

# Success
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}🎉 SETUP COMPLETE! Servers are running!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}📍 Access URLs:${NC}"
echo -e "   🌐 Frontend: ${YELLOW}http://localhost:3000${NC}"
echo -e "   🔌 Backend:  ${YELLOW}http://localhost:5000${NC}"
echo ""
echo -e "${BLUE}🧪 Test Credentials:${NC}"
echo -e "   Email: ${YELLOW}demo@elzahabi.com${NC}"
echo -e "   Password: ${YELLOW}demo123${NC}"
echo ""
echo -e "${BLUE}🎟️  Promo Codes:${NC}"
echo -e "   ${YELLOW}WELCOME10${NC}, ${YELLOW}FLIGHT20${NC}, ${YELLOW}PROMO25K${NC}"
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop all servers${NC}"
echo ""

# Wait for processes
wait
