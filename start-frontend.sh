#!/bin/bash
# Simple script to start FRONTEND ONLY

cd "$(dirname "$0")/frontend"
echo "Starting Frontend Server..."
echo "Listening on: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop"
echo ""

npm run dev
