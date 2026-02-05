// Tours API
const express = require('express');
const router = express.Router();

const dummyTours = [
  {
    id: 1,
    name: 'Bali 3 Days Tour Package',
    description: 'Experience the beauty of Bali',
    image: 'https://images.unsplash.com/photo-1555097462-c1a1b4d21351',
    destination: 'Bali',
    duration: '3 Days 2 Nights',
    price: 2500000,
    originalPrice: 3500000,
    discount: 28,
    rating: 4.7,
    includes: ['Flight', 'Hotel', 'Transportation', 'Tour Guide', 'Meals'],
  },
];

router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: dummyTours,
      count: dummyTours.length,
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
    const tour = dummyTours.find(t => t.id === parseInt(req.params.id));
    
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: 'Tour tidak ditemukan',
      });
    }
    
    res.json({
      success: true,
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
