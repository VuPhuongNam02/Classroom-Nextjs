import React from "react";
import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
interface ILayoutError {
  code?: number | string;
  message?: string;
  children?: React.ReactNode;
}

const LayoutError = ({ code = 404, message = "", children }: ILayoutError) => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        minH={"100vh"}
        textAlign={"center"}
      >
        <Image
          height={500}
          src={`/images/${code}.svg`}
          width={750}
          alt="error"
        />
        <Heading>{code}</Heading>
        <Text>{message}</Text>
        <Center my={4}>{children}</Center>
        <Button
          backgroundColor={"#2691EA"}
          color={"#fff"}
          fontSize={"14px"}
          m={"20px auto"}
          maxW={"117px"}
          onClick={() => (window.location.href = "/")}
        >
          Back Home
        </Button>
      </Flex>
    </>
  );
};

export default LayoutError;
