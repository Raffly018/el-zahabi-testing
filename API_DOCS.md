# El Zahabi Travel - API Documentation

## 🌐 Base URL

**Development**: `http://localhost:5000/api`
**Production**: `https://your-railway-domain.railway.app/api`

---

## 📋 API Endpoints

### 🔐 Authentication

#### Register
```http
POST /api/auth/register

Body:
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe",
  "phone": "+62 812 1234 5678"
}

Response:
{
  "success": true,
  "message": "Registrasi berhasil",
  "user": {
    "email": "user@example.com",
    "name": "John Doe",
    "phone": "+62 812 1234 5678"
  }
}
```

#### Login
```http
POST /api/auth/login

Body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "message": "Login berhasil",
  "token": "your_jwt_token",
  "user": {
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

#### Get Profile
```http
GET /api/auth/profile

Headers:
Authorization: Bearer <token>

Response:
{
  "success": true,
  "data": {
    "id": "user_id",
    "name": "John Doe",
    "email": "user@example.com",
    "phone": "+62 812 1234 5678"
  }
}
```

---

### ✈️ Flights

#### Search Flights
```http
GET /api/flights/search?from=CGK&to=DPS&departDate=2024-02-10

Query Parameters:
- from: Departure airport code
- to: Destination airport code
- departDate: Departure date (yyyy-MM-dd)

Response:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "airline": "Garuda Indonesia",
      "flightNumber": "GA101",
      "departure": "2024-02-10T06:00:00",
      "arrival": "2024-02-10T09:30:00",
      "from": "CGK",
      "to": "DPS",
      "price": 850000,
      "stops": 0,
      "rating": 4.8
    }
  ],
  "count": 5
}
```

#### Get Flight Details
```http
GET /api/flights/:id

Response:
{
  "success": true,
  "data": {
    "id": 1,
    "airline": "Garuda Indonesia",
    "flightNumber": "GA101",
    "departure": "2024-02-10T06:00:00",
    "arrival": "2024-02-10T09:30:00",
    "from": "CGK",
    "to": "DPS",
    "fromCity": "Jakarta",
    "toCity": "Bali",
    "price": 850000,
    "stops": 0,
    "aircraft": "Boeing 777",
    "seat": 180,
    "rating": 4.8
  }
}
```

---

### 🏨 Hotels

#### Search Hotels
```http
GET /api/hotels/search?location=Bali&checkInDate=2024-02-10&checkOutDate=2024-02-12

Query Parameters:
- location: City or hotel location
- checkInDate: Check-in date (yyyy-MM-dd)
- checkOutDate: Check-out date (yyyy-MM-dd)

Response:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Luxe Bali Resort",
      "location": "Seminyak, Bali",
      "city": "Bali",
      "rating": 4.8,
      "reviews": 342,
      "price": 1200000,
      "originalPrice": 1500000,
      "discount": 20,
      "amenities": ["WiFi", "Pool", "Restaurant", "Spa", "Gym"],
      "rooms": 45
    }
  ],
  "count": 4
}
```

#### Get Hotel Details
```http
GET /api/hotels/:id

Response:
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Luxe Bali Resort",
    "location": "Seminyak, Bali",
    "city": "Bali",
    "image": "https://...",
    "rating": 4.8,
    "reviews": 342,
    "price": 1200000,
    "originalPrice": 1500000,
    "discount": 20,
    "amenities": ["WiFi", "Pool", "Restaurant", "Spa", "Gym"],
    "rooms": 45
  }
}
```

---

### 🚂 Trains

#### Search Trains
```http
GET /api/trains/search?from=Jakarta%20Kota&to=Surabaya%20Kota&departDate=2024-02-10

Response:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "operator": "PT KAI",
      "trainNumber": "G501",
      "name": "Argo Bromo",
      "departure": "2024-02-10T06:00:00",
      "arrival": "2024-02-10T15:30:00",
      "from": "Jakarta Kota",
      "to": "Surabaya Kota",
      "price": 180000,
      "class": "Executive",
      "seats": 120,
      "rating": 4.6
    }
  ],
  "count": 3
}
```

#### Get Train Details
```http
GET /api/trains/:id

Response: (sama seperti search, single object)
```

---

### 🎒 Tours

#### Get All Tours
```http
GET /api/tours

Response:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Bali 3 Days Tour Package",
      "description": "Experience the beauty of Bali",
      "image": "https://...",
      "destination": "Bali",
      "duration": "3 Days 2 Nights",
      "price": 2500000,
      "originalPrice": 3500000,
      "discount": 28,
      "rating": 4.7,
      "includes": ["Flight", "Hotel", "Transportation", "Tour Guide", "Meals"]
    }
  ],
  "count": 3
}
```

#### Get Tour Details
```http
GET /api/tours/:id

Response: (single tour object)
```

---

### 💳 Bookings

#### Create Booking
```http
POST /api/bookings

Headers:
Authorization: Bearer <token>

Body:
{
  "userId": "user_id",
  "items": [
    {
      "type": "flight",
      "itemId": 1,
      "price": 850000
    }
  ],
  "totalPrice": 850000,
  "paymentMethod": "transfer"
}

Response:
{
  "success": true,
  "message": "Booking berhasil dibuat",
  "data": {
    "id": "BK1707401234567",
    "userId": "user_id",
    "items": [...],
    "totalPrice": 850000,
    "paymentMethod": "transfer",
    "status": "pending",
    "createdAt": "2024-02-08T10:20:34Z"
  }
}
```

#### Get All User Bookings
```http
GET /api/bookings

Headers:
Authorization: Bearer <token>

Response:
{
  "success": true,
  "data": [
    { /* booking object */ }
  ],
  "count": 5
}
```

#### Get Booking Details
```http
GET /api/bookings/:id

Headers:
Authorization: Bearer <token>

Response:
{
  "success": true,
  "data": { /* booking object */ }
}
```

#### Cancel Booking
```http
PUT /api/bookings/:id/cancel

Headers:
Authorization: Bearer <token>

Response:
{
  "success": true,
  "message": "Booking berhasil dibatalkan",
  "data": { /* updated booking */ }
}
```

---

### 🎉 Promotions

#### Get All Promos
```http
GET /api/promos

Response:
{
  "success": true,
  "data": [
    {
      "code": "WELCOME10",
      "name": "Welcome Discount",
      "discount": 10,
      "type": "percentage",
      "minAmount": 500000,
      "maxDiscount": 100000,
      "validUntil": "2024-12-31"
    }
  ],
  "count": 3
}
```

#### Validate Promo Code
```http
POST /api/promos/validate

Body:
{
  "code": "WELCOME10",
  "amount": 850000
}

Response:
{
  "success": true,
  "message": "Kode promo valid",
  "data": {
    "code": "WELCOME10",
    "name": "Welcome Discount",
    "discount": 10,
    "type": "percentage",
    "minAmount": 500000,
    "maxDiscount": 100000,
    "validUntil": "2024-12-31"
  }
}
```

---

### 💰 Payments

#### Create Payment
```http
POST /api/payments

Body:
{
  "bookingId": "BK1707401234567",
  "amount": 850000,
  "paymentMethod": "transfer",
  "userDetails": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+62 812 1234 5678"
  }
}

Response:
{
  "success": true,
  "message": "Pembayaran berhasil dibuat",
  "data": {
    "id": "PAY1707401234567",
    "bookingId": "BK1707401234567",
    "amount": 850000,
    "paymentMethod": "transfer",
    "status": "pending",
    "instructions": {
      "bank": "BCA",
      "accountNumber": "1234567890",
      "accountName": "PT El Zahabi Travel",
      "amount": 850000
    }
  }
}
```

#### Verify Payment
```http
POST /api/payments/:id/verify

Response:
{
  "success": true,
  "message": "Pembayaran berhasil diverifikasi",
  "data": { /* payment object with status: verified */ }
}
```

---

### 🏙️ Cities

#### Get All Cities
```http
GET /api/cities

Response:
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Jakarta",
      "code": "CGK",
      "country": "Indonesia",
      "type": "city",
      "airports": [
        { "code": "CGK", "name": "Soekarno-Hatta International Airport" }
      ]
    }
  ],
  "count": 3
}
```

#### Get All Airports
```http
GET /api/cities/airports

Response:
{
  "success": true,
  "data": [
    {
      "code": "CGK",
      "name": "Soekarno-Hatta International Airport",
      "city": "Jakarta",
      "code": "CGK"
    }
  ],
  "count": 10
}
```

---

## 🔑 Authentication

Semua request yang memerlukan auth harus include header:
```http
Authorization: Bearer <your_jwt_token>
```

Token didapat dari respons login atau register.

---

## ❌ Error Responses

Semua error responses menggunakan format:
```json
{
  "success": false,
  "message": "Error description"
}
```

### Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

---

## 🧪 Testing dengan Postman

1. Import collection: [postman_collection.json](./postman_collection.json)
2. Setup environment variables:
   - `base_url`: http://localhost:5000/api
   - `token`: (akan di-set otomatis setelah login)
3. Run requests dalam order

---

## 📝 Promo Codes untuk Testing

| Code | Discount | Min Amount | Valid Until |
|------|----------|-----------|-------------|
| WELCOME10 | 10% | Rp 500K | 31 Des 2024 |
| FLIGHT20 | 20% | Rp 1M | 31 Des 2024 |
| PROMO25K | Rp 25K | Rp 200K | 31 Des 2024 |

---

## 🚀 Rate Limiting

API endpoints di-protect dengan rate limiting:
- **Limit**: 100 requests per 15 minutes per IP
- **Header**: `X-RateLimit-Remaining`, `X-RateLimit-Reset`

---

## 📞 Support

- Issues: GitHub Issues
- Email: support@elzahabi.com
- WhatsApp: +62 812 3456 7890

---

**Last Updated**: February 2024
