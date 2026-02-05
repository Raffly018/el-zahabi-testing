#!/bin/bash

echo "🚀 Menginstall El Zahabi Travel - Dependencies"
echo "=================================================="

# Setup Frontend
echo ""
echo "📦 Menginstall Frontend dependencies..."
cd frontend
npm install --no-optional
cd ..

echo "✅ Frontend dependencies installed"

# Setup Backend
echo ""
echo "📦 Menginstall Backend dependencies..."
cd backend
npm install --no-optional
cd ..

echo "✅ Backend dependencies installed"

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎮 Untuk menjalankan dev servers di terminal terpisah:"
echo ""
echo "Terminal 1 - Backend:"
echo "  cd backend && npm run dev"
echo ""
echo "Terminal 2 - Frontend:"
echo "  cd frontend && npm run dev"
echo ""
echo "Kemudian buka: http://localhost:3000"
