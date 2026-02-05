#!/bin/bash
# Simple script to start BACKEND ONLY

cd "$(dirname "$0")/backend"
echo "Starting Backend Server..."
echo "Listening on: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop"
echo ""

npm run dev
