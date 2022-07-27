import LayoutMain from "@/layouts/LayoutMain";
import React from "react";
import CHead from "@/components/base/CHead";
import { Text } from "@chakra-ui/react";

function Reviewed() {
  return (
    <>
      <CHead />
      <LayoutMain title="Cần đánh giá">
        <Text fontSize={50} textAlign="center" fontWeight="bold">
          Reviewed
        </Text>
      </LayoutMain>
    </>
  );
}

export default Reviewed;
