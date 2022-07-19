import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import CContainer from "@/components/base/CContainer";
import Image from "next/image";
import CHead from "@/components/base/CHead";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <ChakraProvider>
      <CHead />
      {isLoading ? (
        <CContainer
          position="fixed"
          top={0}
          left={0}
          bg="rgba(0,0,0,0.4)"
          width="full"
          height="full"
          display="grid"
          placeItems="center"
        >
          <div>
            <Image
              src="/logo.png"
              width={200}
              height={200}
              layout="responsive"
              alt="description of image"
            />
            <div className="custom">
              <div className="balls">
                <div className="ball ball1"></div>
                <div className="ball ball2"></div>
                <div className="ball ball3"></div>
              </div>
              <span className="customText">Loading...</span>
            </div>
          </div>
        </CContainer>
      ) : (
        <Component {...pageProps} />
      )}
    </ChakraProvider>
  );
}

export default MyApp;
