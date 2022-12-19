import "./_app.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import React, { ReactElement } from "react";
import Footer from "../components/part/Footer";
import Header from "../components/part/Header";
import Divider from "../components/part/Divider";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <React.StrictMode>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Klub Žij svou vášní" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
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
          <meta name="theme-color" content="#ffffff" />
          <title>Klub Žij svou vášní</title>
        </Head>

        <Header />

        <main>
          <Component {...pageProps} />
        </main>

        <Divider />

        <Footer />
      </React.StrictMode>
    </Auth0Provider>
  );
}
