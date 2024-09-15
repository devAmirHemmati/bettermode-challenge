import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

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
        <ApolloProvider>
          <ToastContainer position="bottom-center" />

          <div className="w-full h-[calc(100vh-30px)]">{children}</div>
        </ApolloProvider>
      </body>
    </html>
  );
}
