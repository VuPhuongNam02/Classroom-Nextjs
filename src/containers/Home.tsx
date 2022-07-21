import ColorModeSwitcher from "@/components/ColorModeSwitcher";
import LayoutMain from "@/layouts/LayoutMain";
import React from "react";
import CHead from "@/components/base/CHead";
import { Center, Image, Text } from "@chakra-ui/react";
import { transform } from "framer-motion";

function Home() {
  return (
    <>
      <CHead />
      <LayoutMain>
        <ColorModeSwitcher />
        <Text fontSize={50} textAlign="center" fontWeight="bold">
          Co Cai Con Cac
        </Text>
        <Text fontSize={50} textAlign="center" fontWeight="bold">
          Anh là Trường Đô La đây !
        </Text>
        <Center>
          <a href="">
            <Image
              margin={"50px"}
              borderRadius={"10px"}
              alignItems={"center"}
              objectFit="cover"
              src="/matcac.jpg"
              alt="Dan Abramov"
              transition={".3s all"}
              cursor={"pointer"}
              _hover={{
                transform: "scale(1.1)",
              }}
            />
          </a>
        </Center>
      </LayoutMain>
    </>
  );
}

export default Home;
