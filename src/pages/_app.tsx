/** @format */

import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("kotohazi.meへようこそ。");
  return <Component {...pageProps} />;
}

export default MyApp;
