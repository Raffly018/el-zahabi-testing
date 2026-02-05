'use client';

import { motion } from 'framer-motion';
import { formatCurrency, getTime, calculateDuration } from '@/lib/utils';

export default function TrainCard({ train, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 border-l-4 border-el-blue-600"
    >
      <div className="grid md:grid-cols-5 gap-4 items-center">
        {/* Operator */}
        <div>
          <p className="text-sm text-gray-500">Operator</p>
          <p className="font-bold text-gray-800">{train.operator}</p>
          <p className="text-xs text-gray-400">{train.name}</p>
        </div>

        {/* Departure */}
        <div>
          <p className="text-sm text-gray-500">Keberangkatan</p>
          <p className="text-lg font-bold text-gray-800">
            {getTime(train.departure)}
          </p>
          <p className="text-xs text-gray-400">{train.from}</p>
        </div>

        {/* Duration */}
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">
            {calculateDuration(train.departure, train.arrival)}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-gray-300"></div>
            <span className="text-xs font-bold text-gray-600">🚂 Direct</span>
            <div className="flex-1 h-1 bg-gray-300"></div>
          </div>
        </div>

        {/* Arrival */}
        <div>
          <p className="text-sm text-gray-500">Tiba</p>
          <p className="text-lg font-bold text-gray-800">
            {getTime(train.arrival)}
          </p>
          <p className="text-xs text-gray-400">{train.to}</p>
        </div>

        {/* Price & Action */}
        <div className="text-right">
          <p className="text-2xl font-bold text-el-blue-600 mb-2">
            {formatCurrency(train.price)}
          </p>
          <p className="text-xs text-gray-500 mb-2">{train.class}</p>
          <button
            onClick={onClick}
            className="w-full bg-el-green-500 text-white py-2 rounded-lg hover:bg-el-green-600 transition font-semibold"
          >
            Pilih
          </button>
          <p className="text-xs text-gray-500 mt-1">⭐ {train.rating}</p>
        </div>
      </div>
    </motion.div>
  );
}
