import LayoutMain from "@/layouts/LayoutMain";
import React from "react";
import CHead from "@/components/base/CHead";
import { Text } from "@chakra-ui/react";

function Archived() {
  return (
    <>
      <CHead />
      <LayoutMain title="Lớp học đã lưu trữ">
        <Text fontSize={50} textAlign="center" fontWeight="bold">
          Archived
        </Text>
      </LayoutMain>
    </>
  );
}

export default Archived;
