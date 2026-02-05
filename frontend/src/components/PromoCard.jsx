'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PromoCard({ promo, onApply }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promo.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-r from-el-blue-500 to-el-blue-700 text-white rounded-lg p-6 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{promo.name}</h3>
          <p className="text-sm opacity-90">
            Min. pembelian: Rp {(promo.minAmount).toLocaleString('id-ID')}
          </p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">
            {promo.type === 'percentage' ? `${promo.discount}%` : `Rp ${promo.discount.toLocaleString('id-ID')}`}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleCopyCode}
          className="flex-1 bg-white text-el-blue-600 py-2 rounded-lg font-bold hover:bg-opacity-90 transition"
        >
          {copied ? '✓ Copied' : promo.code}
        </button>
        <button
          onClick={() => onApply(promo.code)}
          className="flex-1 bg-el-green-500 hover:bg-el-green-600 py-2 rounded-lg font-bold transition"
        >
          Gunakan
        </button>
      </div>

      <p className="text-xs opacity-75 mt-3">
        Valid hingga {new Date(promo.validUntil).toLocaleDateString('id-ID')}
      </p>
    </motion.div>
  );
}
