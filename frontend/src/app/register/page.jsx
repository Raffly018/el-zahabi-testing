'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuthStore } from '@/store';
import { showSuccess, showError } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const { setUser, setToken } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      showError('Semua field harus diisi');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showError('Password tidak cocok');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setUser({
        id: '1',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
      setToken('dummy_token_' + Date.now());
      showSuccess('Registrasi berhasil!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar />

      <div className="flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
        >
          <h1 className="text-3xl font-bold text-center mb-6">Daftar Akun</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">No. Telepon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
                placeholder="+62 812 3456 7890"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Konfirmasi Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-el-green-500 text-white py-3 rounded-lg hover:bg-el-green-600 transition font-bold disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Daftar'}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-el-blue-600 font-bold hover:underline">
              Login di sini
            </Link>
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
