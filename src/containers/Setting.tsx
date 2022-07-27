import LayoutMain from "@/layouts/LayoutMain";
import React from "react";
import CHead from "@/components/base/CHead";
import { Text } from "@chakra-ui/react";

function Setting() {
  return (
    <>
      <CHead />
      <LayoutMain title="Cần đánh giá">
        <Text fontSize={50} textAlign="center" fontWeight="bold">
          Setting
        </Text>
      </LayoutMain>
    </>
  );
}

export default Setting;
