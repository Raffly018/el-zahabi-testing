// Trains API
const express = require('express');
const router = express.Router();

const dummyTrains = [
  {
    id: 1,
    operator: 'PT KAI',
    trainNumber: 'G501',
    name: 'Argo Bromo',
    departure: '2024-02-10T06:00:00',
    arrival: '2024-02-10T15:30:00',
    from: 'Jakarta Kota',
    to: 'Surabaya Kota',
    price: 180000,
    class: 'Executive',
    seats: 120,
    rating: 4.6,
  },
];

router.get('/search', (req, res) => {
  try {
    const { from, to, departDate } = req.query;
    let trains = dummyTrains;
    
    if (from && to) {
      trains = trains.filter(t => t.from.includes(from) && t.to.includes(to));
    }
    
    res.json({
      success: true,
      data: trains,
      count: trains.length,
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
    const train = dummyTrains.find(t => t.id === parseInt(req.params.id));
    
    if (!train) {
      return res.status(404).json({
        success: false,
        message: 'Kereta tidak ditemukan',
      });
    }
    
    res.json({
      success: true,
      data: train,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
