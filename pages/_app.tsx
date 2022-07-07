import "~/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { AppProvider } from "~/context/app-context";
import theme from "~/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  );
}

export default MyApp;
