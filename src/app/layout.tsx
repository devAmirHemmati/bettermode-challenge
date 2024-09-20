import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

import ApolloProvider from '@/configs/apolloProvider';
import { geistSans } from '@/configs/fonts';
import ContextProvider from '@/context/provider';

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

          <ContextProvider>
            <div className="w-full min-h-[100vh]">{children}</div>
          </ContextProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
