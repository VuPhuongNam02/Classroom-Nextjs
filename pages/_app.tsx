import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import CHead from "@/components/base/CHead";
import Loading from "@/components/Loading";
import { globalStyles } from "@/theme/styles";
import { customTheme } from "@/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);
  return (
    <ChakraProvider theme={customTheme({ globalStyles })}>
      <CHead />
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
}

export default MyApp;
