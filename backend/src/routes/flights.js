// Dummy flights API
const express = require('express');
const router = express.Router();

const dummyFlights = [
  {
    id: 1,
    airline: 'Garuda Indonesia',
    flightNumber: 'GA101',
    departure: '2024-02-10T06:00:00',
    arrival: '2024-02-10T09:30:00',
    from: 'CGK',
    to: 'DPS',
    fromCity: 'Jakarta',
    toCity: 'Bali',
    price: 850000,
    stops: 0,
    aircraft: 'Boeing 777',
    seat: 180,
    rating: 4.8,
  },
  {
    id: 2,
    airline: 'Lion Air',
    flightNumber: 'JT502',
    departure: '2024-02-10T07:15:00',
    arrival: '2024-02-10T10:45:00',
    from: 'CGK',
    to: 'DPS',
    fromCity: 'Jakarta',
    toCity: 'Bali',
    price: 650000,
    stops: 0,
    aircraft: 'Airbus A320',
    seat: 150,
    rating: 4.2,
  },
];

// Search flights
router.get('/search', (req, res) => {
  try {
    const { from, to, departDate } = req.query;
    
    // Filter flights (simulasi)
    let flights = dummyFlights;
    
    if (from && to) {
      flights = flights.filter(f => f.from === from && f.to === to);
    }
    
    res.json({
      success: true,
      data: flights,
      count: flights.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get flight details
router.get('/:id', (req, res) => {
  try {
    const flight = dummyFlights.find(f => f.id === parseInt(req.params.id));
    
    if (!flight) {
      return res.status(404).json({
        success: false,
        message: 'Penerbangan tidak ditemukan',
      });
    }
    
    res.json({
      success: true,
      data: flight,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
