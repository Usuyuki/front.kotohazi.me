/** @format */

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import React, { useEffect } from 'react';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('kotohazi.meへようこそ。');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
