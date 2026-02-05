// Auth API (simplified - tanpa database)
const express = require('express');
const router = express.Router();

// Dummy users storage
const users = {};

router.post('/register', (req, res) => {
  try {
    const { email, password, name, phone } = req.body;
    
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: 'Email, password, dan nama harus diisi',
      });
    }
    
    if (users[email]) {
      return res.status(400).json({
        success: false,
        message: 'Email sudah terdaftar',
      });
    }
    
    users[email] = { email, password, name, phone };
    
    res.json({
      success: true,
      message: 'Registrasi berhasil',
      user: { email, name, phone },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email dan password harus diisi',
      });
    }
    
    const user = users[email];
    
    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        message: 'Email atau password salah',
      });
    }
    
    const token = 'token_' + Date.now();
    
    res.json({
      success: true,
      message: 'Login berhasil',
      token,
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get('/profile', (req, res) => {
  try {
    const auth = req.headers.authorization;
    
    if (!auth || !auth.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Token tidak valid',
      });
    }
    
    // Simulasi ambil dari auth header
    res.json({
      success: true,
      data: {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+62 812 1234 5678',
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
