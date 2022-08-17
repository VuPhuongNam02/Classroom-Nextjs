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
} from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
import Card from "@/components/Card";

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
              <MenuList minWidth="240px">
                <MenuItem>Tham gia lớp học</MenuItem>
                <MenuItem>Tạo lớp học</MenuItem>
              </MenuList>
            </Menu>
          </>
        }
      >
        <Text fontSize={50} textAlign="center" fontWeight="bold">
          Home
        </Text>

        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem w="100%">
            <Card></Card>
          </GridItem>
          <GridItem w="100%">
            <Card></Card>
          </GridItem>
          <GridItem w="100%">
            <Card></Card>
          </GridItem>
          <GridItem w="100%">
            <Card></Card>
          </GridItem>
          <GridItem w="100%" h="10">
            <Card></Card>
          </GridItem>
        </Grid>
      </LayoutMain>
    </>
  );
}

export default Home;
