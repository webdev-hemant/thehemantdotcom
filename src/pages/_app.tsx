import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavbarWrapper from "componets/navbar/NavbarWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavbarWrapper>
      <Component {...pageProps} />
    </NavbarWrapper>
  );
}

export default MyApp;
