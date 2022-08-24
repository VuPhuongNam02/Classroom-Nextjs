import LayoutMain from "@/layouts/LayoutMain";
import React from "react";
import CHead from "@/components/base/CHead";
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
import Card from "@/components/Card";
import CContainer from "@/components/base/CContainer";

function Home() {
  return (
    <>
      <CHead />
      <LayoutMain
        isLogo={true}
        isAction={true}
        title="Classroom"
        action={
          <>
            <Menu>
              <MenuButton>
                <HiOutlinePlus size="24px" />
              </MenuButton>
              <MenuList placeContent={"flex-start"} minWidth="240px">
                <MenuItem>Tham gia lớp học</MenuItem>
                <MenuItem>Tạo lớp học</MenuItem>
              </MenuList>
            </Menu>
          </>
        }
      >
        <CContainer>
          <Text fontSize={50} textAlign="center" fontWeight="bold">
            Home
          </Text>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
            spacing={10}
            textAlign="center"
          >
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </SimpleGrid>
        </CContainer>
      </LayoutMain>
    </>
  );
}

export default Home;
