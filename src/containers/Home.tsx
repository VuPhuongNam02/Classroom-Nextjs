import LayoutMain from "@/layouts/LayoutMain";
import React from "react";
import CHead from "@/components/base/CHead";
import { Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";

function Home() {
  return (
    <>
      <CHead />
      <LayoutMain
        isLogo={true}
        isAction={true}
        title="Classroom"
        action={
          <HiOutlinePlus size="24px" />
          // <Menu>
          //   <MenuButton>
          //     <HiOutlinePlus size="24px" />
          //   </MenuButton>
          //   <MenuList minWidth="240px">
          //     <MenuItem>Tham gia lớp học</MenuItem>
          //     <MenuItem>Tạo lớp học</MenuItem>
          //   </MenuList>
          // </Menu>
        }
      >
        <Text fontSize={50} textAlign="center" fontWeight="bold">
          Home
        </Text>
      </LayoutMain>
    </>
  );
}

export default Home;
