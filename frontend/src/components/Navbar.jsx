import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store';

export default function Navbar() {
  const { user, logout } = useAuthStore();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-el-blue-600">
            ✈️ El Zahabi Travel
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-el-blue-600 transition">
              Home
            </Link>
            <Link href="/flights" className="text-gray-600 hover:text-el-blue-600 transition">
              Flights
            </Link>
            <Link href="/hotels" className="text-gray-600 hover:text-el-blue-600 transition">
              Hotels
            </Link>
            <Link href="/trains" className="text-gray-600 hover:text-el-blue-600 transition">
              Trains
            </Link>
            <Link href="/tours" className="text-gray-600 hover:text-el-blue-600 transition">
              Tours
            </Link>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="text-gray-600 hover:text-el-blue-600">
                  {user.name}
                </Link>
                <button
                  onClick={logout}
                  className="bg-el-blue-600 text-white px-4 py-2 rounded-lg hover:bg-el-blue-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link href="/login" className="text-el-blue-600 hover:underline">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-el-green-500 text-white px-4 py-2 rounded-lg hover:bg-el-green-600"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
