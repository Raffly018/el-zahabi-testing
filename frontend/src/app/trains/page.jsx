'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchFilter from '@/components/SearchFilter';
import TrainCard from '@/components/TrainCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { dummyTrains } from '@/lib/dummyData';
import { useBookingStore } from '@/store';
import { showSuccess } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

export default function TrainsPage() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const { addToCart } = useBookingStore();

  useEffect(() => {
    setTimeout(() => {
      let filtered = [...dummyTrains];

      if (filters.sortBy === 'price') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (filters.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      if (filters.maxPrice) {
        filtered = filtered.filter((t) => t.price <= filters.maxPrice);
      }

      setTrains(filtered);
      setLoading(false);
    }, 800);
  }, [filters]);

  const handleAddTrain = (train) => {
    addToCart(train);
    showSuccess(`${train.name} ditambahkan ke keranjang`);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Cari Kereta Api</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <SearchFilter onFilterChange={setFilters} />

          <div className="md:col-span-2">
            {loading ? (
              <div className="flex justify-center py-20">
                <LoadingSpinner />
              </div>
            ) : (
              <div className="space-y-4">
                {trains.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">Tidak ada kereta yang ditemukan</p>
                ) : (
                  trains.map((train) => (
                    <TrainCard
                      key={train.id}
                      train={train}
                      onClick={() => handleAddTrain(train)}
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
