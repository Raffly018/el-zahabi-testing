'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white">
      <Toaster />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      
      {/* CTAs Section */}
      <section className="bg-el-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap untuk Petualangan Berikutnya?</h2>
          <p className="text-xl mb-8">Dapatkan penawaran spesial hingga 40% untuk pemesanan hari ini!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-el-green-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-el-green-600 transition"
          >
            Jelajahi Destinasi
          </motion.button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
