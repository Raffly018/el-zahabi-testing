import { motion } from 'framer-motion';
import { formatCurrency } from '@/lib/utils';

export default function CartSummary({ cart, promo, total }) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const discount = promo?.discountAmount || 0;
  const finalTotal = subtotal - discount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 sticky top-20"
    >
      <h3 className="text-xl font-bold mb-4">Ringkasan Pesanan</h3>

      {/* Booking Items */}
      <div className="space-y-3 mb-4 max-h-40 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Keranjang kosong</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm text-gray-700">
              <span>{item.name || item.airline}</span>
              <span className="font-semibold">{formatCurrency(item.price)}</span>
            </div>
          ))
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Subtotal */}
      <div className="flex justify-between mb-3">
        <span className="text-gray-700">Subtotal</span>
        <span className="font-semibold">{formatCurrency(subtotal)}</span>
      </div>

      {/* Promo */}
      {promo && (
        <div className="flex justify-between mb-3 text-el-green-600">
          <span>Diskon ({promo.code})</span>
          <span className="font-semibold">-{formatCurrency(discount)}</span>
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Total */}
      <div className="flex justify-between mb-4">
        <span className="text-lg font-bold">Total</span>
        <span className="text-2xl font-bold text-el-blue-600">{formatCurrency(finalTotal)}</span>
      </div>

      <button className="w-full bg-el-green-500 text-white py-3 rounded-lg hover:bg-el-green-600 transition font-bold">
        Lanjut ke Pembayaran
      </button>
    </motion.div>
  );
}
