import ColorModeSwitcher from "@/components/ColorModeSwitcher";
import LayoutMain from "@/layouts/LayoutMain";
import React from "react";
import CHead from "@/components/base/CHead";
import { Text } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <CHead />
      <LayoutMain>
        <ColorModeSwitcher />
        <Text fontSize={50} textAlign="center" fontWeight="bold">
          Co Cai Con Cac
        </Text>
      </LayoutMain>
    </>
  );
}

export default Home;
