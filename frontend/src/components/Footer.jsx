import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">El Zahabi Travel</h3>
            <p className="text-gray-400">
              Travel mudah & aman. Pesan tiket pesawat, hotel, kereta api dengan promo terbaik.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-el-blue-400">Tiket Pesawat</Link></li>
              <li><Link href="/" className="hover:text-el-blue-400">Hotel</Link></li>
              <li><Link href="/" className="hover:text-el-blue-400">Kereta Api</Link></li>
              <li><Link href="/" className="hover:text-el-blue-400">Paket Wisata</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-bold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-el-blue-400">FAQ</Link></li>
              <li><Link href="/" className="hover:text-el-blue-400">Contact Us</Link></li>
              <li><Link href="/" className="hover:text-el-blue-400">Terms & Conditions</Link></li>
              <li><Link href="/" className="hover:text-el-blue-400">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hubungi Kami</h4>
            <p className="text-gray-400 mb-2">📧 support@elzahabi.com</p>
            <p className="text-gray-400 mb-2">📞 +62 21 1234 5678</p>
            <p className="text-gray-400">💬 WhatsApp: +62 812 3456 7890</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2024 El Zahabi Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
