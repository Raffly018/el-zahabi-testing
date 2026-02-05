#!/bin/bash

# El Zahabi Travel - Development Setup Script

echo "🚀 El Zahabi Travel - Development Setup"
echo "=========================================="

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Setup Frontend
echo ""
echo "📦 Setting up Frontend..."
cd frontend
npm install
echo "✅ Frontend dependencies installed"

# Setup Backend
echo ""
echo "📦 Setting up Backend..."
cd ../backend
npm install
cp .env.example .env
echo "✅ Backend dependencies installed"
echo "⚠️  Edit backend/.env with your configuration"

# Go back to root
cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎮 To run development servers:"
echo ""
echo "Terminal 1 - Backend:"
echo "  cd backend && npm run dev"
echo ""
echo "Terminal 2 - Frontend:"
echo "  cd frontend && npm run dev"
echo ""
echo "Then open: http://localhost:3000"
echo ""
