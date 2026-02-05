import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchFilter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    sortBy: 'price', // price, duration, rating
    maxPrice: 10000000,
    minRating: 0,
  });

  const handleSortChange = (sortBy) => {
    const newFilters = { ...filters, sortBy };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleMaxPriceChange = (maxPrice) => {
    const newFilters = { ...filters, maxPrice };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleMinRatingChange = (minRating) => {
    const newFilters = { ...filters, minRating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg sticky top-20 h-fit"
    >
      <h3 className="text-lg font-bold mb-4">Filter</h3>

      {/* Sort By */}
      <div className="mb-6">
        <p className="font-semibold text-gray-700 mb-3">Urutkan Berdasarkan</p>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="price"
              checked={filters.sortBy === 'price'}
              onChange={() => handleSortChange('price')}
              className="mr-3"
            />
            <span className="text-gray-600">Harga Terendah</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="duration"
              checked={filters.sortBy === 'duration'}
              onChange={() => handleSortChange('duration')}
              className="mr-3"
            />
            <span className="text-gray-600">Durasi Tercepat</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="rating"
              checked={filters.sortBy === 'rating'}
              onChange={() => handleSortChange('rating')}
              className="mr-3"
            />
            <span className="text-gray-600">Rating Tertinggi</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <p className="font-semibold text-gray-700 mb-3">Harga Maksimal</p>
        <div className="space-y-2">
          {[2000000, 5000000, 10000000].map((price) => (
            <label key={price} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={filters.maxPrice === price}
                onChange={() => handleMaxPriceChange(price)}
                className="mr-3"
              />
              <span className="text-gray-600">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(price)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <p className="font-semibold text-gray-700 mb-3">Rating Minimum</p>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={filters.minRating}
          onChange={(e) => handleMinRatingChange(parseFloat(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-500 mt-2">
          ⭐ {filters.minRating.toFixed(1)} ke atas
        </p>
      </div>
    </motion.div>
  );
}
