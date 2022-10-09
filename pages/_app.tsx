import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import CHead from "@/components/base/CHead";
import Loading from "@/components/Loading";
import { globalStyles } from "@/theme/styles";
import { customTheme } from "@/theme/theme";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme({ globalStyles })}>
        {/*@ts-ignore*/}
        <CHead />
        {isLoading ? <Loading /> : <Component {...pageProps} />}
        {/*<AuthLoader>*/}

        {/*</AuthLoader>*/}
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
