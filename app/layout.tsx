import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Header from '@/components/Header/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TravelTrucks',
  description: 'Find your perfect camper for your next journey',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Header />
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
