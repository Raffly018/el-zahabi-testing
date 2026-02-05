'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchFilter from '@/components/SearchFilter';
import HotelCard from '@/components/HotelCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import CartSummary from '@/components/CartSummary';
import { dummyHotels } from '@/lib/dummyData';
import { useBookingStore, usePromoStore } from '@/store';
import { showSuccess } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

export default function HotelsPage() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const { cart, addToCart } = useBookingStore();
  const { appliedPromo, discountAmount } = usePromoStore();

  useEffect(() => {
    setTimeout(() => {
      let filtered = [...dummyHotels];

      if (filters.sortBy === 'price') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (filters.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      if (filters.maxPrice) {
        filtered = filtered.filter((h) => h.price <= filters.maxPrice);
      }

      if (filters.minRating) {
        filtered = filtered.filter((h) => h.rating >= filters.minRating);
      }

      setHotels(filtered);
      setLoading(false);
    }, 800);
  }, [filters]);

  const handleAddHotel = (hotel) => {
    addToCart(hotel);
    showSuccess(`${hotel.name} ditambahkan ke keranjang`);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const total = subtotal - discountAmount;

  return (
    <main className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Cari Hotel</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <SearchFilter onFilterChange={setFilters} />

          <div className="md:col-span-2">
            {loading ? (
              <div className="flex justify-center py-20">
                <LoadingSpinner />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {hotels.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Tidak ada hotel yang ditemukan</p>
                ) : (
                  hotels.map((hotel) => (
                    <HotelCard
                      key={hotel.id}
                      hotel={hotel}
                      onClick={() => handleAddHotel(hotel)}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
