// Bookings API
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const bookings = {};

router.post('/', (req, res) => {
  try {
    const { userId, items, totalPrice, paymentMethod } = req.body;
    
    if (!userId || !items || !totalPrice) {
      return res.status(400).json({
        success: false,
        message: 'Data booking tidak lengkap',
      });
    }
    
    const bookingId = 'BK' + Date.now();
    
    bookings[bookingId] = {
      id: bookingId,
      userId,
      items,
      totalPrice,
      paymentMethod,
      status: 'pending',
      createdAt: new Date(),
    };
    
    res.status(201).json({
      success: true,
      message: 'Booking berhasil dibuat',
      data: bookings[bookingId],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get('/', (req, res) => {
  try {
    const bookingList = Object.values(bookings);
    
    res.json({
      success: true,
      data: bookingList,
      count: bookingList.length,
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
    const booking = bookings[req.params.id];
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking tidak ditemukan',
      });
    }
    
    res.json({
      success: true,
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.put('/:id/cancel', (req, res) => {
  try {
    const booking = bookings[req.params.id];
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking tidak ditemukan',
      });
    }
    
    booking.status = 'cancelled';
    
    res.json({
      success: true,
      message: 'Booking berhasil dibatalkan',
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
