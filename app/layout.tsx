import type { Metadata } from 'next';
import { Oswald, DM_Sans, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';
import ChatWidget from '@/components/chatbot/ChatWidget';
import ClientLayout from './ClientLayout';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jyothy Institute of Technology — Bengaluru',
    template: '%s | JIT Bengaluru',
  },
  description:
    'Jyothy Institute of Technology (JIT), Bengaluru — VTU Affiliated, AICTE Approved, NAAC Accredited engineering college offering B.E., M.Tech, and MBA programs.',
  keywords: [
    'Jyothy Institute of Technology',
    'JIT Bengaluru',
    'engineering college Bengaluru',
    'VTU affiliated',
    'AICTE approved',
    'B.E. admissions',
    'MBA Bengaluru',
    'Kanakapura Road college',
  ],
  authors: [{ name: 'Jyothy Institute of Technology' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jyothyit.ac.in',
    siteName: 'Jyothy Institute of Technology',
    title: 'Jyothy Institute of Technology — Bengaluru',
    description:
      'VTU Affiliated, AICTE Approved engineering college in Bengaluru. B.E., M.Tech, MBA programs with 90%+ placement rate.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200',
        width: 1200,
        height: 630,
        alt: 'Jyothy Institute of Technology Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jyothy Institute of Technology — Bengaluru',
    description: 'VTU Affiliated, AICTE Approved engineering college in Bengaluru.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Jyothy Institute of Technology',
              alternateName: 'JIT Bengaluru',
              url: 'https://jyothyit.ac.in',
              logo: 'https://jyothyit.ac.in/wp-content/uploads/2022/05/JIT-LOGO.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Tataguni, Off Kanakapura Road',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                postalCode: '560082',
                addressCountry: 'IN',
              },
              telephone: '+91-80-28437091',
              email: 'principal@jyothyit.ac.in',
              sameAs: ['https://www.facebook.com/JyothyIT', 'https://www.linkedin.com/school/jyothy-institute-of-technology/'],
            }),
          }}
        />
      </head>
      <body className="font-body bg-pure-white text-primary-black">
        <div id="scroll-progress" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
