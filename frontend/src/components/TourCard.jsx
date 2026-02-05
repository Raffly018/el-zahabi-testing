import { motion } from 'framer-motion';
import { formatCurrency } from '@/lib/utils';

export default function TourCard({ tour, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-300 overflow-hidden group">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          loading="lazy"
        />
        {tour.discount > 0 && (
          <div className="absolute top-3 right-3 bg-el-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {tour.discount}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{tour.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{tour.description}</p>
        
        <div className="flex gap-2 mb-3">
          <span className="text-xs bg-el-blue-100 text-el-blue-600 px-2 py-1 rounded">
            📍 {tour.destination}
          </span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            📅 {tour.duration}
          </span>
        </div>

        {/* Includes */}
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-700 mb-1">Termasuk:</p>
          <div className="flex flex-wrap gap-1">
            {tour.includes.slice(0, 3).map((item) => (
              <span key={item} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-bold">⭐ {tour.rating}</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-el-blue-600">
            {formatCurrency(tour.price)}
          </p>
          {tour.originalPrice > tour.price && (
            <p className="text-sm text-gray-500 line-through">
              {formatCurrency(tour.originalPrice)}
            </p>
          )}
        </div>

        <button
          onClick={onClick}
          className="w-full bg-el-green-500 text-white py-2 rounded-lg hover:bg-el-green-600 transition font-semibold"
        >
          Pesan Paket
        </button>
      </div>
    </motion.div>
  );
}
