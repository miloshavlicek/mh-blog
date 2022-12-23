import "./_app.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import React, { ReactElement } from "react";
import Footer from "../components/part/Footer";
import Header from "../components/part/Header";
import Divider from "../components/part/Divider";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <UserProvider>
      <React.StrictMode>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Klub Žij svou vášní" />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#4B0082" />
          <title>Klub Žij svou vášní</title>
        </Head>

        <Header />

        <main>
          <Component {...pageProps} />
        </main>

        <Divider />

        <Footer />
      </React.StrictMode>
    </UserProvider>
  );
}
