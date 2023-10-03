import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
