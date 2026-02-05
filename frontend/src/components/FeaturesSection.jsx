'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    icon: '✈️',
    title: 'Tiket Pesawat',
    description: 'Cari dan pesan tiket pesawat dari ribuan penerbangan dengan harga terbaik',
  },
  {
    icon: '🏨',
    title: 'Hotel & Resort',
    description: 'Temukan akomodasi terbaik dengan rating dan ulasan dari tamu lainnya',
  },
  {
    icon: '🚂',
    title: 'Kereta Api',
    description: 'Pesan tiket kereta api untuk berbagai rute di seluruh Indonesia',
  },
  {
    icon: '🎒',
    title: 'Paket Wisata',
    description: 'Nikmati paket liburan lengkap dengan pemandu wisata berpengalaman',
  },
  {
    icon: '💳',
    title: 'Pembayaran Aman',
    description: 'Berbagai metode pembayaran dengan enkripsi keamanan tingkat tinggi',
  },
  {
    icon: '🎉',
    title: 'Promo & Diskon',
    description: 'Dapatkan penawaran menarik dan diskon eksklusif setiap hari',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Mengapa Pilih El Zahabi Travel?</h2>
          <p className="text-lg text-gray-600">
            Layanan perjalanan terpercaya dengan pengalaman lebih dari ratusan ribu pelanggan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-5xl mb-4">{feature.icon}</p>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
