'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchFilter from '@/components/SearchFilter';
import FlightCard from '@/components/FlightCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import CartSummary from '@/components/CartSummary';
import PromoInput from '@/components/PromoInput';
import { dummyFlights } from '@/lib/dummyData';
import { useBookingStore, usePromoStore } from '@/store';
import { showSuccess, formatCurrency } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

export default function FlightsPage() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const { cart, addToCart } = useBookingStore();
  const { appliedPromo, discountAmount, setPromo } = usePromoStore();

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      let filtered = [...dummyFlights];

      // Apply filters
      if (filters.sortBy === 'price') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (filters.sortBy === 'duration') {
        filtered.sort((a, b) => {
          const durationA = new Date(a.arrival) - new Date(a.departure);
          const durationB = new Date(b.arrival) - new Date(b.departure);
          return durationA - durationB;
        });
      } else if (filters.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      if (filters.maxPrice) {
        filtered = filtered.filter((f) => f.price <= filters.maxPrice);
      }

      if (filters.minRating) {
        filtered = filtered.filter((f) => f.rating >= filters.minRating);
      }

      setFlights(filtered);
      setLoading(false);
    }, 800);
  }, [filters]);

  const handleAddFlight = (flight) => {
    addToCart(flight);
    showSuccess(`${flight.airline} ditambahkan ke keranjang`);
  };

  const handleApplyPromo = (promo) => {
    const discount = promo.type === 'percentage'
      ? Math.min(cart.reduce((sum, item) => sum + (item.price || 0), 0) * promo.discount / 100, promo.maxDiscount)
      : promo.discount;
    setPromo(promo, discount);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const total = subtotal - discountAmount;

  return (
    <main className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Hasil Pencarian Penerbangan</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Filter */}
          <SearchFilter onFilterChange={setFilters} />

          {/* Results */}
          <div className="md:col-span-2">
            {loading ? (
              <div className="flex justify-center py-20">
                <LoadingSpinner />
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {flights.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">Tidak ada penerbangan yang ditemukan</p>
                  ) : (
                    flights.map((flight) => (
                      <FlightCard
                        key={flight.id}
                        flight={flight}
                        onClick={() => handleAddFlight(flight)}
                      />
                    ))
                  )}
                </div>

                {/* Cart Summary */}
                {cart.length > 0 && (
                  <div className="fixed bottom-8 right-8 max-w-sm">
                    <CartSummary cart={cart} promo={appliedPromo} total={total} />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
