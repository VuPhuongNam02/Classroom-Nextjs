import React from "react";
import CContainer from "@/components/base/CContainer";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Button, useDisclosure, Img, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import ColorModeSwitcher from "@/components/ColorModeSwitcher";

type Props = {
  children: React.ReactNode;
};

function LayoutMain({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        height="4rem"
        justifyContent="space-between"
        align="center"
        borderBottom="0.0625rem solid #e0e0e0"
      >
        <CContainer>
          <Flex align="center">
            <Button bg="transparent" onClick={onOpen}>
              <HamburgerIcon w="24px" height="24px" />
            </Button>
            <Sidebar onClose={onClose} isOpen={isOpen} />
            <Img src="/google-logo.png" alt="logo" w="74px" h="24px" />
            <Text ml=".3rem" fontSize="1.38125rem" marginBottom="1px">
              Classroom
            </Text>
          </Flex>
        </CContainer>
      </Flex>
      <ColorModeSwitcher />
    </>
  );
}

export default LayoutMain;
