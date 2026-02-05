'use client';

import { motion } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import { popularCities } from '@/lib/dummyData';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-el-blue-600 to-el-blue-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Travel Mudah & Aman
          </h1>
          <p className="text-xl text-blue-100">
            Pesan tiket pesawat, hotel, kereta api dengan promo terbaik
          </p>
        </motion.div>

        <SearchBar />

        {/* Popular Cities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-center text-2xl font-bold mb-8">Destinasi Populer</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {popularCities.map((city) => (
              <motion.div
                key={city.id}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center cursor-pointer"
              >
                <div className="relative mb-3 overflow-hidden rounded-lg h-32">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                </div>
                <p className="font-bold">{city.name}</p>
                <p className="text-sm text-blue-100">{city.code}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
