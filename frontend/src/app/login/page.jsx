'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuthStore } from '@/store';
import { showSuccess, showError } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUser, setToken } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        setUser({
          id: '1',
          name: email.split('@')[0],
          email,
        });
        setToken('dummy_token_' + Date.now());
        showSuccess('Login berhasil!');
        setEmail('');
        setPassword('');
      } else {
        showError('Email dan password harus diisi');
      }
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
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-el-blue-600 text-white py-3 rounded-lg hover:bg-el-blue-700 transition font-bold disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Belum punya akun?{' '}
            <Link href="/register" className="text-el-blue-600 font-bold hover:underline">
              Daftar di sini
            </Link>
          </p>

          <div className="mt-6 pt-6 border-t">
            <p className="text-xs text-gray-500 text-center mb-3">🧪 Demo Login</p>
            <p className="text-sm text-gray-600">Email: demo@elzahabi.com</p>
            <p className="text-sm text-gray-600">Password: demo123</p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
