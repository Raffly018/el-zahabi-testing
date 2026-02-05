# 🚀 El Zahabi Travel - Data Update v1.1.0

**Last Updated:** February 5, 2026

## 📊 What's New in This Update

This release includes comprehensive data expansion and enhancements to make the El Zahabi Travel platform more feature-rich and realistic.

### ✈️ Flights
**Expansion:** 5 → 10 flights
- Added flights to multiple destinations (Jakarta → Yogyakarta, Jakarta → Surabaya)
- New airlines: Garuda Indonesia, Lion Air, Sriwijaya Air, Batik Air
- Additional details: baggage allowance, flight duration
- Price range: Rp 380,000 - Rp 850,000

**Sample Flights:**
- Jakarta-Bali: 5 flights, starting from Rp 520,000
- Jakarta-Yogyakarta: 3 flights, starting from Rp 380,000
- Jakarta-Surabaya: 2 flights, starting from Rp 480,000

### 🏨 Hotels
**Expansion:** 4 → 7 hotels
- Added hotels in Lombok and better coverage across major cities
- New hotel information: address, type (resort/hotel/budget)
- Amenities now include: WiFi, Pool, Restaurant, Spa, Gym, Beach Access, Bar, Mountain View
- Price range: Rp 450,000 - Rp 1,500,000

**Sample Hotels:**
- Bali: Luxe Bali Resort (Rp 1.2M), Tropical Beach Hotel (Rp 850K)
- Yogyakarta: Grand Yogya Palace (Rp 750K)
- Lombok: Beachfront Lombok Paradise (Rp 1.5M)
- Jakarta: Budget Inn Jakarta (Rp 450K)

### 🚂 Trains
**Expansion:** 3 → 5 trains
- Added route: Jakarta-Bandung
- New info: duration, amenities (AC, Restaurant, WiFi, Charging Port)
- Better variety with Executive, Business, Economy classes

**Sample Trains:**
- Argo Bromo: Jakarta-Surabaya, Rp 120K-180K
- Prameks: Jakarta-Bandung, Rp 70K-85K

### 🎫 Tours
**Expansion:** 3 → 6 tour packages
- Added: Jakarta City Tour, Mount Bromo Adventure, Bandung Culinary & Nature Tour
- New fields: group size, best season to visit
- Enhanced descriptions with specific inclusions
- Price range: Rp 1.2M - Rp 3.5M

**Sample Tours:**
- Bali 3 Days: Rp 2.5M (28% discount)
- Mount Bromo Adventure: Rp 2.2M (26% discount)
- Lombok Beach Escape: Rp 3.5M (30% discount)

### 🎟️ Promo Codes
**Expansion:** 3 → 8 promo codes
- New codes: HOTEL15, TOUR30K, FAMILY50K, TRAIN10, EARLYBID12
- Extended validity to end of 2025
- Better categorization for different booking types

**Active Promo Codes:**
| Code | Type | Discount | Min Amount |
|------|------|----------|-----------|
| WELCOME10 | % | 10% | Rp 500K |
| FLIGHT20 | % | 20% | Rp 1M |
| PROMO25K | Flat | Rp 25K | Rp 200K |
| HOTEL15 | % | 15% | Rp 800K |
| TOUR30K | Flat | Rp 30K | Rp 1.5M |
| FAMILY50K | Flat | Rp 50K | Rp 3M |
| TRAIN10 | % | 10% | Rp 300K |
| EARLYBID12 | % | 12% | Rp 600K |

### 🌍 Popular Cities
**Expansion:** 6 → 10 cities
- Added: Lombok, Makassar, Semarang, Batam
- Complete coverage of major Indonesian destinations

## 📁 Files Modified

- `frontend/src/lib/dummyData.js` - All dummy data expanded

## 🔧 Technical Details

### Data Types Enhanced
- Flights now include: `baggage`, `duration`
- Hotels now include: `type`, `address`
- Trains now include: `duration`, `amenities`
- Tours now include: `groupSize`, `season`

### Backward Compatibility
✅ All changes are backward compatible with existing code
✅ API endpoints unchanged
✅ Data structure expanded (additive only)

## 🎯 Benefits

1. **Better User Experience:** More travel options to choose from
2. **Realistic Data:** Better representation of actual travel market
3. **Testing:** More comprehensive test data across multiple cities
4. **Future Ready:** Expanded data structure for new features

## 🚀 Next Deployment

This data update is ready for:
- ✅ Production deployment
- ✅ Mobile app sync
- ✅ API cache updates

## 📝 Notes

- Test data uses Indonesian Rupiah (IDH) as currency
- All prices are dummy/educational purposes only
- Images sourced from Unsplash (royalty-free)

---

**Happy Traveling!** ✈️🏨🎫
