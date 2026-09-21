import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EduFlow — NextGen Maktab Platformasi',
  description: 'O‘zbekiston maktablari uchun zamonaviy interaktiv 3D ta’lim platformasi va baholash tizimi.',
  keywords: ['EduFlow', 'eMaktab', 'Maktab platformasi', 'Uzbekistan school LMS', 'Maktab baholash'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`dark ${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
