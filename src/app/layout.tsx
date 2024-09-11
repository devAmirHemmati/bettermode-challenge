import './globals.css';

import type { Metadata } from 'next';

import ApolloProvider from '@/configs/apolloProvider';
import { geistSans } from '@/configs/fonts';

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
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
