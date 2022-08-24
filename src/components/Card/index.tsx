import React from "react";
import { MdFolderOpen } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import {
  Box,
  Button,
  Text,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiMoreVertical } from "react-icons/fi";

function Card() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Link href={"/next-js"} passHref>
      <Box
        maxW="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{
          cursor: "pointer",
          boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.3)",
        }}
      >
        <Box
          h={{ base: "95px", lg: "110px" }}
          backgroundImage={`url(${property.imageUrl})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Box
            background="rgba(0,0,0,0.3)"
            w="100%"
            h="100%"
            padding="1rem 1rem .75rem"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Link href={"/"} passHref>
              <Text
                fontSize={{ base: "16px", lg: "1.375rem" }}
                fontStyle="400"
                lineHeight="1.75rem"
                color="white"
              >
                NextJS
              </Text>
            </Link>
            <Menu>
              <MenuButton>
                <Button background="none" padding="0">
                  <FiMoreVertical color="white" size="30px" fontWeight="500" />
                </Button>
              </MenuButton>
              <Portal>
                <MenuList>
                  <MenuItem>Di chuyển</MenuItem>
                  <MenuItem>Sao chép đường liên kết mời</MenuItem>
                  <MenuItem>Chỉnh sửa</MenuItem>
                  <MenuItem>Sao chép</MenuItem>
                  <MenuItem>Lưu trữ</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Box>

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              h={{ base: "100px", lg: "117px" }}
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>
        </Box>
        <Box
          display="flex"
          borderTop=".0625rem solid #dadce0"
          padding={"10px"}
          justifyContent="flex-end"
        >
          <Button bg="none">
            <AiOutlineRise size="24px" />
          </Button>
          <Button bg="none">
            <MdFolderOpen size="24px" />
          </Button>
        </Box>
      </Box>
    </Link>
  );
}

export default Card;
