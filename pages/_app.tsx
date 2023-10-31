import "../styles/globals.css";
import "../styles/appbar.css";
import "../styles/nav.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import StateProvider from "../context/StateProvider";
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StateProvider>
  );
}
