import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavbarWrapper from "componets/navbar/NavbarWrapper";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/devicon.jpg" type="image/x-icon" />
      </Head>
      <NavbarWrapper>
        <Component {...pageProps} />
      </NavbarWrapper>
    </>
  );
}

export default MyApp;
