import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'El Zahabi Travel - Pesan Tiket Pesawat & Hotel Online',
  description: 'Platform booking perjalanan terpercaya. Pesan tiket pesawat, hotel, kereta api, dan paket wisata dengan promo terbaik di Indonesia.',
  keywords: 'travel, hotel, pesawat, booking, tiket, tour, wisata',
  openGraph: {
    title: 'El Zahabi Travel',
    description: 'Platform booking perjalanan terpercaya',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#007BFF" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>✈️</text></svg>" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
