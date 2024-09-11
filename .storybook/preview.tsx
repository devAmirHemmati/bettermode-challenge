import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import localFont from 'next/font/local';

export const geistSans = localFont({
  src: './../src/assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <div style={{ fontFamily: geistSans.style.fontFamily }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
