import React from "react";
import CContainer from "@/components/base/CContainer";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/react";
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
          <Box>
            <Button bg="transparent" onClick={onOpen}>
              <HamburgerIcon w="24px" height="24px" color="gray.F5" />
            </Button>
            <Sidebar onClose={onClose} isOpen={isOpen} />
          </Box>
        </CContainer>
      </Flex>
      <ColorModeSwitcher />
    </>
  );
}

export default LayoutMain;
