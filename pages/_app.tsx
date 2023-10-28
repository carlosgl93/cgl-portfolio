import "../styles/globals.css";
import "../styles/appbar.css";
import "../styles/nav.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import StateProvider from "../context/StateProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}
