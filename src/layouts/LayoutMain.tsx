import CContainer from "@/components/base/CContainer";
import { Box, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Img,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import ColorModeSwitcher from "@/components/ColorModeSwitcher";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  isLogo?: boolean;
  title: string | string[] | undefined;
  middleNav?: React.ReactNode;
  action?: React.ReactNode;
  isAction?: boolean;
};

function LayoutMain({
  children,
  isLogo = false,
  isAction = false,
  title = "",
  action = "",
  middleNav = "",
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue(
    "0.0625rem solid #e0e0e0",
    "0.0625rem solid rgba(255, 255, 255, 0.16)"
  );

  return (
    <>
      <Flex
        height="4rem"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={borderColor}
        padding={{ base: "0 0", lg: "0 1rem" }}
      >
        <Flex alignItems="center">
          <Button bg="transparent" onClick={onOpen} w="0">
            <HamburgerIcon
              w={{ base: "20px", lg: "24px" }}
              height={{ base: "20px", lg: "24px" }}
            />
          </Button>
          {isLogo && (
            <Img
              src="/google-logo.png"
              alt="logo"
              w={{ base: "50px", lg: "74px" }}
              h={{ base: "unset", lg: "24px" }}
            />
          )}
          <Text
            ml=".3rem"
            fontSize={{ base: "16px", lg: "1.38125rem" }}
            fontWeight="400"
          >
            {title}
          </Text>
        </Flex>
        {middleNav}
        <Flex
          marginRight="1rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <ColorModeSwitcher />
          {isAction && (
            <Button bg="none" borderRadius="50px">
              {action}
            </Button>
          )}
          <Box>
            <Menu>
              <MenuButton bg="none" w="40px">
                <Avatar size="sm" name="Dan Abrahmov" src="/liam.jpg" />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Payments </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
      <Sidebar onClose={onClose} isOpen={isOpen} />
      <CContainer p="0">{children}</CContainer>
    </>
  );
}

export default LayoutMain;
