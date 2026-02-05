'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartSummary from '@/components/CartSummary';
import PromoInput from '@/components/PromoInput';
import { useBookingStore, usePromoStore, useAuthStore } from '@/store';
import { showSuccess, showError, formatCurrency } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const { user } = useAuthStore();
  const { cart, clearCart } = useBookingStore();
  const { appliedPromo, discountAmount, clearPromo } = usePromoStore();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('transfer');
  const [agreeTerms, setAgreeTerms] = useState(false);

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Silakan Login Terlebih Dahulu</h1>
          <p className="text-gray-600 mb-8">Anda harus login untuk melakukan pemesanan</p>
          <button
            onClick={() => router.push('/login')}
            className="bg-el-blue-600 text-white px-8 py-3 rounded-lg hover:bg-el-blue-700"
          >
            Login Sekarang
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Keranjang Kosong</h1>
          <p className="text-gray-600 mb-8">Tidak ada item untuk diorder</p>
          <button
            onClick={() => router.push('/')}
            className="bg-el-blue-600 text-white px-8 py-3 rounded-lg hover:bg-el-blue-700"
          >
            Mulai Belanja
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const total = subtotal - discountAmount;

  const handlePayment = async () => {
    if (!agreeTerms) {
      showError('Harap setujui syarat dan ketentuan');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showSuccess('Pembayaran berhasil! Cek email untuk detail booking');
      clearCart();
      clearPromo();
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Detail Pemesanan</h2>

              {/* Booking Items */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Item yang Dipesan:</h3>
                <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between text-gray-700">
                      <span>{item.airline || item.name}</span>
                      <span className="font-bold">{formatCurrency(item.price)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo Section */}
              <PromoInput onApply={(promo) => {}} />

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Metode Pembayaran</h3>
                <div className="space-y-3">
                  {[
                    { id: 'transfer', name: '💳 Transfer Bank', desc: 'Transfer ke rekening BCA' },
                    { id: 'gopay', name: '📱 GoPay', desc: 'Bayar via GoPay' },
                    { id: 'ovo', name: '💰 OVO', desc: 'Bayar via OVO' },
                    { id: 'dana', name: '📲 DANA', desc: 'Bayar via DANA' },
                  ].map((method) => (
                    <label key={method.id} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className="mr-4"
                      />
                      <div>
                        <p className="font-bold">{method.name}</p>
                        <p className="text-sm text-gray-500">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 mb-6">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  Saya setuju dengan Syarat & Ketentuan dan Kebijakan Privasi El Zahabi Travel
                </span>
              </label>

              <button
                onClick={handlePayment}
                disabled={loading || !agreeTerms}
                className="w-full bg-el-green-500 text-white py-4 rounded-lg hover:bg-el-green-600 transition font-bold disabled:opacity-50"
              >
                {loading ? 'Memproses...' : 'Bayar Sekarang'}
              </button>
            </motion.div>
          </div>

          {/* Summary */}
          <div>
            <CartSummary cart={cart} promo={appliedPromo} total={total} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
