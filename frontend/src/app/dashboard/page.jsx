'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuthStore } from '@/store';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

const dummyBookings = [
  {
    id: 'BK001',
    type: 'flight',
    airline: 'Garuda Indonesia',
    flightNumber: 'GA101',
    from: 'Jakarta (CGK)',
    to: 'Bali (DPS)',
    departDate: '2024-02-10',
    price: 850000,
    status: 'confirmed',
    bookingDate: '2024-01-15',
  },
  {
    id: 'BK002',
    type: 'hotel',
    name: 'Luxe Bali Resort',
    checkIn: '2024-02-10',
    checkOut: '2024-02-12',
    price: 2400000,
    status: 'confirmed',
    bookingDate: '2024-01-15',
  },
];

export default function DashboardPage() {
  const { user, logout } = useAuthStore();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Load dummy bookings
    setBookings(dummyBookings);
  }, []);

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Silakan Login</h1>
          <p className="text-gray-600">Dashboard hanya tersedia untuk user yang sudah login</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Selamat datang, {user.name}! 👋</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Pemesanan', value: bookings.length, icon: '📊' },
            { label: 'Total Pengeluaran', value: formatCurrency(bookings.reduce((sum, b) => sum + b.price, 0)), icon: '💰' },
            { label: 'Poin Loyalty', value: '2500', icon: '⭐' },
            { label: 'Promo Aktif', value: '3', icon: '🎉' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <p className="text-4xl mb-2">{stat.icon}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-el-blue-600">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Bookings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Riwayat Pemesanan</h2>

          {bookings.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Anda belum memiliki pemesanan</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <motion.div
                  key={booking.id}
                  whileHover={{ x: 4 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold">
                        {booking.type === 'flight' ? `✈️ ${booking.airline}` : `🏨 ${booking.name}`}
                      </h3>
                      <p className="text-sm text-gray-500">ID: {booking.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-el-blue-600">{formatCurrency(booking.price)}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                        booking.status === 'confirmed' ? 'bg-el-green-100 text-el-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {booking.status === 'confirmed' ? '✓ Terkonfirmasi' : 'Pending'}
                      </span>
                    </div>
                  </div>

                  {booking.type === 'flight' && (
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Rute</p>
                        <p className="font-semibold">{booking.from} → {booking.to}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Tanggal</p>
                        <p className="font-semibold">{formatDate(booking.departDate)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Penerbangan</p>
                        <p className="font-semibold">{booking.flightNumber}</p>
                      </div>
                    </div>
                  )}

                  {booking.type === 'hotel' && (
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Check-in</p>
                        <p className="font-semibold">{formatDate(booking.checkIn)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Check-out</p>
                        <p className="font-semibold">{formatDate(booking.checkOut)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Durasi</p>
                        <p className="font-semibold">2 Malam</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
                    <button className="flex-1 border border-el-blue-600 text-el-blue-600 py-2 rounded-lg hover:bg-el-blue-50 transition">
                      Lihat Detail
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-50 transition">
                      Print E-Ticket
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
