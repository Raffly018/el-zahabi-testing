// Dummy hotels API
const express = require('express');
const router = express.Router();

const dummyHotels = [
  {
    id: 1,
    name: 'Luxe Bali Resort',
    location: 'Seminyak, Bali',
    city: 'Bali',
    image: 'https://images.unsplash.com/photo-1596178065887-cf94d0e27e15?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 342,
    price: 1200000,
    originalPrice: 1500000,
    discount: 20,
    amenities: ['WiFi', 'Pool', 'Restaurant', 'Spa', 'Gym'],
    rooms: 45,
  },
  {
    id: 2,
    name: 'Tropical Beach Hotel',
    location: 'Kuta, Bali',
    city: 'Bali',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    rating: 4.5,
    reviews: 251,
    price: 850000,
    originalPrice: 1000000,
    discount: 15,
    amenities: ['WiFi', 'Pool', 'Restaurant'],
    rooms: 60,
  },
];

// Search hotels
router.get('/search', (req, res) => {
  try {
    const { location, checkInDate, checkOutDate } = req.query;
    
    let hotels = dummyHotels;
    
    if (location) {
      hotels = hotels.filter(h => 
        h.location.toLowerCase().includes(location.toLowerCase()) ||
        h.city.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    res.json({
      success: true,
      data: hotels,
      count: hotels.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Get hotel details
router.get('/:id', (req, res) => {
  try {
    const hotel = dummyHotels.find(h => h.id === parseInt(req.params.id));
    
    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: 'Hotel tidak ditemukan',
      });
    }
    
    res.json({
      success: true,
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
