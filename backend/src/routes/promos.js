// Promos API
const express = require('express');
const router = express.Router();

const dummyPromos = [
  {
    code: 'WELCOME10',
    name: 'Welcome Discount',
    discount: 10,
    type: 'percentage',
    minAmount: 500000,
    maxDiscount: 100000,
    validUntil: '2024-12-31',
  },
  {
    code: 'FLIGHT20',
    name: 'Flight Discount',
    discount: 20,
    type: 'percentage',
    minAmount: 1000000,
    maxDiscount: 300000,
    validUntil: '2024-12-31',
  },
];

router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: dummyPromos,
      count: dummyPromos.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post('/validate', (req, res) => {
  try {
    const { code, amount } = req.body;
    
    if (!code) {
      return res.status(400).json({
        success: false,
        message: 'Kode promo harus diisi',
      });
    }
    
    const promo = dummyPromos.find(p => p.code === code.toUpperCase());
    
    if (!promo) {
      return res.status(404).json({
        success: false,
        message: 'Kode promo tidak valid',
      });
    }
    
    if (amount && amount < promo.minAmount) {
      return res.status(400).json({
        success: false,
        message: `Minimal pembelian Rp ${promo.minAmount.toLocaleString('id-ID')}`,
      });
    }
    
    res.json({
      success: true,
      message: 'Kode promo valid',
      data: promo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
