import { useState } from 'react';
import { motion } from 'framer-motion';
import { showError, showSuccess } from '@/lib/utils';
import { dummyPromos } from '@/lib/dummyData';

export default function PromoInput({ onApply }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleApply = async () => {
    if (!code.trim()) {
      showError('Masukkan kode promo');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const promo = dummyPromos.find(p => p.code === code.toUpperCase());
      
      setLoading(false);
      
      if (promo) {
        showSuccess(`Promo ${promo.code} berhasil diterapkan!`);
        onApply(promo);
        setCode('');
      } else {
        showError('Kode promo tidak valid');
      }
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-md p-4 mb-6"
    >
      <h4 className="font-bold mb-3">Punya kode promo?</h4>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Masukkan kode promo"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          onKeyPress={(e) => e.key === 'Enter' && handleApply()}
          className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-el-blue-500"
        />
        <button
          onClick={handleApply}
          disabled={loading}
          className="bg-el-blue-600 text-white px-6 py-2 rounded-lg hover:bg-el-blue-700 transition disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Terapkan'}
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        💡 Coba: WELCOME10, FLIGHT20, PROMO25K
      </p>
    </motion.div>
  );
}
