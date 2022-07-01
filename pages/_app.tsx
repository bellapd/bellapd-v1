import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "katex/dist/katex.min.css";
import Theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
