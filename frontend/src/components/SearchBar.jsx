import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchStore } from '@/store';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const router = useRouter();
  const { searchType, setSearchType, flightSearch, setFlightSearch } = useSearchStore();
  const [roundTrip, setRoundTrip] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchType === 'flight') {
      router.push('/flights');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 -mt-8 relative z-10 max-w-6xl mx-auto"
    >
      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        {['flight', 'hotel', 'train', 'tour'].map((type) => (
          <button
            key={type}
            onClick={() => setSearchType(type)}
            className={`pb-3 px-4 font-semibold transition ${
              searchType === type
                ? 'border-b-2 border-el-blue-600 text-el-blue-600'
                : 'text-gray-600 hover:text-el-blue-600'
            }`}
          >
            {type === 'flight' && '✈️ Pesawat'}
            {type === 'hotel' && '🏨 Hotel'}
            {type === 'train' && '🚂 Kereta'}
            {type === 'tour' && '🎒 Paket Wisata'}
          </button>
        ))}
      </div>

      {/* Flight Search Form */}
      {searchType === 'flight' && (
        <form onSubmit={handleSearch}>
          {/* Trip Type */}
          <div className="flex gap-4 mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                checked={roundTrip}
                onChange={() => setRoundTrip(true)}
                className="mr-2"
              />
              <span>Pulang-Pergi</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                checked={!roundTrip}
                onChange={() => setRoundTrip(false)}
                className="mr-2"
              />
              <span>Sekali Jalan</span>
            </label>
          </div>

          {/* Input Fields */}
          <div className="grid md:grid-cols-5 gap-3">
            {/* From */}
            <div>
              <label className="block text-sm font-semibold mb-2">Dari</label>
              <input
                type="text"
                placeholder="Jakarta (CGK)"
                value={flightSearch.from}
                onChange={(e) => setFlightSearch({ from: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
              />
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-semibold mb-2">Tujuan</label>
              <input
                type="text"
                placeholder="Bali (DPS)"
                value={flightSearch.to}
                onChange={(e) => setFlightSearch({ to: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
              />
            </div>

            {/* Depart Date */}
            <div>
              <label className="block text-sm font-semibold mb-2">Berangkat</label>
              <input
                type="date"
                value={flightSearch.departDate}
                onChange={(e) => setFlightSearch({ departDate: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
              />
            </div>

            {/* Return Date */}
            {roundTrip && (
              <div>
                <label className="block text-sm font-semibold mb-2">Kembali</label>
                <input
                  type="date"
                  value={flightSearch.returnDate}
                  onChange={(e) => setFlightSearch({ returnDate: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
                />
              </div>
            )}

            {/* Passengers */}
            <div>
              <label className="block text-sm font-semibold mb-2">Penumpang</label>
              <select
                value={flightSearch.passengers}
                onChange={(e) => setFlightSearch({ passengers: parseInt(e.target.value) })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-el-blue-500"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} Penumpang
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-el-green-500 text-white py-3 rounded-lg hover:bg-el-green-600 transition font-bold mt-4"
          >
            🔍 Cari Penerbangan
          </button>
        </form>
      )}

      {/* Hotel Search Form */}
      {searchType === 'hotel' && (
        <form onSubmit={handleSearch}>
          <div className="grid md:grid-cols-4 gap-3">
            <input type="text" placeholder="Kota atau Hotel" className="border border-gray-300 px-4 py-3 rounded-lg" />
            <input type="date" placeholder="Check-in" className="border border-gray-300 px-4 py-3 rounded-lg" />
            <input type="date" placeholder="Check-out" className="border border-gray-300 px-4 py-3 rounded-lg" />
            <select className="border border-gray-300 px-4 py-3 rounded-lg">
              <option>1 Tamu, 1 Kamar</option>
              <option>2 Tamu, 1 Kamar</option>
              <option>4 Tamu, 2 Kamar</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-el-green-500 text-white py-3 rounded-lg hover:bg-el-green-600 transition font-bold mt-4">
            🔍 Cari Hotel
          </button>
        </form>
      )}
    </motion.div>
  );
}
