import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import CHead from "@/components/base/CHead";
import ColorModeSwitcher from "@/components/ColorModeSwitcher";

type Props = {
  title: string;
  children: React.ReactNode;
  subTitle: string;
  titleLink: React.ReactNode;
  titleWeb: string;
};

function LayoutAuth({ children, title, subTitle, titleLink, titleWeb }: Props) {
  return (
    <>
      <CHead title={titleWeb} />
      <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box w="full">
          <Box display="grid" placeItems="center">
            <Image
              src="/logo.png"
              objectFit="cover"
              w={{ lg: "150px", base: "100px" }}
            />
          </Box>

          <Box m="0 0 2rem ">
            <Text
              fontSize="2xl"
              m={{ lg: "2rem 0 12px 0", base: "1rem 0 .5rem 0" }}
              fontWeight={700}
              textAlign="center"
            >
              {title}
            </Text>

            <Flex fontSize={18} fontWeight={400} justify="center">
              <Text>{subTitle}</Text>
              {titleLink}
            </Flex>
          </Box>

          <Box
            borderWidth={1}
            px={{ lg: 4, base: 0 }}
            width="full"
            maxWidth={{ lg: "500px", base: "355px" }}
            borderRadius={4}
            textAlign="center"
            boxShadow="lg"
            m="auto"
          >
            <Box p={4}>
              <Box textAlign={"right"}>
                <ColorModeSwitcher />
              </Box>
              <Box my={{ lg: 8, base: 4 }} textAlign="left">
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default LayoutAuth;
