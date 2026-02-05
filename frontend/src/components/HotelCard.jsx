import { motion } from 'framer-motion';
import { formatCurrency } from '@/lib/utils';

export default function HotelCard({ hotel, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-300 overflow-hidden group">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          loading="lazy"
        />
        {hotel.discount > 0 && (
          <div className="absolute top-3 right-3 bg-el-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {hotel.discount}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{hotel.name}</h3>
        <p className="text-sm text-gray-500 mb-3">📍 {hotel.location}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 mb-3">
          {hotel.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-bold">⭐ {hotel.rating}</span>
          <span className="text-xs text-gray-500">({hotel.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-el-blue-600">
            {formatCurrency(hotel.price)}
          </p>
          {hotel.originalPrice > hotel.price && (
            <p className="text-sm text-gray-500 line-through">
              {formatCurrency(hotel.originalPrice)}
            </p>
          )}
        </div>

        <button
          onClick={onClick}
          className="w-full bg-el-green-500 text-white py-2 rounded-lg hover:bg-el-green-600 transition font-semibold"
        >
          Pesan Sekarang
        </button>
      </div>
    </motion.div>
  );
}
