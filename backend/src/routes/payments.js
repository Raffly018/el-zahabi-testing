// Payments API
const express = require('express');
const router = express.Router();

const payments = {};

router.post('/', (req, res) => {
  try {
    const { bookingId, amount, paymentMethod, userDetails } = req.body;
    
    if (!bookingId || !amount) {
      return res.status(400).json({
        success: false,
        message: 'Data pembayaran tidak lengkap',
      });
    }
    
    const paymentId = 'PAY' + Date.now();
    
    payments[paymentId] = {
      id: paymentId,
      bookingId,
      amount,
      paymentMethod,
      userDetails,
      status: 'pending',
      createdAt: new Date(),
    };
    
    res.status(201).json({
      success: true,
      message: 'Pembayaran berhasil dibuat',
      data: {
        ...payments[paymentId],
        instructions: getPaymentInstructions(paymentMethod, amount),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get('/:id', (req, res) => {
  try {
    const payment = payments[req.params.id];
    
    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Pembayaran tidak ditemukan',
      });
    }
    
    res.json({
      success: true,
      data: payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post('/:id/verify', (req, res) => {
  try {
    const payment = payments[req.params.id];
    
    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Pembayaran tidak ditemukan',
      });
    }
    
    payment.status = 'verified';
    
    res.json({
      success: true,
      message: 'Pembayaran berhasil diverifikasi',
      data: payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

function getPaymentInstructions(method, amount) {
  const instructions = {
    transfer: {
      bank: 'BCA',
      accountNumber: '1234567890',
      accountName: 'PT El Zahabi Travel',
      amount: amount,
    },
    gopay: {
      phone: '+62 812 1234 5678',
      amount: amount,
    },
    ovo: {
      phone: '+62 812 1234 5678',
      amount: amount,
    },
  };
  
  return instructions[method] || instructions.transfer;
}

module.exports = router;
