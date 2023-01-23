import React from "react";
import { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";

import "../styles/style.scss";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <React.StrictMode>
    <Head>
      <title>Volvo Cars</title>
    </Head>
    <StyleProvider>
      <ThemePicker variant="light">
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  </React.StrictMode>
);

export default App;
