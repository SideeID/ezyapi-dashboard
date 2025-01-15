import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'EZY - Free REST API by SideID',
    template: '%s | SideID API',
  },
  description:
    "Explore SideID's free REST API service created by SideID. Access a wide range of endpoints for AI, media processing, and more.",
  keywords: [
    'SideID',
    'Dimas Fajar Katon Prayogo',
    'REST API',
    'Free API',
    'AI API',
    'Media Processing',
  ],
  authors: [{ name: 'Dimas Fajar Katon Prayogo', url: 'https://sideid.tech' }],
  creator: 'Dimas Fajar Katon Prayogo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ezy.sideid.tech',
    siteName: 'SideID API',
    title: 'SideID - Free REST API by SideID',
    description:
      'Access free REST API endpoints for AI, media processing, and more, created by Dimas Fajar Katon Prayogo (SideID).',
    images: [
      {
        url: 'https://ezy.sideid.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EZY API by SideID',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZY - Free REST API by SideID',
    description:
      'Access free REST API endpoints for AI, media processing, and more, created by Dimas Fajar Katon Prayogo (SideID).',
    images: ['https://ezy.sideid.tech/og-image.jpg'],
    creator: '@sideid',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-site-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   yahoo: 'your-yahoo-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
