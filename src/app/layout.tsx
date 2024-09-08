import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'BetterMode',
  description: 'This app is created for hiring at BetterMode company :)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
