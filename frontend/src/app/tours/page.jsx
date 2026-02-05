'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import PromoCard from '@/components/PromoCard';
import { dummyTours, dummyPromos } from '@/lib/dummyData';
import { useBookingStore, usePromoStore } from '@/store';
import { showSuccess } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

export default function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useBookingStore();
  const { setPromo } = usePromoStore();

  useEffect(() => {
    setTimeout(() => {
      setTours(dummyTours);
      setLoading(false);
    }, 600);
  }, []);

  const handleAddTour = (tour) => {
    addToCart(tour);
    showSuccess(`${tour.name} ditambahkan ke keranjang`);
  };

  const handleApplyPromo = (code) => {
    const promo = dummyPromos.find(p => p.code === code);
    if (promo) {
      const discount = promo.type === 'percentage' ? 500000 * promo.discount / 100 : promo.discount;
      setPromo(promo, discount);
      showSuccess(`Promo ${code} berhasil diterapkan!`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-12">Paket Wisata</h1>

        {/* Promos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Penawaran Spesial</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {dummyPromos.map((promo) => (
              <PromoCard
                key={promo.code}
                promo={promo}
                onApply={handleApplyPromo}
              />
            ))}
          </div>
        </div>

        {/* Tours */}
        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onClick={() => handleAddTour(tour)}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
