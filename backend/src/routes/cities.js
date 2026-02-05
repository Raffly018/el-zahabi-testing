// Cities API
const express = require('express');
const router = express.Router();

const cities = [
  {
    id: 1,
    name: 'Jakarta',
    code: 'CGK',
    country: 'Indonesia',
    type: 'city',
    airports: [
      { code: 'CGK', name: 'Soekarno-Hatta International Airport' },
    ],
  },
  {
    id: 2,
    name: 'Bali',
    code: 'DPS',
    country: 'Indonesia',
    type: 'city',
    airports: [
      { code: 'DPS', name: 'Ngurah Rai International Airport' },
    ],
  },
  {
    id: 3,
    name: 'Surabaya',
    code: 'SUB',
    country: 'Indonesia',
    type: 'city',
    airports: [
      { code: 'SUB', name: 'Juanda International Airport' },
    ],
  },
];

router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: cities,
      count: cities.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get('/airports', (req, res) => {
  try {
    const airports = cities.flatMap(c => 
      c.airports.map(a => ({ ...a, city: c.name, code: c.code }))
    );
    
    res.json({
      success: true,
      data: airports,
      count: airports.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
