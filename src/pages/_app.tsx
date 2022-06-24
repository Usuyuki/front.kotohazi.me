/** @format */

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('kotohazi.meへようこそ。');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
