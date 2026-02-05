'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatCurrency, calculateDuration, getTime } from '@/lib/utils';

export default function FlightCard({ flight, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 border-l-4 border-el-blue-600"
    >
      <div className="grid md:grid-cols-5 gap-4 items-center">
        {/* Airline */}
        <div>
          <p className="text-sm text-gray-500">Maskapai</p>
          <p className="font-bold text-gray-800">{flight.airline}</p>
          <p className="text-xs text-gray-400">{flight.flightNumber}</p>
        </div>

        {/* Departure */}
        <div>
          <p className="text-sm text-gray-500">Keberangkatan</p>
          <p className="text-lg font-bold text-gray-800">
            {getTime(flight.departure)}
          </p>
          <p className="text-xs text-gray-400">{flight.from}</p>
        </div>

        {/* Duration */}
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">
            {calculateDuration(flight.departure, flight.arrival)}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 bg-gray-300"></div>
            <span className="text-xs font-bold text-gray-600">
              {flight.stops === 0 ? '✓ Direct' : `${flight.stops} Stop`}
            </span>
            <div className="flex-1 h-1 bg-gray-300"></div>
          </div>
        </div>

        {/* Arrival */}
        <div>
          <p className="text-sm text-gray-500">Tiba</p>
          <p className="text-lg font-bold text-gray-800">
            {getTime(flight.arrival)}
          </p>
          <p className="text-xs text-gray-400">{flight.to}</p>
        </div>

        {/* Price & Action */}
        <div className="text-right">
          <p className="text-2xl font-bold text-el-blue-600 mb-2">
            {formatCurrency(flight.price)}
          </p>
          <button
            onClick={onClick}
            className="w-full bg-el-green-500 text-white py-2 rounded-lg hover:bg-el-green-600 transition font-semibold"
          >
            Pilih
          </button>
          <p className="text-xs text-gray-500 mt-1">⭐ {flight.rating}</p>
        </div>
      </div>
    </motion.div>
  );
}
