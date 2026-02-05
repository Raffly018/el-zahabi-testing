// Global store using Zustand
import { create } from 'zustand';

export const useSearchStore = create((set) => ({
  searchType: 'flight', // flight, hotel, train, tour
  setSearchType: (type) => set({ searchType: type }),

  flightSearch: {
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
    cabinClass: 'economy',
  },
  setFlightSearch: (data) =>
    set((state) => ({
      flightSearch: { ...state.flightSearch, ...data },
    })),

  hotelSearch: {
    location: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
    rooms: 1,
  },
  setHotelSearch: (data) =>
    set((state) => ({
      hotelSearch: { ...state.hotelSearch, ...data },
    })),

  trainSearch: {
    from: '',
    to: '',
    departDate: '',
    passengers: 1,
  },
  setTrainSearch: (data) =>
    set((state) => ({
      trainSearch: { ...state.trainSearch, ...data },
    })),
}));

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setToken: (token) => set({ token }),
  setAuthLoading: (loading) => set({ isLoading: loading }),

  logout: () => set({ user: null, token: null, isAuthenticated: false }),
}));

export const useBookingStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, { ...item, id: Date.now() }],
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));

export const usePromoStore = create((set) => ({
  appliedPromo: null,
  discountAmount: 0,
  setPromo: (promo, discount) =>
    set({ appliedPromo: promo, discountAmount: discount }),
  clearPromo: () => set({ appliedPromo: null, discountAmount: 0 }),
}));
