import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage?.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API endpoints
export const endpoints = {
  // Flights
  flights: {
    search: '/flights/search',
    getDetails: (id) => `/flights/${id}`,
  },
  // Hotels
  hotels: {
    search: '/hotels/search',
    getDetails: (id) => `/hotels/${id}`,
  },
  // Trains
  trains: {
    search: '/trains/search',
    getDetails: (id) => `/trains/${id}`,
  },
  // Tours
  tours: {
    list: '/tours',
    getDetails: (id) => `/tours/${id}`,
  },
  // Bookings
  bookings: {
    create: '/bookings',
    list: '/bookings',
    getDetails: (id) => `/bookings/${id}`,
    cancel: (id) => `/bookings/${id}/cancel`,
  },
  // Promos
  promos: {
    list: '/promos',
    validate: '/promos/validate',
  },
  // Auth
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    getProfile: '/auth/profile',
  },
  // Payments
  payments: {
    create: '/payments',
    verify: (id) => `/payments/${id}/verify`,
  },
  // Cities
  cities: {
    list: '/cities',
    airports: '/cities/airports',
    hotels: '/cities/hotels',
  },
};
